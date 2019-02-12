package stackExchange.services;

import stackExchange.entities.Article;

public interface IArticleService {
	Article[] Get(Integer page, String searchText);
}
