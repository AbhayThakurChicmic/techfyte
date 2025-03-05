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
  // Get Device width
  let device_width = window.innerWidth;
  // Home Page Client Cursor

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
  //  Register GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitType);

  //Config GSAP
  gsap.config({
    nullTargetWarn: false,
  });
  document.querySelectorAll(".reveal").forEach((text) => {
    let splitText = new SplitType(text, {
      type: "words",
    });

    let words = splitText.words;
    const section = text.closest(".innovative");

    gsap.from(words, {
      opacity: 0.2,
      ease: "none",
      stagger: {
        amount: 0.5, 
        from: "random",
      },
      duration: 0.3,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        toggleActions: "play reverse play reverse",
      },
    });
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
  if (device_width > 767) {
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

  gsap.to(".bg_image img", {
    xPercent: -18,
    scrollTrigger: {
      trigger: ".portfolio__area",
      start: "top top",
      end: "bottom center",
      pin: ".bg_image",
      scrub: 3,
    },
  });

  // Button Hover Animation
  $(".btn-hover").on("mouseenter", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find("span").css({
      top: y,
      left: x,
    });
  });

  $(".btn-hover").on("mouseout", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find("span").css({
      top: y,
      left: x,
    });
  });

  // Cursor JS
  $("#cursor_style").on("change", function () {
    var cursor_val = $(this).val();

    if (cursor_val == "1") {
      $(".cursor1").hide();
      $(".cursor2").hide();
    } else {
      $(".cursor1").show();
      $(".cursor2").show();
    }
  });

  // Home

  if (slider_9_image) {
    let current = 0;
    for (let col = 0; col < cols; col++) {
      let part = document.createElement("div");
      part.className = "part";
      let el = document.createElement("a");
      el.className = "section";
      el.href = "#";

      let img = document.createElement("img");
      img.src = images[current];
      el.appendChild(img);

      let h2 = document.createElement("h2");
      h2.innerHTML = titles[current];
      el.appendChild(h2);

      let p = document.createElement("p");
      p.innerHTML = contents[current];
      el.appendChild(p);

      part.style.setProperty("--x", (-100 / cols) * col + "vw");
      part.appendChild(el);
      main.appendChild(part);
      parts.push(part);
    }

    // Cursor Invent Target Touches
    let startY;
    let endY;
    let clicked = false;

    function mousedown(e) {
      gsap.to(cursor, { scale: 4.5 });
      gsap.to(cursorF, { scale: 0.4 });

      clicked = true;
      startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
    }

    function mouseup(e) {
      gsap.to(cursor, { scale: 1 });
      gsap.to(cursorF, { scale: 1 });

      endY = e.clientY || endY;
      if (clicked && startY && Math.abs(startY - endY) >= 40) {
        go(!Math.min(0, startY - endY) ? 1 : -1);
        clicked = false;
        startY = null;
        endY = null;
      }
    }

    window.addEventListener("mousedown", mousedown, false);
    window.addEventListener("touchstart", mousedown, false);
    window.addEventListener(
      "touchmove",
      function (e) {
        if (clicked) {
          endY = e.touches[0].clientY || e.targetTouches[0].clientY;
        }
      },
      false
    );
    window.addEventListener("touchend", mouseup, false);
    window.addEventListener("mouseup", mouseup, false);

    //Mouse Wheel Scroll Transition
    let scrollTimeout;
    function wheel(e) {
      clearTimeout(scrollTimeout);
      setTimeout(function () {
        if (e.deltaY < -40) {
          go(-1);
        } else if (e.deltaY >= 40) {
          go(1);
        }
      });
    }
    window.addEventListener("mousewheel", wheel, false);
    window.addEventListener("wheel", wheel, false);

    let alls = document.querySelectorAll("#main .part");
    alls[0].classList.add("showed");
  }
})(jQuery);
