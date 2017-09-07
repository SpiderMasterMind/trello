var List = Backbone.View.extend({
	initialize: function() {
		this.attrs = this.model.toJSON();
		// this.model makes it here and it is an actual model
		this.el.id = this.attrs.listId;
		this.render();
	},
	className: 'list',
	template: App.templates.list,
	render: function() {
		this.$el.html(this.template({
			heading: this.attrs.heading,
			subscribed: this.attrs.subscribed
		}));

		return this;
	},
});
