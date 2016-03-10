//index.js
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var router = require('./router');

$(function(){
  Backbone.history.start();
});
