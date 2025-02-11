let setup = () => {

    let btnElement = document.getElementById('btn');
    btnElement.addEventListener('click', (e) => {
        let pElement = document.getElementById('txtOutput');
        pElement.innerHTML = "Welkom!";

    })

}
window.addEventListener("load", setup);

