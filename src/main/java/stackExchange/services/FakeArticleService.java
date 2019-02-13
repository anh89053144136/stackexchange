package stackExchange.services;

import org.springframework.stereotype.Repository;

import stackExchange.entities.Article;
import stackExchange.entities.Root;

@Repository
public class FakeArticleService implements IArticleService {
	
	@Override
	public Root Get(Integer page, String searchText) {
		Article[] result = new Article[1];
		Article newArticle = new Article();
		/*
		newArticle.Author = "Ivan Stepanov";
		newArticle.Link = "www.google.com";
		newArticle.Title = "myTitle";
		newArticle.QuestionDate = "123456";
		*/
		result[0] = newArticle;
		
		return new Root();
	}
}
