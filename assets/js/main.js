/**
 * Template Name: Maundy - v2.1.0
 * Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  'use strict';

  // Set the count down timer
  if ($('.countdown').length) {
    var count = $('.countdown').data('count');
    var template = $('.countdown').html();
    $('.countdown').countdown(count, function (event) {
      $(this).html(event.strftime(template));
    });
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500,
      'easeInOutExpo'
    );
    return false;
  });
})(jQuery);

function accordActive(n) {
  const plus = document.querySelectorAll('.accordion-question .fas.fa-plus');
  var slideIndex = n;
  var i;
  var slides = document.getElementsByClassName('accContent');
  if (slides[slideIndex - 1].style.display !== 'block') {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      plus[i].classList.remove('rotate');
    }
  }
  if (slides[slideIndex - 1].style.display === 'block') {
    slides[slideIndex - 1].style.display = 'none';
    plus[n - 1].classList.remove('rotate');
  } else {
    slides[slideIndex - 1].style.display = 'block';
    plus[n - 1].classList.add('rotate');
  }
}
