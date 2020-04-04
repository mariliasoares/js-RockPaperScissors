const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

//calculate a random number between 0 and 1
//a third of that range is reserved for every choice
const getComputerChoice = () => {
  const randomValue = Math.random(); //math is a globally available object
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//just work when assigning in a variable or in a place of a anonymous function
const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === ROCK)
    ? RESULT_COMPUTER_WINS
    : RESULT_PLAYER_WINS;

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   (cChoice === ROCK && pChoice === SCISSORS) ||
  //   (cChoice === SCISSORS && pChoice === PAPER) ||
  //   (cChoice === PAPER && pChoice === ROCK)
  // ) {
  //   return RESULT_COMPUTER_WINS;
  // } else {
  //   return RESULT_PLAYER_WINS;
  // }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});
