import { test, expect } from '@playwright/test';

test('B-02 test click button on the order', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Americano"]').click();
});