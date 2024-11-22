const repeatString = function(repeatedString, n) {
    let returnString  = "";
    if (n < 0)  {
        return 'ERROR';
    }
    for(i=0; i<n; i++){
        returnString += repeatedString;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
