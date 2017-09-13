var express = require('express');
var router = express.Router();
var path = require("path");
var router = express.Router();

var data = require(path.resolve(path.dirname(__dirname), 'modules/board'));


module.exports = function(router) {
	router.patch('/lists/:listId/cards/:cardId', function(req, res, next) {
		console.log(req.params.listId, req.params.cardId, req.body);




		res.status(204).end();
	})

}
