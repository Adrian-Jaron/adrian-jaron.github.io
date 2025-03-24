const setup = () =>{
    let lstParDiv = document.querySelectorAll("#myDiv > .color");

    for (let i = 1; i < lstParDiv.length; i++) {
        lstParDivp[i].addEventListener("click", changeDiv);
    }
}

const change = (e) => {

}

const changeDiv = (e) => {
    e.target.className = "colorParDiv"
}