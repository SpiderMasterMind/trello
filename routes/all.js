var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var router = express.Router();

var data = require(path.resolve(path.dirname(__dirname), 'modules/board'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { items: data.get() });
});

module.exports = router;


