import { test, expect } from '@playwright/test';

test('S-01 test search on the website', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('45rew');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('heading', { name: 'todos' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByText('Double-click to edit a todo Created by Remo H. Jansen Part of TodoMVC').click();
  await page.goto('https://github.com/remojansen/');
  await page.getByRole('link', { name: 'Repositories' }).click();
  await page.getByRole('button', { name: 'Search or jump to…' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('qwl');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
});