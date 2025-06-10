


const setup = () => {
    const belangrijkeParagrafen = document.getElementsByClassName("Belangrijk");

for(let i = 0; i < belangrijkeParagrafen.length; i++) {
    const belangrijkeParagrafen = document.getElementsByClassName("Belangrijk");
    belangrijkeParagrafen[i].classList.add("opvallend");
    belangrijkeParagrafen[i].style.fontWeight = "bold";
}

}

window.addEventListener("load", setup);