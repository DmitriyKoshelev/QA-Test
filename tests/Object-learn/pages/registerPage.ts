import { Page  } from "@playwright/test";

export function RegistrationPage(page: Page,username: string, email: string, password: string) {
    this.usernameInputLocator = page.locator('input[placeholder="Username"]');
    this.emailInputLocator = page.locator('input[placeholder="Email"]');
    this.passwordInputLocator = page.locator('input[placeholder="Password"]');
    this.singUpButtonLocator = page.locator('.btn-lg');

    this.registerUser = async function (
        username: string,
        email: string,
        password: string
    ) {
        await this.usernameInputLocator.fill(username);
        await this.emailInputLocator.fill(email);
        await this.passwordInputLocator.fill(password);
        await this.singUpButtonLocator.click();
    }
};