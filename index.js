const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://accounts.binance.com/en/login');

  await page.screenshot({ path: 'example.png' });

  await page.type('input[name=email]', 'tst@g.com')

  await page.type('input[name=password]', '12345678')

  await page.click('#click_login_submit')

  console.log('done')

  //await page.click('[data-test-foo4="true"]');

  //await browser.close();
})();
