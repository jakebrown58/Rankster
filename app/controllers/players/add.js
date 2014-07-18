import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {

    /**
     *
     */
    add: function() {

      var self = this, 
        store = this.get('store');
      var record = store.createRecord('player', {

        name: this.get('name'),
        email: this.get('email'),
        wins: 0,
        losses: 0

      });
      
      record.save();
      
      // self.transitionTo('index');
    }
  }
});
