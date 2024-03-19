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

        document.getElementById('result').textContent = `Round ${round}: The score is ${playerScore} - ${computerScore}.`;

        let gameEnd = () => {
            if (playerScore === 5 && computerScore <= 5) {
                document.getElementById('rock').disabled = true;
                document.getElementById('paper').disabled = true;
                document.getElementById('scissors').disabled = true;
                return true;
            } else if (playerScore <= 5 && computerScore === 5) {
                document.getElementById('rock').disabled = true;
                document.getElementById('paper').disabled = true;
                document.getElementById('scissors').disabled = true;
                return true;
            } else {
                return false;
            }
        }

        if (playerScore === 5 && computerScore < 5) {
            let gameOver = document.createElement('p');
            gameOver.textContent = `You won, congratulations!`;
            container.appendChild(gameOver);
            gameEnd();
            } else if (playerScore < 5 && computerScore === 5) {
                let gameOver = document.createElement('p');
                gameOver.textContent = `You lost, better luck next time!`;
                container.appendChild(gameOver);
                gameEnd();
            } else {
                nextRound();
            };

        };