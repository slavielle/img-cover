'use strict';

(function (global, $) {
  function init(){
    // We follow .img-responsive tags behaviour to guess
    // which size as to be displayed through el.currrentSrc
    // and relay it as background-image so we can use background-size: cover; in css
    $('.img-cover img').each(function() {
      var $self = $(this);
      var $teaserCover = $self.closest('.img-cover__inner, .img-cover');
      var target = $teaserCover.attr('data-cover-target') || false;
      if (target) {
        $teaserCover = $('.' + target, $teaserCover);
      }

      function applyCover() {
        var src = $self.get(0).currentSrc || $self.get(0).src || false;
        if(src){
          $teaserCover.css('background-image', 'url(' + src + ')');
        }
      }
      // In some case, jquery load event on images seems not triggers correctly
      // when clicking on the refresh button for instance.
      // See https://stackoverflow.com/questions/3877027/jquery-callback-on-image-load-even-when-the-image-is-cached
      if ($self.get(0).complete) {
        applyCover();
      }

      $('.img-cover img').on('load', function() {
        applyCover();
      });

    });

  }
  $(init);
})(window, jquery, lazyload);
