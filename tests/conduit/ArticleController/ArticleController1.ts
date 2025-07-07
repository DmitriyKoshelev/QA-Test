import { APIRequestContext } from "@playwright/test";
import { Article, ArticlesCreation } from "../ArticleController/ArticleType1";

export class ArticleController {
    private reguest: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.reguest = request;
    }

    async createArticle(articleData: Article, token: string) {
        const requestBody: ArticlesCreation = {
            article: articleData,
        };

        const response = await this.reguest.post(
            "https://conduit-api.learnwebdriverio.com/api/articles",
            {
                data: requestBody,
                headers: {
                    authorization: `Token ${token}`,
                },
            }
        );

       return response; 
    }
}