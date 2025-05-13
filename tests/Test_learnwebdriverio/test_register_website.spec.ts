import { test, expect } from '@playwright/test';

test('R-01 test register on the website', { tag: "@reg"}, async ({page}) => {
     test.setTimeout(120_000);
    await page.goto('https://demo.learnwebdriverio.com/register');
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Markus');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('tester01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('12345');
    await page.getByRole('button', { name: 'Sign up' }).click();
});