const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

// Middleware
app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// API Routes
// const apiRouter = require('./routes/api');
// app.use('/api', apiRouter);

// A "catch all" route for SPA's client-side routing
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Server
const port = process.env.PORT || 3001;

app.listen(port, function() {
	console.log(`Express app running on port ${port}`);
});