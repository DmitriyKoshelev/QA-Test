import { Page } from '@playwright/test';

export async function registerUser(page: Page, username: string, email: string, password: string) {
await page.locator('a[href="/register"]').click();
await page.locator('input[placeholder="Username"]').fill('username3');
await page.locator('input[placeholder="Email"]').fill('test2@mail.com');
await page.locator('input[placeholder="Password"]').fill('password');
await page.locator('.btn-lg').click();
};