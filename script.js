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
// TRACK the scores.
// COMPARE the scores and declare winner.





function getComputerChoice() {
    let rpsComp = Math.floor(Math.random()*100)+1;
    if (rpsComp < 33) {
        return "ROCK"
    }
    else if (rpsComp >= 33 && rpsComp <= 66) {
        return "PAPER";
    }
    else if (rpsComp > 66) {
        return "SCISSORS";

    }
}

function getHumanChoice() {
    let rpsHuman = prompt("Rock, Paper, or Scissors: ");
    return rpsHuman;
}


function playGame(humanChoice,computerChoice) {


    function playRound() {
        let humanChoiceCaps = humanChoice.toUpperCase();
        console.log(humanChoiceCaps);
        console.log(computerChoice);


        if (humanChoiceCaps === computerChoice) {
            console.log("YOU TIED");
        }
        else if (humanChoiceCaps === "ROCK" && computerChoice === "SCISSORS"){
            console.log("YOU WIN ROCK BEATS SCISSORS")
            humanScore += 1;
        }    
        else if(humanChoiceCaps === "ROCK" && computerChoice === "PAPER") {
            console.log("YOU LOSE PAPER BEATS ROCK")
            computerScore += 1;
        }
        else if (humanChoiceCaps === "PAPER" && computerChoice === "SCISSORS"){
            console.log("YOU LOSE SCISSORS BEATS PAPER")
            humanScore += 1;

        }
        else if (humanChoiceCaps === "PAPER" && computerChoice === "ROCK"){
            console.log("YOU WIN PAPER BEATS ROCK");
            humanScore += 1;

        }
        else if (humanChoiceCaps === "SCISSORS" && computerChoice === "PAPER"){
            console.log("YOU WIN SCISSORS BEATS PAPER")
            humanScore += 1;

        }
        else if (humanChoiceCaps === "SCISSORS" && computerChoice === "ROCK") {
            console.log("YOU LOSE ROCK BEATS SCISSORS")
            humanScore += 1;

        }
        
        else {
            console.log("Only enter rock, paper, or scissors")
        }
    }

    let humanScore = 0;
    let computerScore = 0;
    playRound(humanChoice,computerChoice)

}





playGame(getHumanChoice(),getComputerChoice());
