var App = {
	templates: JST,
	init: function() {
	
		this.renderBoard();
		//this.renderLists();
		this.bindEvents();
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);		
		//this.on("renderLists", this.renderLists.bind(this));
		//$("#test_add_list").on("click", this.testPost.bind(this));
	},
	renderBoard: function() {
		if (this.board) { this.board.undelegateEvents(); }

		this.board = new Board({
			el: 'main',
			collection: this.lists,
		});
	},
}
