//Set up project structure

//write logic to get computer choice
//MAKE new function to get the computer choice
//CALL the math random function to get a number
//COMPARE the number between 0.33 0.66 1 to determine rock paper or scissors
//LOG the the result.

//write logic to get human choice
// MAKE new function to get humans choice.
// PROMPT for users input.


//declare players score variables
// MAKE variables to store the scores for the human and computer.
// INIT to 0.


//write the logic to play a single round.
// MAKE new function named that plays a round.
// ADD two parameters for the human & computer choice.
// MAKE human choice case-insensitive.
// LOG the round winner.
// INCREMENT the score.


//write the logic to play the entire game
// MAKE function to play the game for 5 rounds.
// TRACK the scores
// COMPARE the scores and determine a winner.




function getComputerChoice() {
    let rpsComp = Math.floor(Math.random()*3);
    //console.log(rpsComp)
    if (rpsComp === 0) {
        return "ROCK"
    }
    else if (rpsComp === 1) {
        return "PAPER";
    }
    else if (rpsComp === 2) {
        return "SCISSORS";

    }
}

function getHumanChoice() {
    let rpsHuman = prompt("Rock, Paper, or Scissors: ").toUpperCase();
    return rpsHuman;
}

function playGame(){
    function playRound(humanChoice,computerChoice) {
        console.log(humanChoice);

        if (humanChoice === computerChoice) {
            console.log("YOU TIED");
        }

        else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS")||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
            console.log(`YOU WIN ${humanChoice} BEATS ${computerChoice}`)
            humanScore += 1;
        }    

        else if ((humanChoice === "ROCK" && computerChoice === "PAPER") ||
        (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (humanChoice === "SCISSORS" && computerChoice === "ROCK")) {
            console.log(`YOU LOSE ${humanChoice} LOSES TO ${computerChoice}`)
            computerScore += 1;
        }

        else {
            console.log("Only enter rock, paper, or scissors")
            playRound(getHumanChoice(),getComputerChoice())
        }        
    }
    playRound(getHumanChoice(),getComputerChoice());
}



let humanScore = 0;
let computerScore = 0;
//console.log(humanScore);
//console.log(computerScore);



for (i=0; i < 5; i++){
    playGame();
    //console.log(humanScore);
    //console.log(computerScore);
    }

if(humanScore>computerScore){
    console.log(`YOU WIN THE GAME ${humanScore}:${computerScore}`);
  }  
  else if(humanScore<computerScore){
    console.log(`YOU LOSE THE GAME ${humanScore}:${computerScore}`);
  }
  else{
    console.log(`YOU TIED THE GAME ${humanScore}:${computerScore}`)}


