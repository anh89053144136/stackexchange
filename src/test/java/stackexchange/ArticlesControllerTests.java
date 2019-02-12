package stackexchange;

import org.junit.Assert;
import org.junit.Test;

import stackExchange.controllers.ArticlesController;
import stackExchange.entities.Article;
import stackExchange.services.FakeArticleService;
import stackExchange.services.HttpArticleService;

public class ArticlesControllerTests {
	
	@Test
	public void GetTest() {
		ArticlesController articlesController = new ArticlesController();
		//articlesController.articleService = new FakeArticleService();
		articlesController.articleService = new HttpArticleService();
		
		Article[] articles = articlesController.Get(1, "spome text");
		
		Assert.assertTrue(articles.length == 1);
	}
}
