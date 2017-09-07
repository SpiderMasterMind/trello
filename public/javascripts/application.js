var App = {
	templates: JST,
	init: function() {
	
		this.renderBoard();
		this.renderLists();
		this.bindEvents();
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);		
		this.on("renderLists", this.renderLists.bind(this));
		//$("#test_add_list").on("click", this.testPost.bind(this));
	},
	renderBoard: function() {
		new Board({
			el: '#add_list',
			collection: this.board,
		});
	},
	renderLists: function() {
		//debugger;
		if (this.lists) { this.lists.forEach(function(list) { list.undelegateEvents(); } ); }
		$("#list_area").empty();

		var lists = this.board;
		this.lists = lists.map(function(list) {
			var item = new List({
				model: list
			});
			return item;
		});
		this.lists.forEach(function(listView) {
			$("#list_area").append(listView.el);
		});
		
		// for each list render a list view.
		//collection: this.board,
	},

}
