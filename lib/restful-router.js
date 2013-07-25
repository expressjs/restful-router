/*!
 * restful-router - lib/restful-router.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var debug = require('debug')('restful-router');

/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /users[/]        => user.list()
 *  GET    /users/new       => user.new()
 *  GET    /users/:id       => user.show()
 *  GET    /users/:id/edit  => user.edit()
 *  POST   /users[/]        => user.create()
 *  PATCH  /users/:id       => user.update()
 *  DELETE /users/:id       => user.destroy()
 *
 * @param {Object} options
 *  - {Object} app, must impl `app.get(), app.post(), app.put(), app.delete()`.
 *  - {String} name, resource's name. like `users, posts, tweets`.
 *  - {Object} controller, controller module contains `CRUD List` methods.
 *  - {String} [baseURL], default is '/'. e.g.: '/posts/:pid/'
 *  - {String} [key], default is 'id'. e.g.: 'name', 'date'
 */
module.exports = function restfulRouter(options) {
  var app = options.app;
  var controller = options.controller;
  var name = options.name || controller.name;
  var baseURL = options.baseURL || '/';
  var key = options.key || 'id';
  if (baseURL[baseURL.length - 1] !== '/') {
    baseURL += '/';
  }
  var url = baseURL + name;
  debug('%s => %s', name, url);
  var routes = [
    [ 'get', url, 'list' ],
    [ 'get', url + '/new', 'new' ],
    [ 'get', url + '/:' + key, 'show' ],
    [ 'get', url + '/:' + key + '/edit', 'edit' ],

    [ 'post', url, 'create' ],
    [ 'patch', url + '/:' + key, 'update' ],
    [ 'delete', url + '/:' + key, 'destroy' ],
  ];
  
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    var handle = controller[route[2]];
    if (typeof handle === 'function') {
      app[route[0]](route[1], handle);
      debug('%s %s', route[0], route[1]);
    }
  }
};
