const reverseString = function(str) {
    let reversedWordArr = str.split(" ").map(word => word.split("").reverse().join("")).reverse();
    return reversedWordArr.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
