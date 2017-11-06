var App = {
	templates: JST,
	init: function() {
		this.lastId;
		this.renderHeader();
		this.renderInfobar();
		this.fetchThenRenderBoard();
		this.bindEvents();
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);		
		this.on("renderLists", this.fetchThenRenderBoard.bind(this));
		this.on("removeListPopups", this.removeListPopups.bind(this));
		this.on("saveBoard", this.saveBoard.bind(this));
	},
	saveBoard: function() {
		$.ajax({
			method: 'PUT',
			url: '/lists',
			data: JSON.stringify(this.lists),
			contentType: 'application/json',
		});
	},
	fetchThenRenderBoard: function() {
		var self = this;
		$.ajax({
			method: 'GET',
			url: '/lists',
			success: function(data) {
				this.lists = new Lists(data);
				this.renderBoard();
			}.bind(self)
		});
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
		var self = this;
		
		if (this.board) { this.board.undelegateEvents(); }
		
		$.ajax({
			method: 'GET',
			url: '/lastId',
			success: function(data) {
				this.newBoard(data)
			}.bind(self)
		});
	},
	newBoard: function(id) {
		this.board = new BoardView({
			el: 'main',
			collection: this.lists,
			listId: id,
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


