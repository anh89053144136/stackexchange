package stackExchange.services;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.simple.parser.JSONParser;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;

import stackExchange.entities.Article;
import stackExchange.entities.Root;

@Repository
public class HttpArticleService implements IArticleService {

	@Override
	public Root Get(Integer page, String searchText) throws URISyntaxException {
		
		URIBuilder ub = new URIBuilder("http://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&pagesize=5");
		ub.addParameter("page", page.toString());
		ub.addParameter("intitle", searchText);

		/*
		HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        HttpEntity<?> httpEntity  = new HttpEntity<>(httpHeaders); 
        
		RestTemplate restTemplate = new RestTemplate();
		
		HttpEntity<Root> response = restTemplate.exchange(
				ub.toString(), 
		        HttpMethod.GET, 
		        httpEntity, 
		        Root.class);
			 //ResponseEntity<MyResponse> response = template.exchange(request, MyResponse.class);
		return null;
		
		*/
		
		try {
            HttpClient c = new DefaultHttpClient();        
            HttpGet p = new HttpGet(ub.toString());        
 
            //p.setEntity(new StringEntity("{\"username\":\"" + this.apiusername + "\",\"password\":\"" + this.apipassword + "\"}", 
            //                 ContentType.create("application/json")));
 
            HttpResponse r = c.execute(p);
 
            BufferedReader rd = new BufferedReader(new InputStreamReader(r.getEntity().getContent()));
            String line = "";
            while ((line = rd.readLine()) != null) {
               //Parse our JSON response               
               JSONParser j = new JSONParser();
               JSONObject o = (JSONObject)j.parse(line);
               Map response = (Map)o.get("response");
 
               System.out.println(response.get("somevalue"));
            }
        }
        catch(ParseException e) {
            System.out.println(e);
        }
        catch(IOException e) {
            System.out.println(e);
        }       
	}

}
