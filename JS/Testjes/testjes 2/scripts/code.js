const fruitsorten = ['apple','banaan','pineapple']

const loopen = () => {
    for (let index = 0; index <= fruitsorten.length; index++) {
        console.log(index);
        index++;

    }
}

function loopenOmgekeerd() {
    for (let index = 3; index >= 0; index--) {
        console.log(index);
        index++;

    }
}
loopenOmgekeerd();
loopen();