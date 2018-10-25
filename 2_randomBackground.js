/**
 * Changes Background Color.
 *
 * @returns void
 */
function randomBackground()
{
    var red = getRandomColorNumber();
    var blue = getRandomColorNumber();
    var green = getRandomColorNumber();

    var bgColor = "rgb(" + red + "," + blue + "," + green + ")";

    document.body.style.background = bgColor;
}

/**
 * Function returns Random Color Number.
 *
 * @returns {number}
 */
function getRandomColorNumber ()
{
   return Math.floor(Math.random() * 256)
}

randomBackground();

