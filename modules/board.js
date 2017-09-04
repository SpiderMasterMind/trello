var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var filePath = path.resolve(path.dirname(__dirname), "data/example.json");
var router = express.Router();

module.exports = {
	get: function() {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	},
}

