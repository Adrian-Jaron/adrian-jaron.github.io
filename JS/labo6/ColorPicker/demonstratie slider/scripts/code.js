let bewaardeBlokken = [];
let teller = 0;
const setup = () => {
	let lijst = document.getElementById("lijstje");


	let swatch = document.getElementsByClassName('swatch')[0];


	let sliders = document.getElementsByClassName("slider");
	let saveButton = document.getElementById("save-btn");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}


	saveButton.addEventListener("click", () => bewaren(swatch, lijst));

	update();
};

const update = () => {
	let sliders = document.getElementsByClassName("slider");

	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;

	let labels = document.getElementsByTagName("label");
	let swatch = document.getElementsByClassName("swatch")[0];




	swatch.style.backgroundColor = `rgb(${red},${green},${blue})`;
	for (let i = 0; i < sliders.length; i++) {
		labels[i].innerHTML = sliders[i].value;
	}

	console.log(`Rood: ${red}, Groen: ${green}, Blauw: ${blue}`);
};

const bewaren = (kleur, lijst) => {

	let spanElement = document.createElement("span");
	let sliders = document.getElementsByClassName("slider");

	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;

	let nieuweSwatch = document.createElement("div");
	nieuweSwatch.classList.add("swatch");
	nieuweSwatch.style.backgroundColor = `rgb(${red},${green},${blue})`;
	nieuweSwatch.style.padding = '10px';
	nieuweSwatch.style.marginBottom = '10px';
	nieuweSwatch.style.boxSizing = 'border-box';
if(nieuweSwatch){
	teller++;
}


	spanElement.innerText = teller;
	lijst.appendChild(nieuweSwatch);

	nieuweSwatch.appendChild(spanElement);


	bewaardeBlokken.push(nieuweSwatch);

	console.log(`Opgeslagen kleur: rgb(${red},${green},${blue})`);
};







window.addEventListener("load", setup);

