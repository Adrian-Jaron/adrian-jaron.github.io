;

const setup = () => {
    let paragraaf = document.getElementsByTagName('p')[0];
    let buttonSubstring = document.getElementById("btnSubstring")
    console.log(paragraaf);
    let paragraafje = document.getElementById('txtOutput');
    paragraafje.innerText = "Welkom!";

    let button = document.getElementById("btnKopieer");
    button.addEventListener("click", kopieer);
    buttonSubstring.addEventListener("click", substring);
}

const kopieer = () => {
    let txtinput = document.getElementById("txtInput");
    let tekst = txtinput.value;
   let txtOutput = document.getElementById("txtOutput");
   txtOutput.innerHTML = tekst;
}

const substring = () => {
    let txtinput = document.getElementById("txtInput");
    let tekst = txtinput.value;
    let output = document.getElementById("outputje");
    let nummertje1 = parseInt(document.getElementById("nummertje1").value);
    let nummertje2 = parseInt(document.getElementById("nummertje2").value);

    let resultaat = tekst.substring(nummertje1, nummertje2)

    output.innerHTML = resultaat;

}




window.addEventListener("load", setup);
