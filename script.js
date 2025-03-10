function updateMargin() {
  var marginLeft = $(".resource-container").css("margin-left");
  $(".testimonial-container").css("margin-left", marginLeft);
}

$(document).ready(updateMargin);
$(window).on("resize", updateMargin);

// ai-carousel
$(".ai-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  animateOut: "fadeOut",
  smartSpeed: 1000,
  dots: false,
  nav: false,
  items: 1,
  margin: 20,
  // stagePadding: 30,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Brands Carousel
$(".brands-container").owlCarousel({
  loop: true,
  margin: 60,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

$(".swiper-container").owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  dots: false,
  autoplay: false,
  // autoplayTimeout: 1000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    // 600: {
    //   items: 2,
    // },
    992: {
      items: 2,
    },
  },
});

// Telephone Field
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "in",
  separateDialCode: true,
  backgroundColor: "white",
  preferredCountries: ["us", "gb", "in"],
});

// Custom Owl button
$(document).ready(function () {
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    items: 1,
    dots: true,
  });

  $(".owl-carousel__next").click(() => owl.trigger("next.owl.carousel"));
  $(".owl-carousel__prev").click(() => owl.trigger("prev.owl.carousel"));
});

const categories = {
  "Frontend": ["Angular", "JavaScript", "Bootstrap", "React", "HTML", "CSS", "Next.js", "Vue", "Nuxt.js", "Svelte", "TypeScript"],
  "Backend": ["React", "Next.js", "Bootstrap", "Svelte", "Vue"],
  "Microsoft": ["Bootstrap", "CSS", "Nuxt.js", "TypeScript"],
  "Mobile": ["JavaScript", "React", "Vue", "CSS"],
  "AI & ML": ["Angular", "Bootstrap", "Nuxt.js"],
  "DevOps": ["Bootstrap", "CSS", "Nuxt.js", "TypeScript"],
  "Cybersecurity": ["Angular", "JavaScript", "Bootstrap", "React", "HTML", "CSS"],
  "Cloud Computing": ["Next.js", "Vue", "Nuxt.js", "Svelte", "TypeScript"],
  "Blockchain": ["JavaScript", "React", "Vue", "CSS"],
  "Big Data": ["React", "Next.js", "Bootstrap", "Svelte", "Vue"],
};

const desktopCategoryList = document.getElementById("desktop-category-list");
const mobileCategoryList = document.getElementById("mobile-category-list");
const techGrid = document.getElementById("tech-grid");

function formatImageName(tech) {
  return tech.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + ".png";
}

function loadCategory(category) {
  techGrid.innerHTML = categories[category].map(tech => {
    let imgSrc = `images/${formatImageName(tech)}`;
    return `
      <div class="col-lg-3 col-4">
        <div class="card p-4 d-flex justify-content-center text-center rounded-0 align-items-center h-100">
          <img src="${imgSrc}" onerror="this.onerror=null; this.src='images/default.png'" 
              alt="${tech}" class="img-fluid mx-auto d-block my-2">
          <div class="p1-regular">${tech}</div>
        </div>
      </div>`;
  }).join('');

 // Highlight active tab
  document.querySelectorAll(".nav-item, .scrolling-tabs li").forEach(li => li.classList.remove("active"));
  document.getElementById(category)?.classList.add("active");
  document.getElementById(`mobile-${category}`)?.classList.add("active");
}

Object.keys(categories).forEach(category => {
  const li = document.createElement("li");
  li.classList.add("nav-item", "px-4", "py-3", "text-light", "heading5", "d-flex", "justify-content-between");
  li.id = category;
  li.textContent = category;
  li.onclick = () => loadCategory(category);
  desktopCategoryList.appendChild(li);
});

Object.keys(categories).forEach(category => {
  const li = document.createElement("li");
  li.classList.add("heading5");
  li.id = `mobile-${category}`;
  li.textContent = category;
  li.onclick = () => loadCategory(category);
  mobileCategoryList.appendChild(li);
});

loadCategory("Frontend");

document.addEventListener("DOMContentLoaded", function () {
  const tabContainer = document.querySelector(".scrolling-tabs-container");

  tabContainer.addEventListener("wheel", function (event) {
      event.preventDefault();
      tabContainer.scrollLeft += event.deltaY*3; 
  });
  tabContainer.scrollBy({
    behavior: "smooth"
});
});


// Text Change
// document.addEventListener("DOMContentLoaded", function () {
//   const textArray = [
//     "AI Development",
//     "Machine Learning",
//     "Data Science",
//     "Deep Learning",
//   ];
//   let index = 0;
//   const textElement = document.getElementById("animated-text");

//   setInterval(() => {
//     textElement.classList.add("fade");

//     setTimeout(() => {
//       index = (index + 1) % textArray.length;
//       textElement.textContent = textArray[index];
//       textElement.classList.remove("fade");
//     }, 500);
//   }, 2000);
// });

// $(window).on("load", function () {
//   $(".owl-carousel").trigger("refresh.owl.carousel");
// });

// bottom to top button in footer
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
