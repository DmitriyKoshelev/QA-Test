import { test, expect } from '@playwright/test';

test('b-01 text-box', { tag: "@textbox"}, async ({page}) => {
     test.slow();
await page.goto('https://demoqa.com/');
await page.locator('//*[text()="Elements"]').click();
await page.locator('//*//*[@id="app"]').click();
await page.locator('//span[text()="Text Box"]').click();
await page.locator('//*[@id="userName"]').fill('pacahontas');
await page.locator('//*[@id="userEmail"]').fill('paca@mail.com');
await page.locator('//*[@id="currentAddress"]').fill('Canada');
await page.locator('//*[@id="permanentAddress"]').fill('Canada2');
await page.locator('//*//*[@id="submit"]').click();
});



test('b-02 check-Box', { tag: "@chekbox"}, async ({page}) => {
     test.slow();
await page.goto('https://demoqa.com/');
await page.locator('//*[text()="Elements"]').click();
await page.locator('//*//*[@id="app"]').click();
await page.locator('//span[text()="Check Box"]').click();
await page.locator('//*[text()="Home"]/../../button').click();
await page.locator('//span[text()="Documents"]').click();
await page.locator('//*[text()="Desktop"]/../../button').click();
await page.locator('//span[text()="Desktop"]').click();
await page.locator('//span[text()="Documents"]').click();
await page.locator('//span[text()="Downloads"]').click();

});

test('b-03 radio-button', { tag: "@radiobut"}, async ({ page }) => {
      test.slow();
  await page.goto('https://demoqa.com/');
  await page.locator('//*[text()="Elements"]').click();
  await page.locator('//*//*[@id="app"]').click();
  await page.locator('//span[text()="Radio Button"]').click();
  await page.locator('//*[@id="yesRadio"]/parent::div').click();
  await page.locator('//*[@id="impressiveRadio"]/parent::div').click();
  await page.locator('//*[@id="noRadio"]/parent::div').click();
});



test('b-04 buttons', { tag: "@buttons"}, async ({ page }) => {
      test.slow();
  await page.goto('https://demoqa.com/');
  await page.locator('//*[text()="Elements"]').click();
  await page.locator('//*//*[@id="app"]').click();
  await page.locator('//span[text()="Buttons"]').click();
  await page.locator('//*[@id="doubleClickBtn"]').click();
  await page.locator('//*[@id="rightClickBtn"]').click();
  await page.locator('//*[@id="5Lv1g"]/parent::div').click();
});