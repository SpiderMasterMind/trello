var List = Backbone.View.extend({
	initialize: function() {
		// this.model makes it here and it is an actual model
		this.el.id = this.model.get("listId");
		// set the backbone model id, so save doesnt think its a new model
		this.model.set("id", this.model.get("listId"));
		this.render();
	},
	className: 'list',
	template: App.templates.list,
	render: function() {
		this.$el.html(this.template({
			heading: this.model.get("heading"),
			subscribed: this.model.get("subscribed")
		}));

		return this;
	},
	events: {
		"click ul:contains('subscribed')": "toggleSubscribed",
	},
	updateModel: function() {
		this.model.save({ success: this.render.bind(this) });		
	},
	toggleSubscribed: function(event) {
		event.preventDefault();
		//var id = $(event.target).parent().parent().attr("id");
		var toggledState = !this.model.get("subscribed")
		this.model.save(
			{ subscribed: toggledState },
			{ patch: true,
				success: this.render.bind(this),
			}
		);
	},
});
