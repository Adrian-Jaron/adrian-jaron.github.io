let berekenButton = document.getElementById("btn");
const setup = () => {
    berekenButton.addEventListener("click", berekenen);
}

const berekenen = () =>{
    let prijzen = document.getElementsByClassName('prijs');
    let aantalen = document.getElementsByClassName('aantal');
    let btws = document.getElementsByClassName('btw');
    let subtotalen = document.getElementsByClassName('subtotaal');

    for(let i = 0; i < subtotalen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent.replace(" Eur", "").trim());
        let btw = parseInt(btws[i].textContent.replace("%", " ").trim()) / 100;
        let aantal = parseInt(aantalen[i].value);
        
        let totaal = prijs * aantal;
        let totaalMetBtw = totaal * (1 + btw);
        subtotalen[i].textContent = totaalMetBtw.toFixed(2);
    }
}

window.addEventListener("load", setup);