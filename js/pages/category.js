import { API } from "../API/connection.js"
import { images_category } from "../DOM_variables/variables.js"

export const category_page = () => {
    const api = new API();


    const put_images = async () => {
        const group_images = await getting_images();
        group_images.forEach(image => {
            const { id, photographer, src, } = image
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = src["landscape"];
            img.alt = `It made by ${photographer}`;
            img.id = id;
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
}

