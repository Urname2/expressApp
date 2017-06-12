// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path    = require("path");

app.set('port', (process.env.PORT || 5000));

// Routing
app.use(express.static(__dirname + '/public'));

server.listen(app.get('port'), function () {
  console.log('Server listening at port %d', app.get('port'));
});

app.get('/', function (request, response) {
  response.sendFile((path.join(__dirname+'/index.html')));
});

app.get('/endepunkt', function (request, response) {
  response.sendFile((path.join(__dirname+'/public/annenoppgave.html')));
});