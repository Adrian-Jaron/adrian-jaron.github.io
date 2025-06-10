const familieleden = ["Adrian Jaron", "Adrian Jaron", "Adrian Jaron",
    "Adrian Jaron", "Adrian Jaron"];

const setup = () => {
    console.log(familieleden);
    console.log(familieleden[0]);
    console.log(familieleden[1]);
    console.log(familieleden[4]);

   VoegNaamToe(familieleden);
   ArrayAlsStringTonen(familieleden);


}

const VoegNaamToe = (familieleden) => {
    let nieuweNaam = prompt("Geef nog een naam");
    if(nieuweNaam){
        familieleden.push(nieuweNaam);
    }
    console.log(familieleden);
}

const ArrayAlsStringTonen = (familieleden) => {
    const alsString = familieleden.join(", ");
    console.log(alsString);
}

setup();

