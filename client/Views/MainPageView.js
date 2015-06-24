app.mainPageView = Backbone.View.extend({
  el: document.getElementsByClassName('col-md-8'),

  initialize: function() {
    app.calendar = this.calendar = new app.calendarView({
      collection: app.events
    });
    app.signup = this.signup = new app.signupView({});
    app.tourmap = this.tourmap = new app.tourMapView({
      collection: app.events
    });

  },

  events: {},

  render: function(view) {
    this.$el.children().detach();
    this.$el.append(this[view].render());
    if (view === 'calendar') this.calendar.$el.fullCalendar('today');
    if (view === 'tourmap') {
      this.$el.append(this.tourmap.render());
    }
  }
});
