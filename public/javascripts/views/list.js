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
			subscribed: this.model.get("subscribed"),
			cards: this.model.get("cards"),
		}));
		return this;
	},
	events: {
		"blur .heading_text": "updateHeading",
		"keypress .heading_text": "enterKeyPress",
		"mouseover .card_add": "highlightAddCard",
		"mouseout .card_add": "removeHighlightAddCard",
		"mouseover .card_add_optns": "highlightAddOptns",
		"mouseout .card_add_optns": "removeHighlightAddOptns",
		"click .card_add": "addCardPopup",
		"click .cancel_card_add": "removeCardPopup",
		"click": "removePopup",

		"click ul:contains('subscribed')": "toggleSubscribed",
		// "click list heading edit desc button": "editHeading" - untested
		"click a#delete": "deleteList",
	},
	removePopup: function(event) {
		console.log(event.target);
		debugger;
		// if teh popup is active, and the closest class is card_add_popup call removeCardPopup
		if (!$(event.target).closest('.card_add_popup').length) {
			console.log("!");
			this.removeCardPopup();
		}
	},
	removeHighlightAddCard: function(event) {
		this.$(".card_add a").css("text-decoration", "none");
		this.$(".card_add a span").css("color", "rgb(140,140,140)");
	},
	highlightAddCard: function(event) {
		this.$(".card_add a span").css("color", "rgb(77,77,77)");
		this.$(".card_add a").css({
			"text-decoration": "underline",
			"text-decoration-color": "rgb(77,77,77)"
		});
	},
	highlightAddOptns: function() {
		this.$(".card_add_optns span").css("color", "rgb(77,77,77)");
	},
	removeHighlightAddOptns: function() {
		this.$(".card_add_optns span").css("color", "rgb(153,153,153)");
	},
	addCardPopup: function() {
		this.$(".card_add").hide();
		this.$(".card_add_popup").show();
	},
	removeCardPopup: function() {
		this.$(".card_add").show();
		this.$(".card_add_popup").hide();
	},
	enterKeyPress: function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();			
			this.$(".heading_text").blur();
		}
	},
	updateHeading: function(event) {
		// only update if its different?
		this.model.save({
			heading: $(event.target).val()
		},{
			patch: true,
			wait: true,
			success: this.render.bind(this)
		});
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
			});
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
