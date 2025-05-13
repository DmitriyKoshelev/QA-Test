import { test, expect } from '@playwright/test';

test('F-01 test link on the footer', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Playwright Training' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Playwright Training' }).click();
  const page2 = await page2Promise;
  await page.getByRole('link', { name: 'Feature Videos' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Stack Overflow' }).click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Discord', exact: true }).click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'LinkedIn' }).click();
  const page5 = await page5Promise;
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'YouTube' }).click();
  const page6 = await page6Promise;
  const page7Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Blog' }).click();
  const page7 = await page7Promise;
  await page.getByRole('link', { name: 'Ambassadors' }).click();
});