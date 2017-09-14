var App = {
	templates: JST,
	init: function() {
		// check for backbone converntions, eg can we re render on change event
		// list action horiz offset
		// actions add card multiple times doesnt work
		// list action highlighting
		// calculate list max list height
		// make add card take up bottom of space (need window sizing info)
		// use model.get (backbone setters and getters) wherever possible
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

// Test modal area
	//	this.board.lists[0].cardViews[0].$(".card_content").trigger("click")
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);		
		this.on("renderLists", this.renderBoard.bind(this));
		this.on("removeListPopups", this.removeListPopups.bind(this));
		// TODO what si this?
		this.trigger("renderCardPopup");
	},
	removeListPopups: function() {
		if (this.board) {
			_.each(this.board.listViews, function(listView) {
				if (listView.listActions) {
					listView.listActions.undelegateEvents();
					listView.listActions.remove();
				}
			})
		}
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

Handlebars.registerHelper("optionsCounter", function(max, selected) {
	var result = "";
	for (var i = 1; i <= max; i++) {
		if (i === selected) {
			result = result + '<option selected="selected" value="' + i.toString() + '">' + i.toString() +  '</option>';
		} else {
			result = result + '<option value="' + i.toString() + '">' + i.toString() +  '</option>'
		}
	}
	return new Handlebars.SafeString(result);
});
