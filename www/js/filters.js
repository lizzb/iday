angular.module('idayIonic.filters', [])

//'use strict';

/* Filters */

// Define a new module for our app. 
// The array holds the names of dependencies if any.
// var app = a
//angular.module('idayFilters', []) //;

//angular.module('idayIonic.idayFilters', [])

// All filters must return a function.
// Param 1: the data to be filtered, 
// Param 2: an argument that may be passed 
// http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

//app.filter
.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});