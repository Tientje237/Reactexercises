const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

// MAP
//1. Get an array of all names
const names = characters.map((characterName) => {
  return characterName.name;
});
// console.log(names);
//2.  Get an array of all heights
const heights = characters.map((characterHeight) => {
  return characterHeight.height;
});
// console.log(heights);
//3. Get an array of all first names
const firstnames = characters.map((characterFirstname) => {
  let splitname = characterFirstname.name.split(' ');
  return splitname[0];
});
// console.log(firstnames);



// FILTER
//1. Get characters with mass greater than 100
const greatermass = characters.filter(mass => {
  return mass.mass >= 100;
});
// console.log(greatermass);
//2. Get characters with height less than 200
const lowermass = characters.filter(mass => {
  return mass.mass <= 100;
});
// console.log(lowermass);
//3. Get all male characters
const male = characters.filter(character => {
  return character.gender == 'male';
});
// console.log(male);
//4. Get all female characters
const female = characters.filter(character => {
  return character.gender == 'female';
});
// console.log(female);

// EVERY
//1. Does every character have blue eyes?
const blueeyes = characters.every((character) => {
  return character.eye_color == 'blue'
});
// console.log(blueeyes);
//2. Does every character have mass more than 40?
const mass40 = characters.every((character) => {
  return character.mass > 40
});
// console.log(mass40);
//3. Is every character shorter than 200?
const shorterthan200 = characters.every((character) => {
  return character.height <= 200;
});
// console.log(shorterthan200);
//4. Is every character male?
const charactermale = characters.every((character) => {
  return character.gender == 'male';
});
// console.log(charactermale);

// SOME
//1. Is there at least one male character?
const checkmale = characters.some((character) => {
  return character.gender == 'male';

});
// console.log(checkmale);
//2. Is there at least one character with blue eyes?
const checkeyecolor = characters.some((character) => {
  return character.eye_color == 'blue';
});
// console.log(checkeyecolor);
//3. Is there at least one character taller than 200?
const checkheight = characters.some((character) => {
  return character.height >= 200;
});
// console.log(checkheight);
//4. Is there at least one character that has mass less than 50?
const checkmass = characters.some((character) => {
  return character.mass <= 50;
});
console.log(checkmass);
// console.log('Test console');