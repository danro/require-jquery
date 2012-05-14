require([
	"jquery",
	"modules/example",
	"plugins/jquery.alpha"
],
	
function($, example) {
	
	// jquery + modules have loaded, handle DOM ready event.
	$(function() {
			$("body").alpha();
			example.init();
	});
});
