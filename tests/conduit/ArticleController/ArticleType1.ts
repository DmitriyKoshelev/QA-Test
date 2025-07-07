export type Author = {
  username: string;
  image: string;
  following: boolean;
};

export type Article = {
  slug?: string;
  title?: string;
  description?: string;
  body?: string;
  createdAt?: string;
  updatedAt?: string;
  tagList?: string[];
  favorited?: boolean;
  favoritesCount?: number;
  author?: Author;
};

export type ArticlesResponse = {
  articles: Article[];
};

export type ArticlesCreation = {
  article: Article;
};
