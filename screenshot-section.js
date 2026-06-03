const { chromium } = require('C:/Users/PC/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('http://localhost:3001/om-mig', { waitUntil: 'networkidle' })

  // Scroll page fully to trigger all IntersectionObservers
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = document.body.scrollHeight
      let step = 400
      let current = 0
      const timer = setInterval(() => {
        window.scrollBy(0, step)
        current += step
        if (current >= total) { clearInterval(timer); resolve(undefined) }
      }, 80)
    })
  })

  await page.waitForTimeout(1000)

  // Find and scroll to "Løsninger" heading
  const heading = page.locator('h2:has-text("Reel erfaring")')
  await heading.scrollIntoViewIfNeeded()
  await page.waitForTimeout(1000)

  await page.screenshot({ path: 'reel-erfaring-section.png' })
  console.log('Done')
  await browser.close()
})()
