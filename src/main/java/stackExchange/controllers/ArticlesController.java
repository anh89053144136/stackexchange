package stackExchange.controllers;

import java.io.IOException;
import java.net.URISyntaxException;

import org.apache.http.client.ClientProtocolException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import stackExchange.entities.Article;
import stackExchange.entities.Root;
import stackExchange.models.ActionResult;
import stackExchange.services.IArticleService;

@Controller
public class ArticlesController {
	@Autowired
	public IArticleService articleService;
	
	@RequestMapping(value = "articles", method = RequestMethod.GET)
	@ResponseBody()
	public ActionResult<Root> Get(Integer page, String searchText)
	{
		ActionResult<Root> result = new ActionResult<Root>();
		
		try {
			result.StatusCode = 1;
			result.Content = articleService.Get(page, searchText);
		} catch (URISyntaxException | IOException e) {
			result.StatusCode = 0;
		}
		
		return result;
	}
}
