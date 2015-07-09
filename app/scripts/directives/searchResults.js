'use strict';

angular.module('amazonApp')

  /**
   * search-results element
   */
  .directive('searchResults', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/search-results.html'
    };
  });