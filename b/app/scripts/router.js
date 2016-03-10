//router.js
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


//getting models and views
var People = require('./models/contact');
var views = require('./views/contact-form');

var Router = Backbone.Router.extend({
  initialize: function(){
    var people = new People();
    var contactForm = new views.ContactForm({collection: people});

    $('.person-form').html(contactForm.render().el);
  }
});

module.exports = new Router();
