var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

//getting models and views
var BlogsCollection = require('./models/blogs');
var views = require('./views/blogInput');

var Router = Backbone.Router.extend({
  initialize: function(){
    var blogs = new BlogsCollection();
    var blogInputForm = new views.BlogInputForm({collection: blogs});

    $('.blog-form').html(blogInputForm.render().el);
  }
});

module.exports = new Router();
