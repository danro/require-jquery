define([
  "jquery",
  "plugins/jquery.beta"
],

function($) {
  
  var module = {
    hello: greeting
  };
  
  function greeting() {
    $("body").beta();
  }

  return module;
});
