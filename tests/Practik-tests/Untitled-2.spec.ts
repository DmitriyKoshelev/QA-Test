 import { test, expect } from '@playwright/test';

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




test('css-04  register on the website', { tag: "@arctical"}, async ({page}) => {
     test.slow();
     await page.goto('https://demo.learnwebdriverio.com/');
     await expect(page.getByRole('link', { name: ' Sign in' })).toBeVisible();
     await page.locator('a[href="/login"]').click();
     await page.locator('input[placeholder="Email"]').fill('tester01@gmail.com');
     await page.locator('input[placeholder="Password"]').fill('12345');
     await page.locator(".btn-lg").click();
     await page.locator('a[href="/editor"]').click();
     await page.locator('//*[@class="form-control form-control-lg"]').fill('Behappy');
     await page.locator('//*[@data-qa-id="editor-description"]').fill('Behappy');
     await expect(page.getByRole('textbox', { name: 'Write your article (in markdown)'})).toBeVisible();
     await page.locator('//*[@class="auto-textarea-input no-border no-resize"]').fill('any more');
     await page.locator('//*[@data-qa-id="editor-tags"]').fill('myteg');
     await expect(page.locator(".btn-primary")).toBeVisible();
}); 



 