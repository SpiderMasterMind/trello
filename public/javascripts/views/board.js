var Board = Backbone.View.extend({
	template: App.templates.board,
	addListTemplate: App.templates.addList,
	initialize: function() {
		this.render();
		this.bindEvents();
	},
	render: function(id) {
//		if (id) {
//			var index = _.findIndex(this.lists, function(listView) {
//				return listView.model.attributes.listId === +id;
//			})
//			this.lists[index].undelegateEvents();
//			this.lists[index] = new ListView({ model: this.collection.models[index] });
//			$(".list").eq(index).html(this.lists[index].$el.children())
		//} else {
			this.$el.html(this.template({}));
			this.renderAllLists(); // now can just re order the collection to change the list
	//	}
	},
	bindEvents: function() {
		this.collection.on("destroy", this.render.bind(this));
		this.listenTo(App, "renderList", this.render);		
		//this.on("click", this.emitClickEvent.bind(this));
	},
	events: {
		"click #test_add_list": "createList",
	},
	emitClickEvent: function(event) {
		console.log("Board click: ", event.target);
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

		$("#lists_area").append(this.addListTemplate({}))
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
