document.addEventListener('DOMContentLoaded', () => {
    const playerChoices = ['rock', 'paper', 'scissors'];
    let playerScore = 0;
    let computerScore = 0;

    // Get DOM elements
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const playerScoreSpan = document.getElementById('playerScore');
    const computerScoreSpan = document.getElementById('computerScore');
    const resultText = document.getElementById('resultText');
    const movesDisplay = document.getElementById('movesDisplay');
    const resetButton = document.getElementById('resetButton');

    // Add event listeners to choice buttons
    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            playRound(playerChoice);
        });
    });

    // Add event listener to reset button
    resetButton.addEventListener('click', resetGame);

    // Function to generate computer's choice
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * playerChoices.length);
        return playerChoices[randomIndex];
    }

    // Function to determine the winner of a round
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a Tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Lose!";
        }
    }

    // Function to play a single round
    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        // Update display
        resultText.textContent = winner;
        movesDisplay.textContent = `You chose ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}, Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
    }

    // Function to reset the game
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
        resultText.textContent = "Make your move!";
        movesDisplay.textContent = "";
    }
});