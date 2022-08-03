const palindromes = function (string) {
    // strips punctuation
    const stripPunc = string.replace(/[^a-z0-9]/gi, '');

    const finalStripPunc = stripPunc.replace(/ /g, '');
    
    const finalStrippedStr = finalStripPunc.toLowerCase();

    const splitStr = finalStrippedStr.split('');

    const reversedArray = splitStr.reverse();

    const finalReversedArray = reversedArray.join('');

    if (finalStrippedStr === finalReversedArray) {
        return true;
    } else {
        return false;
    }


//  const length = lowercasedStr.length;

//     for (let i = 0; i < length/2; i++) {

//         if (string[i] !== string[length - 1 -i]) {
//             return false;
//         } else {
//             return true;
//         };
//     };
// };
}

// Do not edit below this line
module.exports = palindromes;
