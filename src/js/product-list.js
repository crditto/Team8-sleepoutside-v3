import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();
}

init();

const category = getParam("category");

productList(".product-list", category);
