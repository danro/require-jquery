define([
  "jquery",
  "plugins/jquery.beta"
],

function($) {
  
  var instance = {
    hello: greeting
  };
  
  function greeting() {
    $("body").beta();
  }

  return instance;
});
