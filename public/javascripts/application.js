var App = {
	templates: JST,
	init: function() {
		this.renderHeader();
		this.renderInfobar();
		this.renderBoard();
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
		console.log("fetching");
		var self = this;
		$.ajax({
			methid: 'GET',
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


