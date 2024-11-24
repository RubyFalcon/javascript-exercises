const sumAll = function(firstNum, secondNum) {
    let finalSum = 0;
    let i ;
    let n;
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
    if (firstNum > secondNum) {
        i = secondNum
        n = firstNum
    } else {
        i = firstNum;
        n = secondNum;
    }
    for (i; i <= n; i++) {
        if( i < 0){
            return "ERROR";
        }
        finalSum += i;
    }
    return finalSum;
};



// Do not edit below this line
module.exports = sumAll;
