const reverseString = function(str) {
    let divided = str.split('');
    let reversed = '';
    for (let i = divided.length - 1; i > -1; i--) {
        reversed += divided[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
