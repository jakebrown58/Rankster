// models/player.js
import DS from "ember-data";

var Player = DS.Model.extend({

  name: DS.attr('string'),
  
  email: DS.attr('string'),

  // rank: DS.attr('number'),

//  gamesPlayed: DS.attr('string'), TODO this can be a computed property

  // wins: DS.attr('number'),

  // loses: DS.attr('number'),

  // withdraws: DS.attr('number'),

  // matches: DS.hasMany('match'),

  // isActive: DS.attr('bool')
});

export default Player;
