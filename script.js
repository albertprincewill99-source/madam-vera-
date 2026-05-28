// ===== NAVIGATION =====
function goToWomen() {
  window.location.href = "Womensection.html";
}

function goToMen() {
  window.location.href = "mensection.html";
}

function goCart() {
  window.location.href = "cart.html";
}

// ===== CART =====
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  const cart = getCart();
  badge.innerText = cart.length;
}

// ===== MENU =====
function toggleMenu(event) {
  event.stopPropagation();

  const nav = document.getElementById("sidenav");
  const overlay = document.getElementById("overlay");

  if (nav && overlay) {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// ===== FLOAT ICONS =====
function toggleIcons(event) {
  event.stopPropagation();

  const bar = document.getElementById("iconBar");
  if (!bar) return;

  bar.style.display = (bar.style.display === "flex") ? "none" : "flex";
}

// ===== CLOSE ON OUTSIDE CLICK =====
document.addEventListener("click", function (e) {

  const nav = document.getElementById("sidenav");
  const menu = document.querySelector(".menu");
  const overlay = document.getElementById("overlay");
  const bar = document.getElementById("iconBar");
  const fab = document.querySelector(".fab");

  if (nav && menu && !nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
  }

  if (bar && fab && !bar.contains(e.target) && !fab.contains(e.target)) {
    bar.style.display = "none";
  }
});

// ===== INIT =====
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});