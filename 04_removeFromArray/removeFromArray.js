const removeFromArray = function(array, ...args) {
    let returnArray = [];
    array.forEach( (item) => {
        
            if (!args.includes(item)){
                returnArray.push(item);
            } 
        })
        return returnArray;
    }

    
        
    
    
   

// Do not edit below this line
module.exports = removeFromArray;
