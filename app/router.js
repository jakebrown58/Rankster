import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RanksterENV.locationType
});

Router.map(function() {

  this.resource('players', { path: '/players' }, function() {
    this.route('edit');
    this.route('add');
  });

  this.resource('matches', { path: '/matches' }, function() {
    this.route('add');
  });


});

export default Router;
