const reverseString = function (str) {
    let arr = [];
    for (letter of str) arr.push(letter);
    arr.reverse()
    return arr.join("")

};

// Do not edit below this line
module.exports = reverseString;
