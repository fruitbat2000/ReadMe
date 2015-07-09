'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Book = mongoose.model('Book');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Get new releases
 */
exports.newReleases = function(req, res) {
  return Book.find(function (err, books) {
    if (!err) {
      return res.json(books);
    } else {
      return res.send(err);
    }
  });
};