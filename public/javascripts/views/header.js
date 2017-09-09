var Header = Backbone.View.extend({
	template: App.templates.header,
	initialize: function() {

		this.render();
	},
	render: function() {
		this.$el.html(this.template({}));
	},
});

