import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT_DIR = 'inspiration/screenshots';
mkdirSync(OUT_DIR, { recursive: true });

const SITES = [
  { name: '7n', url: 'https://www.7n.com/' },
  { name: 'curait', url: 'https://curait.dk/' },
  { name: 'key2quality-konsulenter', url: 'https://key2quality.dk/konsulenter/' },
  { name: 'needconsult', url: 'https://needconsult.dk/' },
  { name: 'twins', url: 'https://www.twins.dk/freelance-it-konsulenter/' },
  { name: 'capax', url: 'https://capaxrecruitment.dk/ydelser/freelance/freelance-it/' },
];

const COOKIE_BUTTON_TEXT = [
  'Tillad alle', 'Accepter alle', 'Accepter', 'Accepter cookies',
  'Godkend alle', 'Godkend', 'Acceptér alle',
  'Allow all', 'Accept all', 'Accept All', 'Accept',
];

async function dismissCookies(page) {
  for (const text of COOKIE_BUTTON_TEXT) {
    try {
      const btn = page.getByRole('button', { name: text, exact: false }).first();
      if (await btn.isVisible({ timeout: 1000 })) {
        await btn.click({ timeout: 2000 });
        await page.waitForTimeout(500);
        return;
      }
    } catch {
      // button not found with this text, try next
    }
  }
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

const browser = await chromium.launch();

for (const site of SITES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  console.log(`Visiting ${site.url}`);
  try {
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 45000 });

    // Give bot-check / anti-DDoS pages time to clear (e.g. Cloudflare "checking your browser")
    for (let i = 0; i < 3; i++) {
      const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 200));
      if (/checking your browser|just a moment|verify you are human/i.test(bodyText)) {
        console.log(`  bot-check detected, waiting...`);
        await page.waitForTimeout(4000);
      } else {
        break;
      }
    }

    await dismissCookies(page);
    await autoScroll(page);
    await page.waitForTimeout(1000);

    await page.screenshot({ path: `${OUT_DIR}/${site.name}-full.png`, fullPage: true });
    console.log(`  saved ${site.name}-full.png`);
  } catch (err) {
    console.error(`  FAILED ${site.name}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log('Done.');
