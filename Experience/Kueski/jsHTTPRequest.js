var http = require('http');
var https = require('https');
function getMovieTitles(substr) {
  var result = [];
  var str = null;
  var url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+substr;
  https.get(url, (res) => {
      res.on('data', (d) => {
          var data = JSON.parse(d);
          var info = data["data"];
          for(var i= 0; i < info.length; i++){
              result.push(info[i]['Title']);
          }
          result.sort();
          for(var j = 0; j < result.length; j++){
              console.log(result[j]);
          }
  });
  }).on('error', (e) => {
      console.error(e);
  });
}

getMovieTitles();