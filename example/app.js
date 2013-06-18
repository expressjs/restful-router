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

    /**
     * Users REST API
     *
     * GET    /users     => list()
     * GET    /users/:id => show(req.params.id)
     * POST   /users     => create()
     * PATCH  /users/:id => update(req.params.id)
     * DELETE /users/:id => delete(req.params.id)
     */
    restful({
      app: app,
      name: 'users',
      controller: user
    });

    /**
     * Foos REST API
     *
     * GET /users/:uid/foos/:date => show(req.params.uid, req.params.date)
     */
    restful({
      app: app,
      key: 'date',
      baseURL: '/users/:uid',
      name: 'foos',
      controller: foo,
    });

  })
);

if (process.env.NODE_ENV !== 'test') {
  server.listen(3000);
}

module.exports = server;