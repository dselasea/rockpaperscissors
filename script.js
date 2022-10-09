let compScore = 0
let manScore = 0

const computerSelection = function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const compChoice = Math.floor(Math.random() * 3)
    return choices[compChoice]
}

const playerSelection = function getManChoice(){
        let manSelection = prompt("Enter your choice!")
        if(manSelection === ""){
            console.log("Empty")
        }else if(manSelection){
            let lManSelection = manSelection.toLowerCase()
            checkAnswer(lManSelection)
            return lManSelection
        }else{
            console.log("You hit cancel")
        }
}

const count = function(){
    console.log(manScore, compScore)
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log(`You win!, ${playerSelection} beats ${computerSelection}`)
        manScore++ 
        return count()
    }
    if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log(`You lose!, ${computerSelection} beats ${playerSelection}`)
        compScore++
        return count()
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
        console.log(`You win!, ${playerSelection} beats ${computerSelection}`)
        manScore++
        return count()
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log(`You lose!, ${computerSelection} beats ${playerSelection}`)
        compScore++
        return count()
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`You win!, ${playerSelection} beats ${computerSelection}`)
        manScore++
        return count()
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log(`You lose!, ${computerSelection} beats ${playerSelection}`)
        compScore++
        return count()
    }
    if(playerSelection == computerSelection){
        console.log("It's a tie!")
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        playRound(playerSelection(), computerSelection())
    }
}

function checkAnswer(manAnswer){
    if(manAnswer !== "rock"  && manAnswer !=="paper" && manAnswer !== "scissors"){
        console.log("Wrong input!")
    }
}

game()