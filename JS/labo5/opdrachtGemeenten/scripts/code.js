let input = "";
let gemeentes = [];
const setup = () => {
    let stop = false;
    let i = 0;
    while(stop === false)
    {
        input = prompt("Geef een gemeente aub.");
        if(input!=="stop") {
            gemeentes.push(input);
        }
        if(input.toLowerCase() === "stop"){
            stop = true;
            lijstVullen(gemeentes);
        }
        console.log(input);
    }
}

const lijstVullen = (gemeentes) => {
    let keuzelijst = document.getElementsByTagName('select')[0];
    gemeentes.sort();
        for(let i = 0; i < gemeentes.length; i++){
let optie = document.createElement("option");
optie.value = gemeentes[i];
optie.textContent = gemeentes[i];
keuzelijst.appendChild(optie);
        }
}

window.addEventListener('load', setup);