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
var path = require("path");
var cssmin = require("gulp-cssmin");
var autoprefixer = require("gulp-autoprefixer");
var saneWatch = require('gulp-sane-watch');


gulp.task("cleanBuild", function(cb){
	del(["build"], cb)
});

gulp.task("css", function () {
  return gulp.src("./src/css/main.scss")
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest("./build"))
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
        .pipe(gulp.dest("./build/"))
        .pipe(livereload());
});

gulp.task("html", function() {
	gulp.src("./src/index.html")
        .pipe(embedlr())
		.pipe(gulp.dest("./build/"))
        .pipe(livereload())
})

gulp.task("watchAndReload", function() {
    livereload.listen()
    saneWatch("./src/**/*.html", function() {
        gulp.start("html");
    }); 
    saneWatch("./src/**/*.scss", function() {
        gulp.start("css");
    }); 
    saneWatch(["./src/**/*.js","./src/**/*.jsx"], function() {
        gulp.start("js");
    }); 
});

// gulp.task("watchSrc", function() {
//     gulp.watch(["./src/**/*"], ["default"]);
// });

gulp.task("default", ["js", "css", "html", "watchAndReload"])