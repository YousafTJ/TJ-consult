const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  await page.goto('http://localhost:3001/kontakt', { waitUntil: 'networkidle' })

  // Wait for the heading to appear (confirms React hydration)
  await page.waitForSelector('h1', { timeout: 10000 })

  // Log any console errors
  page.on('console', msg => { if (msg.type() === 'error') console.error('PAGE ERROR:', msg.text()) })

  // Full page screenshot
  await page.screenshot({ path: 'kontakt-screenshot.png', fullPage: true })
  console.log('✓ Screenshot saved')

  // Viewport screenshot (above the fold)
  await page.screenshot({ path: 'kontakt-viewport.png', fullPage: false })
  console.log('✓ Viewport screenshot saved')

  await browser.close()
})()
