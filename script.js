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

// function getHumanChoice(buttonClick) {
//     let rpsHuman = buttonClick;
//     return rpsHuman;
//     }

function playGame(humanClick){
    let humanChoice = humanClick
    function playRound(humanChoice,computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice)
        
        if (humanChoice === computerChoice) {
            addResult("YOU TIED");
        }

        else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS")||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
            addResult(`YOU WIN ${humanChoice} BEATS ${computerChoice}`)
            humanScore += 1;
        }    

        else if ((humanChoice === "ROCK" && computerChoice === "PAPER") ||
        (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (humanChoice === "SCISSORS" && computerChoice === "ROCK")) {
            addResult(`YOU LOSE ${humanChoice} LOSES TO ${computerChoice}`)
            computerScore += 1;
        }   
    }
    playRound(humanChoice,getComputerChoice());
}


function newStart() {
    const buttons = document.querySelectorAll('.selectionButton');
    buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const gameWinner = document.querySelector('#gameWinner');
            if (roundsPlayed >= 5) {
                if(humanScore>computerScore){
                    gameWinner.textContent = (`YOU WIN THE GAME ${humanScore}:${computerScore}`);
                    return 
                    }  
                else if(humanScore<computerScore){
                    gameWinner.textContent = (`YOU LOSE THE GAME ${humanScore}:${computerScore}`);
                    return
                }
                else if(humanScore === computerScore){
                    gameWinner.textContent = (`YOU TIED THE GAME ${humanScore}:${computerScore}`)
                    return
                    }   
                }

            playGame(event.target.id.toUpperCase());
            roundsPlayed ++;
            })
        })
}

function addResult(message) {
    const p = document.createElement("p");
    p.textContent = message;
    roundResult.appendChild(p);

}


const roundResult = document.querySelector("#roundResult");

let humanScore = 0;
let computerScore = 0;

let roundsPlayed = 0;



newStart()




