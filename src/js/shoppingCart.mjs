import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");

  if (!cartItems) {
    return;
  }

  const total = calculateTotal(cartItems);

  displayCartTotal(total);

  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
}

function calculateTotal(cartItems) {
  const amounts = cartItems.map((item) => item.FinalPrice);
  const total = amounts.reduce((a, b) => a + b, 0);
  return total;
}
function displayCartTotal(total) {
  if (total > 0) {
    document.querySelector(".cart-footer").classList.remove("hide");
    document.querySelector(".cart-total").innerHTML += `$${total}`;
  } else {
    document.querySelector(".cart-footer").classList.add("hide");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
