let btn = document.getElementById("btn");
let input = document.getElementById("invoer");
let tafels = [];

const setup = () =>{
    btn.addEventListener("click", () =>{
        let getal = parseInt(input.value);
        const datum = new Date().toLocaleTimeString();
        tafelMaken(getal, datum);
        opslaanTafel(getal, datum);
    })

    restoreTafels();
}

const tafelMaken = (getal, datum) => {

    let container = document.getElementById("container");
    let tafel = document.createElement("div");
    let tafelTitel = document.createElement("h2");



    tafelTitel.textContent = "tafel van " + getal + " aangemaakt op" + datum;

    tafel.appendChild(tafelTitel);

tafel.classList.add("tafel");
    for(let i = 1; i <= 10; i++){
        let tafelrow = document.createElement('div')
        tafelrow.textContent = i + " x " + getal + " = " + getal * i;
        tafelrow.classList.add('tafel-row');
        tafel.appendChild(tafelrow);
    }

    container.appendChild(tafel);


}

const opslaanTafel = (getal, datum) =>{
    let tafelobject = {
        getal: getal,
        datum: datum
    }

    let isTafels = JSON.parse(localStorage.getItem("tafels.history")) || [];
    isTafels.push(tafelobject);
    localStorage.setItem("tafels.history", JSON.stringify(isTafels));
};


const restoreTafels = () => {
 let isTafels = JSON.parse(localStorage.getItem("tafels.history"));
 if(isTafels){
     for(let i = 0; i < isTafels.length; i++){
         tafelMaken(isTafels[i].getal, isTafels[i].datum);
     }
 }

}

window.addEventListener("load", setup);