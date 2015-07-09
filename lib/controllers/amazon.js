'use strict'

var aws = require("aws-lib"),
	mongoose = require('mongoose'),
	Book = mongoose.model('Book');

// Access keys need to be moved into a separate, gitignored file and then required or something.

var accessKey = 'AKIAJZ6W7MNDJE3PA2SQ',
	secretKey = '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',
	associateTag = 'srsly-21';

var prodAdv = aws.createProdAdvClient(accessKey, secretKey, associateTag, {host: 'ecs.amazonaws.co.uk'});


/*http://ecs.amazonaws.co.uk/onca/xml?Service=AWSECommerceService
&Version=2011-08-01
&AssociateTag=srsly-21
&Operation=ItemSearch
&SearchIndex=Books
&Power=pubdate:during%2006-2014
&Condition=New
&BrowseNode=62
&ResponseGroup=ItemAttributes
&Sort=daterank*/

exports.browsenode = function(req, res) {
	var options = req.body;
	prodAdv.call("BrowseNodeLookup", options, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
};

exports.itemlookup = function(req, res) {
	var itemString;
	for (var i = req.body.length - 1; i >= 0; i--) {
		if(itemString) {
			itemString += req.body[i]+',';
		} else {
			itemString = req.body[i]+',';
		}
	}
	var options = {
		ItemId: itemString,
		ResponseGroup: 'Images, ItemAttributes'
	};
	prodAdv.call("ItemLookup", options, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
};

exports.itemsearch = function(req, res) {
	var query = req.body.Author,
		options = {
			Author: query, 
			SearchIndex: 'Books',
			Sort: 'salesrank',
			MerchantId: 'Amazon',
			ResponseGroup: 'Images, ItemAttributes'
		};
	prodAdv.call("ItemSearch", options, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
};