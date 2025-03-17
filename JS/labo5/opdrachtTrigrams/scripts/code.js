
const setup = () => {

    let txtInput = document.getElementById('txtInput');
    let btn = document.getElementById('btn');


   btn.addEventListener('click', () => {
       trigrams = slicen(txtInput.value);
       lijstVullen(trigrams);
   })
}

const slicen = (tekst) => {
    trigrams = [];
    for(let i = 0; i <= tekst.length - 3; i++) {
        trigrams.push(tekst.slice(i, i + 3));
        console.log(trigrams);
    }
return trigrams;
}

const lijstVullen = (trigrams) => {
    let list = document.getElementsByClassName('list')[0];
    let output = "";

    for(let i = 0; i < trigrams.length; i++) {
        output += `<li>${trigrams[i]}</li>`;

        console.log(trigrams[i]);

    }

    console.log(list);
    console.log(output);
    list.innerHTML = output;

}
setup();
window.addEventListener('load', setup)
