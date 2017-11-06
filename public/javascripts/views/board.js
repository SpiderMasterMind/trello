var BoardView = Backbone.View.extend({
	template: App.templates.board,
	addListTemplate: App.templates.addList,
	initialize: function(options) {
		this.listId = options.listId;
		this.render();
		this.bindEvents();
	},
	render: function() {
			this.$el.html(this.template());
			this.renderAllLists();
	},
	bindEvents: function() {
		this.listenTo(App, "deleteList", function(listId) { this.deleteList(listId) } );
		this.listenTo(App, "renderLists", this.render);		
		this.on("changeOrder", function(oldPosition, newPosition) { this.changeListPosition(oldPosition, newPosition) }.bind(this));
	},
	events: {
		"click #test_add_list": "createList",
		"click #add_list": "showAddListPopup",
		"click .hide_add_popup": "hideAddListPopup"
	},
	changeListPosition: function(oldPos, newPos) {
		oldPos = oldPos - 1;
		newPos = newPos - 1;
		var selectedModel = this.collection.at(oldPos).toJSON();
		var modelToSwapWith = this.collection.at(newPos).toJSON();
		this.newCollection = this.collection;	
		this.newCollection.at(newPos).set(selectedModel);
		this.newCollection.at(oldPos).set(modelToSwapWith);
		this.collection = this.newCollection;
		App.trigger("saveBoard");
		App.trigger("removeListPopups");
		this.render();
	},
	renderAllLists: function() {
		if (this.listViews) {
			this.listViews.forEach(function(list) { list.undelegateEvents(); } )
		}

		$("#lists_area").empty();		
		this.listViews = this.collection.map(function(list, index) { 
			var item = new ListView({
				model: list,
				order: index
			});
			return item;
		});

		this.listViews.forEach(function(listView) {
			$("#lists_area").append(listView.el);
		});

		$("#lists_area").append(this.addListTemplate());
	},
	createList: function(event) {
		var self = this;
		$.ajax({
			method: 'GET',
			url: '/lastId',
			success: function(data) {
				this.testIt(data.id);
			}.bind(self)
		});
	},
	testIt: function(id) {
		var name = $("#test_add_list").prev().val();		
		this.collection.create({
			heading: name,
			subscribed: false,
			listId: id,
		});
		this.render();
		this.hideAddListPopup();
	},
	deleteList: function(listId) {
		this.collection.get(listId).destroy({ success: this.render.bind(this) });
	},
	showAddListPopup: function() {
		this.$(".add_list_popout").show();
		this.$(".add_list_button").hide();
		
	},
	hideAddListPopup: function(event) {
		if (event) {
			event.preventDefault(event);
			event.stopPropagation(event);
		}
		$(".add_list_button").show();		
		$(".add_list_popout").hide();
	},
});
