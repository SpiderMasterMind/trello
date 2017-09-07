var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var router = express.Router();

var data = require(path.resolve(path.dirname(__dirname), 'modules/board'));


module.exports = function(router) {

	router.get('/', function(req, res, next) {
		console.log("index route");
		res.render('index', { allItems: data.getLists() });
	});
}


