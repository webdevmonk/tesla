const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  }
  nav.classList.remove("close");
  document.body.classList.add("stop-scroll");
});

closeBtn.addEventListener("click", function () {
  nav.classList.add("close");
  document.body.classList.remove("stop-scroll");
});
