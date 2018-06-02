'use strict';

(function (global) {
  document.addEventListener("DOMContentLoaded", function() {
    new global.lazyload({threshold:0});
  });
})(window);
