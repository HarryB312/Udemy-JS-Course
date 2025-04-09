// // Allows to repeat code //

//                     // for loop //

// // Examp bghvnjle... for (
// //   [initialExpression];
// //   [condition];
// //   [incrementExpression]
// // )
// // Example... for (let i = 1; i<=10; i++){
// // console.log(i)
// // }

// // for (let i = 2; i <= 20; i += 2){      //Even number
// //   console.log(i)
// // }

// // for (let a = 1; a <= 20; a += 2){      //Odd number
// //   console.log(a)
// // }

// // for (let i = 100; i >= 0; i -= 10){     //Count Down
// //   console.log(i)
// // }


//                     // for...in loop //

//                   // Loop Over Arrays //

// // const animals = ['lions', 'tigers', 'bears']
// // for (let i = 0; i < animals.length; i++){
// //   console.log(i, animals[i])
// // }

// //                   // Nested Loops //

// //   for (let i = 1; i <= 10; i++){
// //     console.log(`i is: ${i}`)
// //     for(let j = 1; j < 4; j++){
// //       console.log(`     j is: ${j}`)
// //     }
// // }

// // const seatingChart = [
// //   ['Kristen', 'Erik', 'Namita'],
// //   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
// //   ['Yuma', 'Sakura', 'Jack', 'James']
// // ]

// // for (let i =  0; i < seatingChart.length; i++){
// //   const row = seatingChart[i];
// //   console.log(`ROW # ${i + 1}`)
// //   for (let j = 0; j < row.length; j++){
// //     console.log(row[j])
// //   }
// // }

// //                       // WHILE LOOP//
// //   //Continues runnings as long as the test condition is true//

// // let num = 0;
// // while (num < 10){
// //   num++
// //   console.log(num);

// // }

//                       //BREAKS//

// // let input = prompt('Hey, say something')
// // while (true) {
// //   input = prompt(input);
// //   if (input.toLocaleLowerCase() === 'stop copying me') break;
// // }
// // console.log('You Win')

// // for (let i = 0; i <= 1000; i++){
// //   console.log(i)
// //   if (i === 100) break;
// // }

//                             // for...of loop //
//                             //Easy way to iterate over arrays

// const seatingChart = [
//   ['Kristen', 'Erik', 'Namita'],
//   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//   ['Yuma', 'Sakura', 'Jack', 'James']
// ]

// for (let row of seatingChart){
//   for (let student of row){
//     console.log(student)
//   }
// }

// for (let char of 'harrison boswell'){
//   console.log(char)
// }

                  // for... in loop//
        //Iterate over an objects key and values//

// const testScores = {
//   keenan: 80,
//   john:  64,
//   kim: 89,
//   marlon: 72,
//   nadia: 83,
//   connie: 60,
//   dwayne: 77,
//   shawn: 91
// }

// for (let student in testScores){
//   console.log(`${student} scored ${testScores[student]}`)
// }

// Object.keys(testScores) //Provides Keys//
// Object.values(testScores) //Provides Values//
// Object.entries(testScores) //Provides Nested Array of Key Value Pairs//


// let total = 0;
// let scores = Object.values(testScores)
// for (let score of scores){
//   total += score;
// }
// console.log(total/scores.length)


              // Todo List
              const todos = ['eat', 'sleep']
              let input = prompt('What would you like to do?');
              
              while (input !== 'quit' && input !== 'q'){
                if (input === 'list'){
                  console.log('********');
                  for (let i = 0; i < todos.length; i++){
                    console.log(`${i}: ${todos[i]}`)
                  }
                  console.log('********');
                }else if (input === 'new'){
                  const newTodo = prompt('What would you like to add to the list?')
                  todos.push(newTodo);
                  console.log(`${newTodo} has been added to the list!`)
                }else if (input === 'delete'){
                  const index = prompt('Which index would you like to delete?')
                  const deleted = todos.splice(index, 1)
                  console.log(`${deleted} has been removed from the list!`)
                }
                input = prompt('What would you like to do?');
              }
              console.log('You quit the app!');
              