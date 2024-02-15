import { warehouse } from "../DOM_variables/variables.js"
import { get_data, set_data, alert } from "../functions/global.js"


const remove_image = (id) => {
    const data = get_data();
    const filter_data = data.filter(img => img["id"] !== id)
    set_data(filter_data);
    alert("You've removed the image successfully", "green_alert", 1500);
    setTimeout(() => {
        location.reload();
    }, 1500);
}

const show_button = (div, id) => {
    const shadow = document.createElement("div");
    shadow.classList.add("shadow-option");
    shadow.onmouseleave = function () {
        shadow.remove();
    }
    const button = document.createElement("button");
    button.textContent = "Remove"
    button.classList.add("butto-removes");
    button.onclick = function () {
        const outcome = confirm("Are you sure to remove the image");
        if (outcome)
            remove_image(id);
    }
    shadow.appendChild(button);
    div.appendChild(shadow);
}

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
            div.onmouseenter = function () {
                show_button(div, id);
            }
            div.appendChild(img_tag);
            warehouse.appendChild(div);
        });
        return
    }
    const div_thinking = document.createElement("div");
    div_thinking.classList.add("decoration");
    const img_thinking = document.createElement("img");
    img_thinking.src = "../img/thinking.png"
    img_thinking.classList.add("decoration__img");
    img_thinking.alt = "a decoration to know there aren't images"
    const text_thinking = document.createElement("text");
    text_thinking.textContent = "Haven't you added images, yet?"
    text_thinking.classList.add("decoration__text");
    div_thinking.appendChild(text_thinking);
    div_thinking.appendChild(img_thinking);
    warehouse.appendChild(div_thinking)
}




