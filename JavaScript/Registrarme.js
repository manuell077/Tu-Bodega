import { Ingresar } from "./Api.js";

const formu = document.querySelector(".registrarme");

formu.addEventListener("submit",(e)=>{
    Ingresar(e,formu)
})

