import { test, expect } from '@playwright/test';

test('O-01 test order ', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('mark');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@yahoo.com');
  await page.getByRole('button', { name: 'Submit' }).click();
});