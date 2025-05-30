//Clicks, drags, hovers, scrolls, audio start, mouse moves, key presses, form submission, etc.

const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('you clicked')
}

btn.onmouseenter = () => {
    console.log('Stop touching me.')
}

////addEventListener////
//specify the event type and a callback to run


const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', ()=>{
    alert('Clicked!')
})

const tasButton = document.querySelector('#tas')

//Can take muliple events.

function twist (){
    console.log('twist')
}

function shout (){
    console.log('shout')
}

tasButton.addEventListener('click',twist)
tasButton.addEventListener('click',shout)









//Exercises//

