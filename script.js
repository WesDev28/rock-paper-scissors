//Set up project structure

//write logic to get computer choice
//MAKE new function to get the computer choice
//CALL the math random function to get a number
//COMPARE the number between 0.33 0.66 1 to determine rock paper or scissors
//LOG the the result.




//write logic to get human choice
//declare players score variables
//write the logic to play a single round
//write the logic to play the entire game


function getComputerChoice() {
    let rpsComp = Math.floor(Math.random()*100)+1;
    if (rpsComp < 33) {
        console.log("rock");
    }
    else if (rpsComp >= 33 && rpsComp <= 66) {
        console.log("paper");
    }
    else if (rpsComp > 66) {
        console.log("scissors");

    }
}

getComputerChoice();