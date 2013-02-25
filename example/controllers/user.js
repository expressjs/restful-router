/*!
 * restful-router - example/controllers/user.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

exports.list = function (req, res, next) {
  res.end(req.method + ' /users => list, query: ' + JSON.stringify(req.query));
};

exports.new = function (req, res, next) {
  res.end(req.method + ' /users/new => new, query: ' + JSON.stringify(req.query));
};

exports.show = function (req, res, next) {
  res.end(req.method + ' /users/:id => show, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
};

exports.edit = function (req, res, next) {
  res.end(req.method + ' /users/:id/edit => edit, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
};

exports.create = function (req, res, next) {
  res.end(req.method + ' /users => create, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
};

exports.update = function (req, res, next) {
  res.end(req.method + ' /users/:id => update, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
};

exports.destroy = function (req, res, next) {
  res.end(req.method + ' /users/:id => destroy, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
};
