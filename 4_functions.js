/**
 *Returns last tree character of string.
 *
 * @param {String} string
 * @param {Number} numberOfCharacters
 *
 * @returns {String}
 */
function lastCharacter(string, numberOfCharacters)
{
    return string.substring(string.length - numberOfCharacters);
}

/**
 *  Returns first tree character of string.
 *
 * @param {String} string
 * @param {Number} numberOfCharacters
 *
 * @return {String}
 */
function firstCharacter(string, numberOfCharacters)
{
    return string.substring(0,numberOfCharacters);
}

/**
 * Returns character from second to seventh character of string.
 *
 * @param {String} string
 * @param {Number} from
 * @param {Number} to
 *
 * @return {String}
 */
function betweenCharacter(string, from, to)
{
    return string.substring(from - 1, to);
}

/**
 * Returns first character in text.
 *
 * @param {String} char
 * @param {String} text
 *
 * @returns {Number}
 */
function firstOccurence(char, text)
{
    return char.indexOf(char) + 1;
}

/**
 * Returns number of character in text.
 *
 * @param {String} char
 * @param {String} text
 *
 * @returns {Number}
 */
function occurrenceCount(char, text)
{
    var occurrenceCount = 0;

    for (var i = 0; i < text.length; i++) {
        if (text[i] === char) {
            occurrenceCount++;
        }
    }

    return occurrenceCount;
}

/**
 *Returns number of character in text, no meter of case.
 *
 * @param {String} char
 * @param {String} text
 *
 * @returns {Number}
 */
function caseInsensitiveOccurrenceCount(char, text) {

    var occurrenceCount = 0;

    for (var i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === char.toLowerCase()) {
            occurrenceCount++;
        }
    }

    return occurrenceCount;
}

/**
 *
 * @param {String} text
 *
 * @returns {Number}
 */
function textLength(text) {

    var occurrenceCount = 0;

    for (var i = 0; i < text.length; i++) {
        if (text[i].match(/^[A-Za-z]+$/)) {
            occurrenceCount++;
        }
    }

    return occurrenceCount;
}

/**
 *
 * @param {String} findChar
 * @param {String} replacementChar
 *
 * @param {String} text
 */
function changeCharacters(findChar, replacementChar, text) {
    var rx = new RegExp("/a/g");
    return text.replace(/a/g, replacementChar);
}


// console.log(occurrenceCount('a', 'jajajajajaa'));
// console.log(caseInsensitiveOccurrenceCount('a', 'jajajajajaa'));
// console.log(textLength('ja ja 4554545 jaj000098767890ajaa'));
// console.log(changeCharacters('a', 'f', 'JavaScript'));