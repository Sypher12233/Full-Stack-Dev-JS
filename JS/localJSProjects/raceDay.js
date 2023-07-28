let registeredEarly = true; /* checks if the participant has registered before 9:30 am. */
let runnersAge = 18;
/* sets runners age */

let raceNumber = Math.floor(Math.random() * 1000);
// gives a random number between 0 and 999.

if (runnersAge > 18 && registeredEarly === true) {
 raceNumber += 1000;
 console.log(`Your race starts at 9:30 am, and your Race Number is ${raceNumber}`);
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`Since you registered late, your Race will start at 11:00 am, and your Race Number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`Your Race starts at 12:30pm, and your Race Number is ${raceNumber}`);
} else {
  console.log(`You should see the registration desk!`);
}