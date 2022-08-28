const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === 'bomb') {
     return userInput;
   } else {
     return "ERROR! Choose between rock, paper or scissors.";
   }
// Utilizing the switch statement!
/*  switch (userInput) {
    case "rock":
      return userInput;
      break;
    case "paper":
      return userInput;
      break;
    case "scissors":
      return userInput;
      break;
  }*/
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
/*if (rNumber === 0) {
    return "rock";
  } else if (rNumber === 1) {
    return "paper";
  } else if (rNumber === 2) {
    return "scissors";
  }*/

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {

  /* Test Code
  switch (userChoice, computerChoice) {
    case userChoice === computerChoice:
      return 'We have ourselves a Tie!';
      break;
    case userChoice === 'rock' && computerChoice === 'paper':
      return 'The Computer Won!';
      break;
    case userChoice === 'rock' && computerChoice === 'scissors':
      return 'The User Won!';
      break;
    case userChoice === 'paper' && computerChoice === 'scissors':
      return 'The Computer Won!';
      break;
    case userChoice === 'paper' && computerChoice === 'rock':
      return 'The User Won!';
      break;
    case userChoice === 'scissors' && computerChoice === 'rock':
      return 'The Computer Won!';
      break;
    case userChoice === 'scissors' && computerChoice === 'paper':
      return 'The User Won!';
      break;
    case userChoice === 'bomb':
      return 'The User Played a Higher Card!';
      break;
  }
  */

  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'The Computer Won!';
  } else if (userChoice === 'paper' && computerChoice === 'rock'){ 
     return 'The User Won!';
   } else if (userChoice === 'scissors' && computerChoice === 'rock'){
     return 'The Computer Won!';
   } else if (userChoice === 'rock' && computerChoice === 'scissors'){
     return 'The User Won!';
   } else if (userChoice === 'scissors' && computerChoice === 'paper'){
     return 'The User Won!';
   } else if (userChoice === 'paper' && computerChoice === 'scissors'){
     return 'The Uomputer Won!'; 
   } else if (userChoice === computerChoice){
     return 'Match Tied';
   } else if (userChoice === 'bomb'){
     return 'The User Won by using a secret weapon!!'};
};


const playGame = () => {
  const usersChoice = getUserChoice('scissors');
  const machinesChoice = getComputerChoice();
  
  console.log(`You chose ${usersChoice}`);
  console.log(`The computer chose ${machinesChoice}`);
  console.log(determineWinner(usersChoice, machinesChoice));
};

playGame();
