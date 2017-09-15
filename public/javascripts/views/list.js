// model is passed in here, and converted to a cards collection of sub models
// therefore we cant listen for changes on the main model as we need to recompose the cards each time
// we ought to be able to have a collection on the model, that is re rendered each time the model changes
// // possible refctor
var ListView = Backbone.View.extend({
	template: App.templates.list,
	className: 'list draggable',
	initialize: function(options) {
		this.order = options.order;
		this.el.id = this.model.get("listId");
		this.model.set("id", this.model.get("listId"));
		this.composeCardsCollection();				
		this.render();
		this.on("renderList", function() { this.composeCardsCollection(); this.render(); }.bind(this)); 
	},
	composeCardsCollection: function() {
		this.cards = new Cards(null, {
			listId: this.model.get("id"),
			heading: this.model.get("heading"),
			subscribed: this.model.get("subscribed"),
			order: this.order,
		});

		_.each(this.model.attributes.cards, function(card) { this.cards.add( new Card(card, {collection: this.cards})) }, this);
	},
	render: function() {
		console.log("$");
		if (this.addCardPopup) { this.addCardPopup.undelegateEvents() }
		
		this.renderList();
		this.renderCardViews();
		return this;
	},
	events: {
		"blur .heading_text": "updateHeading",
		"keypress .heading_text": "headingEditOnEnter",
		"mouseover .card_add": "highlightAddCard",
		"mouseout .card_add": "removeHighlightAddCard",
		"mouseover .card_add_optns": "highlightAddOptns",
		"mouseout .card_add_optns": "removeHighlightAddOptns",
		"click .card_add": "renderAddCardPopup",
		"click .list_extras": "renderListActionsPopup",

		"click ul:contains('subscribed')": "toggleSubscribed",
		"click a#delete": "deleteList",
	},
	renderListActionsPopup: function(event) {
		event.preventDefault();
		event.stopPropagation();
		App.trigger("removeListPopups");
		this.listActions = new ListActionsView({
			position: this.$el.offset(),
			collection: this.cards,
		});

		this.listenTo(this.listActions, "addCardPopup", function() { this.addCardPopupEvent() }); 
	},
	addCardPopupEvent: function() {
		this.renderAddCardPopup();
		this.stopListening(this.listActions);
	},
	renderList: function() {
		this.$el.html(this.template({
			heading: this.cards.heading,
			subscribed: this.cards.subscribed,
		}));
	},
	renderCardViews: function() {
		this.cardViews = this.cards.map(function(card) { 
			var cardView = new CardView({
				model: card, 
			});
			return cardView;
		});
		this.cardViews.forEach(function(cardView) { this.$(".cards_area").append(cardView.el) }.bind(this));
	},
	renderAddCardPopup: function(event) {
		if (event) {
			event.stopPropagation();
			event.preventDefault();
		}

		$(this.$el).off("click", ".card_add"); // temporarily unbinds this method as it prevents the textarea from working 
		this.addCardPopup = new AddCardPopup({
			collection: this.cards,
			el: this.$(".card_add"),
		},{
			listId: this.cards.listId,						// passing the listId, means we know which list to render on popup cancel or submission
		});
		this.removeHighlightAddCard();  // prevents highlighting on initial popup mouseover

		// this is needed at this level so we can call create, evidently need a mixture of custom events and change update etc events
		this.listenTo(this.addCardPopup, "cardAddSuccess", function(requiredString) { this.cardCreateSuccess(requiredString) });
		this.listenTo(this.addCardPopup, "popupClosed", function() { this.popupClosed() });
	},
	popupClosed: function() {
		this.stopListening();		
		this.undelegateEvents();		
		this.addCardPopup = undefined;		
		this.delegateEvents();		
	},
	cardCreateSuccess:function(requiredString) {
		this.cards.create({ label: requiredString })
		this.stopListening();
		this.undelegateEvents();
		this.render();	
		this.delegateEvents();
		this.renderAddCardPopup(event);
	},

	updateHeading: function(event) {
		// TODO only update if its different?

		var newHeading = $(event.target).val();

		console.log("!");
		this.model.save({
			heading: newHeading,
		},{
			patch: true,
			success: this.headingUpdateSuccess.bind(this, newHeading)
		});
	},
	headingUpdateSuccess: function(newHeading) {
		this.cards.heading = newHeading;
	//	this.model.trigger("change");
		this.render();
	},
	detectEnterKeyPress: function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();			
			return true;
		}
	},
	headingEditOnEnter: function(event) {
		if (this.detectEnterKeyPress(event)) {
			this.$(".heading_text").blur();
		}
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
//	toggleSubscribed: function(event) {
//		event.preventDefault();
//		var toggledState = !this.model.get("subscribed")
//		this.model.save({
//			subscribed: toggledState
//		},{
//				patch: true,
//				wait: true,
//				success: this.render.bind(this),
//		});
//	},
});
