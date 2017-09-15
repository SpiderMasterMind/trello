var express = require('express');
var router = express.Router();
var path = require("path");
var router = express.Router();

var data = require(path.resolve(path.dirname(__dirname), 'modules/board'));


module.exports = function(router) {
	router.put('/lists', function(req, res, next) {
		console.log(req.body)
		data.saveAllLists(req.body);
		res.status(204).end();

	});


	router.post('/lists', function(req, res, next) {

		var heading = req.body;
// some validation that the correct thing is recevied via the POST?
		var response_body = {
			"heading": req.body.heading,
			"subscribed": false,
			"listId": data.lastId(),
			"cards": [],
		}

		data.appendList(response_body);
		data.incrementLastId();
		res.json(response_body);
	});

	router.post('/lists/:listId', function(req, res, next) {
		console.log("something from lists route");
		var listId = req.params.listId;
		var label = req.body.label;
	
		var response_body = {
			"cardId": data.getNewCardId(listId),
			"label": label,
			"subscribed": false,
			"description": "",
			"due": "",
			"comments": [],
		};
		
		data.createCard(listId, response_body);
		res.status(200).end();
	});


	router.patch('/lists/:listId', function(req, res, next) {
		var listId = req.params.listId;
		var property = Object.keys(req.body)[0];
		var value = req.body[property];

		data.editList(listId, property, value);
		res.status(204).end();
	});

	router.delete('/lists/:listId', function(req, res, next) {
		var listId = req.params.listId;
		data.deleteList(listId)
		res.status(204).end();
	});
}




