const kelvin = 293; // kelvin is unit used to calculate temperature

const celsius = kelvin - 273; // since celcius is 273 degrees less than kelvin

let fahrenheit = Math.floor(celsius * (9/5) + 32); //this is the equation to calculate fahrenheit

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`)


const myAge = 10; //this-is-human-age

let earlyYears = 2; //this is gonna be used for dogs age
earlyYears *= 10.5;

let laterYears = myAge - 2; //this accounts for the first two years of the dog.
laterYears *= 4; //as we know that after two years a dogs each year is equivalent to humans 4 years.

const myAgeInDogYears = earlyYears + laterYears; //this is gonna be a humans age • compared to a dogs age.
const myName = 'sypher'.toLowerCase(); // this is the users name, and it will always be printed in lowercase letters.

console.log(`My name is ${myName}. I am ${myAge} years
old in human years which is ${myAgeInDogYears}
years old in dog years.`);