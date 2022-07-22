
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];  
}
let playerScore = 0,
computerScore = 0;

function playRound() {
    let playerSelection = prompt("What is your choice :").toLowerCase;

    if (getComputerChoice() === playerSelection){
        console.log("Oops! It's a Tie");
    }
    else if (getComputerChoice()==="rock" && playerSelection==="paper"){
        console.log("You Win!, Paper beats Rock");
        playerScore += 1;
    }
    else if (getComputerChoice()==="paper" && playerSelection==="rock"){
        console.log("You Lose!, Paper beats Rock");
        computerScore += 1;
    }
    
    else if (getComputerChoice()==="scissors" && playerSelection==="rock"){
        console.log("You Win!, Rock beats Scissors");
        playerScore += 1;
    }
    else if (getComputerChoice()==="rock" && playerSelection==="scissors"){
        console.log("You Lose!, Rock beats Scissors");
        computerScore += 1;
    }
     else if (getComputerChoice()==="scissors" && playerSelection==="paper"){
        console.log("You Lose!, Scissors beats Paper");
        computerScore += 1;
    }
    else if (getComputerChoice()==="rock" && playerSelection==="scissors"){
        console.log("You Win!, Scissors beats Paper");
        playerScore += 1;
    }
    else{
        console.log("Oops that's not a choice.");
    }
}

playRound();


