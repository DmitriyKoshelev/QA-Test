 import { test, expect } from '@playwright/test';

test('cc-01 buttons', async ({ page }) => {
      test.slow();
     await page.goto('https://demoqa.com/');
     const element = page.locator('//*[text()="Elements"]');
     const away = page.locator('//*//*[@id="app"]');
     const btn = page.locator('//span[text()="Buttons"]');
     const dbl = page.locator('//*[@id="doubleClickBtn"]');
     const right = page.locator('//*[@id="rightClickBtn"]');
     await element.click();
     await away.click();
     await btn.click();
     await dbl.click();
     await right.click();
     });

    test('cc-02', { tag: "@textbox"}, async ({page}) => {
     test.slow();
     await page.goto('https://demoqa.com/');
     const gotoText = page.locator('//*[text()="Elements"]');
     const appGo = page.locator('//*//*[@id="app"]');
     const TextBox = page.locator('//span[text()="Text Box"]');
     const userName = page.locator('//*[@id="userName"]');
     const userEmail = page.locator('//*[@id="userEmail"]');
     const currentAddress = page.locator('//*[@id="currentAddress"]');
     const permAddress = page.locator('//*[@id="permanentAddress"]');
     await gotoText.click();
     await appGo.click();
     await TextBox.click();
     await userName.fill('pacahontas');
     await userEmail.fill('paca@mail.com');
     await currentAddress.fill('Canada');
     await permAddress.fill('Canada2');
});

 test('cc-03 radio-button', { tag: "@radiobut"}, async ({ page }) => {
     test.slow();
     await page.goto('https://demoqa.com/');
     const element = page.locator('//*[text()="Elements"]');
     const sbw = page.locator('//*//*[@id="app"]');
     const radio = page.locator('//span[text()="Radio Button"]');
     const goRadio = page.locator('//*[@id="yesRadio"]/parent::div');
     const press = page.locator('//*[@id="impressiveRadio"]/parent::div');
     const noRadio = page.locator('//*[@id="noRadio"]/parent::div');
     await element.click();
     await sbw.click();
     await radio.click();
     await goRadio.click();
     await press.click();
     await noRadio.click();
});

test('cc-04 check-box', { tag: "@chekbox"}, async ({page}) => {
     test.slow();
     await page.goto('https://demoqa.com/');
     const element = page.locator('//*[text()="Elements"]');
     const begin = page.locator('//*//*[@id="app"]');
     const boxbox = page.locator('//span[text()="Check Box"]');
     const treeNode = page.locator('//*[@id="tree-node"]/ol/li/span/button');
     const desk = page.locator('//span[text()="Desktop"]');
     const document = page.locator('//span[text()="Documents"]');
     const download = page.locator('//span[text()="Downloads"]');
     await element.click();
     await begin.click();
     await boxbox.click();
     await treeNode.click();
     await desk.click();
     await document.click();
     await download.click();
});
