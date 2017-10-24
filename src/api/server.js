var express = require('express');
var app = express();
var fs = require("fs");

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
  
  //TODO:
  //replace below with call to Sierra API and return back list of books
  //see src/app/classes/book.ts for reference (return those things for each book)
  fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});

})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
