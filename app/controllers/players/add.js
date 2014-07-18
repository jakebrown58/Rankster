import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    /**
     *
     */
    add: function() {

      var self = this, 
        store = this.get('store');
      var record = store.createRecord('player', {

        name: this.get('name'),
        email: this.get('email')

      });
      
      record.save();
      
      // self.transitionTo('index');
    }
  }
});
