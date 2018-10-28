/**
 * Returns random Number between x and y.
 *
 * @param {Number} min
 * @param {Number} max
 *
 * @return {Number}
 */
function randomNumber(min = 5, max = 20)
{
    return Math.floor(Math.random() * (max - min)) + min;
}