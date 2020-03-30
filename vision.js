const express = require('express');

var app = express();

//set up handlebars view engine and express app
var handlebars = require('express-handlebars').create({
	defaultLayout : 'vision'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('dummy');
	});

require("./routes/routes.js")(app);

app.set('port', process.env.PORT || 9000);
app.listen(app.get('port'), function() {
	console.info('Express started on http://localhost:' + app.get('port')
			+ '; press Ctrl-C to terminate.');
});