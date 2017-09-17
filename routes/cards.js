var express = require('express');
var router = express.Router();
var path = require("path");
var router = express.Router();

var data = require(path.resolve(path.dirname(__dirname), 'modules/board'));

module.exports = function(router) {
	router.patch('/lists/:listId/cards/:cardId', function(req, res, next) {
		data.editCard(req.params.listId, req.params.cardId, req.body);
		res.status(204).end();
	});

	router.put('/lists/:listId/cards/:cardId', function(req, res, next) {
		var listId = req.params.listId;
		var label = req.body.label;
		var response_body = {
			"cardId": Number(req.params.cardId),
			"label": label,
			"subscribed": false,
			"description": "",
			"due": "",
			"comments": [],
		};
		data.createCard(listId, response_body);		
		res.status(204).end();
	});


	router.delete('/lists/:listId/cards/:cardId', function(req, res, next) {
		data.deleteCard(req.params.listId, req.params.cardId);
		res.status(200).end();
	});

}
