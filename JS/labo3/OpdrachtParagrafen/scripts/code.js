const setup = () =>
{    let paragrafen =
    document.getElementsByClassName('belangrijk');
    for(let i=0; i<paragrafen.length; i++) {
    paragrafen[i].className+=" opvallend";}
};
window.addEventListener("load", setup);