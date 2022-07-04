let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    const response = ['PAPER', 'ROCK', 'SCISSORS'];
    return response[Math.floor(Math.random()*response.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return 'nerozhodne';
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
    let computerSelection = computerPlay();
    let playerSelection = prompt("Tell me your next move");

    let round = playRound(playerSelection, computerSelection);
    if (round.includes('wins')) {
        playerWins++;
    } else {
        computerWins++;
    }
    console.log(round);
}

function game() {
    for (let i = 0; i < 5; i++) {
        play();
    }

    while (playerWins == computerWins) {
        play();
    }

    if (playerWins > computerWins) {
        console.log('You beat the computer!');
    } else {
        console.log('Looser...');
    }
}

game();

