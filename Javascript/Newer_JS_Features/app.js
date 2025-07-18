//Default Params//
//set params if argument is not defined. 

// const rollDie = (numSides = 6) => {
//     return Math.floor(Math.random() * numSides) + 1
// }

//...SPREAD//
//unpack elements from arrays, objects, or iterables
//Spread iterable into a function call//
//Able to expand arrays//


// const nums = [13,4,5,21,3,3,1,2,7,6,4,2,53456];
// Math.max(...nums)

// console.log(...nums)

// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs]



//Spread with Objects//
//Copies properties from one object into another object literal//


// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Caninae' }; 

// const catDog = { ...feline, ...canine}

// console.log(catDog)


//Rest Params//
//Collects 'The Rest' of the arguments into an actual array//
//Uses ...//

// function sum(...nums){
//     return nums.reduce((acc, currNum)=> acc + currNum)
// }

// function raceResults( gold, silver, ...everyoneElse ){
//     console.log(`GOLD MEDAL GOES TO: ${gold}`);
//     console.log(`SILVER MEDAL GOES TO: ${silver}`);
//     console.log(`THANKS TO EVERYONE ELSE: ${everyoneElse}`);
// }

// raceResults('Harrison','Brittany','Penelope','Winter','Chetto')

//DESTRUCTURING ARRAYS//
//Clean syntax

const scores = [929456, 456801, 358978,585284, 468988, 258596]

const [gold, silver, bronze, ...everyoneElse] = scores


//DESTRUCTURING OBJECTS//
