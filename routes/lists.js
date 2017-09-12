var express = require('express');
var router = express.Router();
var path = require("path");
var router = express.Router();

var data = require(path.resolve(path.dirname(__dirname), 'modules/board'));


module.exports = function(router) {
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

	router.post('/lists/:id', function(req, res, next) {
		var id = req.params.id;
		var label = req.body.label;
		//console.log(id, heading, data.getNewCardId(id));
	
		var response_body = {
			"cardId": data.getNewCardId(id),
			"label": label,
			"subscribed": false,
			"description": "",
			"due": "",
			"comments": [],
		};
		
	//	console.log(response_body);
		data.createCard(id, response_body);
		res.status(200).end();

	});


	router.patch('/lists/:id', function(req, res, next) {
		var id = req.params.id;
		var property = Object.keys(req.body)[0];
		var value = req.body[property];

		data.editList(id, property, value);
		res.status(204).end();
	});

	router.delete('/lists/:id', function(req, res, next) {
		var id = req.params.id;
		data.deleteList(id)
		res.status(204).end();
	});
}




