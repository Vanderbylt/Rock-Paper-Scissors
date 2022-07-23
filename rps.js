
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

const computerSelection = getComputerChoice();

let getPlayerChoice = prompt("What's your choice ? Rock, Paper or Scissors");
let playerSelection = typeof getPlayerChoice === 'string' ? `${getPlayerChoice[0].toUpperCase() + getPlayerChoice.slice(1)}` : "null"; 


function playRound(computerSelection,playerSelection){
    if (playerSelection==='null'){
        console.log("You Cancelled.");
    }
    
    else{
        if (computerSelection===playerSelection){
            console.log("Oops! its a tie.");
        }

        else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')){
            console.log(`You Lose!, ${computerSelection} beats ${playerSelection}.`);
        }
        else if ((computerSelection === "Paper" && playerSelection === "Scissors") ||
        (computerSelection === 'Scissors' && playerSelection === 'Rock') ||
        (computerSelection === 'Rock' && playerSelection === 'Paper')){
            console.log(`You Win!, ${playerSelection} beats ${computerSelection}.`) ;
        } 
        else{
            console.log("Sorry that's not a choice.");
        }
    }   
}

playRound(computerSelection,playerSelection);






