let compScore = 0
let manScore = 0

/*==============================================
    This function generates computer choice
==============================================*/
const computerSelection = function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const compChoice = Math.floor(Math.random() * 3)
    return choices[compChoice]
}

/*==============================================
    This function asks user to select choice
==============================================*/
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

/*==============================================
    This function prints the scores
==============================================*/
const count = function(){
    console.log(manScore, compScore)
}


/*==============================================
    This function detects who has won the game
==============================================*/
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

/*==============================================
    This function allows player to play five rounds of rock paper scissors
==============================================*/
function game(){
    for(let i = 0; i < 5; i++){
        playRound(playerSelection(), computerSelection())
    }
}

/*==============================================
    This function checks if use has selected rock paper or scissors
==============================================*/
function checkAnswer(manAnswer){
    if(manAnswer !== "rock"  && manAnswer !=="paper" && manAnswer !== "scissors"){
        console.log("Wrong input! Please type ROCK, PAPER, or SCISSORS")
    }
}

// game()