'use strict';

var argv       = require('minimist')(process.argv.slice(2));
var gulp       = require("gulp");
var util       = require("gulp-util");
var conf       = require('../options');
var onError    = require('./helpers/onError');
var gulpIgnore = require('gulp-ignore')
var tap        = require('gulp-tap');
var buffer     = require('gulp-buffer');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var production = argv.production;

module.exports = function () {

  return gulp.src([conf.paths.src.scripts + '*.js', '!' + conf.paths.src.scripts + 'main.js'])
          .pipe(onError())
          .pipe(concat('scripts.js'))
          .pipe(!production ? sourcemaps.init() : util.noop())
          .pipe(!production ? util.noop() : uglify())
          .pipe(!production ? sourcemaps.write() : util.noop())
          .pipe(gulp.dest(conf.paths.dist.scripts))
}
