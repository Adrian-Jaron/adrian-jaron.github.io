let playfield = document.getElementById("playField");

let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0
};

let startButton = document.createElement("button");
startButton.style.width = '100px';
startButton.style.height = '30px';
startButton.textContent = 'Start Game';
playfield.appendChild(startButton);


startButton.addEventListener("click", () => {
    startGame();
});


function startGame() {
    startButton.style.visibility = 'hidden';
    let imageElement = document.createElement("img");
    imageElement.style.width = global.IMAGE_SIZE + "px";
    imageElement.style.height = global.IMAGE_SIZE + "px";


    let randomNumber = getRandomNumber();
    imageElement.src = global.IMAGE_PATH_PREFIX + randomNumber + global.IMAGE_PATH_SUFFIX;
    imageElement.isBomb = randomNumber === 0;

    playfield.appendChild(imageElement);


    imageElement.addEventListener("click", function () {
        if (imageElement.isBomb) {
            alert("Verloren!");
            imageElement.style.visibility = "hidden";
        } else {
            alert("Je hebt een image geklikt!");
        }


        randomNumber = getRandomNumber();
        changeImage(imageElement, randomNumber);
    });


    setInterval(() => {
        randomNumber = getRandomNumber();
        changeImage(imageElement, randomNumber);
    }, 1000);


    setInterval(() => moveImage(imageElement), 1000);
}


function getRandomNumber() {
    return Math.floor(Math.random() * global.IMAGE_COUNT);
}


const changeImage = (imageElement, randomNumber) => {
    imageElement.src = global.IMAGE_PATH_PREFIX + randomNumber + global.IMAGE_PATH_SUFFIX;
    console.log("Image changed to:", randomNumber);

    imageElement.isBomb = randomNumber === 0;
};


const moveImage = (imageElement) => {
    let playfieldWidth = playfield.offsetWidth;
    let playfieldHeight = playfield.offsetHeight;


    let randomHeight = Math.random() * (playfieldHeight - global.IMAGE_SIZE);
    let randomWidth = Math.random() * (playfieldWidth - global.IMAGE_SIZE);


    imageElement.style.top = randomHeight + "px";
    imageElement.style.left = randomWidth + "px";
    imageElement.style.position = "absolute";
    console.log("Image moved to:", randomHeight, randomWidth);
};
