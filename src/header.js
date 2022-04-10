const buttons = ["Home", "Recipe", "About"];

const createButton = (name,parent) => {
    let element = document.createElement("button");
    element.type = "button";
    element.classList.add("button");
    element.id = name.toLowerCase();
    element.textContent = name;

    element.addEventListener("click",(e) => {
        e.target.classList.toggle("button-active");
    })




    parent.appendChild(element);
}


export default function header() {
    let header = document.createElement("div");
    header.id = "header";

    buttons.forEach((id) => {createButton(id,header)});

    return header;
}