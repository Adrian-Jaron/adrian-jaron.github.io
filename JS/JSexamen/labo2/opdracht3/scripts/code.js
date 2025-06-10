let pElement=document.getElementById("txtOutput");
let wijzigButton = document.getElementById("wijzig");

const setup = () => {


    wijzigButton.addEventListener("click", wijzig);
}

const wijzig = () => {
    if(pElement.textContent == "Hello world!"){
        pElement.innerHTML = "Welkom!";
    }
    else{
        pElement.innerHTML = "Hello world!";
    }

}

setup();