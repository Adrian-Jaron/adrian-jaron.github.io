let btn = document.getElementById("btn");
let inputfield = document.getElementById("inputfield");
let zoekOpdracht = "";

const setup = () => {
    btn.addEventListener('click', event => {
        zoekOpdrachtOphalen(inputfield.value);
        zoekOpdrachtUitvoeren2(inputfield.value);
    });
};



const zoekOpdrachtOphalen = (zoekOpdracht) =>{
    console.log(zoekOpdracht);
}

 /* const zoekOpdrachtUitvoeren = (zoekOpdracht) => {
    let regex = zoekOpdracht.match("\/[a-z]{1} [a-z]*")
    if(regex != null){
        window.open(`https://www.google.com/search?q=${encodeURIComponent(regex)}`, '_blank');
    }

    else{
        alert("invalid command");
    }
}
*/


const zoekOpdrachtUitvoeren2 = (zoekOpdracht) => {
    let prefix = zoekOpdracht.substring(0,2);
    let afrix = zoekOpdracht.substring(3);

    if(prefix == "/g") {
        let url = `https://www.google.com/search?q=${encodeURIComponent(afrix)}`;
        window.open(url, '_blank');
        maakHistoriek("google", afrix, url)
    }
    else if(prefix == "/y") {
        let url =  `https://www.youtube.com/search?q=${encodeURIComponent(afrix)}`;
        window.open(url, '_blank');
        maakHistoriek("youtube", afrix, url)
    }
    else if(prefix == "/i") {
        let url = `https://www.instagram.com/search?q=${encodeURIComponent(afrix)}`;
        window.open(url,'_blank');
        maakHistoriek("instagram", afrix, url)
    }
    else if(prefix == "/x") {
        let url = `https://www.x.com/search?q=${encodeURIComponent(afrix)}`;
        window.open(url, '_blank');
        maakHistoriek("x", afrix, url)
    }
    else if(prefix == "/v") {
        let url = `https://www.vives.be/search?q=${encodeURIComponent(afrix)}`;
        window.open(url, '_blank');
        maakHistoriek("vives", afrix, url)
    }
    else if(prefix == "/" || prefix == " ") {
        alert("prefix cannot be empty!");
    }

}

const maakHistoriek = (title, suffix, url) => {
    createCardAndAppend(title, suffix, url )
}



const createEelemntWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;

}

const createElementWithClassNameAndText = (element, className, text) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    e.appendChild(document.createTextNode(text));
    return e;
}

const createCardAndAppend = (title, commandoSuffix, url) => {
    let row = document.querySelector("#history-container .row");
    //let row = document.getElementsByClassName('row');
    let col4 = createEelemntWithClassName("div", "col-4")
    let card = createEelemntWithClassName("div", "card");
    card.classList.add(title.toLowerCase() + "-card");

    let cardTitle = createEelemntWithClassName("div", "card-title");
    let cardBody = createEelemntWithClassName("div", "card-body");
    let cardText = createEelemntWithClassName("div", "card-text");
    let cardLink = createEelemntWithClassName("div", "card-link");

    cardTitle.textContent = title;
    cardLink = url;
    cardText = commandoSuffix;
    col4.style.backgroundColor = 'blue'


   console.log(cardTitle.textContent);
    card.appendChild(cardText);
   card.appendChild(cardTitle);
   col4.appendChild(card);
   row.appendChild(col4);

   col4.style.marginTop = '25px';
   col4.style.width = '25%';


}





window.addEventListener("load", setup);
