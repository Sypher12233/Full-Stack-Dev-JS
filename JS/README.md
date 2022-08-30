# JavaScript #

1. JS is used to make websites interactive.

1. Some website features that are commonly built with JS are:

* popup ads

* animated graphics (2D or 3D)

* interactive video or audio

* maps and other features access user's geographic location

* and much more!

> More About JS

* One of the defining features of JavaScript is its ability to respond to browser events. These events happen in real time and can be triggered by a wide variety of user interactions, including:

* the user clicking on a button

* the user pressing enter on the keyboard

* a video file finishing loading

* the user re-sizing their window

* the user hovering over text on the webpage

1. Functions in JS are reusable blocks of code, designed to perform a specific task.

2. Functions allow us to write a chunk of code once that can be reused over and over again.

3. Events allow JS to respond to user behaviors like, the user hovering their mouse over an html element or resizing their window.

4. When an event is fired the function is executed.

> Usage

JavaScript was initially a language used to interact with HTML, but it has expanded beyond and is now a general-purpose language.

You can now build web applications, browser games, desktop applications and even VR/AR experiences using JS.

## Introduction: JavaScript Syntax, Part I ##

1. Console
2. Comments
3. Data Types
4. Arithmetic Operators
5. String Concatination
6. Properties
7. Methods
8. Built-in Objects
9. Review

### 1. Console ###

The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.

In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code. Keywords are words that are built into the JavaScript language, so the computer recognizes them and treats them specially.

One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.

It’s going to be very useful for us to print values to the console, so we can see the work that we’re doing.

```js
console.log(5);
```

This example logs 5 to the console. The semicolon denotes the end of the line, or statement. Although in JavaScript your code will usually run as intended without a semicolon, we recommend learning the habit of ending each statement with a semicolon so you never leave one out in the few instances when they are required.

You’ll see later on that we can use console.log() to print different kinds of data.

### 2. Comments ###

Programming is often highly collaborative. In addition, our own code can quickly become difficult to understand when we return to it— sometimes only an hour later! For these reasons, it’s often useful to leave notes in our code for other developers or ourselves.

As we write JavaScript, we can write comments in our code that the computer will ignore as our program runs. These comments exist just for human readers.

Comments can explain what the code is doing, leave instructions for developers using the code, or add any other useful annotations.

There are two types of code comments in JavaScript:

A single line comment will comment out a single line and is denoted with two forward slashes // preceding it.

```JS
// Prints 5 to the console
console.log(5);
You can also use a single line comment to comment after a line of code:

console.log(5);  // Prints 5 
A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.

/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/
You can also use this syntax to comment something out in the middle of a line of code:

console.log(/*IGNORED!*/ 5);  // Still just prints 5 
```

### 3. Data Types ###

Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:

Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
The first 6 of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex, and you’ll learn much more about them as you progress through JavaScript. At first, seven types may not seem like that many, but soon you’ll observe the world opens with possibilities once you start leveraging each one. As you learn more about objects, you’ll be able to create complex collections of data.

But before we do that, let’s get comfortable with strings and numbers!

```js
console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);
```

In the example above, we first printed a string. Our string isn’t just a single word; it includes both capital and lowercase letters, spaces, and punctuation.

Next, we printed the number 40, notice we did not use quotes.

### 4. Arithmetic Operators ###

Basic arithmetic often comes in handy when programming.

An operator is a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

* Add: +
* Subtract: -
* Multiply: *
* Divide: /
* Remainder: %

The first four work how you might guess:

```js
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
```

Note that when we console.log() the computer will evaluate the expression inside the parentheses and print that result to the console. If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.

```js
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0
```

The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

### 5. String Concatenation ###

Operators aren’t just for numbers! When a + operator is used on two strings, it appends the right string to the left string:

```js
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'
```

This process of appending one string to another is called concatenation. Notice in the third example we had to make sure to include a space at the end of the first string. The computer will join the strings exactly, so we needed to make sure to include the space we wanted between the two strings.

```js
console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'
```

Just like with regular math, we can combine, or chain, our operations to get a final result:

```js
console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'
```

### 6. Properties ###

When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. All data types have access to specific properties that are passed down to each instance. For example, every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name:

```js
console.log('Hello'.length); // Prints 5
```

The `.` is another operator! We call it the dot operator.

In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.

### 7. Methods ###

Remember that methods are actions we can perform. Data types have access to specific methods that allow us to handle instances of that data type. JavaScript provides a number of string methods.

We call, or use, these methods by appending an instance with:

* a period (the dot operator)
* the name of the method
* opening and closing parentheses E.g. 'example string'.methodName().

Does that syntax look a little familiar? When we use console.log() we’re calling the .log() method on the console object. Let’s see console.log() and some real string methods in action!

```js
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
```

Let’s look at each of the lines above:

On the first line, the `.toUpperCase()` method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: `'HELLO'`.

On the second line, the `.startsWith()` method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.

You can find a list of built-in string methods in the [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype). Developers use documentation as a reference tool. It describes JavaScript’s keywords, methods, and syntax.

### 8. Built-in Objects ###

In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own objects, but for now these “built-in” objects are full of useful functionality.

For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

```js
console.log(Math.random()); // Prints a random number between 0 and 1
```

In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 (inclusive) and 1 (exclusive).

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

```js
Math.random() * 50;
```

The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().

`Math.floor()` takes a decimal number, and rounds down to the nearest whole number. You can use `Math.floor()` to round down a random number like this:

```js
Math.floor(Math.random() * 50);
```

In this case:

* `Math.random()` generates a random number between 0 and 1.
* We then multiply that number by 50, so now we have a number between 0 and 50.
* Then, `Math.floor()` rounds the number down to the nearest whole number.

If you wanted to see the number printed to the terminal, you would still need to use a console.log() statement:

```js
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
```

To see all of the properties and methods on the Math object, take a look at the [documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

### 9. Review ###

Let’s take one more glance at the concepts we just learned:

* Data is printed, or logged, to the console, a panel that displays messages, with `console.log()`.
* We can write single-line comments with // and multi-line comments between `/* and */`.
* There are 7 fundamental data types in JavaScript: _**strings, numbers, booleans, null, undefined, symbol, and object**_.
* Numbers are any number without quotes: `23.8879`
* Strings are characters wrapped in single or double quotes: `'Sample String'`
* The built-in arithmetic operators include `+, -, *, /, and %`.
* Objects, including instances of data types, can have properties, stored information. The properties are denoted with a `.` after the name of the object, for example: `'Hello'.length`.
* Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: `'hello'.toUpperCase()`.
* We can access properties and methods by using the `., dot operator`.
* Built-in objects, including Math, are collections of methods and properties that JavaScript provides.

## Variables ##

In programming, a variable is a container for a value. You can think of variables as little containers for information that live in a computer’s memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.

Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.

In short, variables label and store data in memory. There are only a few things you can do with variables:

* Create a variable with a descriptive name.
* Store or update information stored in a variable.
* Reference or “get” information stored in a variable.

It is important to distinguish that variables are not values; they contain values and represent them with a name. Observe the diagram with the colored boxes. Each box represents variables; the values are represented by the content, and the name is represented with the label.

In this lesson, we will cover how to use the `var`, `let`, and `const` keywords to create variables.

1. Create a Variable: var
2. Create a Variable: let
3. Create a Variable: const
4. Mathematical Assignment Operators
5. The Increment and Decrement Operator
6. String Concatenation with Variables
7. String Interpolation
8. Typeof Operator
9. Review

### 1. Create a Variable: var ###

There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, let and const, to create, or declare, variables. Prior to the ES6, programmers could only use the var keyword to declare variables.

```js
var myName = 'Arya';
console.log(myName);
// Output: Arya
```

Let’s consider the example above:

`var`, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
`myName` is the variable’s name. Capitalizing in this way is a standard convention in JavaScript called camel casing. In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything).
`=` is the assignment operator. It assigns the value ('Arya') to the variable (myName).
`'Arya'` is the value assigned `(=)` to the variable myName. You can also say that the myName variable is initialized with a value of 'Arya'.

After the variable is declared, the string value 'Arya' is printed to the console by referencing the variable name: `console.log(myName)`.

There are a few general rules for naming variables:

* Variable names cannot start with numbers.
* Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
* Variable names cannot be the same as keywords. For a comprehensive list of keywords check out  [MDN’s keyword documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).

In the next exercises, we will learn why ES6’s `let` and `const` are the preferred variable keywords by many programmers. Because there is still a ton of code written prior to ES6, it’s helpful to be familiar with the pre-ES6 `var` keyword.

If you want to learn more about var and the quirks associated with it, check out the [MDN var documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).

### 2. Create a Variable: let ###

As mentioned in the previous exercise, the let keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value. Take a look at the example:

```js
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
```

Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:

```js
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
```

Notice in the example above:

If we don’t assign a value to a variable declared using the let keyword, it automatically has a value of undefined.

We can reassign the value of the variable.

### 3. Create a Variable: const ###

The const keyword was also introduced in ES6, and is short for the word constant. Just like with var and let you can store any value in a const variable. The way you declare a const variable and assign a value to it follows the same structure as let and var. Take a look at the following example:

```js
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto
```

However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.

Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.

If you’re trying to decide between which keyword to use, `let` or `const`, think about whether you’ll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const.

### 4. Mathematical Assignment Operators ###

Let’s consider how we can use variables and math operators to calculate new values and assign them to a variable. Check out the example below:

```js
let w = 4;
w = w + 1;
 
console.log(w); // Output: 5
```

In the example above, we created the variable `w` with the number `4` assigned to it. The following line, `w = w + 1`, increases the value of `w` from `4` to `5`.

Another way we could have reassigned w after performing some mathematical operation on it is to use built-in mathematical assignment operators. We could re-write the code above to be:

```js
let w = 4;
w += 1;
 
console.log(w); // Output: 5
```

In the second example, we used the `+=` assignment operator to reassign `w`. We’re performing the mathematical operation of the first operator `+` using the number to the right, then reassigning `w` to the computed value.

We also have access to other mathematical assignment operators: `-=`, `*=`, and `/=` which work in a similar fashion.

```js
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4
```

### 5. The Increment and Decrement Operator ###

Other mathematical assignment operators include the increment operator `(++)` and decrement operator `(--)`.

The increment operator will increase the value of the variable by `1`. The decrement operator will decrease the value of the variable by 1. For example:

```js
let a = 10;
a++;
console.log(a); // Output: 11
let b = 20;
b--;
console.log(b); // Output: 19
```

Just like the previous mathematical assignment operators `(+=, -=, *=, /=)`, the variable’s value is updated and assigned as the new value of that variable.

### 6. String Concatenation with Variables ###

In previous exercises, we assigned strings to variables. Now, let’s go over how to connect, or concatenate, strings in variables.

The `+` operator can be used to combine two string values even if those values are being stored in variables:

```js
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'
```

In the example above, we assigned the value 'armadillo' to the myPet variable. On the second line, the + operator is used to combine three strings: `'I own a pet'`, the value saved to `myPet`, and `'.'`. We log the result of this concatenation to the console as:

I own a pet armadillo.

### 7. String Interpolation ###

In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

```js
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```

Notice that:

* a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
* Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
* When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
* One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don’t have to worry about escaping double quotes or single quotes.

### 8. typeof operator ###

While writing code, it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator.

The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

```js
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
```

Let’s break down the first example. Since the value unknown1 is 'foo', a string, typeof unknown1 will return 'string'.

### 9. Review Variables ###

Let’s review what we learned:

* Variables hold reusable data in a program and associate it with a name.
* Variables are stored in memory.
* The `var` keyword is used in pre-ES6 versions of JS.
* `let` is the preferred way to declare a variable when it can be reassigned, and `const` is the preferred way to declare a variable with a constant value.
* Variables that have not been initialized store the primitive data type `undefined`.
* Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
* The `+` operator is used to concatenate strings including string values held in variables.
* In ES6, template literals use backticks ` and ${} to interpolate values into a string.
* The typeof keyword returns the data type (as a string) of a value.

## Conditional Statements ##

> What are Conditional Statements?

In life, we make decisions based on circumstances. Think of an everyday decision as mundane as falling asleep — if we are tired, we go to bed, otherwise, we wake up and start our day.

These if-else decisions can be modeled in code by creating conditional statements. A conditional statement checks a specific condition(s) and performs a task based on the condition(s).

We’ll be covering the following concepts:

* if, else if, and else statements
* comparison operators
* logical operators
* truthy vs falsy values
* ternary operators
* switch statement

So if you’re ready to learn these concepts go to the next lesson— _**else**_, read over the concepts, observe the diagram, and prepare yourself for this lesson!

1. If Statement
2. If...Else Statements
3. Comparison Operators
4. Logical Operators
5. Truthy and Falsy
6. Truthy and Falsy Assignment
7. Ternary Operator
8. Else If Statements
9. The Switch Keyword
10. Review

### 1. If Statement ###

We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.

In programming, we can also perform a task based on a condition using an if statement:

```js
if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!
```

Notice in the example above, we have an if statement. The if statement is composed of:

* The `if` keyword followed by a set of parentheses `()` which is followed by a _**code block**_, or _**block statement**_, indicated by a set of curly braces `{}`.
* Inside the parentheses `()`, a condition is provided that evaluates to true or false.
* If the condition evaluates to `true`, the code inside the curly braces `{}` runs, or executes.
* If the condition evaluates to `false`, the block won’t execute.

### 2. If...Else Statements ###

In the previous exercise, we used an if statement that checked a condition to decide whether or not to run a block of code. In many cases, we’ll have code we want to run if our condition evaluates to false.

If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:

```js
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
 
// Prints: But the code in this block will!
```

An else statement must be paired with an if statement, and together they are referred to as an `if...else` statement.

In the example above, the else statement:

* Uses the else keyword following the code block of an if statement.
* Has a code block that is wrapped by a set of curly braces {}.
* The code inside the else statement code block will execute when the if statement’s condition evaluates to false.

`if...else` statements allow us to automate solutions to yes-or-no questions, also known as _**binary decisions**_.

### 3. Comparison Operators ###

When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

* Less than: `<`
* Greater than: `>`
* Less than or equal to: `<=`
* Greater than or equal to: `>=`
* Is equal to: `===`
* Is not equal to: `!==`

Comparison operators compare the value on the left with the value on the right. For instance:

```js
`10 < 12` // Evaluates to true
```

It can be helpful to think of comparison statements as questions. When the answer is “yes”, the statement evaluates to true, and when the answer is “no”, the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

We can also use comparison operators on different data types like strings:

```js
'apples' === 'oranges' // false
```

In the example above, we’re using the identity operator `(===)` to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

All comparison statements evaluate to either true or false and are made up of:

Two values that will be compared.
An operator that separates the values and compares them accordingly `(>, <, <=,>=,===,!==)`.

### 4. Logical Operators ###

Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

* the and operator `(&&)`
* the or operator `(||)`
* the not operator, otherwise known as the bang operator `(!)`

When we use the && operator, we are checking that two things are true:

```js
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
```

When using the `&&` operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the `&&` condition will evaluate to false and the else block will execute.

If we only care about either condition being true, we can use the || operator:

```js
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
```

When using the `||` operator, only one of the conditions must evaluate to `true` for the overall statement to evaluate to `true`. In the code example above, if either `day === 'Saturday'` or `day === 'Sunday'` evaluates to `true` the if‘s condition will evaluate to `true` and its code block will execute. If the first condition in an `||` statement evaluates to true, the second condition won’t even be checked. Only if `day === 'Saturday'` evaluates to `false` will `day === 'Sunday'` be evaluated. The code in the else statement above will execute only if both comparisons evaluate to false.

The `!` not operator reverses, or negates, the value of a boolean:

```js
let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true
```

Essentially, the `!` operator will either take a true value and pass back false, or it will take a false value and pass back true.

Logical operators are often used in conditional statements to add another layer of logic to our code.

### 5. Truthy and Falsy ###

Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.

Here’s an example:

```js
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}
```

The code block in the `if` statement will run because `myVariable` has a `truthy` value; even though the value of `myVariable` is not explicitly the value `true`, when used in a boolean or conditional context, it evaluates to true because it has been assigned a `non-falsy` value.

So which values are `falsy`— or evaluate to false when checked as a condition? The list of falsy values includes:

* 0
* Empty strings like `""` or `''`
* null which represent when there is no value at all
* undefined which represent when a declared variable lacks a value
* NaN, or Not a Number

Here’s an example with numbers:

```js
let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Prints 'No apples left!'
```

The condition evaluates to false because the value of the numberOfApples is `0`. Since `0` is a falsy value, the code block in the else statement will run.

### 6. Truthy and Falsy Assignment ###

Truthy and falsy evaluations open a world of short-hand possibilities!

Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:

```js
let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger
```

If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the `||` operator in your assignment:

```js
let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger
```

Because `||` or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.

### 7. Ternary Operator ###

In the spirit of using short-hand syntax, we can use a ternary operator to simplify an `if...else` statement.

Take a look at the `if...else` statement example:

```js
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```

We can use a ternary operator to perform the same functionality:

```js
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```

In the example above:

* The condition, isNightTime, is provided before the `?`.
* Two expressions follow the `?` and are separated by a colon `:`.
* If the condition evaluates to `true`, the first expression executes.
* If the condition evaluates to `false`, the second expression executes.
* Like `if...else` statements, ternary operators can be used for conditions which evaluate to true or false.

### 8. Else If Statements ###

We can add more conditions to our `if...else` with an `else if` statement. The `else if` statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

The `else if` statement always comes after the if statement and before the `else` statement. The `else if` statement also takes a condition. Let’s take a look at the syntax:

```js
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```

The `else if` statements allow you to have multiple possible outcomes. `if` / `else if` /`else` statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

In the example above, since `stopLight === 'red'` evaluates to `false` and `stopLight === 'yellow'` evaluates to `true`, the code inside the first `else if` statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

### 9. The switch keyword ###

`else if` statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:

```js
let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}
```

In the code above, we have a series of conditions checking for a value that matches a groceryItem variable. Our code works fine, but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!

A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

```js
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'
```

* The switch keyword initiates the statement and is followed by `( ... )`, which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
* Inside the block, `{ ... }`, there are multiple `case`s. The `case` keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s `console.log()` would run.
* The value of groceryItem is 'papaya', so the third case runs— `Papayas are $1.29` is logged to the console.
* The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from `if/else` conditional statements that execute only one block of code.
* At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.

### 10. Review ###

Way to go! Here are some of the major concepts for conditionals:

* An `if` statement checks a condition and will execute a task if that condition evaluates to true.
* `if...else` statements make binary decisions and execute different code blocks based on a provided condition.
* We can add more conditions using `else if` statements.
* Comparison operators, including `<`, `>`, `<=`, `>=`, `===`, and `!==` can compare two values.
* The logical and operator, `&&`, or `“and”`, checks if both provided expressions are truthy.
* The logical operator `||`, or `“or”`, checks if either provided expression is truthy.
* The bang operator, `!`, switches the truthiness and falsiness of a value.
* The ternary operator is shorthand to simplify concise `if...else` statements.
* A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.

## Functions ##

A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

1. What are Functions?
2. Function Declarations
3. Calling a Function
4. Parameters and Arguments
5. Default Parameters
6. Return
7. Helper Functions
8. Function Expressions
9. Arrow Functions
10. Concise Body Arrow Functions
11. Review Functions

### What are Functions? ###

When first learning how to calculate the area of a rectangle, there’s a sequence of steps to calculate the correct answer:

* Measure the width of the rectangle.
* Measure the height of the rectangle.
* Multiply the width and height of the rectangle.

With practice, you can calculate the area of the rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code:

```js
const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60
```

Imagine being asked to calculate the area of three different rectangles:

```js
// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
```

```js
// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
```

```js
// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;
```

In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

In this lesson, you will learn how to create and use functions, and how they can be used to create clearer and more concise code.

### 2. Function Declarations ###

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier. Take a look at the anatomy of a function declaration below:

![Diagram showing the syntax of a function declaration](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/declaration.svg)

A function declaration consists of:

* The function keyword.
* The name of the function, or its identifier, followed by parentheses.
* A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
* A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

Take a look at example of hoisting:

```js
greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
```

Notice how hoisting allowed `greetWorld()` to be called before the `greetWorld()` function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

If you want to read more about hoisting, check out [MDN documentation on hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

### 3. Calling a Function ###

As we saw in previous exercises, a function declaration binds a function to an identifier.

However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is _called_.

To call a function in your code, you type the function name followed by parentheses.

![Diagram showing the syntax of invoking a function](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/name.svg)

This function call executes the function body, or all of the statements between the curly braces in the function declaration.

![Function execution diagram](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/function%20execution.svg)

We can call the same function as many times as needed.

### 4. Parameters and Arguments ###

So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

Let’s observe how to specify parameters in our function declaration:

![JavaScript syntax for declaring a function with parameters](https://static-assets.codecademy.com/Courses/Learn-JavaScript/function_parameters.svg)

In the diagram above, `calculateArea()`, computes the area of a rectangle, based on two inputs, `width` and `height`. The parameters are specified between the parenthesis as `width` and `height`, and inside the function body, they act just like regular variables. `width` and `height` act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

![JavaScript syntax for invoking a function with arguments as values](https://static-assets.codecademy.com/Courses/Learn-JavaScript/by_value.svg)

In the function call above, the number `10` is passed as the `width` and `6` is passed as `height`. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.

![JavaScript syntax for invoking a function with arguments as variables](https://static-assets.codecademy.com/Courses/Learn-JavaScript/by_variable.svg)

The variables `rectWidth` and `rectHeight` are initialized with the values for the height and width of a rectangle before being used in the function call.

By using parameters, `calculateArea()` can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.

### 5. Default Parameters ###

One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

Take a look at the code snippet below that uses a default parameter:

```js
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

* In the example above, we used the `=` operator to assign the parameter `name` a default value of `'stranger'`. This is useful to have in case we ever want to include a non-personalized default greeting!
* When the code calls `greeting('Nick')` the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log `'Hello, Nick!'` to the console.
* When there isn’t an argument passed into `greeting()`, the default value of 'stranger' is used, and `'Hello, stranger!'` is logged to the console.

By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

### 6. Return ###

When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

```js
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
```

In the code example, we defined our function to calculate the area of a `width` and `height` parameter. Then `rectangleArea()` is invoked with the arguments `5` and `7`. But when we went to print the results we got `undefined`. Did we write our function wrong? No! In fact, the function worked fine, and the computer did calculate the area as `35`, but we didn’t capture it. So how can we do that? With the keyword `return`!

![using return keyword in a function](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/function%20return.svg)

To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. Like we saw above, if the value is omitted, `undefined` is returned instead.

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. Look at the example below:

```js
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
```

* If an argument for `width or height` is less than `0`, then `rectangleArea()` will return `'You need positive integers to calculate area!'`. The second `return` statement `width * height` will not run.

The `return` keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

### 7. Helper Functions ###

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

```js
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59
```

In the example above:

* `getFahrenheit()` is called and `15` is passed as an argument.
* The code block inside of `getFahrenheit()` calls `multiplyByNineFifths()` and passes `15` as an argument.
* `multiplyByNineFifths()` takes the argument of `15` for the number parameter.
* The code block inside of `multiplyByNineFifths()` function multiplies `15` by `(9/5)`, which evaluates to `27`.
* `27` is returned back to the function call in `getFahrenheit()`.
* `getFahrenheit()` continues to execute. It adds `32` to `27`, which evaluates to `59`.
* Finally, `59` is returned back to the function call `getFahrenheit(15)`.

We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

### 8. Function Expressions ###

Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Consider the following function expression:

![defining a function expression](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/expression.svg)

> To declare a function expression:

* Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use `const` as the keyword to declare the variable.
* Assign as that variable’s value an anonymous function created by using the `function` keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

```js
variableName(argument1, argument2)
```

Unlike `function declarations`, `function expressions` are not hoisted so they cannot be called before they are defined.

### 9. Arrow Functions ###

ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” `() =>` notation.

Arrow functions remove the need to type out the keyword `function` every time you need to create a function. Instead, you first include the parameters inside the `( )` and then add an arrow `=>` that points to the function body surrounded in `{ }` like this:

```js
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.

### 10. Concise Body Arrow Functions ###

JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

* Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

![showcasing how arrow functions parameters differ for different amounts of parameters](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/parameters.svg)

* A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow `=>` and the `return` keyword can be removed. This is referred to as implicit return.

![comparing single line and multiline arrow functions](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/return.svg)

So if we have a function:

```js
const squareNum = (num) => {
  return num * num;
};
```

We can refactor the function to:

```js
const squareNum = num => num * num;
```

Notice the following changes:

* The parentheses around `num` have been removed, since it has a single parameter.
* The curly braces `{ }` have been removed since the function consists of a single-line block.
* The `return` keyword has been removed since the function consists of a single-line block.

### 11. Review Functions ###

In this lesson, we covered some important concepts about functions:

* A _function_ is a reusable block of code that groups together a sequence of statements to perform a specific task.
* A function declaration :

![Diagram showing the syntax of a function declaration](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/declaration.svg)

* A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:

![JavaScript syntax for declaring a function with parameters](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/function_parameters.svg)

* To call a function in your code:

![Diagram showing the syntax of invoking a function](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/name.svg)

* ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.
* To return a value from a function, we use a return statement.
* To define a function using function expressions:

![defining a function expression](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/expression.svg)

* To define a function using arrow function notation:

![defining an arrow function](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/arrow_notation.svg)

* Function definition can be made concise using concise arrow notation:

![comparing single line and multiline arrow functions](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/return.svg)

It’s good to be aware of the differences between function expressions, arrow functions, and function declarations. As you program more in JavaScript, you’ll see a wide variety of how these function types are used.

## Scope ##

An important idea in programming is _scope_. Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

You can think of scope like the view of the night sky from your window. Everyone who lives on the planet Earth is in the global scope of the stars. The stars are accessible _globally_. Meanwhile, if you live in a city, you may see the city skyline or the river. The skyline and river are only accessible locally in your city, but you can still see the stars that are available globally.

Over the next few exercises, we’ll explore how scope relates to variables and learn best practices for variable declaration.

1. Blocks and Scope
2. Global Scope
3. Block Scope
4. Scope Pollution
5. Practice Good Scoping
6. Review: Scope

### 1. Blocks and Scope ###

Before we talk more about scope, we first need to talk about _blocks_.

We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of `curly braces {}`. Blocks help us group one or more statements together and serve as an important structural marker for our code.

A block of code could be a function, like this:

```js
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
}
```

Notice that the function body is actually a block of code.

Observe the block in an if statement:

```js
if (dusk) {
  let color = 'pink';
  console.log(color); // pink
}
```

In the next few exercises, we’ll see how blocks define the scope of variables.

### 2. Global Scope ###

Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Let’s take a look at an example of global scope:

```js
const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue
```

Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.

In turn, color can be accessed within the returnSkyColor function block.

### 3. Block Scope ###

The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

Block scope works like this:

```js
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError
```

You’ll notice:

* We define a function `logSkyColor()`.
* Within the function, the `color` variable is only available within the curly braces of the function.
* If we try to log the same variable outside the function, it throws a `ReferenceError`.

### 4. Scope Pollution ###

It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.

When you declare global variables, they go to the `global namespace`. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

`Scope pollution` is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

Let’s look at an example of scope pollution in practice so we know how to avoid it:

```js
let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100
```

You’ll notice:

* We have a variable `num`.
* Inside the function body of `logNum()`, we want to declare a new variable but forgot to use the `let` keyword.
* When we call `logNum()`, `num` gets reassigned to `100`.
* The reassignment inside `logNum()` affects the global variable `num`.
* Even though the reassignment is allowed and we won’t get an error, if we decided to use `num` later, we’ll unknowingly use the new value of `num`.

While it’s important to know what global scope is, it’s best practice to not define variables in the global scope.

### 5. Practice Good Scoping ###

Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

Tightly scoping your variables will greatly improve your code in several ways:

* It will make your code more legible since the blocks will organize your code into discrete sections.
* It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
* It’s easier to maintain your code, since your code will be modular.
* It will save memory in your code because it will cease to exist after the block finishes running.

Here’s another example of how to use block scope, as defined within an if block:

```js
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError
```

Here, you’ll notice:

* We create a variable dusk inside the logSkyColor() function.
* After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
* Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
* While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.
* Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!

### 6. Review: Scope ###

In this lesson, you learned about scope and how it impacts the accessibility of different variables.

* `Scope` refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
* `Blocks` are statements that exist within curly braces {}.
* `Global scope` refers to the context within which variables are accessible to every part of the program.
* `Global variables` are variables that exist within global scope.
* `Block scope` refers to the context within which variables are accessible only within the block they are defined.
* `Local variables` are variables that exist within block scope.
* `Global namespace` is the space in our code that contains globally scoped information.
* `Scope pollution` is when too many variables exist in a namespace or variable names are reused.

As you continue your coding journey, remember to use best practices when declaring your variables! Scoping your variables tightly will ensure that your code has clean, organized, and modular logic.

## CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS ##

1. Introduction
2. canIVote()
3. agreeOrDisagree()
4. lifePhase()
5. finalGrade()
6. reportingForDuty()
7. Fix The Broken Code
8. calculateWeight()
9. truthyOrFalsy()
10. numImaginaryFriends()
11. sillySentence()
12. howOld()
13. Fix the broken code (round 2)!
14. tipCalculator()
15. toEmoticon()

### 1. Introduction ###

You know a bunch about JavaScript syntax, control flow, and functions! The best way to reinforce these skills is through practice. We’ve created a series of problems designed to use your JavaScript knowledge. We encourage you to review relevant lessons, look things up in the documentation, check out the hints and solution code if you get stuck, and, most of all, have fun!

The tasks provided are designed to be challenging. Throughout this code challenge, we’ll be running tests to check that the functions you write are working correctly. We’ll often provide some example code to test your function. We encourage you to write additional code to test your functions. To pass our tests, your function will need to work as described in the prompt. This means your function may seem to be passing when you run it, but it will still fail the test because it doesn’t run as expected in every situation we’re testing behind the scenes. Take special note of strings—strings must be identical to that requested to pass!

> _Instructions_

1.Write a function, `greetWorld()`. Your function should have no parameters and return the string `'Hello, World!'`.

Helpful Notes:

* Your function can be a function expression or a function declaration.
* Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned.
* Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc.

```js
// My code.

const greetWorld = () => {
  return 'Hello, World!';
}

console.log(greetWorld());
```

### 2. canIVote() ###

_**Instructions**_

The most common minimum age to vote is 18. Write a function `canIVote()` that takes in a number, representing the person’s age, and returns the boolean `true` if they are 18 years old or older, and the boolean `false` if they are not.

```js
// Write your function here:
function canIVote (age) {
  if (age > 18) {
    return true;
  } else if (age < 18) {
    return false;
  } else if (age === 18) {
    return true;
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)) // Should print true

// We encourage you to add more function calls of your own to test your code!
```

### 3. agreeOrDisagree() ###

_**Instructions**_

Write a function, `agreeOrDisagree()`, that takes in two strings, and returns `'You agree!'` if the two strings are the same and `'You disagree!'` if the two strings are different.

```js
// Write your function here:
const agreeOrDisagree = (text1, text2) => { 
  if (text1 === text2) {
    return 'You agree!';
  } else if (text1 !== text2) {
    return 'You disagree!';
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'

```

### 4. lifePhase() ###

_**Instructions**_

Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:

* 0-3 should return `'baby'`
* 4-12 should return `'child'`
* 13-19 should return `'teen'`
* 20-64 should return `'adult'`
* 65-140 should return `'senior citizen'`
* If the number is less than `0` or greater than `140`, the program should return `'This is not a valid age'`.

```js
// This is the code I tried to make it work but couldn't...
const lifePhase = (age) => {
  switch (age) {
  case 0 || 1 || 2 || 3:
    return 'baby';
    break;
  case age => 4 || age <= 12:
    return 'child';
    break;
  case age => 13 || age <= 19:
    return 'teen';
    break;
  case age => 20 || age <= 64:
    return 'adult';
    break;
  case age => 65 || age <= 140:
    return 'senior citizen';
    break;
  case age < 0 || age > 140:
    return 'This is not a valid age';
    break;
  }
};
```

```js
// The code below works.
const lifePhase = (age) => {

  if (age >= 0 && age <= 3) {
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';
  } else if (age >= 13 && age <= 19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else if (age >= 65 && age <= 140) {
    return 'senior citizen';
  } else if (age < 0 || age > 140) {
    return 'This is not a valid age';
  }
};

console.log(lifePhase(78)); // prints 'senior citizen'
```

### 5. finalGrade() ###

_**Instructions**_

Write a function, `finalGrade()`. It should:

* take three arguments of type number
* find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
* return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100

0-59 should return: 'F'

60-69 should return: 'D'

70-79 should return: 'C'

80-89 should return: 'B'

90-100 should return: 'A'

```js
// Write your function here:
function finalGrade(first, second, third) {
  average = (first + second + third) / 3;
  if ((first < 0 || first > 100) || (second < 0 || second > 100) || (third < 0 || third > 100)) {
    return "You have entered an invalid grade.";
  } else if (average >= 0 && average <= 59) {
    return "F";
  } else if (average >= 60 && average <= 69) {
    return "D";
  } else if (average >= 70 && average <= 79) {
    return "C";
  } else if (average >= 80 && average <= 89) {
    return "B";
  } else if (average >= 90 && average <= 100) {
    return "A";
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(95, 92, 95)); // Should print 'A'
```

### 6. reportingForDuty() ###

**_Instructions_**

1. Write a function, `reportingForDuty()`, that has two string parameters, `rank` and `lastName`, and returns a string in the following format: `‘rank lastName reporting for duty!’`

```js
reportingForDuty('Private', 'Fido')
// Should return 'Private Fido reporting for duty!'
```

```js
// Write your function here:
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;

// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

```

### 7. Fix The Broken Code ###

_**Instructions**_

We wrote a function, `rollTheDice()`, which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?

```js
//Provided Code
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.random() * 6 + 1;
    let die2 = Math.random() * 6 + 1;
    return die1 + die2;
};

// The Error message you get (Your function should always return a value greater than or equal to 2 and less than or equal to 12)
```

My solution:

```js
let die1 = Math.floor(Math.random() * 6 + 1);
let die2 = Math.floor(Math.random() * 6 + 1);
```

What I did was first of all I logged the `rollTheDice()` function to the console to see the result and what I got was a bunch of random numbers between 1 and 12 and they had ratios with them, So I said to myself let's first of all get rid of these ratios and I added the `Math.floor()` to the code and it was done...

### 8. calculateWeight() ###

_**Instructions**_

Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, `calculateWeight()`. It should:

* have two parameters: earthWeight and planet
* expect earthWeight to be a number
* expect planet to be a string
* return a number representing what that Earth-weight would equate to on the planet passed in.

Handle the following cases:

```js
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
// For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
```

My code:

```JS
const calculateWeight = (earthWeight, planet) => {
  planet = planet.toLowerCase();
  switch (planet) {
    case 'mercury':
      return earthWeight * 0.378;
      break;
    case 'venus':
      return earthWeight * 0.907;
      break;
    case 'mars':
      return earthWeight * 0.377;
      break;
    case 'jupiter':
      return earthWeight * 2.36;
      break;
    case 'saturn':
      return earthWeight * 0.916;
      break;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
      break;
  }
};

console.log(calculateWeight(100, 'Jupiter'))
```

### 9. truthyOrFalsy() ###

_**Instructions**_

It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, `truthyOrFalsy()`, that takes in any value and returns `true` if that value is truthy and `false` if that value is falsy.

```js
// Write your function here:
const truthyOrFalsy = (input) => {
  if (input) {
    return true;
  } else {
    return false;
  }
 };
// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(NaN)) // Should print false
```

### 10. numImaginaryFriends() ###

_**Instructions**_

A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

Write a function, `numImaginaryFriends()`, that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.

The JavaScript `Math.ceil()` function will come in handy. Check out [the documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) to figure out how it works.

```js
// Write your function here:
const numImaginaryFriends = (friends) => {
  friends = Math.ceil(friends * (1/4));
  return friends;
};

// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)
```

### 11. sillySentence() ###

_**Instructions**_

Write a function, `sillySentence()`, that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:

![sillySentence](https://content.codecademy.com/courses/js-fundamentals-code-challenge/sillySentence.svg)

```js
sillySentence('excited', 'love', 'functions'); 
// Should return 'I am so excited because I love coding! Time to write some more awesome functions!'
```

My Code:

```js
// Write your function here:
const sillySentence = (word1, word2, word3) => {
  return `I am so ${word1} because I ${word2} coding! Time to write some more awesome ${word3}!`
}

// Uncomment the line below when you're ready to try out your function
console.log(sillySentence('excited', 'love', 'functions'))

// We encourage you to add more function calls of your own to test your code!
```

### 12. howOld() ###

_**Instructions**_

Write a function, `howOld()`, that has two number parameters, `age` and `year`, and returns how old someone who is currently that `age` was (or will be) during that `year`. Handle three different cases:

* If the year is in the future, you should return a string in the following format:

```js
'You will be [calculated age] in the year [year passed in]'
```

* If the year is before they were born, you should return a string in the following format:

```js
'The year [year passed in] was [calculated number of years] years before you were born'
```

* If the year is in the past but not before the person was born, you should return a string in the following format:

```js
'You were [calculated age] in the year [year passed in]'
```

```js
// Write your function here:
function howOld(age, year) {
  currentYear = 2022;
  birthYear = currentYear - age;
  futureAge = year - currentYear + age;
  pastAge = year - birthYear;
  beforeBirth = birthYear - year; // 2008 - 2012
  if (year > currentYear) {
    return `You will be ${futureAge} in the year ${year}.`;
  } else if (year < birthYear) { // 2008 < 2012
    return `The year ${year} was ${beforeBirth} years before you were born.`;
  } else if (year > birthYear && year < currentYear) {
    return `You were ${pastAge} in the year ${year}.`;
  } 
};
console.log(howOld(10, 2009)); // prints The year 2009 was 3 years before you were born.
```

### 13. Fix the broken code (round 2) ###

_**Instructions**_

Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.

We wrote a function, `whatRelation()`, that has one number parameter, `percentSharedDNA`, and returns the likely relationship. We expect the number passed in to always be an integer from `0` to `100`, but for some reason it’s not working!

Here’s how it’s supposed to calculate the relationship:

* 100 should return `'You are likely identical twins.'`
* 35-99 should return `'You are likely parent and child or full siblings.'`
* 14-34 should return `'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'`
* 6-13 should return `'You are likely 1st cousins.'`
* 3-5 should return `'You are likely 2nd cousins.'`
* 1-2 should return `'You are likely 3rd cousins.'`
* 0 should return `'You are likely not related.'`

```js
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA < 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
```

Unfortunately, it’s not working how we want!

```js
whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'
 
whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
```

Can you fix our code, please?

Here is the **Fix**:

```js
const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 0) {
    return 'You are likely not related.';
  } else if ((percentSharedDNA === 1) && (percentSharedDNA === 2)) {
    return 'You are likely 3rd cousins';
  } else if ((percentSharedDNA >= 3) && (percentSharedDNA <= 5)) {
    return 'You are likely 2nd cousins.';
  } else if ((percentSharedDNA >= 6) && (percentSharedDNA <= 13)) {
    return 'You are likely 1st cousins.';
  } else if ((percentSharedDNA >= 14) && (percentSharedDNA <= 34)) {
    return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
  } else if ((percentSharedDNA >= 35) && (percentSharedDNA <= 99)) {
    return 'You are likely parent and child or full siblings.';
  } else if (percentSharedDNA === 100) {
    return 'You are likely identical twins.';
  } 
};

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
```

### 14. tipCalculator() ###

_**Instructions**_

Create a function, `tipCalculator()`, that has two parameters, a string representing the `quality` of the service received and a number representing the `total` cost.

Return the tip, as a number, based on the following:

* ‘bad’ should return a 5% tip
* ‘ok’ should return a 15% tip
* ‘good’ should return a 20% tip
* ‘excellent’ should return a 30% tip
* all other inputs should default to 18%

```js
tipCalculator('good', 100) // Should return 20
```

My **Code**

```js
// Write your function here:
function tipCalculator(quality, total) {
  if (quality === 'bad') {
    return (total * 5 / 100);
  } else if (quality === 'ok') {
    return (total * 15 / 100);
  } else if (quality === 'good') {
    return (total * 20 / 100);
  } else if (quality === 'excellent') {
    return (total * 30 / 100);
  } else {
    return (total * 18 / 100);
  }
};
// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20
```

### 15. toEmoticon() ###

_**Instructions**_

Write a function, `toEmoticon()`, that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

* `'shrug'` should return `'|_{"}_|'`
* `'smiley face'` should return `':)'`
* `'frowny face'` should return`':('`
* `'winky face'` should return `';)'`
* `'heart'` should return `'<3'`
* any other input should return `'|_(* ~ *)_|'`

```js
// Write your function here:
const toEmoticon = userInput => {
  switch (userInput) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
      break;
  }
};
// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'
```

## JavaScript Practice: Data Types, Conditional, Functions ##

Practice JavaScript conditionals and functions with these 3 code challenges.

### Challenge No. 1 ###

Create a function `colorMessage()` that takes 2 string arguments, `favoriteColor` and `shirtColor`.

If the value of `favoriteColor` is the same as the value of `shirtColor` return the string `'The shirt is your favorite color!'`.

If not, return the string `'That is a nice color.'`

```js
// Create function below
const colorMessage = (favoriteColor, shirtColor) => {
  // switch (favoriteColor) {
  //   case (favoriteColor === shirtColor):
  //   return 'The shirt is your favorite color!';
  //   break;
  //   default:
  //   return 'That is a nice color.';
  //   break;
  // }
  if (favoriteColor === shirtColor) {
    return 'The shirt is your favorite color!';
  } else if (favoriteColor !== shirtColor) {
    return 'That is a nice color.';
  }
};
console.log(colorMessage('red', 'red'));
// prints 'The shirt is your favorite color!';
```

### Challenge No. 2 ###

Create a function `isEven()` that takes a `number` as its only parameter. The function should return `true` if the number is even and `false` if the number is odd.

```js
const isEven = userInput => {
  even = userInput % 2;
  if (even == 0) {
  return true;
  } else if (even == 1) {
    return false;
  }
}
console.log(isEven(50));
// prints true
```

### Challenge No. 3 ###

Create a function `numberDigits()` that takes the variable `x` as its only parameter.

If the variable `x` is between `0` and `9`, return the string `'One digit: N'`, where `N` is the value of `x`. For example, `numberDigits(5)` would return:

```js
'One digit: 5'
```

If the variable `x` is between `1`0 and `9`9, return the string `'Two digits: N'`, where `N` is the value of `x`. For example, `numberDigits(12)` would output:

```js
'Two digits: 12'
```

Any other value of `x`, including negative numbers, return the string `'The number is: N'`, where N is the value of `x`. For example, `numberDigits(-202)` would output:

```js
'The number is: -202'
```

```js
function numberDigits(x) {
  if (x >= 0 && x <= 9) {
    return `One digit: ${x}`;
  } else if (x >= 10 && x <= 99) {
    return `Two digits: ${x}`;
  } else {
    return `The number is: ${x}`;
  }
};

console.log(numberDigits(-70));
// prints The number is: -70
```

## Running JavaScript in the Browser Console ##

Learn how to run JavaScript code in your browser.

Along with `HTML` and `CSS`, `JavaScript (JS)` makes up one of the core languages in web development. JS code is normally added using the HTML `<script>` element for executing in web browsers, but most modern browsers also provide a console as part of their developer tools where we can directly write and run JS, typically for testing and debugging purposes. The console is essentially a `REPL` [(Read-Evaluate-Print-Loop)](https://en.wikipedia.org/wiki/Read–eval–print_loop) that allows us to execute JS within the context of the page, such as modifying the page’s `DOM` [(Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) or logging to the console. The console itself is also the place to view the messages that were logged by JS code, as well as any other information that the browser had documented, including network requests and security errors.

In this article, we’ll walk through how to open the developer console and run JS code right in your browser!

### Example #1: Performing basic arithmetic ###

Remember that the console is a REPL, so we can run JS code, such as arithmetic expressions, by typing it after the > prompt and hitting Enter/Return. The expression will be evaluated, and the return value is printed to the console on the next line following the < arrow:

basic_arithmetic

Similarly, we can use comparison operators to compare values, which will evaluate to true or false:

expression_evaluation

In some newer browsers, you may notice that the console displays a preview of the return value as you’re typing, even before you hit Enter/Return.

### Example #2: Calling and writing functions ###

In addition to performing basic arithmetic, we can also execute any other valid JS code, such as calling functions and methods. A list of the built-in functions and objects that are available to use in the console can be found in the MDN web docs. For example, Math.sqrt() returns the square root of a number:

calling_methods

The console object can also be accessed in the web browser’s console. Most frequently, it is used to output text and data, such as for debugging purposes:

Notice that two new lines appear after running the previous code, one preceded by the < arrow and one without. This is because console.log() simply prints the message to the console and does not return anything. Thus, the first line we see is the logged message, and the second line that starts with < is the return value, or undefined.

We can also write our own functions in the console. In the example below, we define a function called addTwo() which logs a message to the console, then returns the input number plus 2:

Because the function declaration itself does not evaluate to any value, undefined is returned and printed to the console after the < arrow.

When we call the addTwo() function, Evaluating... is first outputted to the console from our console.log() call. Then, the function’s return value—which is what the function call evaluates to—will get printed after the < arrow:

### Example #3: Interacting with the page’s DOM ###

As we’ve seen so far, we can run JS in the console completely independent of the page we have opened in the browser. But what makes the console particularly useful is that we could also directly inspect and modify the page’s DOM if we wanted to. Let’s look at a simple example using a blank webpage.

To bring up a blank page, we can enter about:blank into the browser’s address bar. We can confirm that there is no HTML inside the `<body>` element of the page by checking document.body.innerHTML in the console:

We can also write JS code to modify the page’s DOM, such as adding a heading element inside the body, as seen below. Once we run the following code, the change will immediately be reflected on the page opened in the browser:

The console also recognizes $() as an alias for document.querySelector() to select an element. This shorthand resembles jQuery syntax and helps make manipulating the DOM through the console even more efficient:

In the code above, we used the shorthand $() syntax to select the `<body>` element and set the color property to "blue". This statement returns the value "blue" to the console, and the color change is immediately reflected on the webpage.

Conclusion

As we can see, the console provides a quick and convenient way of running any JS code in the browser, whether independent of or directly related to the page content. If any edits are made to the page, the changes are temporary and will be gone upon refreshing, which works great for testing purposes when you don’t want to modify the actual code. Combined with the other developer tools offered by browsers, we can see how the console can quickly become an essential part of a developer’s toolbox!

## Introduction to JavaScript Runtime Environments ##

An introduction to the Node runtime environment and a browser’s runtime environment.

What is a **Runtime Environment**?

A runtime environment is where your program will be executed. It determines what global objects your program can access and it can also impact how it runs. This article covers the two JavaScript runtime environments:

* the runtime environment of a browser (like Chrome, or Firefox)
* the Node runtime environment

### A Browser’s Runtime Environment ###

The most common place where JavaScript code is executed is in a browser. For example, using any text editor, you could create a file on your own computer called my_website.html and put the following HTML code inside:

```html
<!-- my_website.html -->
<html>
  <body>
    <h1> My Website </h1>
    <script> window.alert('Hello World'); </script>
  </body>
</html>
```

Save your file, then open your favorite browser. Most browsers will allow you to load websites that you have created locally by going to the menu File > Open File > my_website.html.

Upon loading, the embedded `<script></script>` will execute and the `window.alert()` method will create a pop-up box in your browser with the text "Hello World". How is this possible? Where did the window.alert() method come from and how can it control your browser?

The answer is that you are executing this code in the browser’s runtime environment. The window.alert() method is built into this environment and any program executed in a browser has access to this method. In fact, the window object provides access to a huge amount of data and functionality relating to the open browser window beyond just .alert().

> Try replacing window.alert() with window.prompt() or window.confirm()

Applications created for and executed in the browser are known as front-end applications. For a long time, JavaScript code could only be executed in a browser and was used exclusively for creating front-end applications. In order to create back-end applications that could run on a computer WITHOUT a browser, you would need to use other programming languages such as Java or PHP.

### The Node Runtime Environment ###

In 2009, the Node runtime environment was created for the purpose of executing JavaScript code without a browser, thus enabling programmers to create full-stack (front-end and back-end) applications using only the JavaScript language.

Node is an entirely different runtime environment, meaning that browser-environment data values and functions, like window.alert(), can’t be used. Instead, the Node runtime environment gives back-end applications access to a variety of features unavailable in a browser, such as access to the server’s file system, database, and network.

For example, suppose you created a file called my-app.js. We can check to see the directory that this file is located in using the Node runtime environment variable process:

```js
// my-app.js
console.log(process.env.PWD);
```

Notice that we are using console.log now instead of window.alert() since the window object isn’t available
process is an object containing data relating to the JavaScript file being executed. process.env is an object containing environment variables such as process.env.PWD which contains the current working directory (and stands for “Print Working Directory”).

To execute the JavaScript code in this file, first make sure that you have set up Node on your computer. Then, open up a terminal and run the following command:

```js
$ node my-app.js
/path/to/working/directory
```

The node command tells your computer to execute the my-app.js file in the Node environment. You can also use the node command without a file argument to open up the Node Read-Eval-Print-Loop (REPL):

```zsh
$ node
> process.env.HOME
'/home/ccuser'
```

### Summary ###

A runtime environment is where your program will be executed. JavaScript code may be executed in one of two runtime environments:

* a browser’s runtime environment
* the Node runtime environment

In each of these environments, different data values and functions are available, and these differences help distinguish front-end applications from back-end applications.

* Front-end JavaScript applications are executed in a browser’s runtime environment and have access to the window object.
* Back-end JavaScript applications are executed in the Node runtime environment and have access to the file system, databases, and networks attached to the server.

## Introduction: JavaScript Syntax, Part II ##

1. Arrays

### 1. Arrays ###

Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:

New Year's Resolutions:

1. Keep a journal 
2. Take a falconry class
3. Learn to juggle

Let’s now write this list in JavaScript, as an array:

```js
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

Arrays are JavaScript’s way of making lists. Arrays can store any data types (including `strings`, `numbers`, and `booleans`). Like lists, arrays are ordered, meaning each item has a _numbered position_.

Here’s an array of the concepts we’ll cover:

```js
let concepts = ['creating arrays', 'array structures', 'array manipulation'];
```
