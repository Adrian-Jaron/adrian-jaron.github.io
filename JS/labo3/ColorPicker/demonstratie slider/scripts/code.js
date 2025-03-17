const setup = () => {
	let swatches=document.getElementsByClassName("swatch");
	let sliders = document.getElementsByClassName("slider");

	for(let i=0; i<sliders.length; i++){
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}



	update();
	//alternatieve manier is met een for loop waar je met index add event listeners instelt!
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");

	let red=sliders[0].value;
	let green=sliders[1].value;
	let blue=sliders[2].value

	let labels = document.getElementsByTagName("label");
	let swatch = document.getElementsByClassName("swatch");



	for(let i = 0; i< sliders.length; i++){
		swatch[0].style.backgroundColor = `rgb(${red},${green},${blue})`;
		labels[i].innerHTML = sliders[i].value;
	}

	console.log("de waarde van de groene slider is momenteel : "+red);
	console.log("de waarde van de rood slider is momenteel : "+green);
	console.log("de waarde van de  blauwe slider is momenteel : "+blue);

}

window.addEventListener("load", setup);