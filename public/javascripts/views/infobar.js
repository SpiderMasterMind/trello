var Infobar = Backbone.View.extend({
	template: App.templates.infobar,
	initialize: function() {
		this.render();

	},
	render: function() {
		this.$el.html(this.template({}));
	},
});

