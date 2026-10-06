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


function playRound(humanClick,computerChoice) {
    let humanChoice = humanClick
    
    if (humanChoice === computerChoice) {
        roundResult.textContent = (`YOU TIED WITH ${humanChoice}`);
    }

    else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS")||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        roundResult.textContent = (`YOU WIN ${humanChoice} BEATS ${computerChoice}`)
        humanScore += 1;
    }    

    else if ((humanChoice === "ROCK" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
    (humanChoice === "SCISSORS" && computerChoice === "ROCK")) {
        roundResult.textContent = (`YOU LOSE ${humanChoice} LOSES TO ${computerChoice}`)
        computerScore += 1;
    }   
    humanSpan.textContent = humanScore;
    computerSpan.textContent = computerScore;
}



function playGame(event) {
    if (humanScore === 5 || computerScore === 5) return;

    playRound(event.target.id.toUpperCase(),getComputerChoice());

    if(humanScore === 5){
        resultDisplay("green",`YOU WIN THE GAME ${humanScore}:${computerScore}`)
        setTimeout(() => location.reload(),3000);

        }  
    else if(computerScore === 5){
        resultDisplay("red",`YOU LOSE THE GAME ${humanScore}:${computerScore}`)             
        setTimeout(() => location.reload(),3000);
    }

}

function newGame() {
    buttons.forEach((btn) => {
        btn.addEventListener("click", playGame);
    })
}

function resultDisplay(colour,textOutput){

    borderBox.classList.add("borderBox");
    borderBox.style.background = colour;

    gameWinner.textContent = textOutput;

    borderBox.appendChild(gameWinner);
    container.appendChild(borderBox);
}


const buttons = document.querySelectorAll('.selectionButton');
const roundResult = document.querySelector('#roundResult');
const humanSpan = document.querySelector('#humanSpan')
const computerSpan = document.querySelector('#computerSpan')

const gameWinner = document.querySelector("#gameWinner");
const borderBox = document.createElement("div");
const container = document.querySelector("#container");


let humanScore = 0;
let computerScore = 0;


newGame()




