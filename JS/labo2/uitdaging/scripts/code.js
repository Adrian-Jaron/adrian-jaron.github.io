let ul = document.querySelector('ul');
let button = document.getElementById("btn");
button.addEventListener("click", function() {
    if(ul.style.listStyleType==="none"){
        ul.style.listStyleType="disc";
        button.innerHTML="No bullets";
    }
    else{
        ul.style.listStyleType="none";
        button.innerHTML="bullets";
    }
});