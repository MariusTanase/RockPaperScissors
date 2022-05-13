//Rock Paper Scissors game

//Global Variables
let playerScore = 0;
let computerScore = 0;
//UI 
let restartGameButton = document.querySelector("#reset__game");
let uiPlayerScore = document.querySelector("#player__score");
let uiComputerScore = document.querySelector("#computer__score");
//Player Choices
let rockButton = document.querySelector("#rock__option")
let paperButton = document.querySelector("#paper__option")
let scissorsButton = document.querySelector("#scissors__option")


//Generation Computer Move with a random choice always
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

//RPS comparision between Player Choice and Computer generated move
function playRound(playerSelection, computerSelection) {
  //Player winning options
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("Player Wins");
    ++playerScore;
    uiPlayerScore.textContent = playerScore;
    uiComputerScore.textContent = computerScore;
    //Computer winning options
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    ++computerScore;
    uiPlayerScore.textContent = playerScore;
    uiComputerScore.textContent = computerScore;

    //TIE
  } else {
    console.log("TIE");
  }
}

// //Restart the game
// button.addEventListener("click", () => {
//   //computer generated value and player input
//   let computerChoice = computerPlay();
//   let playerChoice = prompt("rock/paper/scissors");
//   playerChoice.toLowerCase();
//   //calling main function to compare the moves
//   playRound(playerChoice, computerChoice);
// });

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  uiPlayerScore.textContent = playerScore;
  uiComputerScore.textContent = computerScore;
}

function playerChoice(option) {
  let playerChoice = option;
  let computerChoice = computerPlay();
  playRound(playerChoice, computerChoice);
}



restartGameButton.addEventListener("click", restartGame);
rockButton.addEventListener("click", () => playerChoice("rock"));
paperButton.addEventListener("click", () => playerChoice("paper"));
scissorsButton.addEventListener("click", () => playerChoice("scissors"));