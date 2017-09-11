var AddCardPopup = Backbone.View.extend({
	template: App.templates.addCardPopup,
	initialize: function(_collection, options) {
		// options not needed coz i cant render specific things
		this.options = options;
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
	},
	events: {
		"click .cancel_card_add": "removeThisView",
		"click .submit_card_add": "addCardToList",
	},
	addCardToList: function(event) {
		event.preventDefault();
		var newCardHeading = this.$('textarea').val();
		if (newCardHeading.length === 0) {
			this.$("textarea").focus(); 
			return;
		} else {
			this.collection.create({
				heading: newCardHeading
			},{ 
				wait: true,
				success: function() { App.trigger("renderLists"); }
			});
		}
	},
	removeThisView: function(event) {
		event.preventDefault();
		this.remove();
		App.trigger("renderLists", this.options.listId);
	},
});
