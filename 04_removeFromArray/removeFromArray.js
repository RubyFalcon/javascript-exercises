const removeFromArray = function(array, n) {
    let returnArray = [];
    array.forEach( (item) => {
        if (item != n){
            returnArray.push(item);
        } 
    }

    );
        
    return returnArray;
    }
   

// Do not edit below this line
module.exports = removeFromArray;
