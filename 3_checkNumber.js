/**
 * Checks Numbers game.
 *
 * @param {Number} min
 * @param {Number} max
 * @param {Number} attempts
 * @param {Number} computerChoice
 */
function checkNumber(min, max, attempts, computerChoice = null)
{
    if (attempts === 0) {
        alert("Izgubio si! Pobednicki broj je " + computerChoice);
        return false;
    }

    if (!computerChoice) {
        computerChoice = getRandomNumber(min, max);
    }

    var userChoice = getUserChoice();
    var isUserWinCheck = isUserWin(computerChoice, parseInt(userChoice));

    if (isUserWinCheck) {
        alert("Pobedio si!!! Pogodio si broj koji sam zamislio");
    } else {
        var message = 'Trazeni broj je manji!';

        if (computerChoice > userChoice) {
            message = 'Trazeni broj je veci!'
        }

        alert(message);
        checkNumber(min, max, attempts - 1, computerChoice);
    }
}

/**
 * Checks if choices is equal.
 *
 * @param {Number} computerChoice
 * @param {Number} userChoice
 *
 * @return {Boolean}
 */
function isUserWin(computerChoice, userChoice)
{
    return computerChoice === userChoice;
}

/**
 * Returns Users Choice get from prompt input.
 *
 * @param {String} message
 *
 * @return {string}
 */
function getUserChoice(message = "Pogodi Broj!")
{
    var userChoice = prompt(message);

    return userChoice;
}

/**
 * Generates random number from min to max.
 *
 * @param {Number} min
 * @param {Number} max
 *
 * @return {Number}
 */
function getRandomNumber(min, max)
{
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;

    return randomNumber;
}