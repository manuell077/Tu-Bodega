import {Post} from "./api.js"

const formu = document.querySelector(".registrarme");

formu.addEventListener("submit", (e) =>   Post(e,formu))

