
function getComputerChoice(){
    var randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return "Rock";
        case 1:
            return  "Paper";
        case 2:
            return "Scissors";
    }
}







function playRound(computerSelection,playerSelection){
    if (computerSelection === playerSelection){
        text.textContent = 'Oops!, it\'s a tie.';
        img1.src = `rps-pics\\${playerSelection}inv.png`;
 
        img2.src = `rps-pics\\${computerSelection}.png`;
        choice1.appendChild(img1);
        choice2.appendChild(img2);
    }
    else if((computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
    (computerSelection === 'Rock' && playerSelection === 'Scissors')){
        text.textContent = `You Lose!, ${computerSelection} beats ${playerSelection}.`;
        cScore+=1;
        computerScore.textContent = cScore;
 
        img1.src = `rps-pics\\${playerSelection}inv.png`;
  
        img2.src = `rps-pics\\${computerSelection}.png`;
        choice1.appendChild(img1);
        choice2.appendChild(img2);
    
    }
    else if ((computerSelection === "Paper" && playerSelection === "Scissors") ||
    (computerSelection === 'Scissors' && playerSelection === 'Rock') ||
    (computerSelection === 'Rock' && playerSelection === 'Paper')){
        text.textContent = `You Win!, ${playerSelection} beats ${computerSelection}.`;
        pScore+=1;
        playerScore.textContent = pScore;

        img1.src = `rps-pics\\${playerSelection}inv.png`;
 
        img2.src = `rps-pics\\${computerSelection}.png`;
        choice1.appendChild(img1);
        choice2.appendChild(img2);
    } 
    else {
        console.log('sorry thats not an option');
        console.log(computerSelection);
        console.log(playerSelection);
    }
    if(pScore === 5||cScore===5){
        main.remove();
        foot.parentNode.insertBefore(para,foot);
        if(pScore === 5){
            para.textContent = 'You are Amazing!';
        }
        else{
            para.textContent = 'You are Dissappointing!';
        }
        para.style.textAlign = 'center';
        para.style.fontSize = '60px';
        para.style.fontWeight = '700';
        para.style.justifySelf = 'center';
        pAgain.style.alignSelf = 'center';
        pAgain.textContent = 'Play Again?'
        pAgain.style.width = '100px';
        pAgain.style.height = '70px';
        foot.parentNode.insertBefore(pAgain,foot);
        pAgain.addEventListener('click', () => {location.reload()})
    }
}   

let pScore = 0;
let cScore = 0;
let main = document.querySelector('.main');
const para = document.createElement('p')
const foot = document.querySelector('footer');
const text = document.getElementById('text');
const playerScore = document.querySelector('.scores.one');
const computerScore = document.querySelector('.scores.two');
const scores = document.querySelectorAll('.scores');
const buttons = document.querySelectorAll('button');
const choice1 = document.querySelector('.choice.one');
const choice2 = document.querySelector('.choice.two');
const pAgain = document.querySelector('button');
var img1 = document.createElement('img');
var img2 = document.createElement('img');
scores.forEach((score) => {score.classList.add('scores-js')});

buttons.forEach((button) => {button.addEventListener('click',() => {playRound(getComputerChoice(),button.id)})} );







