var gulp = require("gulp");
var browserify = require("browserify");
var concat = require("gulp-concat");
var jsx = require("gulp-jsx");
var source = require("vinyl-source-stream");
var del = require("del");
var reactify = require("reactify");
var livereload = require("gulp-livereload");
var embedlr = require("gulp-embedlr");
var sass = require("gulp-sass");
var path = require("path")
var cssmin = require("gulp-cssmin");
var autoprefixer = require("gulp-autoprefixer");
var nodemon = require("nodemon");

gulp.task("clean", function(cb){
	del(["dist"], cb)
});

gulp.task("css", function () {
  return gulp.src("./src/css/main.scss")
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
});

gulp.task("js", function() {
    // Single entry point to browserify
    browserify({
    	entries: ["./src/js/main.js"],
    	extensions: [".jsx"],
    	paths: ["./node_modules", "./src/js"]
    })
    		.transform(reactify)
    		.bundle()
        .pipe(source("main.js"))
        // if desired, pipe to uglify or other tasks here before writing to disk
        .pipe(gulp.dest("./dist/"))
        .pipe(livereload());
});

gulp.task("html", function() {
	gulp.src("./src/index.html")
        .pipe(embedlr())
		.pipe(gulp.dest("./dist/"))
        .pipe(livereload())
})

gulp.task("watchServer", function() {
	// gulp.
})

gulp.task("watchSrc", function() {
    livereload.listen()
    gulp.watch(["./src/**/*"], ["default"]);
});

gulp.task("default", ["js", "css", "html", "watchSrc", "watchServer"])