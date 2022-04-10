import "./style.css";
import header from "./header.js";


const content = document.getElementById("content");

let headerDiv = header();

content.appendChild(headerDiv);

