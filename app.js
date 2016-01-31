var express = require('express');

var app = express();

app.listen('8080', function() {
	console.info('App listening on port 8080');
});

app.use('/', express.static(__dirname));

module.exports = app;