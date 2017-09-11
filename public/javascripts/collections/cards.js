var Cards = Backbone.Collection.extend({
	initialize: function(_models, options) {
		this.url = "/lists/" + options.listId;
	},
	model: Card,
});
