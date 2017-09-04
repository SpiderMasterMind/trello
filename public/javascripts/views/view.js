var View = Backbone.View.extend({
	template: App.templates.view,
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template({
			testCollection: this.collection.toJSON()
		}));
	},
});
