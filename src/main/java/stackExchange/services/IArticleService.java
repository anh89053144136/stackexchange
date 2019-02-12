package stackExchange.services;

import java.net.URISyntaxException;

import stackExchange.entities.Article;

public interface IArticleService {
	Article[] Get(Integer page, String searchText) throws URISyntaxException;
}
