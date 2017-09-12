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
		this.collection.on("destroy", this.render.bind(this));
		this.listenTo(App, "renderLists", this.render);		
	},
	events: {
		"click #test_add_list": "createList",
	},
	renderAllLists: function() {
		if (this.lists) {
			this.lists.forEach(function(list) { list.undelegateEvents(); } )
		}

		$("#lists_area").empty();		
		this.lists = this.collection.map(function(list) { // this.lists is an array of list el, which can be reordered as needed
			var item = new ListView({
				model: list
			});
			return item;
		});

		this.lists.forEach(function(listView) {
			$("#lists_area").append(listView.el);
		});

		$("#lists_area").append(this.addListTemplate({}));


		this.lists.forEach(function(listView) { listView.trigger("renderCardViews"); }); // tells list to render its cards so DOM is ready });

		// individual card render after list render
		//this.lists.forEach(function(listView) { listView.renderCards() } )
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
});
