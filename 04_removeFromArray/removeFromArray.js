const removeFromArray = function(arr, ...argsToRemove) {
    return arr.filter((element) => !argsToRemove.includes(element));

};

// Do not edit below this line
module.exports = removeFromArray;
