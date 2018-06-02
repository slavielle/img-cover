'use strict';

module.exports = {
  module: {
    autoprefixer: {
      browsers: ['> 1%', 'not dead', 'last 2 versions', 'Firefox ESR', 'not ie < 11']
    }
  },
  style_compiler: "gulp-sass",
  paths: {
    src : {
      styles: ['./sass/style.scss'],
      scripts: './js/'
    },
    dist : {
      index: './dist/',
      styles: './dist/css/',
      scripts: './dist/js/'
    }
  }
};
