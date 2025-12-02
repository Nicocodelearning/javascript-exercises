const repeatString = function (str, nbr) {
    if (nbr < 0) { return "ERROR" }
    let arr = []
    while (nbr > 0) {
        arr.push(str)
        nbr--
    }
    return arr.join("")
};

// Do not edit below this line
module.exports = repeatString;
