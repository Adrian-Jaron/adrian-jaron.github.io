
let button = document.getElementById('button');
let input = document.getElementById("input");
const setup = () => {

    button.addEventListener('click', (e) => {
       let tekstMetSpaties = input.value.split("").join(" ");
        console.log(tekstMetSpaties);
    })



}


window.addEventListener("load", setup);


