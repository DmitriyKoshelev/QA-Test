import { test, expect } from '@playwright/test';

test('del-01 test delete acticale on the website', { tag: "@delarc"}, async ({page}) => {
     test.setTimeout(120_000);
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByRole('link', { name: ' Sign in' }).click();
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('tester01@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('12345');
await page.getByRole('button', { name: 'Sign in' }).click();
await page.getByRole('link', { name: 'Behappy I\'m happy!!! Read' }).first().click();
await expect(page.getByRole('button', { name: '  Delete Article' }).nth(1)).toBeVisible();
await page.getByRole('button', { name: '  Delete Article' }).nth(1).click();
});