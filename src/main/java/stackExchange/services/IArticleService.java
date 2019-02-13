package stackExchange.services;

import java.io.IOException;
import java.net.URISyntaxException;

import org.apache.http.client.ClientProtocolException;

import stackExchange.entities.Article;
import stackExchange.entities.Root;

public interface IArticleService {
	Root Get(Integer page, String searchText)  throws URISyntaxException, ClientProtocolException, IOException;
}
