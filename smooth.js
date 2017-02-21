;(function ($) {
  'use strict';
  var content  = $('#main').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {
          // Set the duration of our animation
          duration: 5000,
          // Alterations to the page
          render: function () {
            // Quickly toggles a class and restarts css animations
            content.restartCSSAnimations('is-exiting');
            $('body').animate({ 'scrollTop': 0 });
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);
