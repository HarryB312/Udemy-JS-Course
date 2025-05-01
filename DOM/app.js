//DOM//
//Document Object Model//
//Javascript representation of a webpage//

//Document.getElementById()//.

//Document.getElementsByTagName()//
//Returns a HTMLCollection//

//Document.getElementsByClassName()//


            //Newer way to select a single element//


//Document.querySelector() & docuement.querySelectorAll()//

document.querySelector('p'); //Selects the first p element//
document.querySelector('#banner'); // '#' Selects by ID
document.querySelector('.square'); // '.' Selects the first element by class name//

// const links = document.querySelectorAll('p a');
// for(let link of links){
//     console.log(link.href)
// }



const allImages = document.getElementsByTagName('img');

for(let img of allImages){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
} 


//DOM PROPERTIES AND METHODS//

// InnerText //
// textContent //
// innerHTML //


// Attrtibutes //
// src, href, id, title, class, etc...//
// getAttribute & setAttribute //


// STYLE //

const h1 = document.querySelector('h1');
h1.style.color = 'green'
h1.style.fontSize = '3rem'
h1.style.border = '2px solid pink'

//getCumputedStyle - Used to get the values of set elements//

window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;
window.getComputedStyle(h1).margin;

h1.style.textAlign

function toggleHighlight(){
    const text = document.querySelector('#text');
    text.classList.toggle('highlight');
}

function activate(el){
    const items = document.querySelectorAll('ul li');
    for(let item of items){
        item.classList.remove('active')
    }
    el.classList.add('active')
}

console.log(activate)