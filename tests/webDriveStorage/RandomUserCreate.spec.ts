import {test, expect} from "./Fixture/CustomFixture";


test('verification of customer authorization via storageState', async ({ browser, storageState, userData }) => {
    test.slow();
  const context = await browser.newContext({ storageState });
  const page = await context.newPage();

  await page.goto("https://demo.learnwebdriverio.com/");
  await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(userData.username);

  await page.close();
});