import { Injectable } from '@angular/core';

declare var $: any; // Import jQuery globally
declare var WOW: any;

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {}

  // ✅ Initialize Spinner
  initSpinner() {
    setTimeout(() => {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  }

  // ✅ Initialize Back to Top Button
  initBackToTop() {
    $(window).scroll(() => {
      if ($(window).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(() => {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  }

  // ✅ Initialize Team Carousel
  initTeamCarousel() {
    $(".team-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: false,
      dots: false,
      loop: true,
      margin: 50,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  // ✅ Initialize Testimonial Carousel
  initTestimonialCarousel() {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      center: true,
      dots: true,
      loop: true,
      margin: 0,
      nav: true,
      navText: false,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  // ✅ Initialize Fact Counter
  initCounter() {
    $('.counter-value').each( () => {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'easeInQuad',
        step: function (now: number) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }

  // ✅ Initialize WOW.js
  initWowJs() {
    new WOW().init();
  }

  // ✅ Run All Initializations
  initializeAllScripts() {
    this.initSpinner();
    this.initBackToTop();
    this.initTeamCarousel();
    this.initTestimonialCarousel();
    this.initCounter();
    this.initWowJs();
  }
}
