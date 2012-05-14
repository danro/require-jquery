# RequireJS + jQuery

This project shows how [jQuery](http://jquery.com) can be used with [RequireJS](http://requirejs.org). 

This fork is an alt version of the [upstream repo](https://github.com/jrburke/require-jquery) example, aiming to provide a bit more structure along with inline minification.

### Compressor Usage

This fork uses a small Makefile to combine & minify all code into app.js, with the following commands:

( remember to first `cd js` )

`make` - replaces app.js with `require(['main'])`, so that all scripts load for dev.

`make min` - replaces app.js with the result of running main.js through the compressor.

`make jquery` - utility to compress require-jquery when new releases are added.

### Wrap all scripts with define()

Ideally, all the scripts you use would wrap themselves in a define() call so
that RequireJS can understand what dependencies need to be loaded before defining
the script's functionality.

For scripts that just need jQuery, you can wrap the code in a wrapper like
this:

```javascript
define(["jquery"], function ($) {
  //Script contents go here.
});
```

For more information on using define() to declare the codes as [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules, see the
[RequireJS API page](http://requirejs.org/docs/api.html).

### More details

Refer to the [upstream repo](https://github.com/jrburke/require-jquery) for more details.