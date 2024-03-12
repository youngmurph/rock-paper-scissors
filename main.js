function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    function computerSelection() {
        let choices = (['Rock', 'Paper', 'Scissors']);
        let result = choices[Math.floor((Math.random() * 3))];
        return result;
    }
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
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerScore > computerScore) {
        console.log("Congratulations, you win!");
    } else {
        console.log("You lose, better luck next time!");
    }

    }

    playGame();