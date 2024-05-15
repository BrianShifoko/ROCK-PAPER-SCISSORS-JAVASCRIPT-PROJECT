let playerWins = 0;
let computerWins = 0;

function computerChoice() {
    // Define the choices and their corresponding probabilities
    const choices = ['rock', 'paper', 'scissors'];
    const probabilities = [0.4, 0.3, 0.3]; // Adjust the probabilities as needed

    // Generate a random number between 0 and 1
    const random = Math.random();

    // Initialize variables for cumulative probability and the chosen index
    let cumulativeProbability = 0;
    let chosenIndex = -1;

    // Iterate through the probabilities to determine the chosen index
    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random <= cumulativeProbability) {
            chosenIndex = i;
            break;
        }
    }

    // If chosenIndex is still -1 (due to floating-point inaccuracies), choose randomly
    if (chosenIndex === -1) {
        chosenIndex = Math.floor(Math.random() * choices.length);
    }

    // Return the choice corresponding to the chosen index
    return choices[chosenIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerWins++;
        document.getElementById('playerWins').innerText = playerWins;
        return 'You win!';
    } else {
        computerWins++;
        document.getElementById('computerWins').innerText = computerWins;
        return 'You lose!';
    }
}

function playerChoice(choice) {
    const computer = computerChoice();
    const result = determineWinner(choice, computer);
    document.getElementById('result').innerHTML = `Player chose ${choice}. Computer chose ${computer}. ${result}`;
}

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    document.getElementById('playerWins').innerText = playerWins;
    document.getElementById('computerWins').innerText = computerWins;
    document.getElementById('result').innerText = '';
}
