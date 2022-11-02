const choices = ['rock', 'paper', 'scissors'];


// random choice selector
const getComputerChoice = function() {
 return choices[Math.floor(Math.random()*choices.length)]
};

const computerSelection = getComputerChoice();
const player = prompt('Please enter selection: ');
const playerSelection = player.toLowerCase();
let playerScore =0;
let computerScore = 0;
let score = `${playerScore} - ${computerScore}`;

// play round function

const playRound = function(playerSelection, computerSelection) { 
  
  // win condition
  if((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') || 
      (playerSelection === 'paper' && computerSelection === 'rock')) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;

  // lose condition
}     else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'scissors' && computerSelection === 'rock') ||
      (playerSelection === 'paper' && computerSelection === 'scissors')) {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
      computerScore++;

  // draw condition
}     else if  (playerSelection === computerSelection) {
      console.log('It\'s a draw!');
} 
    return score ;
};
playRound(playerSelection,computerSelection);
// console.log(score);

// game function


