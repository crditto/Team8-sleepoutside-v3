import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { loadHeaderFooter } from "./utils";

async function initCheckout() {
  await loadHeaderFooter();
}

initCheckout();

const productId = getParam("product");
console.log(productId);
productDetails(productId);
