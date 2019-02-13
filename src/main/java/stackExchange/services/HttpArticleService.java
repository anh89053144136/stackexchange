package stackExchange.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URISyntaxException;

import org.springframework.stereotype.Repository;

import com.google.gson.Gson;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;

import stackExchange.entities.Root;

@Repository
public class HttpArticleService implements IArticleService {

	@Override
	public Root Get(Integer page, String searchText) throws URISyntaxException, ClientProtocolException, IOException {
		
		URIBuilder ub = new URIBuilder("http://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&pagesize=5");
		ub.addParameter("page", page.toString());
		ub.addParameter("intitle", searchText);
		
		HttpClient c = HttpClientBuilder.create().build();
		HttpGet p = new HttpGet(ub.toString());        
 
		HttpResponse r = c.execute(p);
 
		BufferedReader rd = new BufferedReader(new InputStreamReader(r.getEntity().getContent()));
		String line = "";
		while ((line = rd.readLine()) != null) {
		   
			Gson gson=new Gson();
			Root result = gson.fromJson(line, Root.class);
			
			return result;
		}
		
		return null;
	}
}
