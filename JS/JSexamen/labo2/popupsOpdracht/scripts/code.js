
const setup = () => {


    const gebruikerAlert = alert("Dit is een mededeling");
    console.log(gebruikerAlert);

    const gebruikerBevestigt = confirm("Weet u het zeker?");
    console.log("gebruiker heeft gekozen ", gebruikerBevestigt);


    const gebruikerprompt = prompt("Wat is uw naam", "onbekend");
    console.log(gebruikerprompt);
}

setup();