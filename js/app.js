import { index_code } from "./pages/index.js"
import { category_page } from "./pages/category.js"
import { images__bunch, images_category } from "./DOM_variables/variables.js"


window.addEventListener('load', () => {

    if (images__bunch.length !== 0) {
        index_code();
    }

    if (images_category) {
        category_page();
    }





})





