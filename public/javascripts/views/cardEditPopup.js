var CardEditPopupView = Backbone.View.extend({
	template: App.templates.cardEditPopup,
	className: 'card_edit_popup',
	initialize: function(options) {
		this.position = options.position;
		this.attrs = this.model.toJSON();
		this.render();
		this.setupOutsideClickListener();
	},
	setupOutsideClickListener: function() {
		$('html').on("click", function() {
			if ($(event.target).hasClass("card_edit_popup")) {
				this.closeThis();
			}
		}.bind(this));
	},
	render: function() {
		this.$el.html(this.template({
			icons: this.iconsRequired(),
			description: !!this.attrs.description,
			label: this.attrs.label,
			subscribed: this.attrs.subscribed,
			due: this.attrs.due,
			comments: this.getCommentsNumber(),
			colors: this.attrs.colors,	
		}));
		$("body").append(this.el);
		this.positionModal();
		this.setModalStyleOverrides();
	},
	events: {
		"keypress": "detectEnterKeypress", 
		"click input[type=submit]": "updateCardTitle",
	},
	detectEnterKeypess: function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();			
			this.updateCardTitle(event);
		}
	},
	updateCardTitle: function(event) {
		event.preventDefault();
		var newTitle = this.$("textarea").val();
		this.model.save({
			heading: newTitle
		},{
			patch: true,
		});
		this.renderParentView();		
	},
	renderParentView: function() {
		this.trigger("cardTitleUpdated");
		this.closeThis();
	},
	setModalStyleOverrides: function() {
		if (this.iconsRequired() && this.attrs.colors) {
			return;
		} else if (this.iconsRequired && !this.attrs.colors) {
			this.$("textarea").css("margin-bottom", "20px");							
		} else if (this.attrs.colors && !this.iconsRequired()) {
			this.$("input[type='submit']").css("transform", "translate(-8px,30px)");				
		} else {
			this.$("input[type='submit']").css("margin-top", "8px");
		}
	},
	iconsRequired: function() {
		if (!!this.attrs.description || this.attrs.subscribed || this.attrs.due.length > 0 || this.getCommentsNumber()) {
			return true;
		}
	},
	getCommentsNumber: function() {
		if (this.attrs.comments && this.attrs.comments.length > 0) {
			return this.attrs.comments.length;
		} else {
			return false;
		}
	},
	closeThis: function() {
		this.undelegateEvents();
		this.$el.remove();
	},
	positionModal: function() {
			this.$(".card_edit_modal").css({
			"top": this.position.top,
			"left": this.getHorizontalOffset(),
		});
	},
	getHorizontalOffset: function() {
		if ($("body").scrollLeft() > 0) {
			return this.position.left - $("body").scrollLeft();
		} else {
			return this.position.left;
		}
	},
});
