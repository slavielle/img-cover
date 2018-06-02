'use strict';

var argv = require('minimist')(process.argv.slice(2));
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var production = argv.production;

module.exports = function () {

    return gulp.src('./js/main.js')
          .pipe(browserify({
            insertGlobals : true,
            debug : !production
          }))
          .pipe(rename('bundle.js'))
          .pipe(gulp.dest('./dist/js/'))

}
