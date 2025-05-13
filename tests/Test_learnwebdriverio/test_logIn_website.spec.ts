import { test, expect } from '@playwright/test';


test('L-01 test logIn on the website', { tag: "@log"}, async ({page}) => {
     test.setTimeout(120_000);
await page.goto('https://demo.learnwebdriverio.com/');
await expect(page.getByRole('link', { name: ' Sign in' })).toBeVisible();
await page.getByRole('link', { name: ' Sign in' }).click();
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('tester01@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('12345');
await page.getByRole('button', { name: 'Sign in' }).click();
});