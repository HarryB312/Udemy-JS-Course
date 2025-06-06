const btn = document.querySelector('button');
const h1 = document.querySelector('h1');


// btn.addEventListener('click',()=>{
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// } );

//OR//

btn.addEventListener('click',()=>{
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
} );

const makeRandColor = ()=>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return`rgb(${r}, ${g}, ${b})`;
};
