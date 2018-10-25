/**
 * Returns Odd Numbers in range.
 *
 * @param {Number} first
 * @param {Number} second
 *
 * @return {Array}
 */
function oddNumbers (first, second)
{
    var i,
        min = first,
        max = second,
        oddNumbers = [];

    if (second < first) {
        min = second;
        max = first;
    }

    for (i = min; i <= max; i++) {
        if (i%2 !== 0) {
            oddNumbers.push(i);
        }
    }

    return oddNumbers;
}