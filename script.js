let playerName = prompt("What is your name?");

let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
     return choices[Math.floor(Math.random() * choices.length)];  
} 

const win = "You won!";
const tie = "You tied!";
const loss = "You lose!";

function firstRound(playerSelection, computerSelection) {
    
    getComputerChoice();

    var computerSelection = getComputerChoice();
    var playerSelection = prompt("Rock, paper or scissors?");

    console.log("Computer: ", computerSelection);
    console.log(playerName + ":", playerSelection);

    if (playerSelection === computerSelection){
        console.log(tie);
    } else if (playerSelection === "Rock".toLowerCase() && computerSelection === "Scissors" ||
                playerSelection === "Paper".toLowerCase() && computerSelection === "Rock" ||
                playerSelection === "Scissors".toLowerCase() && computerSelection === "Paper"){
        console.log(win);
                } else if (playerSelection === null || playerSelection === ""){
        console.log("Invalid input, try again");
                } else {
                    console.log(loss);
                };

}

function game() {
    for (let i = 0; i < 5; i++) {
        firstRound();
    }
}

game();



