import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');

  await page.getByRole('link', { name: 'Your Feed' }).click();
  await page.getByRole('link', { name: 'Global Feed' }).click();
  await page.getByText('Popular Tags').click();
  await page.getByRole('link', { name: 'test', exact: true }).click();
  await page.getByRole('link', { name: 'some title Read more... qa' }).first().click();
  await expect(page.getByRole('link', { name: 'test', exact: true })).toBeVisible();


});