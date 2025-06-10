let btn = document.getElementById("btn");
let inputVak = document.getElementById("mijnInput");

const setup = () => {
    btn.addEventListener("click", splits);
}

const splits = () => {
    const tekst = inputVak.value;
    const tekstZonderSpaties = tekst.replace(/\s+/g, ' ').trim();
    const gescheiden = tekstZonderSpaties.split(" ").join(" ");
    console.log(gescheiden);
}

setup();