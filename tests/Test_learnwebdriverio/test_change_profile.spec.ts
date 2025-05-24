 import { test, expect } from '@playwright/test';

test('dv-02 change profile on the website', { tag: "@profile"}, async ({page}) => {
     test.slow();
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect(page.getByRole('link', { name: ' Sign in' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Email' }).fill('tester01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('12345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: '  Settings' }).click();
    await page.getByRole('textbox', { name: 'URL of profile picture' }).click();
    await page.getByRole('textbox', { name: 'URL of profile picture' }).fill('some text is here');
    await page.getByRole('textbox', { name: 'Your username' }).fill('David');
    await page.getByRole('textbox', { name: 'Short bio about you' }).fill('there any text');
    await page.getByRole('textbox', { name: 'Password' }).fill('qwerty');
    await page.getByRole('button', { name: 'Update Settings' }).click();
});