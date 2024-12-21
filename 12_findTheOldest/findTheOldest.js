const getAge = function(person) {
  let age;
  if("yearOfDeath" in person) {
    const death = person.yearOfDeath;
    const birth = person.yearOfBirth;
    age = death-birth;
  }
  else {
    const year = new Date().getFullYear();
    const birth = person.yearOfBirth;
    age = year-birth;
  }

  return age;
}

const findTheOldest = function(people) {
  return people.reduce((acc, curr) => {
    const maxAge = getAge(acc);
    const currAge = getAge(curr);
    return maxAge > currAge ? acc : curr;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
