import { index_code } from "./pages/index.js"
import { images__bunch } from "./DOM_variables/variables.js"


window.addEventListener('load', () => {
    if (images__bunch) {
        index_code();
    }
})





