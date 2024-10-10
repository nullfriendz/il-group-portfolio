// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

// Fetch API to get IP address.
$.getJSON("https://api.ipify.org?format=json", (data) => {
  $("#show-ip").html(data.ip);
});

goToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
