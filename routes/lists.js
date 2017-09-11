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
		var heading = req.body.heading;
		// the response should contain an entity which describes the status of the request and refers to the new resource, and a Location header (see section 14.30)
		console.log(id, heading);
		data.createCard(id, heading);
		res.status(204).end();

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




