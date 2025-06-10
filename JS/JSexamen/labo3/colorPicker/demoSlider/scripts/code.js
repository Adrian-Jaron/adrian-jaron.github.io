const setup = () => {
	let colorDemo=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");


	for(let i=0; i<sliders.length; i++) {
		sliders[i].addEventListener("input", update );
		sliders[i].addEventListener("change", update );
		}
	colorDemo[0].style.backgroundColor="red";

}


const update = () => {
	let r = document.getElementById("sliderRed").value;
	let b = document.getElementById("sliderBlue").value;
	let g = document.getElementById("sliderGreen").value;

	const colorDemo = document.getElementsByClassName("colorDemo");
	colorDemo[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
window.addEventListener("load", setup);