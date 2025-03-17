let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");


const setup = () => {
    image1.addEventListener("mouseover", tonen)
    image2.addEventListener("mouseover", verstoppen);
    image2.classList.add("notVisible");
}

const tonen = () => {
     image2.classList.remove("notVisible");
     image1.classList.add("notVisible");
}

const verstoppen = () =>{
    image1.classList.remove("notVisible");
    image2.classList.add("notVisible");
}

window.addEventListener('load', setup);

