
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var md = require('express-markdown');
var app = express();
var connected = false;

// all environments
app.set('port', process.env.PORT || 3000);
app.use(md({ directory : __dirname + '/public'}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.configure('production',function(){
	app.use(express.basicAuth(process.env.SERVICE_USER, process.env.SERVICE_PASSWORD));
});

app.get('/',function(req,res) {
	res.redirect(301, '/doc/Help.md');
});

app.get('/health',function(req,res) {
	res.send('OK');
});

http.createServer(app).listen(app.get('port'), function(){
 	console.log('Express server listening on port ' + app.get('port'));
});
