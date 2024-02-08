import { API } from "../API/connection.js"
import { images__bunch, search_button, search_input } from "../DOM_variables/variables.js"

export const index_code = () => {
    const api = new API();
    let test = 0;
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
        const request = search_input.value
        evt.setAttribute("href", `category.html?name=${request}`)
    }

    /* Calling the API to get images to use into the sections */

    const getting_images = () => {
        api.set_many_images(2);

        categories.forEach(category => {
            api.set_query(category);
            const data = api.call_API();
            building_images(category, data);
        })
    }

    const building_images = async (category, data) => {
        const images = await data
        const [img1, img2] = images["photos"];
        const [group1, group2] = images__bunch;

        group1.appendChild(template(img1, category));
        group2.appendChild(template(img2, category));
        test += 1;
    }

    const template = (img_url, category) => {
        const div = document.createElement("div");
        div.classList.add("images__box--style");
        if (test === 2 || test === 3) {
            div.classList.add("complete__height");
        }
        else {
            div.classList.add("images__box");
        }
        const img = document.createElement("img");
        img.classList.add("images__img");
        img.alt = `To belong to ${category}, made by ${img_url["photographer_url"]}`;
        img.src = img_url["src"]["landscape"];
        img.setAttribute("name", img_url["id"])
        div.appendChild(img)

        return div;
    }

    getting_images();


}








