// might need another rule for pencil override if there are labels
var CardView = Backbone.View.extend({
	className: 'card',
	template: App.templates.card,
	initialize: function() {
		this.attrs = this.model.toJSON();		
		this.render();
	},
	render: function() {
		console.log("rendering card panel");
		if (this.cardEditPopup) { this.cardEditPopup.undelegateEvents(); }
		
		this.$el.html(this.template({
			icons: this.iconsRequired(),
			description: this.isDescriptionPresent(),
			label: this.attrs.label,
			subscribed: this.attrs.subscribed,
			due: this.getDueDate(),
			comments: this.getCommentsNumber(),
			colors: this.attrs.colors,
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
		event.stopPropagation();
		if (this.cardModal) { this.cardModal.undelegateEvents(); }

		this.cardModal = new CardModalView({
			model: this.model
		});
	},
	setLabelStylesOverrides: function() {
		if (!this.iconsRequired() && !this.attrs.colors) {
			this.$(".pencil_box").css("bottom", "3px");
		} else if (this.iconsRequired && !this.attrs.colors) {
			this.$(".pencil_box").css("bottom", "31px");							
		} else if (this.attrs.colors && !this.iconsRequired()) {
			this.$(".card_content").css("padding-top", "5px");
			this.$(".pencil_box").css("bottom", "15px");				
		} else if (this.attrs.colors && this.iconsRequired()) {
			this.$(".card_content").css("padding-top", "3px");
			this.$(".pencil_box").css("bottom", "41px");	
		}
	},
	iconsRequired: function() {
		if (this.isDescriptionPresent() || this.attrs.subscribed || this.getDueDate.length > 0 || this.getCommentsNumber()) {
			return true;
		}
	},
	isDescriptionPresent: function() {
		return !!this.attrs.description;
	},
	getDueDate: function() {
		return this.attrs.due;	
	},
	getCommentsNumber: function() {
		if (this.attrs.comments && this.attrs.comments.length > 0) {
			return this.attrs.comments.length;
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

		this.listenTo(this.cardEditPopup, "cardTitleUpdated", function() {this.render();});
	},
	processUpdate: function() {
		 console.log("!"); this.render()
	},
	showPencilIconClass: function() {
		this.$(".pencil_box").css("display", "block");
	},
	removePencilIconClass: function() {
		this.$(".pencil_box").css("display", "none");
	},
});

