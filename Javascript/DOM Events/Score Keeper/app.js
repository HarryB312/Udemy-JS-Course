const p1Count = document.querySelector('#p1Count');
const p2Count = document.querySelector('#p2Count');
const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const rstBtn = document.querySelector('#rstBtn');
const numSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let GameOver = false;

p1Btn.addEventListener('click',(e)=>{
    if(!GameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            GameOver = true;
        }
        p1Count.textContent = p1Score;
    }
});

p2Btn.addEventListener('click',(e)=>{
    if(!GameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            GameOver = true;
        }
        p2Count.textContent = p2Score;
    }
});

numSelect.addEventListener('change',(e)=>{
    winningScore = parseInt(e.target.value);
    reset();
});


rstBtn.addEventListener('click', reset);

function reset (){
    p1Score = 0;
    p1Count.textContent = p1Score;
    p2Score = 0;
    p2Count.textContent = p2Score;
    GameOver = false;
}