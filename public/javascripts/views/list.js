var List = Backbone.View.extend({
	initialize: function() {
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
		// "click list heading edit desc button": "editHeading" - untested
		"click a#delete": "deleteList",
	},
	deleteList: function(event) {
		event.preventDefault();
		this.model.destroy({ wait: true });
	},
	updateModel: function() {
		this.model.save({
			wait: true,
			success: this.render.bind(this)
		});		
	},
	toggleSubscribed: function(event) {
		event.preventDefault();
		var toggledState = !this.model.get("subscribed")
		this.model.save({
			subscribed: toggledState
			},{
				patch: true,
				wait: true,
				success: this.render.bind(this),
			}
		);
	},
	editHeading: function(event) {
		event.preventDefault()
		var heading;
		this.model.save({
			heading: heading
			},{ 
				patch: true,
				wait: true,
				success: this.render.bind(this),
			}
		);
	},
});
