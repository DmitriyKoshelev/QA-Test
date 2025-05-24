import { test, expect } from '@playwright/test';

test('dv-05  register on the website', { tag: "@arctical"}, async ({page}) => {
     test.slow();
    await page.goto('https://demo.learnwebdriverio.com/');
    await page.getByRole('link', { name: ' Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('tester01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('12345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: '  New Article' }).click();
    await expect(page.getByRole('textbox', { name: 'Article Title' })).toBeEmpty();
    await page.getByRole('textbox', { name: 'Article Title' }).fill('Behappy');
    await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('I\'m happy!!!');
    await page.locator('.v-note-edit').click();
    await page.getByRole('textbox', { name: 'Write your article (in' }).fill('Write about your any...');
    await page.getByRole('button', { name: 'Publish Article' }).click();
});