const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    console.log(tekst);
};

const btnKopieer = document.getElementById("btnKopieer");
btnKopieer.addEventListener("click", kopieer);
