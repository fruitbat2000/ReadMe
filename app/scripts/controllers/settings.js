'use strict';

angular.module('amazonApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, $http) {
    $scope.errors = {};

    $http.get('/api/users/me').success(function(userData) {
      $scope.userData = userData;
    });

    $scope.changePassword = function(form) {
      $scope.submitted = true;


      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
        });
      }
		};
  });
