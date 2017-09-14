var AddCardPopup = Backbone.View.extend({
	template: App.templates.addCardPopup,
	initialize: function() {
		this.$activate = this.$(".card_add_activate");
		this.render();
		this.setupOutsideClickListener();
	},
	render: function() {
		this.$activate.hide();
		$(this.template()).insertAfter(this.$activate)
	},
	setupOutsideClickListener: function() {
		$('html').on("click", function() {
			if (!$(event.target).closest(this.el).length) {
				this.closeThis(event);
			}        
		}.bind(this));
	},
	events: {
		"click .cancel_card_add": "closeThis",
		"keypress": "detectEnterKeyPress",
		"click .submit_card_add": "addCardToList",
	},
	detectEnterKeyPress: function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();			
			this.addCardToList(event);
		}
	},
	addCardToList: function(event) {
		event.preventDefault();
		event.stopPropagation();
		var newCardLabel = this.$('textarea').val();
		if (newCardLabel.length === 0) {
			this.$("textarea").focus(); 
		} else {
			this.trigger("cardAddSuccess", newCardLabel);		
			this.$(".card_add_text").remove();
			this.$(".card_add_ctrls").remove();
		}
	},
	closeThis: function(event) {
		event.preventDefault();
		this.$activate.show();
		this.$(".card_add_text").remove();
		this.$(".card_add_ctrls").remove();
		this.trigger("popupClosed");
	},
});
