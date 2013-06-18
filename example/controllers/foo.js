/*!
 * restful-router - example/controllers/foo.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

exports.list = function (req, res, next) {
  next(new Error('mock foo.list error, uid: ' + req.params.uid));
};

exports.show = function (req, res, next) {
  res.end(req.method + ' /users/:uid/foos/:date => show, params: ' + JSON.stringify(req.params));
};
