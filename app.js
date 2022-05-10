//Rock Paper Scissors game

//Global Variables
let playerScore = 0;
let computerScore = 0;
let button = document.querySelector("#play");

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
    console.log(
      `Player ${playerSelection}: Computer ${computerSelection}  Score: ${playerScore} Player: ${computerScore} Computer`
    );
    //Computer winning options
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    console.log("Computer Wins");
    ++computerScore;
    console.log(
      `Player ${playerSelection}: Computer ${computerSelection}  Score: ${playerScore} Player: ${computerScore} Computer`
    );
    //TIE
  } else {
    console.log("TIE");
    console.log(
      `Player ${playerSelection}: Computer ${computerSelection} Score: ${playerScore} Player: ${computerScore} Computer`
    );
  }
}

//Button to play the game
button.addEventListener("click", () => {
  //computer generated value and player input
  let computerChoice = computerPlay();
  let playerChoice = prompt("rock/paper/scissors");
  playerChoice.toLowerCase();
  //calling main function to compare the moves
  playRound(playerChoice, computerChoice);
});
