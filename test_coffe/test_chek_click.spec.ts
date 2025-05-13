import { test, expect } from '@playwright/test';

test('k-01 test chek cliker mouse', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('heading', { name: 'Americano $' }).click();
  await page.getByRole('heading', { name: 'Flat White $' }).click();
  await page.getByRole('heading', { name: 'Mocha $' }).click();
  await page.getByRole('heading', { name: 'Cafe Breve $' }).click();
  await page.getByRole('heading', { name: 'Espresso Con Panna $' }).click();
  await page.getByRole('heading', { name: 'Cafe Latte $' }).click();
  await page.getByRole('heading', { name: 'Cappuccino $' }).click();
  await page.getByRole('heading', { name: 'Espresso Macchiato $' }).click();
  await page.getByRole('heading', { name: 'Espresso $' }).click();
});