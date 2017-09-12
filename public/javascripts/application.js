var App = {
	templates: JST,
	init: function() {
// could reset the last ID if collection is empty?	
// something in a notification if server comms fails
// replace X button with image form site
// list add popup problem, cant change heading afterwards
		// fix add card popup success callback not addingmodel to collection
		// list heading focus/list heading the same validation

		this.renderHeader();
		this.renderInfobar();
		this.renderBoard();
		//this.renderLists();
		this.bindEvents();
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);		
		this.on("renderLists", this.renderBoard.bind(this));
	},
	renderInfobar: function() {
		if (this.infobar) { this.infobar.undelegateEvents(); }

		this.infobar = new Infobar({
			el: '#infobar'
		});
	},
	renderHeader: function() {
		if (this.header) { this.header.undelegateEvents(); }

		this.header = new Header({
			el: 'header',
			collection: this.lists,
		});
	},
	renderBoard: function() {
		if (this.board) { this.board.undelegateEvents(); }

		this.board = new Board({
			el: 'main',
			collection: this.lists,
		});
	},
}
