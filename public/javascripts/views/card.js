var CardView = Backbone.View.extend({
	template: App.templates.card,
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template({ cards: this.model }));


		return this;

	},
});

