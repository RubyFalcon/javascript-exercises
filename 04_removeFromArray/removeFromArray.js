const removeFromArray = function(array, ...args) {
    let returnArray = [];
    array.forEach( (item) => {
        args.forEach(index => {
            if (item != index){
                returnArray.push(item);
            } 
        })
        
    }

    );
        
    return returnArray;
    }
   

// Do not edit below this line
module.exports = removeFromArray;
