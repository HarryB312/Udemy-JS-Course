                                //SPREAD//

//Create a new array copied that is a copy of the array original using the spread operator.//
const original = [10, 20, 30];
const copy = [...original];

console.log(copy)

//Merge the arrays a and b into one array called merged.//
const a = ['x', 'y'];
const b = ['z'];
const mergerd = [...a, ...b];

console.log(mergerd)

//Use the spread operator to pass the elements of values as individual arguments to the function.//
function multiply(a, b, c) {
    return a * b * c;
  }
  
  const values1 = [2, 3, 4];
  const result = multiply(...values1)

  console.log(result)
  
  //Use the spread operator to combine defaults and overrides into a new object settings.
  const defaults = { font: 'Arial', size: 12 };
  const overrides = { size: 16 };

  const settings = {...defaults, ...overrides};
  console.log(settings)

//Remove the second item from the nums array (immutably) using the spread operator and slicing.//
const nums = [1, 2, 3, 4];

const newNums = [
    ...nums.slice(0, 1), 
    ...nums.slice(2)
]

console.log(newNums)

                                    //...REST//
// Exercise 1: Function Parameters with Rest//

//Create a function sumAll that takes any number of arguments and returns their sum using rest syntax.//

function sumAll(...nums) {
    return nums.reduce((acc, currVal) => acc + currVal, 0)
}

sumAll(1, 2, 3, 4); // should return 10

//xercise 2: Destructure an Array
//Given this array, use rest to assign first to the first element, and others to the remaining ones.
const values = [5, 10, 15, 20];

const [first, ...others] = values;

//Exercise 3: Destructure an Object//
//Given this object, use rest to separate type and gather the remaining properties.
const item = { type: 'fruit', color: 'red', weight: 100 };

const {type, ...remaining} = item;

console.log(type);
console.log(remaining)
