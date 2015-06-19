var express = require('express'),
    routes = require('./server/routes/app-routes'),
    config = require('./server/assets/config.json'),
    logger = require('./server/logger.js');

var app = express();

var server = app.listen(config.port, function () {
    var port = server.address().port;
    logger.log('Application listening on Port', port);

	routes.init(app);
});