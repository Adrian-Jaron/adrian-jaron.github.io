const setup = () => {
    let button = document.getElementsByTagName('button');
 for(let i = 0; i<button.length; i++){
    button[i].addEventListener('click', (e) => {
        let huidigeKleur = e.target.style.backgroundColor;
        if(huidigeKleur === "" || huidigeKleur === "white") {
            button[i].style.backgroundColor = 'blue';
        }
        else{
            button[i].style.backgroundColor = null;
        }
    })
 }
}

window.addEventListener("load", setup);