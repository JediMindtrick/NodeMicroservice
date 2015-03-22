
/**
 * Module dependencies.
 */
var express = require('express'),
	http = require('http'),
	path = require('path'),
	exphbs = require('express-handlebars'),
	markdownRouter = require('express-markdown-router'),
	app = express();

// all environments
app.set('port', process.env.PORT || 3000);

//standard middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

//markdown rendering
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: null }));
app.set('view engine', 'handlebars');
app.use(markdownRouter(path.join(__dirname,'public','docs')));


app.configure('production',function(){
	app.use(express.basicAuth(process.env.SERVICE_USER, process.env.SERVICE_PASSWORD));
});

app.get('/',function(req,res) {
	res.redirect(301, '/docs/Help');
});

app.get('/health',function(req,res) {
	res.send('OK');
});

http.createServer(app).listen(app.get('port'), function(){
 	console.log('Express server listening on port ' + app.get('port'));
});
