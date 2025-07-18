// IF STATEMENT

// const random = Math.random();
// if (random < 0.5){
//   console.log('Your Number is less than 0.5')
//   console.log(random)
// }

// function isEven(num){
//  if(num % 2 === 0){
//      console.log('even')
//  }
// }


// ELSE IF STATEMENT

// const dayOfWeek = 'Monday';

// if(dayOfWeek === 'Monday'){
//   console.log('I HATE MONDAYS!!!')
// }else if (dayOfWeek === 'Saturday'){
//   console.log('Saturdays are the Best')
// }else if (dayOfWeek === 'Friday'){
//   console.log('Fridays are great but only after work')
// }

// const age = 29;

// if (age < 5){
//   console.log('You are a toddler. You get in for free!')
// }else if (age < 10){
//   console.log('You are a child. $10 please!')
// }else if (age < 65){
//   console.log('You are an adult. You pay $20!')
// }


// ELSE STATEMENT

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if(dayOfWeek === 'monday'){
//   console.log('I HATE MONDAYS!!!')
// }else if (dayOfWeek === 'saturday'){
//   console.log('Saturdays are the Best')
// }else if (dayOfWeek === 'friday'){
//   console.log('Fridays are great but only after work')
// }else{
//   console.log('MEH')
// }

// const random = Math.random();
// if (random < 0.5){
//   console.log('Your Number is less than 0.5')
// }else {
//   console.log('Your Number is Greater than 0.5') 
// }
// console.log(random)

// const age = 90;

// if (age < 5){
//   console.log('You are a toddler. You get in for free!')
// }else if (age < 10){
//   console.log('You are a child. $10 please!')
// }else if (age < 65){
//   console.log('You are an adult. You pay $20!')
// }else {
//   console.log('You are a senior. You pay $10')
// }


// const password = prompt('please enter your password');

// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1){
//     console.log('Valid Password!')
//   }else {
//     console.log('Password cannot contain spaces.')
//   }
  
// }else {
//   console.log('Password is too short. Must be more than 6 characters.')
// }


const age = 35;
var ticketPrice;

if (age <= 12){
  ticketPrice = ('You pay $5.')
}else if(age <= 18){
  ticketPrice = ('You pay $10.')
}else if (age <= 60){
  ticketPrice = ('you pay $20')
}else{
  ticketPrice = ('You pay $15.')
}
console.log(`${ticketPrice}`)

var purchase = 25;
var discount;

if (purchase >= 100){
  discount = 20;
}else if (purchase >= 50){
  discount = 10;
}else{
  discount = 0;
}

console.log(`You have a ${discount}% discount`)


const dayTime = ('morning');

if (dayTime === 'morning'){
  console.log('Good monrning')
}else if (dayTime === 'afternoon'){
  console.log('Good afternoon')
}else{
  console.log('Good night')
}