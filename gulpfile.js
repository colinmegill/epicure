var gulp = require("gulp");
var browserify = require("browserify");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var jsx = require("gulp-jsx");
var source = require("vinyl-source-stream");
var del = require("del");
var reactify = require("reactify");
var livereload = require("gulp-livereload");
var sass = require("gulp-sass");
var path = require("path")

gulp.task("clean", function(cb){
	del(["dist"], cb)
});

// gulp.task("sass", function() {
// 	console.log('running sass')
// 	console.log(path.resolve("./src/css/_epicure.scss"))
//     return gulp.src("./src/css/_epicure.scss")
//         .pipe(sass({
//         	errLogToConsole: true
//         }))
//         .pipe(concat("styles.css"))
//         .pipe(gulp.dest("./dist/"));
// });

var cssmin = require("gulp-cssmin");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp.src("./src/css/main.scss")
    .pipe(sass({
      errLogToConsole: true,
      onError: function (err) {
        console.log(err);
      }
    }))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest("./dist"));
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
        .pipe(source("bundle.js"))
        // if desired, pipe to uglify or other tasks here before writing to disk
        .pipe(gulp.dest("./dist/"))
});

gulp.task("watch", function() {
    gulp.watch("./src/css/**/*", ["sass"]);
    gulp.watch("./src/js/**/*", ["js"]);
});

gulp.task("default", ["js", "sass"])