const global = {
 AANTAL_HORIZONTAAL: 4,
 AANTAL_VERTICAAL: 3,
 AANTAL_KAARTEN: 6
};

let geselecteerdeKaarten = [];
let kanKlikken = true;

const setup = () => {
 let playField = document.getElementById("playField");
 playField.innerHTML = "";
 const kaartNamen = [
  "kaart1.jpg", "kaart2.jpg", "kaart3.jpg",
  "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"
 ];

 let kaarten = [...kaartNamen, ...kaartNamen];
 kaarten.sort(() => Math.random() - 0.5);


 for (let i = 0; i < kaarten.length; i++) {
  let achterkant = document.createElement('img');
  achterkant.src = "images/achterkant.png";
  achterkant.style.width = '150px';
  achterkant.style.height = '150px';
  achterkant.style.border = '1px solid black';
  achterkant.style.padding = '5px';
  achterkant.dataset.index = i;
  achterkant.dataset.kaart = kaarten[i];

  playField.appendChild(achterkant);


  achterkant.addEventListener('click', () => {
   if (kanKlikken && !geselecteerdeKaarten.includes(achterkant)) {
    draaiOm(achterkant);
   }
  });
 }
};


function draaiOm(kaart) {
 kaart.src = `images/${kaart.dataset.kaart}`;
 geselecteerdeKaarten.push(kaart);


 if (geselecteerdeKaarten.length === 2) {
  kanKlikken = false;
  setTimeout(() => {
   vergelijkKaarten();
  }, 1000);
 }
}

let teller = 0;

function vergelijkKaarten() {
 let [kaart1, kaart2] = geselecteerdeKaarten;

 if (kaart1.dataset.kaart === kaart2.dataset.kaart) {

  alert("Match!");
  teller++;
 } else {

  alert("Geen match!");
  kaart1.src = "images/achterkant.png";
  kaart2.src = "images/achterkant.png";
 }


 geselecteerdeKaarten = [];
 kanKlikken = true;


 if (teller === 6) {
  alert("Spel gedaan!");

 }
}


window.addEventListener("load", setup);