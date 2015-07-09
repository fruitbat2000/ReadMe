'use strict';

angular.module('amazonApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
