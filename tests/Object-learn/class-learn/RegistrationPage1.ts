import {Locator, Page} from '@playwright/test';

export class RegistrationPage {
    page: Page;
    // usernameInputLocator: Locator;
    emailInputLocator: Locator;
    passwordInputLocator: Locator;
    singUpButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        // this.usernameInputLocator = page.locator('input[placeholder="Username"]');
        this.emailInputLocator = page.locator('input[placeholder="Email"]');
        this.passwordInputLocator = page.locator('input[placeholder="Password"]');
        this.singUpButtonLocator = page.locator('.btn-lg');
    }


};