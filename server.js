var express = require('express');
var path = require('path');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){ 
	res.render('index.html');
});


//TODO: find a way to run on port 3000 on dev, but 6000 on production.

var server = app.listen(6000, function() { 
	console.log('Listening on port %d', server.address().port);
});