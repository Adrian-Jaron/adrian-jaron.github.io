
const storeSliderValues = () => {

    let red = document.getElementById('sldRed').value;
    let green = document.getElementById('sldGreen').value;
    let blue = document.getElementById('sldBlue').value;


    let rgb = {
        red: red,
            green: green,
            blue: blue
    };

    let jsonTekst = JSON.stringify(rgb);
    localStorage.setItem('slider', jsonTekst);


};

const restoreSliderValues = () => {
    let jsonText = localStorage.getItem('slider');
    if(jsonText != null) {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }

    update();
};

const storeSwatches = () => {
    let swatches = [];
    let swatchComponents = document.getElementsByClassName("swatch");
    for (let i = 0; i < swatchComponents.length; i++) {

        if(swatchComponents[i].id === "swatch") continue;
        let rgbWaardenSwatch = {
            red: swatchComponents[i].getAttribute("data-red"),
            green: swatchComponents[i].getAttribute("data-green"),
            blue: swatchComponents[i].getAttribute("data-blue"),
        };

            swatches.push(rgbWaardenSwatch);

    }

    let jsonTekst = JSON.stringify(swatches);
    localStorage.setItem('swatch', jsonTekst);
};


const restoreSwatches = () => {
    let jsonText = localStorage.getItem('swatch');
    if (jsonText != null) {
        let rgbWaarden = JSON.parse(jsonText);

        for (let i = 0; i < rgbWaarden.length; i++) {
            let rgb = rgbWaarden[i];

            if (rgb.red !== "null" && rgb.green !== "null" && rgb.blue !== "null") {
                addSwatchComponent(rgb.red, rgb.green, rgb.blue);
            }
        }
    }
};
