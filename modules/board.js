var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var filePath = path.resolve(path.dirname(__dirname), "data/board.json");
var router = express.Router();
var _ = require("underscore");

module.exports = {
	get: function() {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	},
	getLists: function() {
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
		var board = this.get()[0];
		board.lastID = Number(board.lastID) + 1;
		this.save(board);
	},
	editList: function(id, property, value) {
		var allData = this.get();		
		var allLists = this.getLists();
		var list = _.find(allLists, { listId: Number(id) });
		var index = allLists.indexOf(list);

		list[property] = value;
		allLists[index] = list;

		allData[0].data = allLists;
		this.save(allData[0]);
	},
	deleteList: function(id) {
		var allData = this.get();		
		var allLists = this.getLists();
		var list = _.find(allLists, { listId: Number(id) });
		var index = allLists.indexOf(list);
		
		allLists.splice(index, 1);

		allData[0].data = allLists;
		this.save(allData[0])
	},
	createCard: function(id, heading) {
		var allLists = this.getLists();
		console.log(id, heading);
		console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
		console.log(allLists);
		var list = _.find(allLists, {listId: Number(id)})
		console.log(list.cards);
		// returns the format, do we need metadata, or just a max comments function
		// [ { cardId: 0,
   // label: 'The first card!',
   // subscribed: true,
   // description: 'card description',
   // due: 'date string goes here',
   // comments: [ 'comment 1', 'comment 2', 'comment 3' ] },
  // cardId: 1,
   // label: 'The second card!',
   // subscribed: true,
   // description: 'card description',
   // due: 'date string goes here',
   // comments: [ 'comment 1', 'comment 2', 'comment 3' ] } ]
	},
	save: function(json) {
		fs.writeFileSync(filePath, JSON.stringify([json]), 'utf8')
	},
}

