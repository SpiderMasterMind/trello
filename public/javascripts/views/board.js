var Board = Backbone.View.extend({
	template: App.templates.board,
	initialize: function() {
		this.render();
		//App.trigger("renderLists");
	},
	render: function() {
		this.$el.html(this.template({}));
		//	testCollection: this.collection.toJSON()
		//}));
	},
	events: {
		"click #test_add_list": "newList"
	},
	newList: function(event) {
		this.testPost(event);
	},
	testPost: function(event) {
		event.preventDefault();
		// this.board is a collection of list models
		var name = $("#test_add_list").prev().val();
		
		// sends POST
		this.collection.create({ heading: name }, {
			success: function() {
				(App.trigger("renderLists"));
			//	new View({
			//		el: 'main',
			//		collection: this.board,
			//	});
			//}.bind(this)
			}
		});
	}, 
});
