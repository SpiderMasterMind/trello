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
	saveAllLists: function(json) {
		var allData = this.get();
		allData[0].data = json;
		this.save(allData[0]);
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
		var list = _.find(allLists, { listId: Number(listId) });
		var result = _.max(list.cards, function(card) { return card.cardId; }).cardId;
		if (result === undefined) {
			return 0;
		} else {
		 result = result + 1;
		}
		console.log("max result num", result);		
		return result;
	},
	createCard: function(listId, cardJSON) {
		var allData = this.get();
		var allLists = this.getLists();
		var list = _.find(allLists, {listId: Number(listId)})
		list.cards.push(cardJSON);
		var index = allLists.indexOf(list);
		allLists[index] = list;
		allData[0].data = allLists
		this.save(allData[0]);
	},
	editCard: function(listId, cardId, json) {
		var allData = this.get();		
		var allLists = this.getLists();
		var list = _.find(allLists, { listId: Number(listId) });
		var index = allLists.indexOf(list);
		var card = _.find(list.cards, { cardId: Number(cardId) });
		var cardIndex = list.cards.indexOf(card);
		var property = Object.keys(json)[0];
		var value = json[property];
		card[property] = value;
		

		list.cards[cardIndex] = card;
		allLists[index] = list;
		allData[0].data = allLists;
		this.save(allData[0]);
	},
	deleteCard: function(listId, cardId) {
		var allData = this.get();
		var allLists = this.getLists();
		var list = _.find(allLists, { listId: Number(listId) });
		var index = allLists.indexOf(list);

		var card = _.find(list.cards, { cardId: Number(cardId) });
		var cardIndex = list.cards.indexOf(card);		

		list.cards.splice(cardIndex, 1);
		allLists[index] = list;
		allData[0].data = allLists;
		this.save(allData[0]);
	},
	save: function(json) {
		fs.writeFileSync(filePath, JSON.stringify([json]), 'utf8')
	},
}

