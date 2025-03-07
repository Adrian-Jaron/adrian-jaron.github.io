let button = document.getElementById('button');
let input = document.getElementById("input");

const setup = () => {
    const maakMetSpaties = (inputText) => {
        let result = "";
        for(let i = 0; i < inputText.length; i++) {
            result += " " + inputText.charAt(i);
        }
        return result;
    }

    document.getElementById("button").addEventListener("click", () =>{
        let tekstMetSpaties = maakMetSpaties(input.value);
        console.log(tekstMetSpaties);
    });


}



window.addEventListener("load", setup);





