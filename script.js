let playerName = prompt("What is your name?");

let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
     return choices[Math.floor(Math.random() * choices.length)];  
} 

const win = "You won!";
const draw = "You drew!";
const loss = "You lose!";

function firstRound(playerSelection, computerSelection) {
    
    getComputerChoice();

    var computerSelection = getComputerChoice();
    var playerSelection = prompt("Rock, paper or scissors?"); 

    console.log("Computer: ", computerSelection);
    console.log(playerName + ":", playerSelection);

    if (playerSelection === computerSelection){
        console.log(draw);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" ||
                playerSelection === "Scissors" && computerSelection === "Paper" ){
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



