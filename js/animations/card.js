import { get_data, set_data, alert } from "../functions/global.js"

const building_shadow = (container, img) => {
    const div = document.createElement("div");
    div.classList.add("shadow-option");
    const icon = document.createElement("a");
    icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy"
            width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000000"
            fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M14 4l0 4l-6 0l0 -4" />
            </svg>
    `;
    icon.classList.add("icon-style");
    icon.onclick = function () {
        save_images(img);
    }
    div.appendChild(icon);
    container.appendChild(div);
    return div;
}

const save_images = async (img) => {
    const alert_message = document.querySelector("#alert-message p");
    console.log(alert_message);
    if (!alert_message) {
        const storage = await get_data();
        const id = img.getAttribute("name");
        const outcome = does_id_exist(id, storage);
        if (!outcome) {
            const url = img.src;
            alert("You've just stored the image", "green_alert");
            storage.push({ id, url });
            set_data(storage);
            return
        }
        alert("You already have the image saved", "red_alert");
    }
}

const removing = (container) => {
    const shadow = document.querySelector(".shadow-option");
    if (shadow) {
        container.removeChild(shadow);
    }
}

const does_id_exist = (id, storage) => storage.some(img => img["id"] === id)

export const to_save = evt => {

    if (evt.target.classList.contains("img_selected")) {
        const container = evt.target.parentElement;
        const img = evt.target;

        const div = building_shadow(container, img);
        div.onmouseleave = function () {
            removing(container)
        }
    }
}



