define([
	"jquery",
	"plugins/jquery.beta"
],

function($) {
	
	// private methods
	function _init() {
		$("body").beta();
	}
	
	// return exposed module
	return { init: _init };
});
