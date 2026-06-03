import { chromium, devices } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';

const PHONE = devices['iPhone 13'];
const BASE = 'http://localhost:3000';
const PAGES = [
  { name: 'forside',  path: '/' },
  { name: 'om-mig',  path: '/om-mig' },
  { name: 'services', path: '/services' },
  { name: 'kontakt',  path: '/kontakt' },
];

const issues = [];

async function auditPage(page, name, path) {
  await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);

  const url = BASE + path;

  // Screenshot
  await page.screenshot({ path: `scripts/screenshots/${name}-mobile.png`, fullPage: true });

  // 1. Horizontal overflow
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  if (hasOverflow) {
    const overflowEls = await page.evaluate(() => {
      const bad = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > window.innerWidth + 2) {
          bad.push({
            tag: el.tagName,
            cls: el.className?.slice?.(0, 80) ?? '',
            right: Math.round(rect.right),
            vw: window.innerWidth,
          });
        }
      });
      return bad.slice(0, 10);
    });
    issues.push({ page: name, type: 'OVERFLOW', details: overflowEls });
  }

  // 2. Small text (< 12px)
  const smallText = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('p, span, label, a, li, td, th, button, input').forEach(el => {
      const style = window.getComputedStyle(el);
      const size = parseFloat(style.fontSize);
      if (size < 12 && el.textContent.trim().length > 2) {
        bad.push({ tag: el.tagName, size, text: el.textContent.trim().slice(0, 40) });
      }
    });
    return bad.slice(0, 8);
  });
  if (smallText.length) issues.push({ page: name, type: 'SMALL_TEXT', details: smallText });

  // 3. Touch target too small (< 44px)
  const smallTargets = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
        bad.push({
          tag: el.tagName,
          text: el.textContent.trim().slice(0, 30),
          w: Math.round(rect.width),
          h: Math.round(rect.height),
        });
      }
    });
    return bad.slice(0, 8);
  });
  if (smallTargets.length) issues.push({ page: name, type: 'SMALL_TARGET', details: smallTargets });

  // 4. Images wider than viewport
  const wideImgs = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('img').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > window.innerWidth + 2) {
        bad.push({ src: el.src.slice(-50), w: Math.round(rect.width), vw: window.innerWidth });
      }
    });
    return bad;
  });
  if (wideImgs.length) issues.push({ page: name, type: 'WIDE_IMG', details: wideImgs });

  console.log(`✓ ${name} — overflow:${hasOverflow}, smallText:${smallText.length}, smallTargets:${smallTargets.length}`);
}

(async () => {
  mkdirSync('scripts/screenshots', { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...PHONE });
  const page = await ctx.newPage();

  for (const { name, path } of PAGES) {
    try {
      await auditPage(page, name, path);
    } catch (e) {
      issues.push({ page: name, type: 'ERROR', details: e.message });
      console.error(`✗ ${name}: ${e.message}`);
    }
  }

  await browser.close();

  writeFileSync('scripts/mobile-issues.json', JSON.stringify(issues, null, 2));
  console.log(`\nFund ${issues.length} issue-grupper. Gemt i scripts/mobile-issues.json`);
  if (issues.length) {
    console.log(JSON.stringify(issues, null, 2));
  }
})();
