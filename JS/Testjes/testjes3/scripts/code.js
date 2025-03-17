let leeg = [];
let teksten = ["hey","yo","dag", "yo"];
let mix = [true, "yo", 2];
const setup = () => {
console.log(mix.length);
for(let i = 0; i<mix.length; i++) {
    console.log(mix[i]);
}


console.log(mix.indexOf("yo"));
console.log(teksten.lastIndexOf("yo", 2));

teksten.push("hey2");
mix.pop();
teksten.shift();
mix.slice(1,2)

    console.log(teksten.join());

window.alert("Opletten!");
window.confirm("Danger!");
window.prompt("Wat is uw naam?", "ik weet het niet")

    
}

setup();