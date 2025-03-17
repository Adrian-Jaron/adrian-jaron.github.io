const setup = () =>
{    let paragrafen =
    document.getElementsByClassName('belangrijk');
    for(let i = 0; i< paragrafen.length; i++){
        paragrafen[i].className += "belangrijk";
    }
}
window.addEventListener("load", setup);