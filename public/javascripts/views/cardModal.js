var CardModalView = Backbone.View.extend({
	className: 'card_main_modal_layer',
	template: App.templates.cardModal,
	initialize: function() {
		this.render();
		this.setupOutsideClickListener();
	},
	events: {
		"blur .modal_card_title": "updateCardTitle",
		"keypress .modal_card_title": "headingEditOnEnter",
		"click .edit_description": "showDescriptionInput",
		"click .cancel_card_add": "hideDescriptionInput",
		"click .input_description input[type=submit]": "editDescription",
		"click input#comment_save": "createComment",
		"click .delete_comment": "deleteComment",
		"click .edit_comment": "showEditComment",
		"click .cancel_comment_add": "stopShowEditComment",
		"click #submit_edit_comment": "updateComment",
		"click #sidebar_subscribe": "toggleSubscribe",
		"click #sidebar_archive": "deleteCard",
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
		this.hideDescriptionInput();
		this.$(".edit_comment_box").hide();
		if (this.model.get("subscribed")) {
			this.$("#sidebar_subscribe").css("background-color", "green");
			this.$("#sidebar_subscribe span").css("color", "white");
		}
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
	deleteCard: function() {
		this.model.destroy();
		App.trigger("renderLists");	
		this.closeThis();
	},
	toggleSubscribe: function() {
		this.model.save({
			subscribed: !this.model.get("subscribed")
		},{
			patch: true,
			success: this.itemsUpdated.bind(this)
		});
	},
	commentsUpdated: function() {
		this.model.trigger("change");
		this.itemsUpdated();
	},
	updateComment: function(event) {
		event.preventDefault();
		var newComment = $(event.target).prev().val();
		var indexToEdit = ($(event.target).parent().index() - 1) / 4;
		var comments = this.model.get("comments");
		comments[indexToEdit] = newComment;	
		
		this.model.save({
			comments: comments,
		},{
			patch: true,
			success: this.commentsUpdated.bind(this),
		});
	},
	deleteComment: function(event) {
		event.preventDefault();
		var indexToDelete = $(event.target).closest(".comment_sub_text").prev().index() / 3;
		var comments = this.model.get("comments");
		comments.splice(indexToDelete, 1);
		this.model.save({
			comments: comments,
		},{
			patch: true,
			success: this.commentsUpdated.bind(this),
		});
	},
	createComment: function(event) {
		event.preventDefault();
		var newComment = this.$(".add_comment_area textarea").val();
		var comments = this.model.get("comments");
		comments.push(newComment);
		this.model.save({
			comments: comments,
		},{
			patch: true,
			success: this.commentsUpdated.bind(this),
		});
	},
	showEditComment: function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(event.target).parent().prev().show()
		$(event.target).parent().prev().prev().hide()		
		$(event.target).parent().hide()
	},
	stopShowEditComment: function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(event.target).closest(".edit_comment_box").hide();
		$(event.target).parent().prev().show();
		this.$(".comment_sub_text").show();
	},
	editDescription: function(event) {
		event.preventDefault();
		var newDescription = this.$(".input_description textarea").val();
		this.model.save({
			description: newDescription,
		},{
			patch: true,
			success: this.descUpdated.bind(this)
		});
	},
	descUpdated: function() {
		this.model.trigger("change");
		this.itemsUpdated();
		this.hideDescriptionInput();
	},
	showDescriptionInput: function() {
		$(".input_description").show();		
		$(".content_description").hide();		
		$(".add_description").hide();
	},
	hideDescriptionInput: function() {
		$(".add_description").show();		
		$(".input_description").hide();
		$(".content_description").show();
	},
	itemsUpdated: function() {
		console.log("!")
		this.undelegateEvents();
		this.render();
		this.delegateEvents();
	},
	updateCardTitle: function(event) {
		var newTitle = $(event.target).val();
		this.model.save({
			label: newTitle,
		},{
			patch: true,
			success: this.itemsUpdated.bind(this)
		});
	},
	detectEnterKeyPress: function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();			
			return true;
		}
	},
	headingEditOnEnter: function(event) {
		if (this.detectEnterKeyPress(event)) {
			this.$(".modal_card_title").blur();
		}
	},


});
