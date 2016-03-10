var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


//requireing the router
var router = require('./router');


$(function (){
    Backbone.history.start();
});
