const pl1Score = document.querySelector('#p1Score');
const pl2Score = document.querySelector('#pl2Score');
const pl1Btn = document.querySelector('#pl1Btn');
const pl2Btn = document.querySelector('#pl2Btn');
const rstBtn = document.querySelector('#rstBtn');
const playToSelect = document.querySelector('#playto');

let pl1Point = 0;
let pl2Point = 0;
let winningScore = 5
let gameOver = false;

playToSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})

pl1Btn.addEventListener('click',function (){
    if(!gameOver){
        pl1Point += 1;
        if(pl1Point === winningScore){
            gameOver = true;
    }
    pl1Score.textContent = pl1Point;
    }
});

pl2Btn.addEventListener('click',function (){
    if(!gameOver){
        pl2Point += 1;
        if(pl2Point === winningScore){
            gameOver = true;
        }
        pl2Score.textContent = pl2Point;
    }
});

rstBtn.addEventListener('click',reset);

function reset(){
    gameOver = false;
    pl1Point = 0;
    pl2Point = 0;
    pl1Score.textContent = pl1Point;
    pl2Score.textContent = pl2Point;
}