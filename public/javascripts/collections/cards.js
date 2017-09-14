var Cards = Backbone.Collection.extend({
	initialize: function(_models, options) {
		this.listId = options.listId;
		this.heading = options.heading;
		this.subscribed = options.subscribed;
		this.order = options.order;
		this.url = "/lists/" + options.listId;
	},
});
