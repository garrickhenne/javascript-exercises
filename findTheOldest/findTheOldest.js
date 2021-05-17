let findTheOldest = function(people) {
    return people.reduce((oldest, currPerson) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currAge = getAge(currPerson.yearOfDeath,currPerson.yearOfBirth);
        return oldestAge < currAge ? currPerson : oldest;
    }); 
}

function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}


module.exports = findTheOldest;
