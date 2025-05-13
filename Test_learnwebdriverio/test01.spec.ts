import { test, expect } from '@playwright/test';

test('test01', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/register');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('August');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('tester02@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345q');
  await page.getByRole('button', { name: 'Sign up' }).click();
});