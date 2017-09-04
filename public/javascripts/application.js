var App = {
	templates: JST,
	init: function() {
		console.log("!!!")
		new View({
			el: 'body',
			collection: this.items
		});
	},
}
