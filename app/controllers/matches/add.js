import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {

    /**
     *
     */
    add: function() {

      var self = this, 
        store = this.get('store');
      var date = new Date(),
        record = store.createRecord('match', {
        played: date.getFullYear()  + "-" + date.getMonth() + "-" + date.getDate(),
        player1: 'TODO: get a player',
        player2: 'TODO: get another player',
        player1Score: this.get('player1Score'),
        player2Score: this.get('player2Score')
      });
      
      record.save();      

      self.transitionTo('index');

    }
  }
});
