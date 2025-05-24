import { test, expect } from '@playwright/test';

test('P-01 test true price', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByText('$8.00').click();
  await page.getByText('$18.00').click();
  await page.getByText('$7.00').click();
  await page.getByText('$19.00').click();
  await page.getByText('$12.00').click();
  await page.getByText('$10.00').click();
  await page.getByText('$15.00').click();
  await page.getByText('$14.00').click();
  await page.getByText('$16.00').click();
});