var CalendarView = Backbone.View.extend({
	template: App.templates.calendar,
	id: "datepicker", 
	initialize: function() {
		this.render();
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
		this.model.trigger("change");		
		this.el.remove();
		this.undelegateEvents();
	},
});
		
