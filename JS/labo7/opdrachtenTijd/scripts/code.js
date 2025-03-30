
let datumNu = Date.now();
let datumVroeger = new Date('2000-01-01T00:00:00Z').getTime();

let verschil = datumNu - datumVroeger;
console.log(`Verschil in ms: ${verschil}`);


let laatsteTijd = null;
let verschilTwee = null;

function berekenTijd() {
    let huidigeTijd = Date.now();


    if (laatsteTijd != null) {
        verschilTwee = huidigeTijd - laatsteTijd;
        console.log("Verschil met vorige uitvoer" + `${verschilTwee}`);
    } else {
        console.log("Eerste keer angeroepen");
    }

    laatsteTijd = huidigeTijd;

    setTimeout(berekenTijd, verschilTwee);

}

   setTimeout(berekenTijd, 1000);

