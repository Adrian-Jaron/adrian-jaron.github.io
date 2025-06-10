const setup = () => {
    const buttons = document.getElementsByClassName("button");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", update);
    }
}

const update = () => {
    const buttons = document.getElementsByClassName("button");
    if(buttons[0].style.backgroundColor === "blue"){
        buttons[0].style.backgroundColor = "white";
    }
    else{
        buttons[0].style.backgroundColor = "blue";
    }

}

window.addEventListener("load", setup);
