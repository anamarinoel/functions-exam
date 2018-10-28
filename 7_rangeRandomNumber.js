/**
 * Returns random Number between x and y.
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @return {Number}
 */
function randomNumber(x = 5, y = 20)
{
    return Math.floor(Math.random() * x + y);
}
