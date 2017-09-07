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
	getLists: function() {
		// this could be extended to iterate through lists. (further work!)
		return this.get()[0].data;
	},
	lastId: function() {
		return this.get()[0].lastID;
	},
	appendList: function(list) {
		var allData = this.get();
		var lists = this.getLists();
		lists.push(list);
		allData[0].data = lists;
		this.save(allData[0]);
	},
	incrementLastId: function() {
		var json = this.get()[0];
		json.lastID = Number(json.lastID) + 1;
		this.save(json);
	},
	save: function(json) {
		fs.writeFileSync(filePath, JSON.stringify([json]), 'utf8')
	},
}

