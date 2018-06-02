'use strict';

var gulp = require("gulp");
require('gulp-stats')(gulp);

// Single tasks
gulp.task("scripts", require("./gulp/tasks/scripts"));
gulp.task("styles", require("./gulp/tasks/styles"));
gulp.task("browserify", require("./gulp/tasks/browserify"));
gulp.task("clean", require("./gulp/tasks/clean"));

gulp.task("build", ["styles", "scripts", "browserify"]);

// default tasks
gulp.task("default", ["clean"], function() {
  gulp.start('build');
});

// dev tasks
gulp.task("w", ['default'], require("./gulp/tasks/watch"));
gulp.task("watch", ['default'], require("./gulp/tasks/watch"));
