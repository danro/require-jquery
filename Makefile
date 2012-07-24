update:
	git show upstream:jquery-require-sample/webapp/scripts/require-jquery.js > js/require-jquery.js
	uglifyjs js/require-jquery.js > js/require-jquery-min.js