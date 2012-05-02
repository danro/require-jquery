dev:
	@echo "require(['main']);" > app.js
	@echo "\n[ js has been reset for dev ]"

min:
	@node build/bin/r.js -o build/config-main.js
	@echo "[ js minified and combined ]"
	
jquery:
	@node build/bin/r.js -o baseUrl=. name=require-jquery out=require-jquery-min.js
	@echo "[ jquery has been minified ]"
