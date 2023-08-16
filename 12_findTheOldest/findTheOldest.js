const findTheOldest = function(array) {
    return array.reduce((oldest,currentPer) => {
       const oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
       const currentAge = getAge(currentPer.yearOfBirth,currentPer.yearOfDeath);
       return currentAge > oldestAge ? currentPer : oldest;
    });
};

const getAge = function(birth,death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
