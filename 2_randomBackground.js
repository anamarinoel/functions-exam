function randomBackground() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + red + "," + blue + "," + green + ")";

    document.body.style.background = bgColor;
}

randomBackground();