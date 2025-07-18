// The Call Stack//
// Keeps track of its place in a script that calls muliple functions//
// Last in frist out (lifo)

// const multiply = (x, y)=> x * y;

// const square = (x, x) => x * x;

// const isRightTriangle = (a, b, c)=>{
//     return square(a) + square(b) === square(c);
// };

// isRightTriangle(3,4,5);




// Async Functions: Sytax markup for promises//

//Async functions always return a promise

// const login = async (username, password) => {
//     if(!username || !password) throw 'Missing Credentials';
//     if(password === 'dogfoot') return 'Welcome!'
//     throw 'Invalid Password'
// }

// login('lkjfglkj', 'dogfoot')
// .then(msg=>{
//     console.log('Logged In')
//     console.log(msg)
// })
// .catch(err=>{
//     console.log ('Error')
//     console.log(err)
// })

//Await
//Can only be used inside of functions delared with async
//Pauses the execution of the functions waiting for a promise to be resolved

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// async function makeTwoRequest(){
//     try{
//         let data1 = await fakeRequestPromise('/page1')
//         console.log(data1)
//         let data2 = await fakeRequestPromise('/page2')
//         console.log(data2)
//     }catch(e){
//         console.log(e)
//     }    
// }