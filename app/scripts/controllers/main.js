'use strict';

angular.module('amazonApp')
	.controller('MainCtrl', function ($scope, $http, $rootScope, Auth, Amazon) {
		$scope.loggedIn = Auth.isLoggedIn();

		$scope.user = $rootScope.currentUser;

		Amazon.newReleases({BrowseNodeId: 62, ResponseGroup: 'NewReleases'}, function(newReleases){
			$scope.newReleases = newReleases;
		});
	})
	.controller('SearchCtrl', function ($scope, Amazon, $element, AuthorList){
		$scope.search = function(e) {
			if(e.which === 13) {
				if(e.target.value.length) {
					var searchTerm = {Author: e.target.value};
					Amazon.itemSearch(searchTerm, function(response){
						console.log(response);
						if(response.Items.Item) {
							$scope.author = e.target.value;
							$scope.searchResults = response.Items.Item;
							$scope.haveResults = true;
						}
					});
				} else {
					$scope.haveResults = false;
				}
			}
		};
		$scope.addAuthor = function(e) {
			e.preventDefault();
			var author = $(e.target).data('author');
			AuthorList.addToList(author);
		};
	});
