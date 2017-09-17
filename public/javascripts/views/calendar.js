var CalendarView = Backbone.View.extend({
	template: App.templates.calendar,
	id: "datepicker", 
	initialize: function() {
		this.render();
		this.setUpOutsideClickListener();
	},
	render: function() {
		this.picker = new Pikaday({
    	onSelect: function(date) {
        field.value = picker.toString();
    	}
		});	
		$("body").append(this.el);
		this.$el.prepend(picker.el);
		this.$el.append(this.template());
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
		"click input": "saveDate",
	},
	saveDate: function(event) {
		event.preventDefault();
		var date = picker.toString('YYYY-MM-DD');
		if (date.length === 0) {
			return;
		}
		var day = date.match(/\d\d/)[0];
		var month = date.match(/\s...\s/)[0].trim();
		this.model.save({
			due: day + " " + month
		},{
			patch: true,
		});
		this.closeThis();
	},
	closeThis: function(event) {
		this.el.remove();
		this.undelegateEvents();
		this.model.trigger("change");
	},
});
		
