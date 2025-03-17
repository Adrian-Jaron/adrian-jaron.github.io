const setup = () => {
    let txtElement = document.getElementById("txt");
    let txtContent = txtElement.textContent;
    let index = txtContent.indexOf("de");
    let resultaat = "";

    while (index !== -1) {
        resultaat += txtContent.substring(0, index) + "het";
        txtContent = txtContent.substring(index + 2);
        index = txtContent.indexOf("de");
    }

    resultaat += txtContent;
    txtElement.textContent = resultaat;

    console.log(txtContent);
    console.log(txtElement.textContent);
}

window.addEventListener('load', setup);
