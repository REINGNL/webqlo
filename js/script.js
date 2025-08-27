document.addEventListener("DOMContentLoaded", () => {
  const carouselEl = document.querySelector("#heroCarousel");

  // Initialize Bootstrap Carousel
  const carousel = new bootstrap.Carousel(carouselEl, {
    interval: 5000,
    ride: "carousel",
    pause: false,
  });

  let startX = 0;
  let endX = 0;

  // Mouse drag
  carouselEl.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });
  carouselEl.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    handleGesture();
  });

  // Touch swipe
  carouselEl.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });
  carouselEl.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleGesture();
  });

  function handleGesture() {
    if (endX < startX - 50) {
      carousel.next();
    }
    if (endX > startX + 50) {
      carousel.prev();
    }
  }
});

document.getElementById("subscribeBtn").addEventListener("click", function() {
  document.getElementById("subscribePopup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("subscribePopup").style.display = "none";
});


