import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://incandescent-fire-3975.firebaseio.com/")
});
