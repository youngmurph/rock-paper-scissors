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

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(player, computer) {
        computer = computerSelection();

        function nextRound() {
            if (playerScore == 5) {
                let msg = document.querySelector('div');
                let winner = document.createElement('p');
                winner.textContent = `Congratulations, you won!`;
                msg.appendChild(winner);
            } else if (playerScore == 5 && computerScore == 5) {
                let msg = document.querySelector('div');
                let winner = document.createElement('p');
                winner.textContent = `It's a tie.`;
                msg.appendChild(winner);
            } else if (computerScore == 5) {
                let msg = document.querySelector('div');
                let winner = document.createElement('p');
                winner.textContent = `Computer wins, better luck next time.`;
                msg.appendChild(winner);
            } 
        }

        if (player == 'rock' && computer == 'Scissors') {
            playerScore = playerScore+= 1;
            round = round+= 1;
        } else if (player == 'paper' && computer == 'Rock') {
            playerScore = playerScore+= 1;
            round = round+= 1;
        } else if (player == 'scissors' && computer == 'Paper') {
            playerScore = playerScore+= 1;
            round = round+= 1;
        } else if (player == 'rock' && computer == 'Rock') {
            playerScore+= 0;
            computerScore+= 0;
            round = round+= 1;
        } else if (player == 'scissors' && computer == 'Scissors') {
            playerScore+= 0;
            computerScore+= 0;
            round = round+= 1;
        } else if (player == 'paper' && computer == 'Paper') {
            playerScore+= 0;
            computerScore+= 0;
            round = round+= 1;
        } else {
            computerScore = computerScore+= 1;
            round = round+= 1;
        }

        let winner;

      /*  if (playerScore > computerScore) {
            winner = `You, congrats!`;
        } else if (computerScore > playerScore) {
            winner = `Computer, better luck next time!`;
        } else {
            winner = `Nobody, it's a tie!`;
        } */

        document.getElementById('result').textContent = `Round ${round}: The score is ${playerScore} - ${computerScore}.`;

        let gameEnd = () => {
            if (playerScore === 5 && computerScore <= 5) {
                return true;
            } else if (playerScore <= 5 && computerScore === 5) {
                return true;
            } else {
                return false;
            }
        }

        if (playerScore == 5 && computerScore < 5) {
            let gameOver = document.createElement('p');
            gameOver.textContent = `You won, congratulations!`;
            container.appendChild(gameOver);
            gameEnd();
            } else if (playerScore < 5 && computerScore == 5) {
                let gameOver = document.createElement('p');
                gameOver.textContent = `You lost, better luck next time!`;
                container.appendChild(gameOver);
                gameEnd();
            } else {
                nextRound();
            };

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