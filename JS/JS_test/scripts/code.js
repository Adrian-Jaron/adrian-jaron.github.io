let txtInput = document.getElementsByTagName("input")[0];
let noEggImage = document.getElementById("img");
let eggImage = document.getElementById("with-egg");
let selectieLijst = document.getElementById("selectieLijst");
let note = document.getElementById("note");

const setup = () => {

    selectieLijst.addEventListener("change", (e) => {
        tellen();
        let selectedIndex = selectieLijst.selectedIndex;
        let geselecteerdOptie = selectieLijst.options[selectedIndex];
        let geselecteerdText = geselecteerdOptie.text;
        if(geselecteerdOptie.text === "Met een ei"){
            eiTonen();
            note.textContent = "Hierboven, een kip" + geselecteerdText + "\n";
        }
        else{
            eiVerstoppen();
            note.textContent = "Hierboven, een kip" + geselecteerdText + "\n";
        }
    })

}

const tellen = () => {
    let teller = 0;
    let letter = txtInput.value;

    let stringLengte = note.length;
    let index = 0;
    let huidigeLetter = note.substring(0+index, 1+index);
    while(index < stringLengte){
huidigeLetter = note.substring(0+index, 1+index);
        if(huidigeLetter === input.value){
            teller++;
        }
        index++;
    }
    console.log(teller);
}

const eiTonen = () => {
    eggImage.classList.remove("hidden");
    noEggImage.classList.add("hidden");

}

const eiVerstoppen = () =>{
   noEggImage.classList.remove("hidden");
    eggImage.classList.add("hidden");
}

window.addEventListener('load', setup);


