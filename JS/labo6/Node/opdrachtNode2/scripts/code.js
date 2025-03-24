let liElementen = document.getElementsByTagName('li');
let paragraaf = document.getElementsByTagName('p');
let divelement = document.getElementsByTagName('div');
const image = document.createElement("img");
const setup = () => {
    let liElementen = document.getElementsByTagName('li');
    for (let i = 0; i < liElementen.length; i++) {
        liElementen[i].classList.add('listitem');
    }

    image.src = 'face.jpg';
    document.body.appendChild(image);
    divelement[0].appendChild(paragraaf[0]);

}

window.addEventListener("load", setup);