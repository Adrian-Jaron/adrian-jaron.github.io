const setup = () => {
    let texts=document.querySelectorAll(".text");
	for (let i=0;i<texts.length;i++) {
		texts[i].addEventListener("click", klik);
	}	
}


const klik = (event) => {
	if(event.target.style.color !== "red") {
		event.target.style.color = "red";
	}
	else{
		event.target.style.color = "blue";
	}
};

window.addEventListener("load", setup);