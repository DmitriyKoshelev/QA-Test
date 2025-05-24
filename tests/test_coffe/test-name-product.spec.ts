import { test, expect } from '@playwright/test';

test('N-01 test name product', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('listitem').filter({ hasText: 'Espresso $10.00espresso' }).locator('div').nth(4).click();
  await page.locator('li:nth-child(3) > div > .cup > .cup-handler').click();
  await page.locator('li:nth-child(6) > div > .cup > .cup-handler').click();
  await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
  await page.locator('li:nth-child(2) > div > .cup > .cup-handler').click();
  await page.getByRole('link', { name: 'Menu page' }).click();
  await page.locator('li:nth-child(9) > div > .cup > .cup-handler').click();
  await page.locator('li:nth-child(8) > div > .cup > .cup-handler').click();
  await page.locator('li:nth-child(4) > div > .cup > .cup-handler').click();
});