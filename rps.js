const choices = ['rock', 'paper', 'scissors'];


// random choice selector
const getComputerChoice = function() {
 return choices[Math.floor(Math.random()*choices.length)]
};

const computerSelection = getComputerChoice();
const player= 'SCISSORS';
const playerSelection = player.toLowerCase();

// play round function

const playRound = function(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||   
      (playerSelection === 'scissors' && computerSelection === 'paper') || 
      (playerSelection === 'paper' && computerSelection === 'rock')) {
      console.log('You win, great job');
}   else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')) {
      console.log ('You lose, better luck next time..');
}   else if  (playerSelection === computerSelection) {
    console.log ('It\'s a draw!');
} 

};

playRound(playerSelection, computerSelection);



