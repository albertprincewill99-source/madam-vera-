function toggleMenu(event) {
  event.stopPropagation();

  const nav = document.getElementById("sidenav");

  if (nav.style.left === "0px") {
    nav.style.left = "-260px";
  } else {
    nav.style.left = "0px";
  }
}

document.addEventListener("click", function(e) {
  const nav = document.getElementById("sidenav");
  const menu = document.querySelector(".menu");

  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    nav.style.left = "-260px";
  }
});

