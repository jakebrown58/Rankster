// models/match.js
import DS from "ember-data";

var Match = DS.Model.extend({

  played: DS.attr('string'),
  player1: DS.attr('string'),
  player2: DS.attr('string'),  
  player1Score: DS.attr('number'),
  player2Score: DS.attr('number')
});

export default Match;
