/* function firstRound(playerSelection, computerSelection) {

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
} */

/* Create three buttons, one for each selection.
Add an event listener to each button that calls playRound(). */

    let rock = document.getElementById('rock').addEventListener('click', () => {
        playRound('rock');
    });
    let paper = document.getElementById('paper').addEventListener('click', () => {
        playRound('paper');
    });
    let scissors = document.getElementById('scissors').addEventListener('click', () => {
        playRound('scissors');
    });


    function computerSelection() {
        let choices = (['Rock', 'Paper', 'Scissors']);
        let computerChoice = choices[Math.floor((Math.random() * 3))];
        return computerChoice;
    }; 

    function playRound(player, computer) {
        computer = computerSelection();
        let playerScore = 0;
        let computerScore = 0;
        let round = 0;

        function nextRound() {
            round+= 1;
        }

        if (player == 'rock' && computer == 'Scissors') {
            playerScore = playerScore+= 1;
        } else if (player == 'paper' && computer == 'Rock') {
            playerScore = playerScore+= 1;
        } else if (player == 'scissors' && computer == 'Paper') {
            playerScore = playerScore+= 1;
        } else if (player == 'rock' && computer == 'Rock') {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        } else if (player == 'scissors' && computer == 'Scissors') {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        } else if (player == 'paper' && computer == 'Paper') {
            playerScore = playerScore + 0;
            computerScore = computerScore + 0;
        } else {
            computerScore = computerScore+= 1;
        }

        document.getElementById('result').textContent = `The score is ${playerScore} - ${computerScore}.`;

        nextRound();
    

        if (playerScore == 5) {
            document.createElement('p').textContent = `Congratulations, you won!`;
        } else if (playerScore == 5 && computerScore == 5) {
            document.createElement('p').textContent = ` It's a tie!`;
        } else {
            document.createElement('p').textContent = `You lose, better luck next time`;
        }
    
    
    };

   




 



/* function playGame() { 


    let computer = computerSelection();
    let player = playerSelection(); 

        let playerScore = 0;
        let computerScore = 0;

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

        if (playerScore > computerScore) {
            document.createElement('p');
            p.textContent = "Congratulations, you win!";
        } else {
            document.createElement('p');
            p.textContent = "You lose, better luck next time!";
        }
}; */
/* playGame(); */