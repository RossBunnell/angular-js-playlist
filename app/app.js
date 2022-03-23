// Creating an angular module.  Modules allow us to segment our code.   An app can have many modules, or just one.   Depending on it's size and the way you'd like ot organize it's code.
// used to house controllers, config, run methods, etc
var MyNinjaApp = angular.module('myNinjaApp', []);

MyNinjaApp.config(function() {
    //used prior to any applicaiton running (routing).  For configuration.
})

MyNinjaApp.run(function() {
    //used when application runs
});

MyNinjaApp.controller