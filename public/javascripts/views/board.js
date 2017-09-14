var Board = Backbone.View.extend({
	template: App.templates.board,
	addListTemplate: App.templates.addList,
	initialize: function() {
		this.render();
		this.bindEvents();
	},
	render: function() {

			this.$el.html(this.template({}));
			this.renderAllLists(); // now can just re order the collection to change the list
	},
	bindEvents: function() {
		this.listenTo(App, "deleteList", function(listId) { this.deleteList(listId) } );
		this.listenTo(App, "renderLists", this.render);		
		this.on("changeOrder", function(oldPosition, newPosition) { this.changeListPosition(oldPosition, newPosition) }.bind(this));
	},
	events: {
		"click #test_add_list": "createList",
	},
	changeListPosition: function(oldPos, newPos) {
		console.log(String(oldPos), newPos)
	},
	renderAllLists: function() {
		if (this.listViews) {
			this.listViews.forEach(function(list) { list.undelegateEvents(); } )
		}

		$("#lists_area").empty();		
		this.listViews = this.collection.map(function(list, index) { // this.lists is an array of list el, which can be reordered as needed
			var item = new ListView({
				model: list,
				order: index
			});
			return item;
		});

		this.listViews.forEach(function(listView) {
			$("#lists_area").append(listView.el);
		});

		$("#lists_area").append(this.addListTemplate({}));
	},
	createList: function(event) {
		event.preventDefault();
		var name = $("#test_add_list").prev().val(); // gets the textarea value of my input

		this.collection.create({
			heading: name
		}, {
			success: this.render.bind(this)
		});
	},
	deleteList: function(listId) {
		console.log(listId);
	//	debugger;
//		var list = _.find(this.collection.models, function(model) {return model.get("listId") ===  listId});
		this.collection.get(listId).destroy({ success: this.render.bind(this) });
	},
});
