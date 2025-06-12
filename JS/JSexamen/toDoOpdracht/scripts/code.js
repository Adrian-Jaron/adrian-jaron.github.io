let tasks = [];

let submitButton = document.getElementById("submit-btn");

const setup = () => {
    submitButton.addEventListener("click", taakAanmaken);

    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.addEventListener("dragover", (e) => e.preventDefault());

        column.addEventListener("drop", (e) =>{
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(id);
            column.appendChild(draggedElement);
        })
    })

    tasks = JSON.parse(localStorage.getItem("taken"));

    taakRestoren();
}

const taakAanmaken = () => {
    let titleInput = document.getElementById("titelInput");
    let beschrijvingInput = document.getElementById("beschrijvingInput");
    let datum = new Date().toISOString();

    let takenContainer = document.getElementById('todo-row');
    let dragElement = document.createElement('div');
    dragElement.id = `task-${Date.now()}`;
    dragElement.setAttribute("draggable", "true");
    dragElement.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", dragElement.id);
    })

    let titel = document.createElement("p");
    titel.style.fontWeight = "bold";
    let beschrijving = document.createElement("p");
    let datumP = document.createElement("p");

    datumP.textContent = datum;
    titel.textContent = titleInput.value;
    beschrijving.textContent = beschrijvingInput.value;


    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Verwijder";
    deleteBtn.style.width = 'auto';
    deleteBtn.style.height = 'auto';

    deleteBtn.addEventListener("click", (e) => {
       takenRemoven(dragElement.id);
   })


    dragElement.appendChild(deleteBtn);
    dragElement.appendChild(titel);
dragElement.appendChild(beschrijving);
dragElement.appendChild(datumP);
    dragElement.classList.add('dragItem');
    takenContainer.appendChild(dragElement);


    let taak = {
        id: dragElement.id,
        titel: titelInput.value,
        beschrijving: beschrijvingInput.value,
        datum: datum,
    }

    tasks.push(taak);

    localStorage.setItem("taken", JSON.stringify(tasks));

}

const taakRestoren = () =>{
    let takenContainer = document.getElementById('todo-row');


    tasks.forEach((taak) => {
        let dragElement = document.createElement('div');
        dragElement.id = taak.id;
        dragElement.setAttribute("draggable", "true");
        dragElement.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", dragElement.id);
        })

        let titel = document.createElement("p");
        titel.style.fontWeight = "bold";
        let beschrijving = document.createElement("p");
        let datumP = document.createElement("p");

        datumP.textContent = taak.datum;
        titel.textContent = taak.titel;
        beschrijving.textContent = taak.beschrijving;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Verwijder";
        deleteBtn.style.width = 'auto';
        deleteBtn.style.height = 'auto';

        deleteBtn.addEventListener("click", (e) => {
            takenRemoven(dragElement.id);
        })

        dragElement.appendChild(deleteBtn);
        dragElement.appendChild(titel);
        dragElement.appendChild(beschrijving);
        dragElement.appendChild(datumP);
        dragElement.classList.add('dragItem');
        takenContainer.appendChild(dragElement);

    })
}

const takenRemoven = (id) => {
   tasks = tasks.filter(task => task.id !== id);
   localStorage.setItem("taken", JSON.stringify(tasks));

   const element = document.getElementById(id);
   if(element){
       element.remove();
   }
}

window.addEventListener("load", setup);


