package stackexchange;

import org.junit.Assert;
import org.junit.Test;

import stackExchange.controllers.ArticlesController;
import stackExchange.entities.Article;
import stackExchange.entities.Root;
import stackExchange.services.FakeArticleService;
import stackExchange.services.HttpArticleService;

public class ArticlesControllerTests {
	
	@Test
	public void GetTest() {
		ArticlesController articlesController = new ArticlesController();
		//articlesController.articleService = new FakeArticleService();
		articlesController.articleService = new HttpArticleService();
		
		Root result = articlesController.Get(1, "spome text");
		
		Assert.assertTrue(result != null);
	}
}
