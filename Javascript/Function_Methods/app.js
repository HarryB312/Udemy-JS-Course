                                //METHODS//
                    //Can add functions as properites on objects//
// const myMath = {
//     PI: 3.14,
//     square: function(num){
//         return num * num;
//     },
//     cube: function(num){
//         return num ** 3; // or num * num * num;
//     }
// }

// const square = {
//     area: function(side){
//         return side * side;
//     },
//     perimeter: function(side){
//         return side * 4;
//     }
// }

                            //SHORTHAND//  
// const myMath = {
//     PI: 3.14,
//     square(num){
//         return num * num;
//     },
//     cube(num){
//         return num ** 3;
//     }
// }

// const square = {
//     area(side){
//         return side * side;
//     },
//     perimeter(side){
//         return side * 4;
//     }
// }

                                //THIS//
            //Used to access other peroperties on the same object.//
            //The value of THIS depends on the incovatoin conctext of the functions its used in//
// const person = {
//     first: 'Harrison',
//     last: 'Boswell',
//     fullName(){
//         return `${this.first} ${this.last}`
//     }
// }

// const cat = {
//     name: 'Blue Steel',
//     color: 'grey',
//     breed: 'Mut',
//     meow(){
//         console.log(`${this.name} says MEOW!!!}`)
//     }
// }

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg(){
//         this.eggCount++;
//         return 'EGG';
//     }
// }