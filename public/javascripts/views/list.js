var ListView = Backbone.View.extend({
	template: App.templates.list,
	className: 'list',
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
		if (this.addCardPopup) { this.addCardPopup.undelegateEvents() }
		
		this.renderList();
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
		this.renderCardViews();
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

		$(this.$el).off("click", ".card_add");  
		this.addCardPopup = new AddCardPopup({
			collection: this.cards,
			el: this.$(".card_add"),
		},{
			listId: this.cards.listId,				
		});
		this.removeHighlightAddCard();  
		this.listenTo(this.addCardPopup, "cardAddSuccess", function(requiredString) { this.cardCreateSuccess(requiredString) });
		this.listenTo(this.addCardPopup, "popupClosed", function() { this.popupClosed() });
	},
	popupClosed: function() {
		this.stopListening();		
		this.undelegateEvents();		
		this.addCardPopup = undefined;		
		this.delegateEvents();		
	},
	cardCreateSuccess:function (requiredString) {
		this.cards.create({ 
			label: requiredString,
			cardId: this.cards.getNextCardId(),
			subscribed: false,
			description: "",
			due: "",
			comments: [],
		}, {
			success: function() {
				this.renderNewestCard();
			}.bind(this)
		});
	},
	renderNewestCard: function() {
		this.stopListening();
		this.undelegateEvents();

		var newCardId = this.cards.getNextCardId() - 1;
		var newCardView = new CardView({
				model: this.cards.get(newCardId), 
		});
		this.$(".cards_area").append(newCardView.el);
		App.trigger("renderLists");
		this.popupClosed();	
		this.renderAddCardPopup();
	},

	updateHeading: function(event) {
		var newHeading = $(event.target).val();
		this.model.save({
			heading: newHeading,
		},{
			patch: true,
		});
		this.headingUpdateSuccess(newHeading);
	},
	headingUpdateSuccess: function(newHeading) {
		this.cards.heading = newHeading;
		App.trigger("renderLists");
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
});
