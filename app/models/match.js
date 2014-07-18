// models/match.js
import DS from "ember-data";

export default DS.Model.extend({
  
  played: DS.attr('date'),
  
  player1: DS.belongsTo('player'),
  player1Withdrew: DS.attr('boolean'),
  player1Score: DS.attr('number'),
  
  player2: DS.belongsTo('player'),
  player1Withdrew: DS.belongsTo('boolean'),
  player2Score: DS.attr('number')

});