console.log("setup");


let evenement = {
    naam: "Codeer Workshop Javascript",
    datum: new Date(2025, 3, 15),
    locatie: "Kortrijk",
    deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
}

const setup = () => {
    toonEvenementInfo(evenement);


}

function toonEvenementInfo(evenement) {
    console.log("Evenement" + evenement.naam);
    console.log("Datum" + evenement.datum.toDateString())
    console.log("Locatie: " + evenement.locatie);
    console.log("Deelnemers: " + evenement.deelnemers.join(", "));
    console.log("Aantal dagen tot het evenement: " + dagenTotEvenement(evenement));
}

const dagenTotEvenement = (evenement) => {
let vandaag = new Date();
let tijdverschil = evenement.datum - vandaag;
let dagen = Math.ceil(tijdverschil / (1000 * 60 * 60 * 24));
return dagen;
}





window.addEventListener('load', setup);
