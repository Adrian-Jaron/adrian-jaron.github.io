const statusMap = {
    todo: "To Do",
    inprogress: "In Progress",
    done: "Done"
};


let titelInput = document.getElementById("titel-input");
let beschrijvingInput = document.getElementById("beschrijving-input");
let submitBtn = document.getElementById("submit-btn");

const setup = () => {
    submitBtn.addEventListener("click", e => {
        e.preventDefault();
        let titel = titelInput.value;
        let beschrijving = beschrijvingInput.value;
        let datum = new Date().toISOString();
        let status = 'to do';
        taakAanmaken(titel, beschrijving, datum, status);
    });

    takenRestoren();


    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.addEventListener("dragover", e => {
            e.preventDefault();
        });

        column.addEventListener("drop", e => {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(id);
            if (draggedElement) {
                const columnId = e.currentTarget.id.toLowerCase();


                const statusDiv = draggedElement.querySelector(".status");


                if (statusDiv) {
                    statusDiv.textContent = statusMap[columnId] || columnId;
                }


                e.currentTarget.appendChild(draggedElement);


                updateTaakStatus(draggedElement, columnId);
            }
        });

    });
};


const updateTaakStatus = (taakElement, status) => {
    const taakId = taakElement.id;
    let taakList = JSON.parse(localStorage.getItem("taakList")) || [];


    const taak = taakList.find(t => t.id == taakId);
    if (taak) {
        taak.status = status;
        localStorage.setItem("taakList", JSON.stringify(taakList));
    }
};


const taakTonen = (taak) => {
    const taakDiv = document.createElement("div");

    const taakTitleDiv = document.createElement("div");
    const taakDescriptionDiv = document.createElement("div");
    const taakDatumDiv = document.createElement("div");
    const statusDiv = document.createElement("div");

    taakTitleDiv.textContent = taak.titel;
    taakDescriptionDiv.textContent = taak.beschrijving;
    taakDatumDiv.textContent = taak.datum;
    statusDiv.textContent = statusMap[taak.status.toLowerCase()] || taak.status;
    statusDiv.classList.add("status");
    taakDiv.appendChild(taakTitleDiv);
    taakDiv.appendChild(taakDescriptionDiv);
    taakDiv.appendChild(taakDatumDiv);
    taakDiv.appendChild(statusDiv);

    taakDiv.classList.add("task");
    taakDiv.setAttribute("draggable", "true");
    taakDiv.id = taak.id;


    taakDiv.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", taakDiv.id);
    });


    let column = document.getElementById(taak.status.toLowerCase().replace(/\s/g, ''));
    if (!column) {
        column = document.getElementById('todo'); n
    }
    column.appendChild(taakDiv);
};

const taakAanmaken = (title, beschrijving, datum, status) => {
    const taak = {
        titel: title,
        beschrijving: beschrijving,
        status: status,
        datum: datum,
        id: Date.now(),
    };

    const bestaandeTaken = localStorage.getItem("taakList");
    const taakList = bestaandeTaken ? JSON.parse(bestaandeTaken) : [];

    taakList.push(taak);
    localStorage.setItem("taakList", JSON.stringify(taakList));

    taakTonen(taak);
};


const takenRestoren = () => {
    const json = localStorage.getItem("taakList");
    if (json != null) {
        const taaklijst = JSON.parse(json);
        taaklijst.forEach(taak => {
            taakTonen(taak);
        });
    }
};

window.addEventListener("load", setup);
