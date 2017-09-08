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

	router.patch('/lists/:id', function(req, res, next) {
		var id = req.params.id;
		var property = Object.keys(req.body)[0];
		var value = req.body[property];
		console.log(id, property, value);

		//data.editList(id, property, value);
		res.status(204).end();


	});
}




