const findTheOldest = function (persons) {
    let ageList = persons.map((person) => {
        if (person["yearOfDeath"]) return person["yearOfDeath"] - person["yearOfBirth"]
        else return 2025 - person["yearOfBirth"]
    })
    let indexMax = 0
    for (let i = 0; i < ageList.length; i++) {
        if (ageList[i] > ageList[indexMax]) indexMax = i
    }
    return persons[indexMax]

};

// Do not edit below this line
module.exports = findTheOldest;
