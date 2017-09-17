var ListActionsView = Backbone.View.extend({
	className: "list_actions_popup",
	template: App.templates.listActions,
	initialize: function(options) {
		this.order = this.collection.order + 1;
		this.maxOrder = App.lists.length;
		this.position = options.position;
		this.render();
		this.setupOutsideClickListener();
	},
	events: {
		"mouseover li": "highlightItemStyle",
		"click .close": "closeThis", 
		"click #add": "addCardPopup",
		"click #move": "showMoveListBox",
		"click #archive_list": "deleteList",
		"mouseout li": "removeHighlightItemStyle",
		"click input[type=submit]": "moveList",
	},
	render: function() {
		this.$el.html(this.template({
			order: this.order,
			maxOrder: this.maxOrder,
		}));
		$("body").append(this.el);
		this.positionPopup();
		this.$(".moving").hide();		
	},
	deleteList: function() {
		App.trigger("deleteList", this.collection.listId);
		this.closeThis();
	},
	showMoveListBox: function() {
		this.$(".content").hide();
		this.$(".moving").show();
	},
	moveList: function(event) {
		event.preventDefault();
		var reqdPosition = this.$("select option:selected").text()
		if (this.order === reqdPosition) { return; }

		App.board.trigger("changeOrder", this.order, reqdPosition);
	},
	addCardPopup: function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.trigger("addCardPopup");
		this.closeThis(event);
	},
	setupOutsideClickListener: function() {
		$('html').on("click", function() {
			if (!$(event.target).closest(".list_actions_popup").length) {
				this.closeThis(event);
			}        
		}.bind(this));
	},
	positionPopup: function() {
		this.$el.css({
			"top": this.position.top + 38,
			"left": this.getHorizontalOffset(),
		});
	},
	closeThis: function(event) {
		if (event) {event.preventDefault();}
		this.undelegateEvents();
		this.remove();
	},
	getHorizontalOffset: function() {
		if ($("body").scrollLeft() > 0) {
			return this.position.left - $("body").scrollLeft() + 240;
		} else {
			return this.position.left + 240;
		}
	},

});
