const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);

}

// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}



const withoutBullets = () => {

    let listItems = document.getElementsByTagName("li");


    for (let i = 0; i < listItems.length; i++){
        //1e manier
        //listItems[i].style.listStyleType = "none";
        //listItems[i].style.backgroundColor = "red";
        //2e manier
        //listItems[i].className = "listItemStyleNone colorRed";
        //3e manier
        listItems[i].classList.remove("listItemStyleDisc");
        listItems[i].classList.add("colorRed");
        listItems[i].classList.add("listItemStyleNone");
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i++){
        //1e manier
        //listItems[i].style.listStyleType = "disc";
        //listItems[i].style.backgroundColor = null;
        //2e manier
        //listItems[i].className = "listItemStyleDisc";
        //3e manier
       listItems[i].classList.remove("colorRed");
        listItems[i].classList.remove("listItemStyleNone");
       listItems[i].classList.add("listItemsStyleDisc");

    }
}

// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent")
        .textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML")
        .innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}


window.addEventListener("load", setup);

