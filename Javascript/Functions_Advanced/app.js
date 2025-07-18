                //SCOPE//
// The location where a variable is defined dictates where we have access to that variable//

        //HIGHER ORDER FUNCTIONS//
//Can operate on/with other functions that can accept other functions as arguments and return a function//


// function callTwice(func){
//     func();
//     func();
// }

// const laugh = function(){
//     console.log('HAHAHAHA')
// }

// callTwice(laugh)

// //OR//

// const rollDie = function(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie)

                //RETURNING A FUNCTION//

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if( rand > 0.5){
//         return function(){
//             console.log('Good Function')
//         }
//     }else{
//         return function(){
//             alert('Bad Function')
//         }
//     }
// }                

// function makeBetweenFunc(min, max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }

// const isChild = makeBetweenFunc(0,18);
// const isAdult = makeBetweenFunc(19,65);
// const isOld = makeBetweenFunc(66,120)



