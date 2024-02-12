import { index_code } from "./pages/index.js"
import { category_page } from "./pages/category.js"
import { your_likes } from "./pages/warehouse.js"
import { sav_func_bunc1, images_category, warehouse } from "./DOM_variables/variables.js"


window.addEventListener('load', () => {

    if (sav_func_bunc1) {
        index_code();
    }

    if (images_category) {
        category_page();
    }

    if (warehouse) {
        your_likes();
    }
})





