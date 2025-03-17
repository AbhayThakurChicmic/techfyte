// Brands Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 60,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  function animateCounter(element, start, end, duration) {
    let startTime = null;

    function easeOutQuint(t) {
      return 1 - Math.pow(1 - t, 5);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = Math.min((timestamp - startTime) / duration, 1);
      element.firstChild.nodeValue =
        Math.floor(progress * (end - start) + start) + "+";
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  const stats = document.querySelectorAll(".stats");

  function runCountersOnScroll() {
    stats.forEach((stat) => {
      if (isElementInViewport(stat) && !stat.dataset.animated) {
        let number = parseInt(stat.textContent);
        if (!isNaN(number)) {
          animateCounter(stat, 0, number, 4000);
          stat.dataset.animated = true;
        }
      }
    });
  }

  window.addEventListener("scroll", runCountersOnScroll);
  runCountersOnScroll();
});

(function ($) {
  "use strict";
  let device_width = window.innerWidth;
  function mousemoveHandler(e) {
    try {
      const target = e.target;

      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      // Main Cursor Moving
      tl.to(".cursor1", {
        ease: "power2.out",
      }).to(
        ".cursor2",
        {
          ease: "power2.out",
        },
        "-=0.4"
      );
    } catch (error) {
      console.log(error);
    }
  }
  document.addEventListener("mousemove", mousemoveHandler);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitType);

  document.addEventListener("scroll", function () {
    const element = document.getElementById("innovative-main-container");
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        let progress = 1 - rect.top / windowHeight;
        progress = Math.min(Math.max(progress, 0.2), 1);
        element.style.opacity = progress;
    }
});

  // All Buttons
  let arr1 = gsap.utils.toArray("#btn_wrapper");
  let arr2 = gsap.utils.toArray(".btn_wrapper");
  const all_buttons = arr1.concat(arr2);

  all_buttons.forEach((btn) => {
    if (!btn.classList.contains("hero__button")) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top center+=150",
          markers: false,
        },
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5,
      });
    }
  });

  /************************************** */
  //  Portfolio Animation
  if (device_width > 320) {
    let portfolioline = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio__area",
        start: "top center-=200",
        pin: ".portfolio__text",
        end: "bottom bottom+=80",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      },
    });

    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1,
    });
    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1,
    });
    portfolioline.to(
      ".portfolio__text",
      {
        scale: 1,
        duration: 1,
      },
      "+=2"
    );
  }

  let portfolio_lists = gsap.utils.toArray(".portfolio__item");
  portfolio_lists.forEach((portfolio, i) => {
    gsap.set(portfolio, { opacity: 0.7 });
    let t1 = gsap.timeline();

    t1.set(portfolio, {
      position: "relative",
    });
    t1.to(portfolio, {
      scrollTrigger: {
        trigger: portfolio,
        scrub: 2,
        duration: 1.5,
        start: "top bottom+=100",
        end: "bottom center",
        markers: false,
      },
      scale: 1,
      opacity: 1,
      rotateX: 0,
    });
  });

  // Button Hover Animation
  $(".btn-hover").on("mouseenter", function (e) {
    let x = e.pageX - $(this).offset().left;
    let y = e.pageY - $(this).offset().top;

    $(this).find("span").css({
      top: y,
      left: x,
    });
  });

  $(".btn-hover").on("mouseout", function (e) {
    let x = e.pageX - $(this).offset().left;
    let y = e.pageY - $(this).offset().top;

    $(this).find("span").css({
      top: y,
      left: x,
    });
  });

  // Cursor JS
  $("#cursor_style").on("change", function () {
    let cursor_val = $(this).val();

    if (cursor_val == "1") {
      $(".cursor1").hide();
      $(".cursor2").hide();
    } else {
      $(".cursor1").show();
      $(".cursor2").show();
    }
  });
})(jQuery);
