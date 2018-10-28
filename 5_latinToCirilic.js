/**
 * Cyrillic letters opposite from latin one.
 *
 * @type {JSON}
 */
const latinToCyrillicCharsets = {
    'a': 'а',
    'b': 'б',
    'v': 'в',
    'g': 'г',
    'd': 'д',
    'dj': 'ђ',
    'e': 'е',
    // 'ž': 'ж',
    'z': 'з',
    'i': 'и',
    'j': 'j',
    'k': 'к',
    'l': 'л',
    'lj': 'љ',
    'm': 'м',
    'n': 'н',
    'nj': 'њ',
    'o': 'о',
    'p': 'п',
    'r': 'р',
    's': 'с',
    't': 'т',
    // 'ć': 'ћ',
    'u': 'у',
    'f': 'ф',
    'h': 'х',
    'c': 'ц',
    // 'č': 'ч',
    // 'dž': 'џ',
    // 'š': 'ш',
};

/**
 * Returns text transformed from latin to cirilic.
 *
 * @param {String} input
 *
 * @returns {String}
 */
function latinToCyrillic(input) {
    var output = [];
    var i;

    for (i = 0; i < input.length; i++) {
        var originalChar = input[i];
        var character = latinToCyrillicCharsets[originalChar.toLowerCase()];

        if(originalChar === originalChar.toUpperCase()) {
            output.push(character.toUpperCase());
        } else {
            output.push(character);
        }
    }

    return output.join('');
}