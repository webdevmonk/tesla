const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".navbar");
const header = document.querySelector("header");
const buttons = document.querySelectorAll(".header-list li");
const drops = document.querySelectorAll(".overlay-drop");
const overlay = document.querySelector(".overlay");

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

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function () {
    // remove previous active classes
    removeActive();
    addHidden();

    drops[i].classList.remove("hide");
    buttons[i].classList.add("active");
    header.classList.add("active");
    overlay.classList.add("show");

    const name = buttons[i].textContent.toLowerCase();
    const items = document.querySelectorAll(
      `.overlay-drop.${name} .charging-grid > div`,
    );

    if (items) {
      for (let i = 0; i < items.length; i++) {
        setInterval(() => {
          items[i].classList.add("animate");
        }, i * 200);
      }
    }
    document.body.classList.add("stop-scroll");
  });
}

for (let i = 0; i < drops.length; i++) {
  drops[i].addEventListener("mouseleave", function () {
    document.body.classList.remove("stop-scroll");
    buttons[i].classList.remove("active");
    header.classList.remove("active");
    overlay.classList.remove("show");

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("animate");
    }
  });
}

function addHidden() {
  for (let drop of drops) {
    drop.classList.add("hide");
  }
}

function removeActive() {
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
}

addHidden();
