var AddCardPopup = Backbone.View.extend({
	template: App.templates.addCardPopup,
	initialize: function(_collection, options) {
		this.$activate = this.$(".card_add_activate");
		this.options = options;
		this.render();
		this.bindEvents();
	},
	render: function() {
		this.$activate.hide();
		$(this.template()).insertAfter(this.$activate)
	},
	bindEvents: function() {
		$('html').on("click", function() {
			if (!$(event.target).closest(this.el).length) {
					this.closeThis();
			}        
		}.bind(this));
	},
	events: {
		"click .cancel_card_add": "closeThis",
		"click .submit_card_add": "addCardToList",
	},
	addCardToList: function(event) {
		event.preventDefault();
		var newCardLabel = this.$('textarea').val();
		if (newCardLabel.length === 0) {
			this.$("textarea").focus(); 
			return;
		} else {
			this.collection.create({ label: newCardLabel } )
			
			this.submitSuccess();
		}
	},
	submitSuccess: function() {
		this.$(".card_add_text").remove();
		this.$(".card_add_ctrls").remove();
		this.trigger("cardAddSuccess");
	},
	closeThis: function(event) {
		this.$activate.show();
		this.$(".card_add_text").remove();
		this.$(".card_add_ctrls").remove();
		this.trigger("popupClosed");
	},
});
