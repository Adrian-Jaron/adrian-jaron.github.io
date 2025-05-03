let btn = document.getElementById("btn");
let inputfield = document.getElementById("inputfield");
let zoekOpdracht = "";
let cardArray = [];

const setup = () => {
    btn.addEventListener('click', event => {
        zoekOpdrachtOphalen(inputfield.value);
        zoekOpdrachtUitvoeren2(inputfield.value);
    });
    cardsRestoren();
};

const zoekOpdrachtOphalen = (zoekOpdracht) => {
    console.log(zoekOpdracht);
};

const zoekOpdrachtUitvoeren2 = (zoekOpdracht) => {
    let prefix = zoekOpdracht.substring(0, 2);
    let afrix = zoekOpdracht.substring(3);
    let url = "";
    let arrayPrefixen = ["/g", "/y", "/i", "/x"];

    for (let i = 0; i < arrayPrefixen.length; i++) {
        if(prefix === arrayPrefixen[i]) {
            if (prefix === arrayPrefixen[0]) {
                url = `https://www.google.com/search?q=${encodeURIComponent(afrix)}`;
                maakHistoriek("google", afrix, url);
            } else if (prefix === arrayPrefixen[1]) {
                url = `https://www.youtube.com/search?q=${encodeURIComponent(afrix)}`;
                maakHistoriek("youtube", afrix, url);
            } else if (prefix === arrayPrefixen[2]) {
                url = `https://www.instagram.com/search?q=${encodeURIComponent(afrix)}`;
                maakHistoriek("instagram", afrix, url);
            } else if (prefix === arrayPrefixen[3]) {
                url = `https://www.x.com/search?q=${encodeURIComponent(afrix)}`;
                maakHistoriek("x", afrix, url);
            }
            break;
        }
    }
    if(!arrayPrefixen.includes(prefix) && zoekOpdracht.substring(0,1) === "/" ) {
        alert("prefix is niet correct!");
    }

    if(zoekOpdracht.substring(0,1) !== "/"){
        alert("invalid command");
    }

    if (url) {
        window.open(url, '_blank');
    }
};

const maakHistoriek = (title, suffix, url) => {
    createCardAndAppend(title, suffix, url);
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createCardAndAppend = (title, commandoSuffix, url, skipSave = false) => {

    if(!skipSave){
        cardWaardenBewaren(title, commandoSuffix, url);
    }

    let row = document.querySelector("#history-container .row");
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase() + "-card");
    console.log(card.className);

    let cardTitle = createElementWithClassName("div", "card-title");
    let cardBody = createElementWithClassName("div", "card-body");
    let cardText = createElementWithClassName("div", "card-text");
    let cardLink = createElementWithClassName("div", "card-link");
    let cardBtn = createElementWithClassName("button", "card-btn");

    card.style.display = "grid";
    cardTitle.textContent = title;
    cardLink.textContent = url;
    cardText.textContent = commandoSuffix;
    cardBtn.textContent = 'go';
    cardTitle.style.textAlign = "left";
    cardText.style.textAlign = "left";



    card.classList.add("d-flex", "flex-column");
    cardBtn.textContent = 'go';
    cardBtn.classList.add("align-self-start");


    cardBtn.addEventListener('click', event => {
        window.open(url, '_blank');
    });


    col4.style.marginTop = '25px';
    col4.style.marginLeft = '25px';
    col4.style.width = '300px';


    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardBtn);
    col4.appendChild(card);
    row.appendChild(col4);



};

const cardWaardenBewaren = (title, commandoSuffix, url) => {
    let bestaandeData = localStorage.getItem('cardWaarden');

    if (bestaandeData) {
        const parsed = JSON.parse(bestaandeData);
        if (Array.isArray(parsed)) {
            cardArray = parsed;
        }
    }

    let cardWaarden = {
        url: url,
        title: title,
        commandoSuffix: commandoSuffix
    };

    cardArray.push(cardWaarden);
    localStorage.setItem('cardWaarden', JSON.stringify(cardArray));
};

const cardsRestoren = () => {
    let bestaandeData = localStorage.getItem('cardWaarden');

    if (bestaandeData) {
        const parsed = JSON.parse(bestaandeData);
        if (Array.isArray(parsed)) {
                parsed.forEach(cardWaarden => {
                    createCardAndAppend(cardWaarden.title, cardWaarden.commandoSuffix, cardWaarden.url, true);
                });
            }
        }
};

window.addEventListener("load", setup);
