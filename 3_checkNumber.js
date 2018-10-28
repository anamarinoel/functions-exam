/**
 * Checks Numbers game.
 *
 * @param {Number} min
 * @param {Number} max
 * @param {Number} attempts
 */
function checkNumber(min, max, attempts) {
    var randomNumber = getRandomNumber(min, max);
    var userChoice = getUserChoice();

    for (var i = 0; i < attempts; i++) {
        console.log(i);
        var result = isUserWin(randomNumber, parseInt(userChoice));

        if (result) {
            alert("Pobedio si!!! Pogodio si broj koji sam zamislio");
            break;
        }
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
function isUserWin(computerChoice, userChoice) {
    return computerChoice === userChoice;
}

/**
 * Returns Users Choice get from prompt input.
 *
 * @param {String} message
 *
 * @return {string}
 */
function getUserChoice(message = "Pogodi Broj!") {
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
function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;

    return randomNumber;
}