let maximum = parseInt(prompt('Enter the maximum number'));
while(!maximum){
  maximum = parseInt(prompt('Enter a valid number!'));
}



const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt(`Enter your first guess (Type 'q' to quit)`);
let attempts = 1;

while(parseInt(guess) !== targetNum){
  if ( guess === 'q') break;
  guess = parseInt(guess);
  if( guess > targetNum ){
      guess = prompt('Too high! Enter a new lower number');
      attempts++;
  }else if (guess < targetNum){
    guess = prompt('Too low! Enter a new higher number');
    attempts++;
  }else {
    guess = prompt("Invalid guess. Please enter a number or 'q' to quit")
  }
}

if( guess === 'q'){
  console.log('You quit the game')
}else{
  console.log('Congrats!')
  console.log(`You got it in ${attempts} guesses`)
}
