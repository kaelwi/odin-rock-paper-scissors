let playerWins = 0;
let computerWins = 0;

let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll('.card-img');
const computerMove = document.querySelector('#move');
const response = document.querySelector('#response');
const points = document.querySelector('#score');
const newGame = document.querySelectorAll('button')[0];
const winner = document.getElementById('result');

function computerPlay() {
    const response = ['PAPER', 'ROCK', 'SCISSORS'];
    return response[Math.floor(Math.random()*response.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else {
        if ((playerSelection == 'PAPER' && computerSelection == 'ROCK') || 
                (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
                (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')) {
                    return 'You win the round!';
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

function play() {
    computerSelection = computerPlay();

    let round = playRound(playerSelection, computerSelection);

    computerMove.textContent = computerSelection;
    response.textContent = round;

    if (round.includes('win')) {
        playerWins++;
    } else if (round.includes('lose')) {
        computerWins++;
    }
    
    score();
}

function score() {
    points.textContent = `Human ${playerWins} vs Computer ${computerWins}`;

    if (playerWins >= 5 || computerWins >= 5) {

        newGame.classList.toggle('invisible');
        newGame.style.color = 'black';
        newGame.textContent = 'New Game'; 
        
        if (playerWins > computerWins) {
            winner.textContent = 'You beat the computer!';
        } else {
            winner.textContent = 'Looser...';
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerWins < 5 && computerWins < 5) {
            playerSelection = button.firstElementChild.alt;
            play();
        }
    });

    button.addEventListener('mouseover', function(e) {
        e.currentTarget.classList.toggle('mouseOver');
    })

    button.addEventListener('mouseout', function(e) {        
        e.currentTarget.classList.toggle('mouseOver');
    })
});

newGame.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    document.querySelector('#move').textContent = '\xa0';
    document.querySelector('#response').textContent = '\xa0';
    newGame.style.color = 'transparent';
    newGame.classList.toggle('invisible');
    winner.textContent = '\xa0';
    points.textContent = '\xa0';
})