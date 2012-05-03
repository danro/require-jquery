require([
  "jquery",
  "plugins/jquery.alpha",
  "modules/example"
],
  
function($, alpha, example) {
  // jquery + plugins + modules + dom ready.
  $(function() {
      $("body").alpha();
      example.init();
  });
});
