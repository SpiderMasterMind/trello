var ListView = Backbone.View.extend({
	template: App.templates.list,
	className: 'list',
	initialize: function() {
		this.el.id = this.model.get("listId");				// set the backbone model id, so save doesnt think its a new model
		this.model.set("id", this.model.get("listId"));
		this.cards = new Cards(									// creates new collection of cards with card models, so a list view contains a cards collection
			this.model.toJSON().cards.map(function(card) { return new Card(card);	}), { listId: this.el.id } 
		);
		this.render();
	},
	render: function() {
		if (this.addCardPopup) { this.addCardPopup.undelegateEvents() }
		
		this.renderList()
		return this;
	},
	events: {
		"blur .heading_text": "updateHeading",
		"keypress .heading_text": "detectEnterKeyPress",
		"mouseover .card_add": "highlightAddCard",
		"mouseout .card_add": "removeHighlightAddCard",
		"mouseover .card_add_optns": "highlightAddOptns",
		"mouseout .card_add_optns": "removeHighlightAddOptns",
		"click .card_add": "renderAddCardPopup",

		"click ul:contains('subscribed')": "toggleSubscribed",
		"click a#delete": "deleteList",
	},
	renderList: function() {
		this.$el.html(this.template({
			heading: this.model.get("heading"),
			subscribed: this.model.get("subscribed"),
			cards: this.cards.toJSON(),
		}));
	},
	renderAddCardPopup: function(event) {
		event.stopPropagation();
		event.preventDefault();

		$(this.$el).off("click", ".card_add"); // temporarily unbinds this method as it prevents the textarea from working 
		this.addCardPopup = new AddCardPopup({
			collection: this.cards,
			el: this.$(".card_add"),
		},{
			listId: this.el.id,						// passing the listId, means we know which list to render on popup cancel or submission
			thisView: this,			
		});
		this.removeHighlightAddCard();  // prevents highlighting on initial popup mouseover

		this.listenTo(this.addCardPopup, "cardAddSuccess", function() { this.submitSuccessful() });
		this.listenTo(this.addCardPopup, "popupClosed", function() { this.popupClosed() });
	},
	popupClosed: function() {
		this.stopListening();		
		this.undelegateEvents();		
		this.addCardPopup = undefined;		
		this.delegateEvents();		
	},
	submitSuccessful:function() { 
		this.stopListening();
		this.undelegateEvents();
		this.render();	
		this.delegateEvents();
		this.renderAddCardPopup(event);
	},











	removeHighlightAddCard: function(event) {
		this.$(".card_add").css("background-color", "rgb(226, 228, 230)");
		this.$(".card_add a span").css({
			"text-decoration": "none",
			"color": "rgb(140,140,140)"
		});
	},
	highlightAddCard: function(event) {
		if (!this.addCardPopup) {
			this.$(".card_add").css("background-color", "rgb(196, 201, 204)");
			this.$(".card_add a span").css({
				"color": "rgb(77,77,77)",
				"text-decoration": "underline",
				"text-decoration-color": "rgb(77,77,77)",
			});
		}
	},
	highlightAddOptns: function() {
		this.$(".card_add_optns span").css("color", "rgb(77,77,77)");
	},
	removeHighlightAddOptns: function() {
		this.$(".card_add_optns span").css("color", "rgb(153,153,153)");
	},
	detectEnterKeyPress: function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();			
			this.$(".heading_text").blur();
		}
	},
	updateHeading: function(event) {
		// TODO only update if its different?
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
});
