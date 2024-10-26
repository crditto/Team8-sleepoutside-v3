import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils";

async function init() {
  await loadHeaderFooter();
}

init();

const category = getParam("category");

productList(".product-list", category);
