//contact.js
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var Person = Backbone.Model.extend({

});

var People = Backbone.Collection.extend({
  model: Person,
  url:'http://tiny-lasagna-server.herokuapp.com/collections/gabepagefriends',
  initailize: function(){
    this.bind('add', this.save, this);
  },
  save: function(){
    $.post(this.url, this.toJSON());
  }
});


module.exports = People;
