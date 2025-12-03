const fibonacci = function (a) {
    let b = Number(a)
    if (b === 0) return 0
    if (b < 0) return "OOPS"
    let fibonacciSuite = [1, 1]
    for (let i = 2; i < b; i++) fibonacciSuite.push(fibonacciSuite[i - 2] + fibonacciSuite[i - 1])
    return fibonacciSuite[fibonacciSuite.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
