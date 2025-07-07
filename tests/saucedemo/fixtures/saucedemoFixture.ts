import { test as base, expect } from '@playwright/test';
import { LoginPageFix } from '../pages/LogFix';

type MyFixtures = {
  loginPageFix: LoginPageFix;
};

export const test = base.extend<MyFixtures>({
  loginPageFix: async ({ page }, use) => {
    const loginPageFix = new LoginPageFix(page);

    await use(loginPageFix);
  }
});

export { LoginPageFix };

