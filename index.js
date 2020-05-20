// Code your solution in this file.
function lowerCaseDrivers(collection) {
  return collection.map(x => x.toLowerCase())}
  
function nameToAttributes (collection) {
  return collection.map(function(fullName) {
    const nameArr = fullName.split(' ');
    return Object.assign({}, { firstName: nameArr[0], lastName: nameArr[1]})
  })
}

function attributesToPhrase(collection) {
  return collection.map(function(x) {
    return `${x.name} is from ${x.hometown}`;
  })
}