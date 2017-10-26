var express = require('express')
var app = express()
// app.use(cors());
var fs = require("fs")

// app.use(function(req, res, next) {  
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', function (req, res) {
  res.send('LibWay');
})

app.get('/listBooks', function (req, res) {
  res.send('hello world')
  // console.log(__dirname);
  //  fs.readFile( __dirname + "/files/" + "books.json", 'utf8', function (err, data) {
  //      console.log( data );
  //      res.end( data );
  //  });
})

app.get('/test', function (req, res) {
  console.log("test here");
})

app.post('/search', function (req, res) {
  // console.log(req.params);
  // res.send(req.params);
  console.log("here");
  // request('', function (error, response, body) {
  //   console.log(response);
  //   if (!error && response.statusCode == 200) {
  //     var info = JSON.parse(body);

  //     res.send(info);
  //   }
  // })

})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("server is listening at http://%s:%s", host, port)
});
