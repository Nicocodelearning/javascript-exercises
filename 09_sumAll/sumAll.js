const sumAll = function (a, b) {
    if (!(Number.isInteger(a) && Number.isInteger(b)) || a < 0 || a < 0) return "ERROR"
    arr = []
    if (b <= a) { littleNumber = b; bigNumber = a }
    else { littleNumber = a; bigNumber = b }
    while (littleNumber <= bigNumber) {
        arr.push(littleNumber)
        littleNumber++
    }
    return arr.reduce((acc, curr) => acc + curr, 0 || a < 0)

};

// Do not edit below this line
module.exports = sumAll;
