/*!
 * restful-router - lib/restful-router.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /users           => user.list()
 *  GET    /users/new       => user.new()
 *  GET    /users/:id       => user.show()
 *  GET    /users/:id/edit  => user.edit()
 *  POST   /users           => user.create()
 *  PUT    /users/:id       => user.update()
 *  DELETE /users/:id       => user.destroy()
 *
 * @param {Object} app, must impl `app.get(), app.post(), app.put(), app.delete()`.
 * @param {String} name, resource's name. like `users, posts, tweets`.
 * @param {Object} mod, module contains `CRUD List` methods.
 */
module.exports = function restfulRouter(app, name, mod) {
  var url = '/' + name;
  var routes = [
    [ 'get', url, 'list' ],
    [ 'get', url + '/new', 'new' ],
    [ 'get', url + '/:id', 'show' ],
    [ 'get', url + '/:id/edit', 'edit' ],

    [ 'post', url, 'create' ],
    [ 'put', url + '/:id', 'update' ],
    [ 'delete', url + '/:id', 'destroy' ],
  ];

  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    var handle = mod[route[2]];
    if (typeof handle === 'function') {
      app[route[0]](route[1], handle);
    }
  }
};