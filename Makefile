update:
	git show upstream:jquery-require-sample/webapp/scripts/require-jquery.js > js/require-jquery.js
	git show upstream:jquery-require-sample/r.js > js/build/bin/r.js
	uglifyjs js/require-jquery.js > js/require-jquery-min.js