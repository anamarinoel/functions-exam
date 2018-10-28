/**
 *Returns last tree character of string.
 *
 * @param {String} string
 * @param {Number} string
 *
 * @returns {String}
 */
function lastCharacter(string, numberOfCaracters)
{
    return string.substring(string.length - numberOfCaracters);
}

/**
 *  Returns first tree character of string.
 *
 * @param {String} string
 * @param {Number} string
 *
 * @return {String}
 */
function firstCharacter(string, numberOfCharacter)
{
    return string.substring(0,numberOfCharacter);
}

/**
 * Returns character from second to seventh character of string.
 *
 * @param {String} string
 * @param {Number} string
 * @param {Number} string
 *
 * @return {String}
 */
function betweenCharacter(string, from, to)
{
    return string.substring(from - 1, to);
}


