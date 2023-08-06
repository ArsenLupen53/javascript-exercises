const repeatString = function(str,num) {
    let empty = "";

    if(num < 0) {
        return 'ERROR';
    }
    
    for (let i = 0; i < num; i++) {
        empty += str;
    }
    return empty;
    
};

// Do not edit below this line
module.exports = repeatString;
