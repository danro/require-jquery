define([
  "jquery",
  "plugins/jquery.beta"
],

function($) {
  
  // private methods
  function init() {
    $("body").beta();
  }
  
  // return exposed module
  return { init: init };
});
