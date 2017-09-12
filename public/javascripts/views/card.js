var CardView = Backbone.View.extend({
	className: 'card',
	template: App.templates.card,
	initialize: function() {
		this.render();
		//debugger;
	},
	render: function() {
		this.$el.html(this.template({ //cards: this.model.toJSON() }));
			label: this.model.toJSON().label,
		}));


		return this;

	},
	events: {
		"mouseover .card_content": "showPencilIconClass",
		"mouseout .card_content": "removePencilIconClass",
	},
	showPencilIconClass: function() {
		
	},
});

