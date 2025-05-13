import { test, expect } from '@playwright/test';

test('b-01 test order basket', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('1234351');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('23232@1323');
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
});