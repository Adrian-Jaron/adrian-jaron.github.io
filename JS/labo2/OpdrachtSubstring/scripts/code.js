
let button = document.getElementById("btn");
button.addEventListener("click", function() {
    let numberInput1 = document.getElementById("inputNumber1");
    let numberInput2 = document.getElementById("inputNumber2");
    let textInput = document.getElementById("inputText");
    let textOutput = document.getElementById("textOutput");

    let inputText = textInput.value;
    let startIndex = parseInt(numberInput1.value);
    let eindIndex = parseInt(numberInput2.value);



    let substringString =  inputText.substring(startIndex, eindIndex);
    textOutput.innerHTML = substringString;
})



