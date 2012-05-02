require([
  "jquery",
  "plugins/jquery.alpha",
  "modules/example"
],
  
function($, alpha, example) {
  // jquery + plugins + modules + domReady.
  $(function() {
      $("body").alpha();
      example.hello();
  });
});
