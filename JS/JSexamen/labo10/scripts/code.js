
let inputText = document.getElementById("inputfield");
let submitBtn = document.getElementById("submit-button");
let prefixArray = [];
let zoekopdracht = " ";
let cardArray = [];

const setup = () => {

submitBtn.addEventListener("click", e => {
    zoekOpdrachtUitvoeren(inputText.value);
})

    cardsRestoren();
}


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


const zoekOpdrachtUitvoeren = (zoekopdracht) => {
    const prefix = zoekopdracht.substring(0,2);
    const zoekText = zoekopdracht.substring(3);
    let url = " ";

    valideer(zoekopdracht);

    if(prefix == "/g"){
    url = `https://www.google.com/search?q=${encodeURIComponent(zoekText)}`;
    maakHistoriek("google", url, zoekText);
    }

    if(prefix == "/y"){
        url = `https://www.youtube.com/search?q=${encodeURIComponent(zoekText)}`;
        maakHistoriek("youtube", url, zoekText);
    }

    if(prefix == "/i"){
        url = `https://www.instagram.com/search?q=${encodeURIComponent(zoekText)}`;
        maakHistoriek("instagram", url, zoekText);
    }

    if(url){
        window.open(url, "_blank");
    }

}

const maakHistoriek = (site, url, zoekopdracht) => {
    cardWaardenBewaren(site, url, zoekopdracht);


}

const cardWaardenBewaren = (site, url , zoekopdracht) =>{
    let bestaandeData = localStorage.getItem("cardWaarden");

    if(bestaandeData){
        const parsen = JSON.parse(bestaandeData);
        if(Array.isArray(parsen)) {
            cardArray = parsen;
        }
    }

    const bestaatAl = cardArray.some(card => card.site === site
    && card.zoekopdracht === zoekopdracht);

    if(!bestaatAl){
        let cardWaarden = {
            url: url,
            site: site,
            zoekopdracht: zoekopdracht
        };

    cardArray.push(cardWaarden);
    localStorage.setItem('cardWaarden', JSON.stringify(cardArray));
        maakEenCard(site, url, zoekopdracht);
    }else{
        alert("bestaat al!")
    }
}


const maakEenCard = (site, url, zoekopdracht) => {
    let row = document.querySelector("#history-row");
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(site);
    console.log(card.className);

    col4.appendChild(card);
    row.appendChild(col4);

    let cardTitle = createElementWithClassName("div", "card-title");
    cardTitle.textContent = site;
    let cardBody = createElementWithClassName("div", "card-body");
    let cardText = createElementWithClassName("div", "card-text");
    cardText.textContent = zoekopdracht;
    cardBody.appendChild(cardText);

    let deleteBtn = createElementWithClassName("button", "delete-btn");
    let cardBtn = createElementWithClassName("button", "card-btn");
    deleteBtn.textContent = 'x';
    cardBtn.textContent = 'go';
    cardBtn.addEventListener("click", () => {
        window.open(url, "_blank");
    });

    card.style.display = "grid";
    card.style.width = '150px';

    deleteBtn.style.width = '30px'



    // eerst titel, daarna body, dan knop
    card.appendChild(deleteBtn);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardBtn);

    deleteBtn.addEventListener("click", () => verwijder(site, zoekopdracht, col4));
};

const verwijder = (site, zoekopdracht, element) => {
    element.remove();

    cardArray = cardArray.filter(c => !(c.site === site && c.zoekopdracht === zoekopdracht));

    localStorage.setItem('cardWaarden', JSON.stringify(cardArray));

}

const valideer = (zoekopdracht) =>{
   prefixArray = ["/y", "/i", "/g"];
    if(zoekopdracht.substring(0,1) !== "/"){
        alert("Prefix moet beginnen met een /")
    }
    else if(!prefixArray.includes(zoekopdracht.substring(0,2))){
    alert("prefix moet gekend zijn!");
    }
}

const cardsRestoren = () => {
    let cardWaarden = localStorage.getItem('cardWaarden');

    if(cardWaarden){
        let parsed = JSON.parse(cardWaarden);
        if(Array.isArray(parsed)){
            parsed.forEach(cardWaarden => {
                maakEenCard(cardWaarden.site, cardWaarden.url, cardWaarden.zoekopdracht);
            })
            cardArray = parsed;
        }
    }

}

window.addEventListener("load", setup);

