const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Demo UI Test', function() {
  this.timeout(30000); // 30 seconds

  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should open Google and check the title', async () => {
    await driver.get('https://www.google.com');
    const title = await driver.getTitle();
    expect(title).to.include('Google');
  });
});
