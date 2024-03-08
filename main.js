/* Choose a string from three possible choices. */
/* Print the chosen string to the console. */

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3 ) {
        return "scissors";
    }
} 

/* Prompt user for their choice with no case sensitivity */
/* Run getComputerChoice()*/

let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
let computerSelection = getComputerChoice();


function firstRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection === "scissors") {
        return "You win, congratulations!";
    } else if (playerSelection == "paper" && computerSelection === "rock") {
        return "You win, congratulations!"; 
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
        return "You win, congratulations!";
    } else {
        return "You lose!";
    }
}

console.log(firstRound());