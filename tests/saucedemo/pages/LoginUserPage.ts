import {Page, Locator} from"@playwright/test";

export class LoginUserPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password)
    await this.page.locator('#login-button').click();
  }
};