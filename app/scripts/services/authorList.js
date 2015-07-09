'use strict';

angular.module('amazonApp')
  .factory('AuthorList', function Amazon($http, $rootScope, User) {
    var user = $rootScope.currentUser;
    return {
      /**
      query: author name
      */
      addToList: function(author) {
        $http.get('/api/users/me').success(function(userData) {
          userData.watchedAuthors.push(author);
          $http.put('/api/users/me', userData).success(function(updatedUser) {
            alert("You've added "+author+" to your watched authors list");
          });
        });
        
      }
    };
  });