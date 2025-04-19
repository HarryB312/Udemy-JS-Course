                                 //Reduce//

//executes a reducer function on each element of the array, resulting in a single value. 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const intitalValue = 0;
// const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, intitalValue
// );

// console.log(sumOfNumbers);

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const total = prices.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// const minPrice = prices.reduce((accMin, currentPrice)=>{
//     if(currentPrice < accMin){
//         return currentPrice
//     } 
//     return accMin;
// })


// const nums = [4, 5, 6, 7];

// const sumNum = nums.reduce((accumulator, currentValue) =>{
//     return currentValue + accumulator;
// }
//  )

// const words = ['I', 'love', 'JavaScript'];

// const sentence = words.reduce((accumulator, currentValue) => {
//     return accumulator + ' ' + currentValue
// })

// const nums = [10, 55, 32, 98, 1];

// const maxNum = nums.reduce((acc, curr) => {
//     if (curr > acc){
//         return curr;
//     }else{
//         return acc;
//     }
    
// });

// const movies = [
// {
//     title: 'Amadeus',
//     score: 99
// },
// {
//     title: 'Stand By Me',
//     score: 75
// },
// {
//     title: 'Parasite',
//     score: 80
// },
// {
//     title: 'Alien',
//     score: 60
// }
// ]

// const bestMovie = movies.reduce((accMovie, currMovie) => {
//     if (currMovie.score > accMovie.score){
//         return currMovie;
//     }return accMovie;
// })


// const evens = [2, 4, 6, 8];

// evens.reduce((acc, curr ) => {
//     return acc + curr;
// }, 100);
 