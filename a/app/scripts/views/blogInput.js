var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

//templates
var formTemp = require('../../templates/form.hbs');



//to grab form inputs
$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


//Blog form view
var BlogInputForm = Backbone.View.extend({
  tagName: 'form',
  template: formTemp,
  events: {
    'submit': 'addBlog'
  },
  addBlog: function(e){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    this.collection.create(formData);
    console.log(this.collection);
    this.render();
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }

});


module.exports = {
    'BlogInputForm': BlogInputForm
  };
