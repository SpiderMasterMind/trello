var App = {
	templates: JST,
	init: function() {
		new View({
			el: 'main',
			collection: this.board,
		});
	
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
		this.board.create({	heading: name }, {
			success: function() {
				new View({
					el: 'main',
					collection: this.board,
				});
			}.bind(this)
		});
	}, 
}
