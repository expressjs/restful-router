/*!
 * restful-router - test/restful-router.test.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var pedding = require('pedding');
var should = require('should');
var request = require('supertest');
var restful = require('../');
var app = require('../example/app');

describe('restful-router.test.js', function () {
  it('should get /users => user.list', function (done) {
    done = pedding(2, done);
    request(app)
    .get('/users')
    .expect('GET /users => list, query: {}')
    .expect(200, done);

    request(app)
    .get('/users/')
    .expect('GET /users => list, query: {}')
    .expect(200, done);
  });

  it('should get /users/new => user.new', function (done) {
    request(app)
    .get('/users/new')
    .expect('GET /users/new => new, query: {}')
    .expect(200, done);
  });

  it('should get /users/:id => user.show', function (done) {
    request(app)
    .get('/users/123')
    .expect('GET /users/:id => show, query: {}, params: {"id":"123"}')
    .expect(200, done);
  });

  it('should get /users/:id/edit => user.edit', function (done) {
    request(app)
    .get('/users/123/edit')
    .expect('GET /users/:id/edit => edit, query: {}, params: {"id":"123"}')
    .expect(200, done);
  });

  it('should post /users => user.create', function (done) {
    done = pedding(2, done);
    request(app)
    .post('/users')
    .send({ name: 'foo' })
    .expect('POST /users => create, query: {}, params: {}, body: {"name":"foo"}')
    .expect(200, done);

    request(app)
    .post('/users/')
    .send({ name: 'foo' })
    .expect('POST /users => create, query: {}, params: {}, body: {"name":"foo"}')
    .expect(200, done);
  });

  it('should put /users/:id => user.update', function (done) {
    request(app)
    .patch('/users/123')
    .send({ name: 'fooupdate' })
    .expect('PATCH /users/:id => update, query: {}, params: {"id":"123"}, body: {"name":"fooupdate"}')
    .expect(200, done);
  });

  it('should delete /users/:id => user.destroy', function (done) {
    request(app)
    .del('/users/123')
    .expect('DELETE /users/:id => destroy, query: {}, params: {"id":"123"}, body: {}')
    .expect(200, done);
  });

  it('should post /users/:id => 404', function (done) {
    request(app)
    .post('/users/123')
    .send({ name: 'fooupdate' })
    .expect(404, done);
  });

  it('should put /users => 404', function (done) {
    request(app)
    .put('/users')
    .send({ name: 'fooupdate' })
    .expect(404, done);
  });

  it('should delete /users => 404', function (done) {
    request(app)
    .del('/users')
    .expect(404, done);
  });

  it('should get /foos => 404', function (done) {
    request(app)
    .get('/foos')
    .expect(404, done);
  });

  it('should get /users/mk2/foos => 500', function (done) {
    request(app)
    .get('/users/mk2/foos')
    .expect(/Error: mock foo.list error, uid: mk2/)
    .expect(500, done);
  });

  it('should post /users/123/foos => 404', function (done) {
    request(app)
    .post('/users/123/foos')
    .expect(404, done);
  });

  it('should get /users/123/foos/2013-06-18 => 200', function (done) {
    request(app)
    .get('/users/123/foos/2013-06-18')
    .expect('GET /users/:uid/foos/:date => show, params: {"uid":"123","date":"2013-06-18"}')
    .expect(200, done);
  });

});