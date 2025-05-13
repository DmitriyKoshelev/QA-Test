import { test, expect } from '@playwright/test';

test('B-01 test popup button on the click', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Community' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'GitHub repository' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Discord server', exact: true }).click();
  const page2 = await page2Promise;
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await page.goto('https://playwright.dev/');
});