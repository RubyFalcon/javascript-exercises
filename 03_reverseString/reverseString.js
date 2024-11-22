const reverseString = function(string) {
    let n =  string.length  -1;
    let  reversedString  = "";
    for ( n; n >=0 ; n--){
        reversedString += `${string[n]}`;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
