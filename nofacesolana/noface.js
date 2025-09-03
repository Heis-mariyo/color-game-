// ...existing code...
$(document).ready(function() {
  // Mobile menu toggle
  $('.menu-toggle').click(function() {
    $('.nav-links').toggleClass('show');
  });
  $('.nav-links a').click(function() {
    $('.nav-links').removeClass('show');
  });

  // Animated counters for tokenomics (trigger when in view)
  let counterTriggered = false;
  function animateCounters() {
    if (counterTriggered) return;
    $('.stat h4').each(function() {
      var $this = $(this);
      var originalText = $this.text();
      var target = parseInt(originalText.replace(/[^0-9]/g, ''), 10);
      var suffix = originalText.replace(/[0-9]/g, '').trim();

      if (!isNaN(target)) {
        $this.text('0' + suffix);
        $({ countNum: 0 }).animate({ countNum: target }, {
          duration: 1200,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum) + suffix);
          },
          complete: function() {
            $this.text(target + suffix);
          }
        });
      }
    });
    counterTriggered = true;
  }

  // Check if tokenomics section is in view
  $(window).on('scroll', function() {
    var tokenomicsTop = $('#tokenomics').offset().top;
    var windowBottom = $(window).scrollTop() + $(window).height();
    if (windowBottom > tokenomicsTop) {
      animateCounters();
    }
  });

  // Also trigger if already in view on page load
  $(window).trigger('scroll');
});
// ...existing code...