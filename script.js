let playerWins = 0;
let computerWins = 0;
let ties = 0;

function animateButton(choice) {
    const buttons = document.querySelectorAll('#playerChoice button');
    buttons.forEach(button => button.classList.remove('animated-border'));

    const selectedButton = document.getElementById(choice);
    selectedButton.classList.add('animated-border');
}


function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const probabilities = [0.4, 0.3, 0.3];
    const random = Math.random();
    let cumulativeProbability = 0;

    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random <= cumulativeProbability) {
            return choices[i];
        }
    }
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        ties++;
        document.getElementById('ties').innerText = ties;
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
    animateButton(choice);
}

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    document.getElementById('playerWins').innerText = playerWins;
    document.getElementById('computerWins').innerText = computerWins;
    document.getElementById('ties').innerText = ties;
    document.getElementById('result').innerText = '';
}


document.getElementById('rock').addEventListener('click', () => playerChoice('rock'));
document.getElementById('paper').addEventListener('click', () => playerChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => playerChoice('scissors'));
document.getElementById('restartButton').addEventListener('click', restartGame);
