const removeFromArray = function (arr, ...optArg) {
    for (let i = 0; i < arr.length; i++) {
        for (let arg = 0; arg < optArg.length; arg++) {
            if (optArg[arg] === arr[i]) { arr.splice(i, 1); i-- }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
