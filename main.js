/* Choose a string from three possible choices. */
/* Print the chosen string to the console. */

function getComputerChoice() {
    let choices = (['Rock', 'Paper', 'Scissors']);
    let result = choices[Math.floor((Math.random() * 3))];
    return result;
} 

/* console.log(getComputerChoice()); */

/* getComputerChoice(); */

/* Prompt user for their choice with no case sensitivity */
/* Run getComputerChoice()*/

function firstRound(playerSelection, computerSelection) {

    let result;

    if (playerSelection == 'rock' && computerSelection === 'Scissors') {
        result = "You win, rock beats scissors!";
    } else if (playerSelection == 'paper' && computerSelection === 'Rock') {
        result = "You win, paper beats rock!"; 
    } else if (playerSelection == 'scissors' && computerSelection === 'Paper') {
        result = "You win, scissors beats paper!";
    } else if (playerSelection == 'rock' && computerSelection === 'Rock') {
        result = "It's a draw!";
    } else if (playerSelection == 'paper' && computerSelection === 'Paper') {
        result = "It's a draw!";
    } else if (playerSelection == 'scissors' && computerSelection === 'Scissors') {
        result = "It's a draw!";
    } else {
        result = "You lose!";
    }

    return result;
} 

const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();

