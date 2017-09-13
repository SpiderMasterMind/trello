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
	editList: function(listId, property, value) {
		var allData = this.get();		
		var allLists = this.getLists();
		var list = _.find(allLists, { listId: Number(listId) });
		var index = allLists.indexOf(list);

		list[property] = value;
		allLists[index] = list;

		allData[0].data = allLists;
		this.save(allData[0]);
	},
	deleteList: function(listId) {
		var allData = this.get();		
		var allLists = this.getLists();
		var list = _.find(allLists, { listId: Number(listId) });
		var index = allLists.indexOf(list);
		
		allLists.splice(index, 1);

		allData[0].data = allLists;
		this.save(allData[0])
	},
	getNewCardId: function(listId) {
		var allLists = this.getLists();
		var list = _.find(allLists, {listId: Number(listId)})
		var result = _.max(list.cards, function(card){ return card.cardId; }).cardId + 1;
		if (result === null) { return 0 } else { return result };
	},
	createCard: function(listId, cardJSON) {
		var allData = this.get();
		var allLists = this.getLists();
		var list = _.find(allLists, {listId: Number(listId)})
		list.cards.push(cardJSON);
		var index = allLists.indexOf(list);
		allLists[index] = list;
		allData[0].data = allLists
		console.log(allLists[index]);
		this.save(allData[0]);
	},
	editCard: function() {

	},
	save: function(json) {
		fs.writeFileSync(filePath, JSON.stringify([json]), 'utf8')
	},
}

