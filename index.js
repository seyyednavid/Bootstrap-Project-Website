// Get Navbar
const navScroll = document.querySelector(".navbar");

// Control navbar with scroll
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    navScroll.classList.add("header-scroll");
  } else {
    navScroll.classList.remove("header-scroll");
  }
});
