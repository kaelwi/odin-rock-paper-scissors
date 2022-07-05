let playerWins = 0;
let computerWins = 0;

let computerSelection;
let playerSelection;

function computerPlay() {
    const response = ['PAPER', 'ROCK', 'SCISSORS'];
    return response[Math.floor(Math.random()*response.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return 'tie';
    } else {
        if (playerSelection == 'PAPER') {
            if (computerSelection == 'ROCK') {
                return 'Player wins';
            } else {
                return 'You lose! Scissors beat Paper';
            }
        } else if (playerSelection == 'ROCK') {
            if (computerSelection == 'PAPER') {
                return 'You lose! Paper beats Rock';
            } else {
                return 'Player wins';
            }
        } else {
            if (computerSelection == 'PAPER') {
                return 'Player wins';
            } else {
                return 'You lose! Rock beats Scissors';
            }
        }
    }
}

function play() {
    computerSelection = computerPlay();

    let round = playRound(playerSelection, computerSelection);
    if (round.includes('wins')) {
        playerWins++;
    } else {
        computerWins++;
    }
    console.log(round);
    score();
}

function game() {
    /*
    for (let i = 0; i < 5; i++) {
        play();
    }

    while (playerWins == computerWins) {
        play();
    }
    */

    if (playerWins > computerWins) {
        console.log('You beat the computer!');
    } else {
        console.log('Looser...');
    }
}

const div = document.querySelector('#score');

function score() {
    div.textContent = `Human ${playerWins} vs Computer ${computerWins}`;

    if (playerWins >= 5 || computerWins >= 5) {
        const winner = document.createElement('div');
        
        if (playerWins > computerWins) {
            winner.textContent = 'You beat the computer!';
        } else {
            winner.textContent = 'Looser...';
        }

        div.appendChild(winner);
    }
    

}

// game();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        play();
    });
});

