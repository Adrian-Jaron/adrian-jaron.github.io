let input = document.getElementById('tafels-input');
let btn = document.getElementById('tafels-btn');
let tabel = document.getElementById('tafels-tabel');
let getal;
let getallen = [];

const setup = () => {

    btn.addEventListener('click', event => {
        if(isGetal(input.value)) {

        getal = Number(input.value);
        getallen.push(getal);
        tabelVullen(getal);
    }
        else{
            getal = 0;
        }

        input.value = " ";
    })


    const isGetal = (tekst) => {
        return !isNaN(tekst);
    }


    const tabelVullen = (getal) =>{


        const tableContainer = document.createElement("div");
        tabel.appendChild(tableContainer);

const datatabel = document.createElement('table');
const thead = document.createElement('thead');
const rij = document.createElement('tr');
const th = document.createElement('th');
const nieuweDatum = new Date();
const tijd = `${nieuweDatum.getHours()}:${nieuweDatum.getMinutes()}:${nieuweDatum.getSeconds()}`;


th.textContent = 'Tafel van ' + getal + " aangemaakt op " + tijd;

rij.appendChild(th);
thead.appendChild(rij);

const tbody = document.createElement('tbody');

const data = [
    [getal + ' x 1' + ' = ' + getal * 1],
    [getal + ' x 2' + ' = ' + getal * 2],
    [getal + ' x 3' + ' = ' + getal * 3],
    [getal + ' x 4' + ' = ' + getal * 4],
    [getal + ' x 5' + ' = ' + getal * 5],
    [getal + ' x 6' + ' = ' + getal * 6],
    [getal + ' x 7' + ' = ' + getal * 7],
    [getal + ' x 8' + ' = ' + getal * 8],
    [getal + ' x 9' + ' = ' + getal * 9],
    [getal + ' x 10' + ' = ' + getal * 10],

]

    data.forEach((rowData, index) => {
        const row = document.createElement('tr');

        row.style.backgroundColor = index % 2 === 0 ? "white" : "lightgrey";

        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            row.appendChild(td);


        });
        tbody.appendChild(row);
    });
        datatabel.appendChild(thead);
        datatabel.appendChild(tbody);
        tableContainer.appendChild(datatabel);
        datatabel.style.width = '300px';
        tabel.style.width = '300px'
        tableContainer.style.marginBottom = '20px';
    };

};

setup();




