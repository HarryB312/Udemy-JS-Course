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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const doubles = numbers.map(function(num){
    return num * 2;
})

const movies = [
        {
            title: 'Amadeus',
            score: 99
        },
        {
            title: 'Stand By Me',
            score: 85
        },
        {
            title: 'Parasite',
            score: 95
        },
        {
            title: 'Alien',
            score: 90
        }
    ]

const titles = movies.map(function(movie){
    return movie.title.toLocaleUpperCase();
})

const scores = movies.map(function(movie){
    return movie.score;
})





                                    //Filter//
                                    //Find//
                                    //Some & Every//
                                    //Reduce//
                                    //Arrow Functions//
