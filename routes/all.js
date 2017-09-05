var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var router = express.Router();

var data = require(path.resolve(path.dirname(__dirname), 'modules/board'));

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.json(data.get());	
	res.render('index', { allItems: data.get() });
	//res.statusCode = 200;
});

router.post('/lists', function(req, res, next) {
	// this needs to add to the stored JSON data on backend, and return something:
	// a new id, or a json response with a new ID.
	res.json("Test")
});

module.exports = router;


