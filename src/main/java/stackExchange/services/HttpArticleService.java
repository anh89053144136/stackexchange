package stackExchange.services;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;
import org.apache.http.client.utils.URIBuilder;

import stackExchange.entities.Article;

@Repository
public class HttpArticleService implements IArticleService {

	@Override
	public Article[] Get(Integer page, String searchText) throws URISyntaxException {
		URIBuilder ub = new URIBuilder("http://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&pagesize=5");
		ub.addParameter("page", page.toString());
		ub.addParameter("intitle", searchText);

		/*
		RequestEntity entity = RequestEntity
				     .get(new URI(ub.toString()))
				     .accept(MediaType.APPLICATION_JSON)
				     .body(null);
		*/
		
		HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> httpEntity  = new HttpEntity<>(httpHeaders); 
        
		RestTemplate restTemplate = new RestTemplate();
		
		HttpEntity<String> response = restTemplate.exchange(
				ub.toString(), 
		        HttpMethod.GET, 
		        httpEntity, 
		        String.class);
			 //ResponseEntity<MyResponse> response = template.exchange(request, MyResponse.class);
		return null;
	}

}
