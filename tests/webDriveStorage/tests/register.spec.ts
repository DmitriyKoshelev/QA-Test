import { test, expect } from "@playwright/test";
import { RegistrationUser } from "../Page/RegistrationPage";
import { createRandomUserData } from "../tests/globalSetup";

test("logus-01 successful registration of a new accountant", { tag: '@register' }, async ({ page }) => {
  test.slow();
  // const userData = createRandomUserData();
  const registerUser = new RegistrationUser(page);

  await page.goto("https://demo.learnwebdriverio.com/register");

  // await registerUser.registerUser(userData);
//check username visible in navigate
// await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(userData.username);

});