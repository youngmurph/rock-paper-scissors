/* Choose a string from three possible choices. */
/* Print the chosen string to the console. */

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    return choice;
} 

/* getComputerChoice(); */

/* Prompt user for their choice with no case sensitivity */
/* Run getComputerChoice()*/

let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
let computerSelection = getComputerChoice();


function firstRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === 3) {
        alert("You win, rock beats scissors!");
    } else if (playerSelection = "paper" && computerSelection === 1) {
        alert("You win, paper beats rock!"); 
    } else if (playerSelection === "scissors" && computerSelection === 2) {
        alert("You win, scissors beats paper!");
    } else if (playerSelection === "rock" && computerSelection === 1) {
        alert("It's a draw!");
    } else if (playerSelection === "paper" && computerSelection === 2) {
        alert("It's a draw!");
    } else if (playerSelection === "scissors" && computerSelection === 3) {
        alert("It's a draw!");
    } else {
        alert("You lose!")
    }
}

firstRound(playerSelection, computerSelection); 