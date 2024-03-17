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

function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    function computerSelection() {
        let choices = (['Rock', 'Paper', 'Scissors']);
        let result = choices[Math.floor((Math.random() * 3))];
        return result;
    }

    const chooseRock = document.getElementById("rock");
    const choosePaper = document.getElementById("paper");
    const chooseScissors = document.getElementById("scissors");
    
    function playerSelection() {
        let choice = prompt("Rock, paper, or scissors?").toLowerCase();
        return choice;
    }

    function playRound() {
        let computer = computerSelection();
        let player = playerSelection();

        if (player == 'rock' && computer == 'Scissors') {
            playerScore+= 1;
        } else if (player == 'paper' && computer == 'Rock') {
            playerScore+= 1;
        } else if (player == 'scissors' && computer == 'Paper') {
            playerScore+= 1;
        } else if (player == 'rock' && computer == 'Rock') {
            playerScore+= 0;
            computerScore+= 0;
        } else if (player == 'scissors' && computer == 'Scissors') {
            playerScore+= 0;
            computerScore+= 0;
        } else if (player == 'paper' && computer == 'Paper') {
            playerScore+= 0;
            computerScore+= 0;
        } else {
            computerScore+= 1;
        }

        console.log(playerScore + ' - ' + computerScore);

        }
    
    

    if (playerScore > computerScore) {
        console.log("Congratulations, you win!");
    } else {
        console.log("You lose, better luck next time!");
    }

    }

    playGame();