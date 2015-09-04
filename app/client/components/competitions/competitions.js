/*global Competitions*/

Template.competitions.helpers({
  competitions: function() {
    Competitions.find();
  }
});