import { warehouse } from "../DOM_variables/variables.js"
import { get_data, set_data } from "../functions/global.js"

export const your_likes = () => {
    const storage = get_data();
    if (storage.length > 0) {
        storage.forEach(img => {
            const { id, url } = img;
            const div = document.createElement("div");
            div.classList.add("searched_box");
            const img_tag = document.createElement("img");
            img_tag.setAttribute("name", id);
            img_tag.classList.add("searched_images");
            img_tag.src = url;
            img_tag.alt = "An images that you gave a like"
            div.appendChild(img_tag);
            warehouse.appendChild(div);
        });
        return
    }
    console.log("it's empty");
}

