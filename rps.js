const choices = ['rock', 'paper', 'scissors'];


// random choice selector
function getComputerChoice() {
 return choices[Math.floor(Math.random()*choices.length)]
};

const computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

//Player choice
function getPlayerChoice() {
  let playerChoice = prompt('Enter Selection:').toLowerCase();
    return playerChoice;
}

//Scoring
let playerScore = 0;
let computerScore = 0;
let score = `${playerScore} - ${computerScore}`;


// play round function

const playRound = function(playerSelection, computerSelection) { 
  
  // win condition
  if((playerSelection === 'rock' && computerSelection === 'scissors') 
      ||
      (playerSelection === 'scissors' && computerSelection === 'paper') 
      || 
      (playerSelection === 'paper' && computerSelection === 'rock')) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
      score = `${playerScore} - ${computerScore}`;

  // lose condition
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') 
      ||
      (playerSelection === 'scissors' && computerSelection === 'rock') 
      ||
      (playerSelection === 'paper' && computerSelection === 'scissors')) {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
      computerScore++;
      score = `${playerScore} - ${computerScore}`;

  // draw condition
  } else if  (playerSelection === computerSelection) {
      console.log('It\'s a draw!');
  } 
    return score ;
};


// game function to play 5 rounds


function game() {
  for (let game = 0; game < 5; game++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection,computerSelection));
  }
}
game();


