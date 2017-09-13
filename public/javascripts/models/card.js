var Card = Backbone.Model.extend({
	initialize: function(attrs, options) {
		this.collectionURL = options.collection.url;
		this.set("id", attrs.cardId);
	},
	url: function() {
		return this.collectionURL + "/cards/" + this.id;
	},
});
