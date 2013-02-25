/*!
 * restful-router - example/app.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var connect = require('connect');
var urlrouter = require('urlrouter');
var restful = require('../');
var user = require('./controllers/user');
var foo = require('./controllers/foo');

var server = connect(

connect.query(),
connect.bodyParser(),
urlrouter(function (app) {

  app.get('/', function (req, res) {
    res.end('hello world');
  });

  restful(app, 'users', user);
  restful(app, 'foos', foo);

}));

if (process.env.NODE_ENV !== 'test') {
  server.listen(3000);
}

module.exports = server;