var Cards = Backbone.Collection.extend({
	model: Card,
	initialize: function(_models, options) {
		this.listId = options.listId;
		this.heading = options.heading;
		this.subscribed = options.subscribed;
		this.order = options.order;
		this.url = "/lists/" + options.listId;
	},
	getNextCardId: function() {
		if (this.models.length === 0) {
			return 0;
		} else {
		return _.max(this.models, function(model) { return model.attributes.cardId; }).attributes.cardId + 1
		}
	},
});
