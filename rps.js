const choices = ['Rock', 'Paper', 'Scissors'];


// random choice selector
const getComputerChoice = function() {
 return choices[Math.floor(Math.random()*choices.length)]
};

const computerSelection = getComputerChoice();
const playerSelection = 'Rock';

const playRound = function(playerSelection, computerSelection) {
  if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||   (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')) {
      return console.log('You win, great job');
}  else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
  (playerSelection === 'Scissor' && computerSelection === 'Rock') ||
  (playerSelection === 'Paper' && computerSelection === 'Scissors')); {
    return console.log ('You lose, better luck next time..')
  }
}

