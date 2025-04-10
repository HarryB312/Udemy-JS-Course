//REUSABLE PROCEDURES//
//function funcName(){
//  do something
// }

// function singSong(){
//     console.log('DO')
//     console.log('RE')
//     console.log('MI')
// }

// singSong()

// function greet(name){ //perameter
//     console.log(`Hello, ${name}!`)
// }

// greet('harrison') //argument 



//Multiple Arguments//

// function greet(firstName, lastName){ //perameter
//     console.log(`Hello, ${firstName} ${lastName[0]}!`)
// }

// greet('Harrison', 'Boswell')


// function repeat(str, howMany){
//     let result = '';
//     for (let i = 0; i < howMany; i++){
//         result += str;
//     }
//     console.log(result)
// }


// function isSnakeEyes(die1, die2){
//     if (die1 === 1 && die2 === 1){
//         console.log('Snake Eyes!')
//     }else {
//         console.log('Not Snake Eyes!')
//     }
// }

// isSnakeEyes(1,1)



// RETURN // capute and save output to be resused//
// function add(x, y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }
//     return x + y;
// }

// function multiply(x, y){
//     return x * y;
// }

// multiply(5,5)

// function isShortsWeather(temp){
//     if (temp >= 75){
//         return true;
//     }return false;
// }

// isShortsWeather(88);


// function lastElement(array){
//     if (array.length === 0){
//         return null;
//     }else {
//         return array[array.length -1]
//     }
// }


// function capitalizeWord(word){
//     return word[0].toUpperCase() + word.slice(1) //This takes a substring starting from index 1 to the end of the string:/
// }

// capitalizeWord('harrison')


// function showDay(num){
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     if (num < 1 || num > 7){
//         return null;
//     }else {
//         return days[num - 1]
//     }
    
// }





