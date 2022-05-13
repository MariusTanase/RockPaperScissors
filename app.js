//Rock Paper Scissors game
//Global Variables
let playerScore = 0;
let computerScore = 0;
//UI 
let restartGameButton = document.querySelector("#reset__game");
let uiPlayerScore = document.querySelector("#player__score");
let uiComputerScore = document.querySelector("#computer__score");
//Player Choices
let rockButton = document.querySelector("#rock__option");
let paperButton = document.querySelector("#paper__option");
let scissorsButton = document.querySelector("#scissors__option");
//Text blocks for Player and Computer choice for interface
let playerChoiceText = document.querySelector("#player__Choice-Text");
let computerChoiceText = document.querySelector("#computer__Choice-Text");
//Text block for choices outcome
let setGameResult = document.querySelector("#game__status")

//Generation Computer Move with a random choice always
function computerPlay() {
  //Possible choices from array
  let options = ["rock", "paper", "scissors"];
  //returing the choice from array with a Math.random  function
  return options[Math.floor(Math.random() * 3)];
}

//RPS comparision between Player Choice and Computer generated move
function playRound(playerSelection, computerSelection) {
  //Player winning conditions
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    //Updating player score
    playerScore++;
    //Updating the UI with player and computer score
    uiPlayerScore.textContent = playerScore;
    uiComputerScore.textContent = computerScore;
    //Game result sent to UI
    setGameResult.textContent = `Round won by Player`



  } else if (
    //Computer winning conditions
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    //Updating computer score
    computerScore++;
    //Updating the UI with player and computer score
    uiPlayerScore.textContent = playerScore;
    uiComputerScore.textContent = computerScore;
    //Game result sent to UI
    setGameResult.textContent = `Round won by Computer`


  } else {
    //last else with the outcome of TIE
    //Game result sent to UI in case of TIE
    setGameResult.textContent = `This round is a TIE`
  }
}



//Function to restart the game
//Set player and computer score to 0 and resets the UI text holders
function restartGame() {
  //reset game score
  playerScore = 0;
  computerScore = 0;
  //reset score in UI
  uiPlayerScore.textContent = playerScore;
  uiComputerScore.textContent = computerScore;
  //reset all the text from UI
  // playerChoiceText.textContent = "";
  // computerChoiceText.textContent = "";
  // setGameResult.textContent = "";
}




//Function to set player choices from UI
function playGame(option) {
  //Player choice from button event listener
  let playerChoice = option;
  //generating computer choice
  let computerChoice = computerPlay();
  //UI update with the player and computer choice
  playerChoiceText.textContent = `Player choice is ${option}`;
  computerChoiceText.textContent = `Computer choice is ${computerChoice}`;
  //calling the main function to run the game
  playRound(playerChoice, computerChoice);

  //Condition to restart the game automatically
  //If player or computer reach score 5, the game restarts automatically
  if (playerScore >= 5) {
    setGameResult.textContent = "PLAYER WON THE GAME";
    playerChoiceText.textContent = `Last player choice was ${option.toUpperCase()}`;
    computerChoiceText.textContent = `Last computer choice was ${computerChoice.toUpperCase()}`;
    restartGame()
  } else if (computerScore >= 5) {
    setGameResult.textContent = "COMPUTER WON THE GAME";
playerChoiceText.textContent = `Last player choice was ${option.toUpperCase()}`;
    computerChoiceText.textContent = `Last computer choice was ${computerChoice.toUpperCase()}`;
    restartGame()
  }

}

//restart the game by pressing the button
restartGameButton.addEventListener("click", restartGame);
//set player choices
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));


// Other scripts
//Darkmode button
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}