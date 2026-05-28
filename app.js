// ===== GET CART =====
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ===== SAVE CART =====
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ===== UPDATE CART COUNT =====
function updateCartCount() {
  const cart = getCart();

  const badge = document.getElementById("cart-count");

  if (badge) {
    badge.innerText = cart.length;

    badge.classList.add("pop");

    setTimeout(() => {
      badge.classList.remove("pop");
    }, 300);
  }
}

// ===== GO TO CART =====
function goCart() {
  window.location.href = "cart.html";
}

// ===== SEARCH =====
function searchProducts() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const products = document.querySelectorAll(".product");

  products.forEach(product => {

    const title = product
      .querySelector("h2")
      .innerText
      .toLowerCase();

    product.style.display =
      title.includes(input)
      ? "block"
      : "none";
  });
}

// ===== ADD TO CART =====
function addToCart(name, price, image, btn) {

  // SAVE ITEM
  let cart = getCart();

  cart.push({
    name: name,
    price: Number(price),
    image: image
  });

  saveCart(cart);

  // ===== FLYING IMAGE =====

  const product = btn.closest(".product");

  const productImg =
    product.querySelector("img");

  const cartIcon =
    document.querySelector(".cart-wrapper");

  // CREATE IMAGE
  const flyingImg =
    document.createElement("img");

  flyingImg.src = productImg.src;

  flyingImg.className = "fly-image";

  document.body.appendChild(flyingImg);

  // START POSITION
  const start =
    productImg.getBoundingClientRect();

  flyingImg.style.left =
    start.left + "px";

  flyingImg.style.top =
    start.top + "px";

  // MOVE TO CART
  setTimeout(() => {

    const end =
      cartIcon.getBoundingClientRect();

    flyingImg.style.left =
      end.left + "px";

    flyingImg.style.top =
      end.top + "px";

    flyingImg.style.width = "20px";
    flyingImg.style.height = "20px";

    flyingImg.style.opacity = "0.2";

  }, 10);

  // REMOVE IMAGE
  setTimeout(() => {
    flyingImg.remove();
  }, 900);

  // BUTTON FEEDBACK
  let originalText = btn.innerText;

  btn.innerText = "Added ✓";

  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = originalText;
    btn.disabled = false;
  }, 1200);
}

// ===== LOAD =====
document.addEventListener(
  "DOMContentLoaded",
  updateCartCount
);