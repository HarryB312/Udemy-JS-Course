//Clicks, drags, hovers, scrolls, audio start, mouse moves, key presses, form submission, etc.

// const btn = document.querySelector('#v2');

// btn.onclick = function(){
//     console.log('you clicked')
// }

// btn.onmouseenter = () => {
//     console.log('Stop touching me.')
// }

////addEventListener////
//specify the event type and a callback to run


// const btn3 = document.querySelector('#v3');

// btn3.addEventListener('click', ()=>{
//     alert('Clicked!')
// })

// const tasButton = document.querySelector('#tas')

//Can take muliple events.

// function twist (){
//     console.log('twist')
// }

// function shout (){
//     console.log('shout')
// }

// tasButton.addEventListener('click',twist)
// tasButton.addEventListener('click',shout)

//Change background for multiple buttons//

// const makeRandColor = ()=>{
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     return`rgb(${r}, ${g}, ${b})`;
// };

// const buttons = document.querySelectorAll('#cluster');
//  for(let button of buttons){
//     button.addEventListener('click', colorize)
//  }

// const h1s = document.querySelectorAll('h1');
// for(let h1 of h1s){
//     h1.addEventListener('click', colorize)
// };

// function colorize(){
//     this.style.backgroundColor = makeRandColor();
//     this.style.color = makeRandColor();
// };
///////////////////////////////
//Event Object//

// const input = document.querySelector('input');
// input.addEventListener('keydown', (e)=>{
//     console.log(e.key)
//     console.log(e.code)
// });

// //For entire window
// window.addEventListener('keydown', function(e){
//     console.log(e.code)
// });
////////////////////////////////

//FORM EVENTS & PREVENTDEFAULT//

const form = document.querySelector('#form');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('LI');
    newLi.innerText = catName;
    list.append(newLi);
    input.value = '';
});
////////////////////////////////
//Event Delegation//





//Exercises//

