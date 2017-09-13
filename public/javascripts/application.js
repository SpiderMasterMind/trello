var App = {
	templates: JST,
	init: function() {
// could reset the last ID if collection is empty?	
// something in a notification if server comms fails
// replace X button with image form site
		// list heading focus/list heading the same validation
		// vertical scrollbars in .list_area
		// add card enter key for textarea
		// keep window position on list edit
		// refocus cursor on new card add popup after card add
		// remove nodemon from final project?
		// card popup resize submit button & save positioning if no colors of icons

		this.renderHeader();
		this.renderInfobar();
		this.renderBoard();
		//this.renderLists();
		this.bindEvents();
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);		
		this.on("renderLists", this.renderBoard.bind(this));
		this.trigger("renderCardPopup");
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
