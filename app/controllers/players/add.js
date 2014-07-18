import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {

    /**
     *
     */
    add: function() {

      var self = this, 
        store = this.get('store');
      store.createRecord('player', {

        name: this.get('name'),
        email: this.get('email')

      });

      store.save();

      // self.transitionTo('index');
    }
  }
});
