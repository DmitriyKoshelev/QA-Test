import { test, expect } from '@playwright/test';

test('M-01 test head node menu', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Node.js' }).click();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' }).click();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: '.NET' }).click();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: '.NET', exact: true }).click();
  await page.getByRole('link', { name: 'Node.js' }).click();
});