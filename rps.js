
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

let playerScore = 0,
computerScore = 0;


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
            computerScore += 1;
        }
        else if ((computerSelection === "Paper" && playerSelection === "Scissors") ||
        (computerSelection === 'Scissors' && playerSelection === 'Rock') ||
        (computerSelection === 'Rock' && playerSelection === 'Paper')){
            console.log(`You Win!, ${playerSelection} beats ${computerSelection}.`) ;
            playerScore += 1;
        } 
        else{
            console.log("Sorry that's not a choice.");
        }
    }   
}

function game(){
  
        for (let i = 0; i < 5;i++){
            var computerSelection = getComputerChoice();

            let getPlayerChoice = prompt("What's your choice ? Rock, Paper or Scissors");
            let playerSelection = typeof getPlayerChoice === 'string' ? `${getPlayerChoice[0].toUpperCase() + getPlayerChoice.slice(1)}` : "null"; 
            playRound(computerSelection,playerSelection);
        }

        if (playerScore<computerScore){
            console.log("You Lose!, Computer wins.");
        }
        else if (computerScore<playerScore){
            console.log("You Win!, Computer loses.");
        }
        else{
            console.log("Close Call!, It's a Tie.");
        }
    }

game();





