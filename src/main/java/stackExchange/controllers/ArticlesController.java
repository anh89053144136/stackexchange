package stackExchange.controllers;

import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import stackExchange.entities.Article;
import stackExchange.services.IArticleService;

@Controller
public class ArticlesController {
	@Autowired
	public IArticleService articleService;
	
	@RequestMapping(value = "articles", method = RequestMethod.GET)
	@ResponseBody()
	public Article[] Get(Integer page, String searchText)
	{
		try {
			return articleService.Get(page, searchText);
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return new Article[0];
	}
}
