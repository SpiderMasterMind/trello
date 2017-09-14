var CardModalView = Backbone.View.extend({
	className: 'card_main_modal_layer',
	template: App.templates.cardModal,
	initialize: function() {
		this.render();
		this.setupOutsideClickListener();
	},
	render: function() {
		this.$el.html(this.template({
			label: this.model.get("label"),
			listName: this.model.collection.heading,	
			description: this.model.get("description"),
			comments: this.model.get("comments"),
			colors: this.model.get("colors"),
			subscribed: this.model.get("subscribed"),

		}));
		$("body").append(this.el);
	},
	setupOutsideClickListener: function() {
		$('html').on("click", function() {
			if ($(event.target).hasClass("card_main_modal_layer")) {
				this.closeThis();
			}
		}.bind(this));
	},
	closeThis: function() {
		this.undelegateEvents();
		this.$el.remove();
	},

});
