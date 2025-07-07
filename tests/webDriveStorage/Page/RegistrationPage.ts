import { Page } from "@playwright/test";

export class RegistrationUser {
  constructor(private page: Page) {}

  async registerUser(userData: { username: string; email: string; password: string }) {
    await this.page.fill('input[placeholder="Username"]', userData.username);
    await this.page.fill('input[placeholder="Email"]', userData.email);
    await this.page.fill('input[placeholder="Password"]', userData.password);
    await this.page.click('.btn');
  }
}