import { findProductById } from "./externalServices.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // once the HTML is rendered we can add a listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart() {
  console.log("hola");
  const cart_element = document.querySelector("#cart-icon");

  cart_element.classList.add("animate");

  setTimeout(() => {
    cart_element.classList.remove("animate");
  }, 1000);

  let cart = getLocalStorage("so-cart");
  if (!cart) {
    cart = []; //initializing it as an empty array if null
  }
  cart.push(product);
  setLocalStorage("so-cart", cart);
  console.log(cart);
}
function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Images.PrimaryLarge;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
  console.log(document.querySelector("#addToCart").dataset.id);
}
