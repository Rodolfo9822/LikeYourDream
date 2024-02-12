import { API } from "../API/connection.js"
import { images_category } from "../DOM_variables/variables.js"
import { to_save } from "../animations/card.js"
export const category_page = () => {
    const api = new API();


    const put_images = async () => {
        const group_images = await getting_images();
        group_images.forEach(image => {
            const { id, photographer, src, } = image
            const div = document.createElement("div");
            div.classList.add("searched_box");
            const img = document.createElement("img");
            img.classList.add("searched_images", "img_selected");
            img.src = src["landscape"];
            img.alt = `It made by ${photographer}`;
            img.setAttribute("name", id);
            div.appendChild(img);
            images_category.appendChild(div)
        });
    }

    const getting_images = async () => {
        const name = new URLSearchParams(window.location.search)
        api.set_query(name.get("name"));
        const data = await api.category_request();
        return data["photos"];
    }

    put_images();
    images_category.addEventListener("mouseover", to_save);
}

