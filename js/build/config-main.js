({
  baseUrl: "../",
  name: "main",
  out: "../app.js",
  exclude: ["jquery"],
  // comment to uglify
  // optimize: "none",
  paths: {
    "jquery": "require-jquery"
  }
})