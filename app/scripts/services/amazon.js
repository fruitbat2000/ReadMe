'use strict';

angular.module('amazonApp')
  .factory('Amazon', function Amazon($location, $rootScope, Session, User, Auth, $http) {

    return {
      /**
      query: array of item references (ASIN numbers)
      */
      itemLookup: function(query, cb) {
        $http.post('/api/amazon/itemlookup', query).success(function(res){
            var response = res.Items.Item;
            cb(response);
          });
      },

      /**
      query: searchTerm from form
      */
      itemSearch: function(query, cb) {
        $http.post('/api/amazon/itemsearch', query).success(function(res){
            cb(res);
          });
      },

      /**
      query: BrowseNodeId, ResponseGroup
      */
      newReleases: function(query, cb) {
        var options = {BrowseNodeId: query.BrowseNodeId, ResponseGroup: query.ResponseGroup};
        $http.post('/api/amazon/browsenode', options).success(function(res) {
          var data = res.BrowseNodes.BrowseNode.TopItemSet.TopItem,
              items = [];
          for (var i = data.length - 1; i >= 0; i--) {
            items.push(data[i].ASIN);
          }
          $http.post('/api/amazon/itemlookup', items).success(function(res){
            var response = res.Items.Item;
            cb(response);
          });
        });
      }
    };
  });