let checkBox = document.getElementById('checkBox');
let radioButtons = document.getElementsByClassName('radio');
let selectieLijst = document.getElementById('selectie');
let multiSelectieLijst = document.getElementById('multi-select');
let btn = document.getElementById('btn')
let output = "";

const setup = () => {

btn.addEventListener('click', () => {
    checkCheckBox();
    checkRadiobuttons();
    checkKeuzeLijst();
    checkMultiSelectie();
})

    }

    function checkCheckBox() {
        if(checkBox.checked){
            output+= "Is roker" + "\n";
        }
        else{
            output+= "Is geen roker" +  "\n";
        }

    }

function checkRadiobuttons() {
    let afkorting = "";
    let geselecteerdWaarde = "";

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            geselecteerdWaarde = radioButtons[i].value;


            if (geselecteerdWaarde === "Nederlands") {
                afkorting = "nl";
            } else if (geselecteerdWaarde === "Frans") {
                afkorting = "fr";
            } else {
                afkorting = "en";
            }

            output += "moedertaal is " + afkorting + "\n";
        }
    }

}
        function  checkKeuzeLijst(){
         let selectedIndex = selectieLijst.selectedIndex;
         let geselecteerdOptie = selectieLijst.options[selectedIndex];
         let geselecteerdText = geselecteerdOptie.text;

        output += "Uw favoriete buurland is " + geselecteerdText + "\n";

        }

        function checkMultiSelectie() {

            let geselecteerdOpties =  multiSelectieLijst.selectedOptions;

for(let i = 0; i < geselecteerdOpties.length; i++) {
    let geselecteerdOptie = geselecteerdOpties[i];
    let geselecteerdOptieText = geselecteerdOptie.text;
    output += " Bestelling bestaat uit: " + geselecteerdOptieText;

}
console.log(output);
        }






window.addEventListener('load', setup);