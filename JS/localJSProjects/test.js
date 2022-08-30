// let userScore = 0;
// let computerScore = 0;
// let roundNumber = 1;

// // function scoreGenerator() {
// //   return Math.floor(Math.random() * 10);
// // }

// function scoreCalc(userGuess, computerGuess, targetNumber) {
//   if ((userGuess === computerGuess) || (userGuess === targetNumber)) {
//   return "The user guessed the computer's number.";
// } else if ((userGuess !== computerGuess) && (computerGuess === targetNumber)) {
//   return 'The computer guessed the target number right.';
//   } else if (Math.abs(userGuess - targetNumber) < Math.abs(computerGuess - targetNumber)) {
//     return 'The user won by guessing the clossest number';
//   }
// }

// // console.log(scoreCalc(3, 7, 6));

function getAbsoluteDistance(firstNumber, secondNumber) {
  return Math.abs(firstNumber - secondNumber);
}
console.log(getAbsoluteDistance(5, 3));