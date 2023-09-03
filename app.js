const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".nav-list");
  const overlay = document.querySelector(".overlay");

  if (nav.style.display == "block") {
    nav.style.display = "none";
    hamburger.src = "assets/images/icon-menu.svg";
  } else {
    nav.style.display = "block";
    overlay.style.display = "block";
  }
});

const close = document.querySelector(".close-menu");

close.addEventListener("click", () => {
  const nav = document.querySelector(".nav-list");
  const overlay = document.querySelector(".overlay");

  if (nav.style.display == "block") {
    nav.style.display = "none";
    overlay.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
