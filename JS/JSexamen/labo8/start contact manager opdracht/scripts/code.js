let lijstPersonen, voornaam, achternaam, geboortedatum, email, aantalKinderen;
let personen = [];
let huidigeIndex = -1;

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier

    lijstPersonen = document.getElementById("lstPersonen");
    voornaam = document.getElementById("txtVoornaam");
    achternaam = document.getElementById("txtAchternaam");
    geboortedatum = document.getElementById("txtGeboortedatum");
    email = document.getElementById("txtEmail");
    aantalKinderen = document.getElementById("txtAantalKinderen");

    lijstPersonen.addEventListener("change", toonGegevens);
};

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

valideer();

    const nieuwpersoon = {
        voornaam: voornaam.value,
        achternaam: achternaam.value,
        geboortedatum: geboortedatum.value,
        email: email.value,
        aantalKinderen: aantalKinderen.value
    };


    if (huidigeIndex === -1) {
        personen.push(nieuwpersoon);
        let option = document.createElement("option");
        option.textContent = `${nieuwpersoon.voornaam} ${nieuwpersoon.achternaam}`;
        lijstPersonen.appendChild(option);
    }
    else {
        personen[huidigeIndex] = nieuwpersoon;
        lijstPersonen.options[huidigeIndex].textContent = `${nieuwpersoon.voornaam} ${nieuwpersoon.achternaam}`;
    }

}

const toonGegevens = () => {
    const geselecteerdeIndex = lijstPersonen.selectedIndex;
    const geselecteerdePersoon = personen[geselecteerdeIndex];

    huidigeIndex = geselecteerdeIndex;

    voornaam.value = geselecteerdePersoon.voornaam;
    achternaam.value = geselecteerdePersoon.achternaam;
    geboortedatum.value = geselecteerdePersoon.geboortedatum;
    email.value = geselecteerdePersoon.email;
    aantalKinderen.value = geselecteerdePersoon.aantalKinderen;

    }


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let bewaarBtn = document.getElementById("btnBewaar");

    voornaam.value = "";
    achternaam.value = "";
    geboortedatum.value = "";
    email.value = "";
    aantalKinderen.value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

    bewaarBtn.addEventListener("click", valideer);
    huidigeIndex = -1;
};


// onze setup functie die de event listeners registreert

window.addEventListener("load", setup);