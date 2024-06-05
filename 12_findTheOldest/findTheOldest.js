const findTheOldest = function(people) {
    const date = new Date();
    return people.
        reduce((candidate, person) => {
            if (!("yearOfBirth" in candidate)) 
                return person;

            if (!("yearOfBirth" in person)) 
                return candidate;
    
            let personDead = ("yearOfDeath" in person)? person.yearOfDeath: date.getFullYear();
            let personAge = personDead - person.yearOfBirth;
            let candidateDead = ("yearOfDeath" in candidate)? candidate.yearOfDeath: date.getFullYear();
            let candidateAge = candidateDead - candidate.yearOfBirth;
            return (personAge > candidateAge)? person: candidate;
        });
};

// Do not edit below this line
module.exports = findTheOldest;
