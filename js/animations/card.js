

const building_shadow = container => {
    const div = document.createElement("div");
    div.classList.add("shadow-option");
    const icon = document.createElement("button");
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
    div.appendChild(icon);
    container.appendChild(div);
    return div;
}

const removing = (container) => {
    const shadow = document.querySelector(".shadow-option");
    if (shadow) {
        container.removeChild(shadow);
    }
}

export const to_save = evt => {

    if (evt.target.classList.contains("img_selected")) {
        const container = evt.target.parentElement;

        const div = building_shadow(container);
        div.onmouseout = function () {
            removing(container)
        }
    }
}



