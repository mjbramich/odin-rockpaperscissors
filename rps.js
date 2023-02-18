// html elements
const resultDiv = document.querySelector('.result')
const scoreDiv = document.querySelector('.score')
console.log(scoreDiv);

// Declare Score on start
let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

// computer choice
getComputerChoice = function(){
    return choices[Math.floor(Math.random() * choices.length)]
}

//player choice

//getting array of buttons
const buttons = Array.from(document.querySelectorAll('button'))
console.log(buttons);

// add an event listener to each button.
buttons.forEach((button, i) => {

    if([i] <= 2){
        button.addEventListener('click', playRound)
    }else{
        button.addEventListener('click', resetGame)
    }
})

// function to play each round of RPS 
function playRound(event){

    playerSelection = event.target.className
    computerSelection = getComputerChoice()

    if(playerSelection === computerSelection){
        updateIcon(playerSelection, computerSelection)
        updateScore('tie')

    }else if(playerSelection === 'rock' && computerSelection ==='scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock'){
        updateIcon(playerSelection, computerSelection)
        updateScore('win')   

    }else if(playerSelection === 'rock' && computerSelection ==='paper' ||
    playerSelection === 'scissors' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'scissors'){
        updateIcon(playerSelection, computerSelection)
        updateScore('loss')
    }

    if(playerScore === 5 || computerScore === 5){
        winner()
    }


}

const resultText = {
    winnerText: ['WINNER!!!', 'YOU GOT THE WIN', 'LETS GOOOO', 'ANYTHING YOU CAN\'T DO?', 'YOU\'RE THE BEST'],
    loserText:['BETTER LUCK NEXT TIME', 'CMON PICK UP YOUR GAME', 'THIS IS GETTING BORING....', 'MAYBE I NEED TO FIND ANOTHER OPPONENT?'],
    tieText:['LOOKS LIKE WE\'RE EQUAL', 'HMM.. AT LEAST I DIDN\'T LOSE', 'GREAT MINDS THINK ALIKE', 'TIE OR TIRED?' ]
}


// Updates Scoreboard and shows winner/loser text
function updateScore(result){
    if(result === 'tie'){
        resultDiv.children[0].innerHTML = resultText.tieText[Math.floor(Math.random() * resultText.tieText.length)]
    }else if(result === 'win'){
        playerScore++
        scoreDiv.children[0].innerHTML = `${playerScore} : ${computerScore}`
        resultDiv.children[0].innerHTML = resultText.winnerText[Math.floor(Math.random() * resultText.winnerText.length )]
    }else if(result ==='loss'){
        computerScore++
        scoreDiv.children[0].innerHTML = `${playerScore} : ${computerScore}`
        resultDiv.children[0].innerHTML = resultText.loserText[Math.floor(Math.random() * resultText.loserText.length )]
    }
}

// shows player and computer choice as a icon
function updateIcon(player, computer){
    const rockImg = Array.from(document.querySelectorAll('.rock-img'))
    const scissorsImg = Array.from(document.querySelectorAll('.scissors-img'))
    const paperImg = Array.from(document.querySelectorAll('.paper-img'))

    if(player === 'rock'){
        rockImg[0].classList.remove('hidden')
        scissorsImg[0].classList.add('hidden')
        paperImg[0].classList.add('hidden')
    }if(computer === 'rock'){
        rockImg[1].classList.remove('hidden')
        scissorsImg[1].classList.add('hidden')
        paperImg[1].classList.add('hidden')
    }if(player === 'paper'){
        rockImg[0].classList.add('hidden')
        scissorsImg[0].classList.add('hidden')
        paperImg[0].classList.remove('hidden')
    }if(computer === 'paper'){
        rockImg[1].classList.add('hidden')
        scissorsImg[1].classList.add('hidden')
        paperImg[1].classList.remove('hidden')
    }if(player === 'scissors'){
        rockImg[0].classList.add('hidden')
        scissorsImg[0].classList.remove('hidden')
        paperImg[0].classList.add('hidden')
    }if(computer === 'scissors'){
        rockImg[1].classList.add('hidden')
        scissorsImg[1].classList.remove('hidden')
        paperImg[1].classList.add('hidden')
    }
}

// Ends game 
function winner(){
    if(playerScore === 5){
        resultDiv.children[0].innerHTML = `<div class='winner'>You win the game</div>`
    }else{
        resultDiv.children[0].innerHTML = `COMPUTER WINS THE GAME`
    }

    buttons.forEach((button) => {
        button.removeEventListener('click', playRound)
    })
}

// resets game
function resetGame(){
    location.reload()
}
