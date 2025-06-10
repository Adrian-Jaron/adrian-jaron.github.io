let inputWoord = document.getElementById("woordInput");
let substringButton = document.getElementById("substringButton");
let startIndex = document.getElementById("startIndex");
let endIndex = document.getElementById("endIndex");
let outputSpan = document.getElementById("outputSpan");

const setup = () => {
    substringButton.addEventListener("click", stringKnippen);
}

const stringKnippen = () => {
    let woord = inputWoord.value;
    let start = parseInt(startIndex.value);
    let end = parseInt(endIndex.value);

    let stringNaKnippen = woord.substring(startIndex.value, endIndex.value);
    outputSpan.textContent = stringNaKnippen;
}

setup();