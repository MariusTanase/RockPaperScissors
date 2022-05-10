//Rock Paper Scissors game

let result;
let playerScore = 0;
let computerScore = 0;
let button = document.querySelector("#play");

//Generation Computer Move with a random choice always
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
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
  } else {
    console.log("TIE");
    console.log(
      `Player ${playerSelection}: Computer ${computerSelection} Score: ${playerScore} Player: ${computerScore} Computer`
    );
  }
}

button.addEventListener("click", () => {
  let computerChoice = computerPlay();

  let playerChoice = prompt("rock/paper/scissors");
  playerChoice.toLowerCase();

  playRound(playerChoice, computerChoice);
});
