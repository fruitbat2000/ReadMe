'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  Book = mongoose.model('Book');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Vicki Testing',
    email: 'test@test.com',
    password: 'test',
    watchedAuthors: ['Charles Stross', 'Jeanette Winterson', 'Haruki Murakami']
  }, function() {
      console.log('finished populating users');
    }
  );
});

//Clear old things, then add things in
Book.find({}).remove(function() {
  Book.create({
    title : 'Ready Player One',
    author : 'Eric Cline',
    awesomeness: 10
  }, {
    title : 'Nexus',
    author : 'Ramez Naam',
    awesomeness: 10
  }, {
    title : 'Fingersmith',
    author : 'Sarah Waters',
    awesomeness: 10
  }, {
    title : "Saturn's Children",
    author : 'Charles Stross',
    awesomeness: 10
  }, {
    title : 'The Crimson Petal and the White',
    author : 'Michael Faber',
    awesomeness: 10
  }, function() {
      console.log('finished populating books');
    }
  );
});
