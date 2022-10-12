const playerChoice = document.querySelectorAll(".game-board_player button")
const computerChoice = document.querySelector(".game-board_computer button")
const score = document.querySelector("#score")
const cscore = document.querySelector("#cscore")
const announcer = document.querySelector(".announcer")
const announcerScore = document.querySelector("#announcer-score")
const play = document.querySelector("#play-again")

let compScore = 0
let manScore = 0
let playerSelection;

playerChoice.forEach(choice => {
    choice.addEventListener("click", () => {
        playerSelection = choice.id
        playRound(playerSelection, computerSelection())
        score.textContent = manScore
        cscore.textContent = compScore
        scoreToFive()
    })
})


const computerSelection = function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const compChoice = Math.floor(Math.random() * 3)
    computerChoice.innerHTML = `<img class=${choices[compChoice]} src="./img/icon-${choices[compChoice]}.svg" alt="">`
    return choices[compChoice]
}

const scoreToFive = function(){
    if(manScore == 5){
        announcer.style.display = "block"
        announcer.firstElementChild.textContent = "You Win!"
        disableButton()
    }
    if(compScore == 5){
        announcer.style.display = "block"
        announcer.firstElementChild.textContent = "Computer Wins!"
        disableButton()
    }
}

play.addEventListener("click", playAgain)

const disableButton = function(){
    playerChoice.forEach(choice => {
        choice.disabled = true
    })
}

const enableButton = function(){
    playerChoice.forEach(choice => {
        choice.disabled = false
    })
}

function playAgain(){
    announcer.style.display = "none"
    compScore = 0
    manScore = 0
    score.textContent = "0"
    cscore.textContent = "0"
    enableButton()
}


/*==============================================
    This function detects who has won the game
==============================================*/
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissors"){
        announcerScore.innerText = `You win!, ${playerSelection} beats ${computerSelection}`
        manScore++ 
    }
    if(playerSelection == "scissors" && computerSelection == "rock"){
        announcerScore.innerText = `You lose!, ${computerSelection} beats ${playerSelection}`
        compScore++
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
        announcerScore.innerText = `You win!, ${playerSelection} beats ${computerSelection}`
        manScore++
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        announcerScore.innerText = `You lose!, ${computerSelection} beats ${playerSelection}`
        compScore++
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        announcerScore.innerText = `You win!, ${playerSelection} beats ${computerSelection}`
        manScore++
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        announcerScore.innerText = `You lose!, ${computerSelection} beats ${playerSelection}`
        compScore++
    }
    if(playerSelection == computerSelection){
        announcerScore.innerText = "It's a tie!"
    }
}

