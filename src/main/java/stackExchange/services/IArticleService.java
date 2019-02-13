package stackExchange.services;

import java.net.URISyntaxException;

import stackExchange.entities.Article;
import stackExchange.entities.Root;

public interface IArticleService {
	Root Get(Integer page, String searchText) throws URISyntaxException;
}
