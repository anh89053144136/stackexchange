package stackexchange;

import org.junit.Assert;
import org.junit.Test;

import stackExchange.controllers.ArticlesController;
import stackExchange.entities.Root;
import stackExchange.models.ActionResult;
import stackExchange.services.FakeArticleService;

public class ArticlesControllerTests {
	
	@Test
	public void GetTest() {
		ArticlesController articlesController = new ArticlesController();
		articlesController.articleService = new FakeArticleService();
		
		ActionResult<Root> result = articlesController.Get(1, "some text");
		
		Assert.assertTrue(result.Content.items.length == 1);
		Assert.assertTrue(result.Content.has_more == false);
		Assert.assertTrue(result.Content.quota_max == 1);
		Assert.assertTrue(result.Content.quota_remaining == 2);
	}
}
