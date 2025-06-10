
let lijstPersonen, voornaam, achternaam, geboortedatum, email, aantalKinderen;
let personen = [];
let huidigeIndex = -1;

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarNieuwePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    lijstPersonen = document.getElementById("lstPersonen");
    voornaam = document.getElementById("txtVoornaam");
    achternaam = document.getElementById("txtFamilienaam");
    geboortedatum = document.getElementById("txtGeboorteDatum");
    email = document.getElementById("txtEmail");
    aantalKinderen = document.getElementById("txtAantalKinderen");


    lijstPersonen.addEventListener("change", toonGegevens)
};



const bewaarNieuwePersoon = () => {
    console.log("Klik op de knop bewaar");



        const nieuwePersoon = {
            firstName: voornaam.value,
            lastName: achternaam.value,
            birthdate: geboortedatum.value,
            email: email.value,
            childcount: aantalKinderen.value,
        };

    if(huidigeIndex === -1) {
        personen.push(nieuwePersoon);
        let option = document.createElement('option');
        option.textContent = `${nieuwePersoon.firstName} ${nieuwePersoon.lastName}`;
        lijstPersonen.appendChild(option);

        huidigeIndex = personen.length - 1;
        lijstPersonen.selectedIndex = huidigeIndex;
    }
    else{
        personen[huidigeIndex] = nieuwePersoon;
        lijstPersonen.options[huidigeIndex].textContent = `${nieuwePersoon.firstName} ${nieuwePersoon.lastName}`
    }
};

const toonGegevens = () => {
    const geselecteerdeIndex = lijstPersonen.selectedIndex;
    const geselecteerdePersoon = personen[geselecteerdeIndex];

    huidigeIndex = geselecteerdeIndex;

    voornaam.value = geselecteerdePersoon.firstName;
    achternaam.value = geselecteerdePersoon.lastName;
    geboortedatum.value = geselecteerdePersoon.birthdate;
    email.value = geselecteerdePersoon.email;
    aantalKinderen.value = geselecteerdePersoon.childcount;
}



const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let bewaarBtn = document.getElementById("btnBewaar");

    voornaam.value = "";
    achternaam.value = "";
    geboortedatum.value = "";
    email.value = "";
    aantalKinderen.value = "";
    aantalKinderen.value = "";

    huidigeIndex = -1;
};


window.addEventListener("load", setup);