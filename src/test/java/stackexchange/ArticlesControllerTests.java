package stackexchange;

import org.junit.Assert;
import org.junit.Test;

import stackExchange.controllers.ArticlesController;
import stackExchange.entities.Article;
import stackExchange.services.FakeArticleService;

public class ArticlesControllerTests {
	
	@Test
	public void GetTest() {
		ArticlesController articlesController = new ArticlesController();
		articlesController.articleService = new FakeArticleService();
		
		Article[] articles = articlesController.Get(1, "spome text");
		
		Assert.assertTrue(articles.length == 1);
	}
}
