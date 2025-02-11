let setup = () => {
    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5"];

    console.log(familie.length);
    for (let i = 0; i < familie.length; i += 2)
    {
        console.log("familie lid " + familie[i])
    }
    voegNaamToe(familie);
}

const voegNaamToe = (leden) => {
 let ledenNaam =  prompt("Vul een naam toe");
 leden.push(ledenNaam);
 for(let i = 0; i<leden.length; i++){
     console.log(leden[i]);
 }
    console.log(leden.toString());
}



window.addEventListener("load", setup);

