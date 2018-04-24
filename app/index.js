#!/usr/bin/env node

// load required core libs
const core = require('./core');
const compression = require('compression');
const express = require('express');
const cookies = require('cookie-parser')
const helmet = require('helmet');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const router = require('./core/router');
const db = mongoose.connection;
const accessLogger = require('./middleware/access-logger');
const errorHandler = require('./middleware/error-handler');
const notFoundHandler = require('./middleware/not-found-handler');

// create express app
const app = express();

app.use(accessLogger);

// compress all responses
app.use(compression());

// activate helmet
app.use(helmet());

// parse cookies
app.use(cookies());

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(__dirname + '/../public'));

// authentification
app.use(auth);

// register routes
router(app);

// register error handler
app.use(errorHandler);

app.use(notFoundHandler);

// create https server
const server = https.createServer({
    key: fs.readFileSync(__dirname + '/config/key.pem'),
    cert: fs.readFileSync(__dirname + '/config/cert.pem')
}, app);

// connect to mongodb
mongoose.connect('mongodb://localhost/' + core.config.mongoDB);

db.on('error', (err) => {
    core.service.logger.info('can not connect to db', err);
});

db.once('open', () => {
    core.service.logger.info('connected to mongodb: ' + core.config.mongoDB);
    server.listen(core.config.serverPort, () => {
        core.service.logger.info('server started at port: ' + core.config.serverPort);
    });
});


