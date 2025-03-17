let isNightTime = true;
let light = "red";
let fruit = "apple"
const setup = () => {
    if(light === "red"){
        alert("Color is red!")
    }
    else if(light === "green"){
        alert("Color is green!");
    }
  isNightTime ? console.log("Yes it is nighttime") : console.log("No it is not!");
}

function checken(){
    switch(fruit){
        case "ananas":
            console.log("Ananas is 10 eur");
            break;
        case "banana":
            console.log("Bananas is 20 eur");
            break;
        case "Orange":
            console.log("Orange is 20 eur");
            break;
            default:
                console.log("nothing");
                break;
    }
}



const calculate = (hoogte, breedte) => {
    const oppervlakte = hoogte * breedte;
    return oppervlakte;
}


calculate(2, 3);
console.log(calculate(5, 3));
checken();
setup();