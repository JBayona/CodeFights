import java.util.*;
import java.net.*;
import java.io.*;

public class HttpGetClient {
   
   private static final String STR_URL = "https://jsonmock.hackerrank.com/api/movies/search/?Title=";   

   public static void main(String[] args) { 
      int total = executeGet("maze");
      System.out.println(total);
   }

   static int getNumberOfMovies(String substr) {
         try {
             URL url = new URL("https://jsonmock.hackerrank.com/api/movies/search/?Title="+substr);
             HttpURLConnection conn = (HttpURLConnection) url.openConnection();
             conn.setRequestMethod("GET");
             conn.setRequestProperty("Content-Type", "application/json");
             conn.setUseCaches(false);
             conn.setDoOutput(true);

             //Get Response  
             InputStream is = conn.getInputStream();
             BufferedReader rd = new BufferedReader(new InputStreamReader(is));
             StringBuilder response = new StringBuilder();
             String line;
             while ((line = rd.readLine()) != null) {
                response.append(line);
                response.append('\r');
             }
             rd.close();
             final String resp = response.toString();
             final String[] elements = resp.split(",");
             for(String elem : elements){
                //elem.replaceAll("\"");
                final String[] data = elem.replaceAll("\"", "").split(":");
                if(data[0].equals("total")){
                   return Integer.valueOf(data[1]);
                }
             }
      } catch(Exception ex){
         return -1;
      }
      return -1;
    }
}
