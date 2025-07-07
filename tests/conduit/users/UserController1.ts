import { APIRequestContext, APIResponse, expect } from "playwright/test";
import { User, UserRequest, UserResponse } from "../users/UserType1";

export class UserController1 {
    request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async login(userData: { email: string; password: string }) {
        const responce  = await this.request.post(
            "https://conduit-api.learnwebdriverio.com/api/users/login",
            {
                data: { user: userData },
            }
        );
        return responce;
    }

    async CreateUser(userData: User) {
        const body: UserRequest = {
            user: userData,
        };

        const responce = await this.request.post(
            "https://conduit-api.learnwebdriverio.com/api/users",
            {
                data: body,
            }
        );
        return responce;   
 }

    async getTokenFromResponse(responce: APIResponse) {
        const responceJson: UserResponse = await responce.json();
        const token = responceJson.user.token;
        expect(token).toBeTruthy();

        return token;
    }

}

export class ProfileController {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    //Отримати профіль користувача по urename
    async getProfile(username: string, token: string) {
        const response = await this.request.get(
            `https://conduit-api.learnwebdriverio.com/api/profiles/${username}`,
            {
                headers: {
                    authorization: `Token ${token}`,
                },
            }
        );
        return response;
    }

    //Оновити профіль користувача
    async updateProfile(
        updatedData: {
            email?: string;
            username?: string;
            password?: string;
        },
        token: string
    ) {
        const response = await this.request.put(
            "https://conduit-api.learnwebdriverio.com/api/user",
            {
                data: { user: updatedData },
                headers: {
                    authorization: `Token ${token}`,
                },
            }
        );
        return response;
    }

    //Отримати поточний профіль авторизованного користувача

    async getCurrentUser(token: string) {
        const response = await this.request.get(
            "https://conduit-api.learnwebdriverio.com/api/user",
            {
                headers: {
                    authorization: `Token ${token}`,
                },
            }
        );
        return response; 
    }        
    
}

