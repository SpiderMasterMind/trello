var Lists = Backbone.Collection.extend({
	initialize: function(options) {
		this.lastId = options.lastId;
	},
	model: List,
	url: '/lists',

})
