const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://paperdaz-dev.herokuapp.com');
  await page.screenshot({ path: 'example.png' });
  await page.pdf({ path: 'hn.pdf', format: 'a4' });

  await browser.close();
})();
