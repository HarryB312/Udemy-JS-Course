                                    //ForEach
//Accepts a callbakc function. Calls the function once per element in the array//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// numbers.forEach(function(el){
//     if (el % 2 === 0 )
//     console.log(el)
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })



                                    //map//
//Ceates a new array with the results of calling a callback on every element in the array//

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const doubles = numbers.map(function(num){
//     return num * 2;
// })

// const movies = [
//         {
//             title: 'Amadeus',
//             score: 99
//         },
//         {
//             title: 'Stand By Me',
//             score: 85
//         },
//         {
//             title: 'Parasite',
//             score: 95
//         },
//         {
//             title: 'Alien',
//             score: 90
//         }
//     ]

// const titles = movies.map(function(movie){
//     return movie.title.toLocaleUpperCase();
// })

// const scores = movies.map(function(movie){
//     return movie.score;
// })

                                    //Arrow Functions//
 //syntactically compact alternative to a regular function expression/
// const square = (x)=>{
//     return x * x;
// }

// const sum = (x, y)=>{
//     return x + y;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }
                                //IMPICIT RETURNS//
                    //use () when needing to return 1 expression.
// const rollDie2 = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const add = (x, y) => {
//     return x + y;
// }
// //CAN BE TURNED INTO//

// const add1 = (x ,y) => x + y;


                            //SETTIMEOUT//
// console.log(`Hello...`)
// setTimeout(() => {
//     console.log(`Are you there?!`)
// }, 3000);

//SETINTERVAL//
//Repeats code a set intervals.

// setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// clearInterval(id)


                                    //Filter//
//Creates a new array with all elelments that pass the test implemented by the function//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const lessTen = numbers.filter((n)=>{
    return n < 10
})

const movies = [
            {
                title: 'Amadeus',
                score: 99
            },
            {
                title: 'Stand By Me',
                score: 75
            },
            {
                title: 'Parasite',
                score: 80
            },
            {
                title: 'Alien',
                score: 60
            }
        ]

const badMovies = movies.filter(m => m.score < 79)
const movieTitles = movies.filter(m => m.score < 79).map(m => m.title)


                                    //Some & Every//
                                    //Reduce//

//executes a reducer function on each element of the array, resulting in a single value. 

