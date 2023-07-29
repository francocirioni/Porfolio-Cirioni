
/* ----------------------------Scroll Reveal-----------------------------------------*/


const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 1000,
    delay: 400,
    reset: false,
});

sr.reveal(".HOME, .SKILLS, .QUALIFICATION, .SERVICES , .CONTACT , FOOTER ,.PROJECTS");


/* ----------------------------Nigh Mode-----------------------------------------*/

const botonModoNoche = document.getElementById("modoNocheBoton");
const body = document.body;

botonModoNoche.addEventListener("click", () => {
    body.classList.toggle("modo-noche");

});