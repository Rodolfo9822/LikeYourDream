


export const get_data = () => JSON.parse(localStorage.getItem("imagesStorage")) || [];

export const set_data = images => localStorage.setItem("imagesStorage", JSON.stringify(images));

export const alert = (text, color, time = 1500) => {
    const alert_message = document.querySelector("#alert-message");
    const message = document.createElement("p");
    message.textContent = text;
    alert_message.classList.add("alert-message", color);

    setTimeout(() => {
        alert_message.appendChild(message);
    }, 50);

    setTimeout(() => {
        message.remove();
        alert_message.classList.remove("alert-message", color);
    }, time);
}



