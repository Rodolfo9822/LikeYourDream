import { slideshow_box } from "../DOM_variables/variables.js"

let position = 1;
const limit = slideshow_box.length


export const slideshow = () => {
    for (let index = 0; index < limit; index++) {
        slideshow_box[index].style.display = "none";
    }


    if (position < limit) {
        slideshow_box[position].style.display = "block"
        position++;
    } else {
        position = 0;
        slideshow_box[position].style.display = "block"
        position++;
    }

    /* setTimeout(slideshow, 5000); */
}
