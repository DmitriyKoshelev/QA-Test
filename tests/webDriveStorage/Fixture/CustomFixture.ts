import {test as base, chromium, expect} from "@playwright/test";
import { createRandomUserData } from "../tests/globalSetup";
import fs from "fs";
import path from "node:path";
import { RegistrationUser } from "../Page/RegistrationPage";

type UserData = {
    username: string;
    email: string;
    password: string;
};

export const test = base.extend<{
    userData: UserData;
    storageState: string;
}>({
userData: async ({}, use) => {
    const user = createRandomUserData(); //можно передати вручну
    await use(user);
},

storageState: async ({browser, userData}, use) => {
    const storageDir = path.resolve(__dirname, ".auth");
    if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir);
    }
    const safeUsername = userData.username.replace(/[^a-zA-Z0-9]/g, "_");
    const storageStatePath = path.join(storageDir,`${safeUsername}.json`);

    const isExist = fs.existsSync(storageStatePath);

    if (!isExist) {
        const page = await browser.newPage();
        const registerPage = new RegistrationUser(page);
        console.log("➡️ Going to register page");
        await page.goto("https://demo.learnwebdriverio.com/", { waitUntil: "load" });
        console.log("✍️ Registering user", userData);
        await registerPage.registerUser(userData);
        console.log("✅ Checking if user is logged in...");
       await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(
        userData.username
      ); 
      console.log("💾 Saving storage state to:", storageStatePath);
      await page.context().storageState({ path: storageStatePath });
      await page.close();

    }

    await use(storageStatePath);
}

});

export { expect };
