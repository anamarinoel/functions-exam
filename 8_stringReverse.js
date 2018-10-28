/**
 * Reverses input string.
 *
 * @param {String} input
 *
 * @return {String}
 */
function reverse(input)
{
    var output = [];
    var i;
    var length = input.length - 1;

    for (i = length; i >= 0; --i){
        output.push(input[i]);
    }

    return output.join('');
}