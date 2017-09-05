var App = {
	templates: JST,
	init: function() {
		new View({
			el: 'main',
			collection: this.board,
		});
		// this.items is the entire collection
		// rename to this.board (collection.board)
		// could pass null to create an empty collections , and then populate it (see backbone docs, collections, constructor/initialize)
//debugger;
	this.bindEvents();
	},
	bindEvents: function() {
		$("#test_add_list").on("click", this.testPost.bind(this));
	},
	testPost: function(event) {
		event.preventDefault();
		// this.board is a collection of list models
		var name = $("#test_add_list").prev().val();
		// sends POST
		this.board.create(name); 
	},
}
