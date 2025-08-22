document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Notification Carousel
  let currentNotification = 0;
  const notifications = document.querySelectorAll('.notification-card');

  function showNotification(index) {
    notifications.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  setInterval(() => {
    currentNotification = (currentNotification + 1) % notifications.length;
    showNotification(currentNotification);
  }, 5000);

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll('.notification-card, .dashboard-card, .about-content').forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
    observer.observe(element);
  });
});

//FUCTION FOR THE EXPLORE MORE BUTTON
function explore() {
  window.location.href = "html/explore.html"
}

//About-section
document.addEventListener("DOMContentLoaded", function () {
  var multipleCardCarousel = document.querySelector("#carouselExampleControls");

  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });

    var carouselInner = multipleCardCarousel.querySelector(".carousel-inner");
    var carouselItems = multipleCardCarousel.querySelectorAll(".carousel-item");

    var carouselWidth = carouselInner.scrollWidth;
    var cardWidth = carouselItems[0].offsetWidth;
    var scrollPosition = 0;

    var nextButton = multipleCardCarousel.querySelector(".carousel-control-next");
    var prevButton = multipleCardCarousel.querySelector(".carousel-control-prev");

    nextButton.addEventListener("click", function () {
      let cardsPerView = 4;
      if (scrollPosition < carouselWidth - cardWidth * cardsPerView) {
        scrollPosition += cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      }
    });

    prevButton.addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      }
    });

  } else {
    multipleCardCarousel.classList.add("slide");
  }
});

function EventCalender() {
  alert("You will get this feature in the next update!");
} // ALERT MESSAGE ON CLICKING ON EVENT CALANDER BUTTON
// UPDATE THIS CODE ONCE THE EVENT CALANDER IS READY