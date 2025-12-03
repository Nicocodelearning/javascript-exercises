function isNotPunctuation(char) {
    return !/[\p{P}]/u.test(char);
}

const palindromes = function (str) {
    let spliced = str.split("")
    let splicedNoPunctuation = []
    spliced.forEach((char) => {
        if (isNotPunctuation(char) && char != " ") splicedNoPunctuation.push(char.toUpperCase())
    })
    let reverseNoPunctuation = []
    for (let i = splicedNoPunctuation.length - 1; i >= 0; i--) {
        reverseNoPunctuation.push(splicedNoPunctuation[i])
    }
    return reverseNoPunctuation.join("") === splicedNoPunctuation.join("")



};

// Do not edit below this line
module.exports = palindromes;
