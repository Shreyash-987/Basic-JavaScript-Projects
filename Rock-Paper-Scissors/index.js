const choices = ["rock", "paper", "scissors"]
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerDisplay = document.getElementById("playerChoice");
const computerDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(input){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    playerChoice = input;

    if(playerChoice === computerChoice){
        result = "ITS A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!"  : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice == "paper") ? "YOU WIN!" : "YOU LOSE!";
        }

        playerDisplay.textContent = "PLAYER: " + playerChoice;
        computerDisplay.textContent = "COMPUTER: " + computerChoice;
        resultDisplay.textContent = result;

        switch(result){
            case "YOU WIN!":
                resultDisplay.classList.add("greenText")
                playerScore++;
                break;
            case "YOU LOSE!":
                resultDisplay.classList.add("redText")
                computerScore++;
        }

        playerScoreDisplay.textContent = "Player Score: " + playerScore
        computerScoreDisplay.textContent = "Player Score: " + computerScore
    }
}