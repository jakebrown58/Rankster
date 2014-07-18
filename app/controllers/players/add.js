import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    /**
     *
     */
    add: function() {

      var store = this.get('store');

      store.createRecord('player', {

        name: this.get('name'),
        email: this.get('email')

      });

    }
  }
});
