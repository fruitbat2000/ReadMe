'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var BookSchema = new Schema({
  title: String,
  author: String,
  awesomeness: Number
});

/**
 * Validations
 */
BookSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

mongoose.model('Book', BookSchema);
