;(function ($) {
  'use strict';
  var content  = $('#allContent').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {

          // Set the duration of our animation
          duration: 500,

          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.restartCSSAnimations('is-exiting');

            $('body').animate({ 'scrollTop': 0 });
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);
