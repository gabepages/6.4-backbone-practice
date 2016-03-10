var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var Blog = Backbone.Model.extend({

});

var BlogsCollection = Backbone.Collection.extend({
  model: Blog,
  initialize: function (){
    this.bind('add', this.save, this);
  },
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/gabepages',
  save: function(){
    $.post(this.url, this.toJSON());
  }
});


module.exports = BlogsCollection;
