import productList from "./productList.mjs";
productList(".product-list", "tents");
import { loadHeaderFooter } from "./utils";

async function init() {
    await loadHeaderFooter();
}

init();