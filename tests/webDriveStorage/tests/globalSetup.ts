import { Page } from "@playwright/test";

export function createRandomUserData () {
    const random = Math.floor(Math.random()* 1000);
    return {
        username: `user${random}`,
        email: `user${random}@example.com`,
        password: "TestPassword123!"
    }
    
}

export {Page}