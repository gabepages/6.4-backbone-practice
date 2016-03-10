//contact-form.js
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

//template
var contactFormTemp = require('./../../templates/contact-form-temp.hbs');


//to grab form inputs
$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};



var ContactForm = Backbone.View.extend({
  tagName: 'form',
  template: contactFormTemp,
  events: {
    'submit': 'addContact'
  },
  addContact: function(e){
    e.preventDefault();
    var contactInfo = this.$el.serializeObject();
    this.collection.create(contactInfo);
    this.render();
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

module.exports = {
  'ContactForm': ContactForm
}
