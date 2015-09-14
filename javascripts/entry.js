requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "bootstrap": {"deps" : ["jquery"]}
  }
});

require(["jquery", "hbs", "bootstrap", "main"], function($, handlebars, bootstrap, main) {

});

//three dependencies: dom-access, populate-songs, get-more-songs