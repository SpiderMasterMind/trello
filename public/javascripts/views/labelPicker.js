var LabelPickerView = Backbone.View.extend({
	template: App.templates.labelPicker,
	id: "label_picker", 
	initialize: function() {
		this.render();
		this.setUpOutsideClickListener();
	},
	render: function() {
		this.$el.html(this.template());
		$(".modal_main").append(this.el);
	},
	setUpOutsideClickListener: function() {
		$('html').on("click", function() {
			if (!$(event.target).closest(this.el).length) {
				this.closeThis();
			}
		}.bind(this));
	},
	events: {
		"click #close": "closeThis",
		"click .color": "toggleColor",
	},
	closeThis: function(event) {
		this.el.remove();
		this.undelegateEvents();
	},
	toggleColor: function(event) {
		var colors = this.model.get("colors") || [];
		var clickedColor = $(event.target).attr("id");
		
		var index = colors.indexOf(clickedColor);
		if (index === -1) {
			colors.push(clickedColor)
		} else {
			colors.splice(index, 1)
		}
		this.saveColors(colors)
	},
	saveColors: function(colors) {
		this.model.save({ colors: colors }, { patch: true });
		this.model.trigger("change");
	},
});
