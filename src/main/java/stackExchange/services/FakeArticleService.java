package stackExchange.services;

import org.springframework.stereotype.Repository;

import stackExchange.entities.Article;
import stackExchange.entities.Root;

//@Repository
public class FakeArticleService implements IArticleService {
	
	@Override
	public Root Get(Integer page, String searchText) {
		Root result = new Root();
		result.items = new Article[1];
		result.has_more = false;
		result.quota_max = 1;
		result.quota_remaining = 2;
	
		return result;
	}
}
