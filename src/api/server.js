var express = require('express');
var http = require('http');
var https = require('https');
var request = require('request');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var fs = require("fs");
var sierraService = require('./sierraService.js');

app.get('/', function (req, res) {
  res.send('LibWay');
})

app.get('/listBooks', function (req, res) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header('Access-Control-Allow-Credentials', 'true');
	
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.post('/search', function (req, res) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Credentials', 'true');
  console.log(req.body.genus);
  
  var post_data = "grant_type=client_credentials";
  // querystring.stringify({
  //   'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
  //   'output_format': 'json',
  //   'output_info': 'compiled_code',
  //     'warning_level' : 'QUIET',
  //     'js_code' : codestring
  // });

  var post_options = {
    host: 'merlin.mobius.umsystem.edu',
    port: '443',
    path: '/iii/sierra-api/v4/token',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic MDBldUpjVHVQUDg1d0ZaaFp5SlVRQXRya25LQTpsZXhtaXp6b3U='
      }
  };

  var req = https.request(post_options, function(response) {
    response.setEncoding('utf8');
    // console.log("response ", response);
    response.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    })
    // console.log('STATUS: ' + response.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(response.headers));
  })
  req.write(post_data);
  req.end();

  sierraService.GetToken().then(function (response) {
    var info = JSON.parse(response);
    res.send(info);    
  })

})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("server is now listening at http://%s:%s", host, port)

})
