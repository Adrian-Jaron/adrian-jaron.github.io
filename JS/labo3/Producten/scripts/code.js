    const setup = () =>
    {
        let btwTarieven = document.getElementsByClassName("percentage");
        let totalen = document.getElementsByClassName('totalen')
        let producten = document.getElementById("producten");
        let prijzen = document.getElementsByClassName('prijs');
        let aantalen = document.getElementsByClassName('aantal');
        let percentages = document.getElementsByClassName('percentage');
        let button = document.getElementById('berekenButton');
let totaal = document.getElementById('totaal');


            function berekenen(){
                let totaalBedrag = 0

            for(let i = 0; i < prijzen.length; i++){

                let percentage = 1 + parseFloat(percentages[i].textContent.replace("%", ""))  / 100;
                let prijs = parseFloat(prijzen[i].textContent.replace(" Eur", ""))
                let aantal = parseInt(aantalen[i].value);

                    totaalBedrag += prijs * percentage * aantal;
                    totalen[i].textContent = (prijs * percentage * aantal).toFixed(2) + " Eur";

              document.getElementById("totaal").textContent = totaalBedrag.toFixed(2) + " Eur";
            }
            }


        if(button){
            button.addEventListener('click', berekenen);
        }
    };

    window.addEventListener("load", setup);