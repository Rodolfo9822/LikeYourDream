import { API } from "../API/connection.js"
import { search_button, search_input, sav_func_bunc1, sav_func_bunc2, sav_func_bunc3, sav_func_bunc4 } from "../DOM_variables/variables.js"
import { to_save } from "../animations/card.js"
import { slideshow } from "../animations/slideshow.js"

export const index_code = () => {
    const api = new API();
    let index = 0;
    const categories = ["city", "art", "drink", "landscape", "animals", "plants", "wallpaper", "photography "]

    /* code for search bar button to look for any images */
    search_button.addEventListener("click", evt => {
        if (evt.target.classList.contains("hero__button")) {
            take_user_to(evt.target);
        }
        else {
            take_user_to(evt.target.parentElement)
        }
    })

    const take_user_to = evt => {
        const query = search_input.value
        if (query) {
            evt.setAttribute("href", `category.html?name=${query}`);
            return
        }
        console.log("it's empty");
    }

    /* Calling the API to get images to use into the sections */

    const getting_images = () => {
        api.set_many_images(4);

        categories.forEach(category => {
            api.set_query(category);
            const data = api.call_API();
            building_images(category, data);
        })
    }

    const building_images = async (category, data) => {
        const images = await data;
        const [img1, img2, img3, img4] = images["photos"];
        sav_func_bunc1.appendChild(template(img1, category));
        sav_func_bunc2.appendChild(template(img2, category));
        sav_func_bunc3.appendChild(template(img3, category));
        sav_func_bunc4.appendChild(template(img4, category));
        index += 1;
    }

    const template = (img_url, category) => {
        const div = document.createElement("div");
        div.classList.add("images__box--style");
        if (index === 2 || index === 3) {
            div.classList.add("complete__height");
        }
        else {
            div.classList.add("images__box");
        }
        const img = document.createElement("img");
        img.classList.add("img_selected", "images__img");
        img.alt = `To belong to ${category}, made by ${img_url["photographer_url"]}`;
        img.src = img_url["src"]["landscape"];
        img.setAttribute("name", img_url["id"]);
        div.appendChild(img)

        return div;
    }

    getting_images();
    sav_func_bunc1.addEventListener("mouseover", to_save);
    sav_func_bunc2.addEventListener("mouseover", to_save);
    sav_func_bunc3.addEventListener("mouseover", to_save);
    sav_func_bunc4.addEventListener("mouseover", to_save);
    slideshow();
}








