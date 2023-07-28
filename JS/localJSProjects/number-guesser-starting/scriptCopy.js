//This is experimental code with extra functions.

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(firstNumber, secondNumber) {
  return Math.abs(firstNumber - secondNumber);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
  if (userGuess > 9) {
    return window.alert("Your chosen number is out of range");
  } else if (userGuess === computerGuess) {
    return true;
  } else if (userGuess === targetNumber) {
    return true;
  } else if (computerGuess === targetNumber) {
    return false;
  } else if (
    getAbsoluteDistance(userGuess, targetNumber) <
    getAbsoluteDistance(computerGuess, targetNumber)
  ) {
    return true;
  } else if (
    getAbsoluteDistance(computerGuess, targetNumber) <
    getAbsoluteDistance(userGuess, targetNumber)
  ) {
    return false;
  }
}

function updateScore(winner) {
  switch (winner) {
    case "human":
      humanScore++;
      break;
    case "computer":
      computerScore++;
      break;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
