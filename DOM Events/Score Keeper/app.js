const p1Count = document.querySelector('#p1Count')
const p2Count = document.querySelector('#p2Count');

const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const rstBtn = document.querySelector('#rstBtn');

p1Score = 0;
p2Score = 0;

p1Btn.addEventListener('click',(e)=>{
    p1Score += 1;
    p1Count.textContent = p1Score;
});

p2Btn.addEventListener('click',(e)=>{
    p2Score += 1;
    p2Count.textContent = p2Score;
});

rstBtn.addEventListener('click',()=>{
    p1Score = 0;
    p1Count.textContent = p1Score;
    p2Score = 0;
    p2Count.textContent = p2Score;
});