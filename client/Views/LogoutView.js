app.logoutView = Backbone.View.extend({
  el : '<form class="form-inline logout"></form>',

  initialize : function() {
  },

  events : {
    'click #logoutButton' : 'logout',
  },

  logout : function() {
    console.log('logging out')
  },

  render : function(view) {
    return this.$el.html('<input class="btn btn-default" id="logoutButton" type="button" value="Logout">');
  }
});