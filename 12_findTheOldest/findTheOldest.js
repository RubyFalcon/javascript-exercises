const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function(people) {
    const oldestToYoungest = people.sort((a,b)=> {
        
        const firstGuy = getAge(a.yearOfBirth, a.yearOfDeath)
        const secondGuy = getAge(b.yearOfBirth, b.yearOfDeath);
        return firstGuy > secondGuy ? -1 : 1;
    })
    return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
