import { test, expect } from '@playwright/test';

test('dv-04 login must be performed', { tag: "@log"}, async ({page}) => {
     test.slow();
await page.goto('https://demo.learnwebdriverio.com/');
await expect(page.getByRole('link', { name: ' Sign in' })).toBeVisible();
await page.getByRole('link', { name: ' Sign in' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('tester01@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).fill('12345');
await page.getByRole('button', { name: 'Sign in' }).click();
});