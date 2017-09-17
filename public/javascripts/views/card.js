var CardView = Backbone.View.extend({
	className: 'card',
	template: App.templates.card,
	initialize: function() {
		this.model.set("id", this.model.attributes.cardId);
		this.render();
		this.model.on("change update", this.render.bind(this));
	},
	render: function() {
		if (this.cardEditPopup) { this.cardEditPopup.undelegateEvents(); }
		
		this.$el.html(this.template({
			icons: this.iconsRequired(),
			description: this.isDescriptionPresent(),
			label: this.model.get("label"),
			subscribed: this.model.get("subscribed"),
			due: this.model.get("due"),
			comments: this.getCommentsNumber(),
			colors: this.model.get("colors"),
		}));
		this.setLabelStylesOverrides();
		
		return this;
	},
	events: {
		"mouseover .card_content": "showPencilIconClass",
		"mouseout .card_content": "removePencilIconClass",
		"click .pencil_box": "renderCardEditPopup",
		"click .card_content": "renderCardModal",
	},
	renderCardModal: function(event) {
		if (this.cardModal) { this.cardModal.undelegateEvents(); }
		this.cardModal = new CardModalView({
			model: this.model
		});
	},
	setLabelStylesOverrides: function() {
		if (!this.iconsRequired() && !this.model.get("colors")) {
			this.$(".pencil_box").css("bottom", "3px");
		} else if (this.iconsRequired && !this.model.get("colors")) {
			this.$(".pencil_box").css("bottom", "31px");							
		} else if (this.model.get("colors") && !this.iconsRequired()) {
			this.$(".card_content").css("padding-top", "5px");
			this.$(".pencil_box").css("bottom", "15px");				
		} else if (this.model.get("colors") && this.iconsRequired()) {
			this.$(".card_content").css("padding-top", "3px");
			this.$(".pencil_box").css("bottom", "41px");	
		}
	},
	iconsRequired: function() {
		if (this.isDescriptionPresent() || this.model.get("subscribed") || this.model.get("due") || this.getCommentsNumber()) {
			return true;
		}
	},
	isDescriptionPresent: function() {
		return !!this.model.get("description");
	},
	getCommentsNumber: function() {
		if (this.model.get("comments") && this.model.get("comments").length > 0) {
			return this.model.get("comments").length;
		} else {
			return false;
		}
	},

	renderCardEditPopup: function(event) {
		event.stopPropagation();
		if (this.cardEditPopup) { this.cardEditPopup.undelegateEvents(); }

		this.cardEditPopup = new CardEditPopupView({
			model: this.model,
			position: this.$el.offset(),
		});
	},



	processUpdate: function() {
		this.render();
	},
	showPencilIconClass: function() {
		this.$(".pencil_box").css("display", "block");
	},
	removePencilIconClass: function() {
		this.$(".pencil_box").css("display", "none");
	},
});

