const setup = () =>{
    let geboorteDatum = new Date('2005-06-06')
    let vandaag = new Date();
    console.log(geboorteDatum);
    console.log(vandaag);

    let verschil = Math.floor((vandaag - geboorteDatum) / (1000 * 60 * 60 * 24));
        console.log("Je bent vandaag zoveel dagen oud: " + `${verschil}`);


}


window.addEventListener("load", setup);