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
5. String Concatenation
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

* `Number`: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
* `String`: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
* `Boolean`: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
* `Null`: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
* `Undefined`: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
* `Symbol`: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
* `Object`: Collections of related data.

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
* The bang operator, `!`, switches the truthiness and falseness of a value.
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

1. ### Learn JavaScript Syntax: Arrays ###


2. Create an Array
3. Accessing Elements
4. Update Elements
5. Arrays with let and const
6. The .length property
7. The .push() Method
8. The .pop() Method
9.  More Array Methods
10. Arrays and Functions
11. Nested Arrays
12. Review Arrays 

#### 1. Arrays ####

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

#### 2. Create an Array ####

One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in `square brackets []`. Remember from the previous exercise, arrays can store any data type — we can have an array that holds all the same data types or an array that holds different data types.

![Diagram outlining an array literal that has 3 separate elements, a comma separates each element (a string, a number, and a boolean) and the elements are wrapped with square brackets](https://content.codecademy.com/courses/learn-javascript-arrays/array%20literal.svg)

Let’s take a closer look at the syntax in the array example:

The array is represented by the square brackets [] and the content inside.
Each content item inside an array is called an element.
There are three different elements inside the array.
Each element inside the array is a different data type.
We can also save an array to a variable. You may have noticed we did this in the previous exercise:

```js
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

#### 3. Accessing Elements ####

Each element in an array has a numbered position known as its _index_. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are `zero-indexed`, meaning the positions start counting from `0` rather than `1`. Therefore, the first item in an array will be at position `0`. Let’s see how we could access an element in an array:

![Diagram outlining how to access the property of an array using the index of the element](https://content.codecademy.com/courses/learn-javascript-arrays/array%20indices.svg)

In the code snippet above:

* `cities` is an array that has three elements.
* We’re using bracket notation, `[]` with the index after the name of the array to access the element.
* `cities[0]` will access the element at index `0` in the array `cities`. You can think of `cities[0]` as accessing the space in memory that holds the string `'New York'`.

You can also access individual characters in a string using bracket notation and the index. For instance, you can write:

```js
const hello = 'Hello World';
console.log(hello[6]);
// Output: W
```

The console will display W since it is the character that is at index `6`.

#### 4. Update Elements ####

In the previous exercise, you learned how to access elements inside an array or a string by using an index. Once you have access to an element in an array, you can update its value.

```js
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```

In the example above, the seasons array contained the names of the four seasons.

However, we decided that we preferred to say 'Autumn' instead of 'Fall'.

The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.

#### 5. Arrays with let and const ####

You may recall that you can declare variables with both the `let` and `const` keywords. Variables declared with `let` can be reassigned.

Variables declared with the `const` keyword cannot be reassigned. However, elements in an array declared with const remain _mutable_. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

The instructions below will illustrate this concept more clearly. Pay close attention to the similarities and differences between the `condiments` array and the utensils array as you complete the steps.

```js
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
```

#### 6. The .length property ####

One of an array’s built-in properties is `length` and it returns the number of items in the array. We access the `.length` property just like we do with strings. Check the example below:

```js
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2
```

In the example above, we log `newYearsResolutions.length` to the console using the following steps:

* We use dot notation, chaining a period with the property name to the array, to access the length property of the newYearsResolutions array.
* Then we log the length of `newYearsResolution` to the console.
* Since `newYearsResolution` has two elements, 2 would be logged to the console.

When we want to know how many elements are in an array, we can access the .length property.

#### 7. The .push() Method ####

Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, `.push()` allows us to add items to the end of an array. Here is an example of how this is used:

```js
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```

So, how does `.push()` work?

* We access the `push` method by using dot notation, connecting push to itemTracker with a period.
* Then we call it like a function. That’s because `.push()` is a function and one that JavaScript allows us to use right on an array.
* `.push()` can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: `'item 3'` and `'item 4'` to `itemTracker`.
* Notice that `.push()` changes, or mutates, `itemTracker`. You might also see `.push()` referred to as a destructive array method since it changes the initial array.

If you’re looking for a method that will mutate an array by adding elements to it, then `.push()` is the method for you!

#### 8. The .pop() Method ####

Another array method, `.pop()`, removes the last item of an array.

```js
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
```

In the example above, calling `.pop()` on the `newItemTracker` array removed item `2` from the end.

* `.pop()` does not take any arguments, it simply removes the last element of `newItemTracker`.
* `.pop()` returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
* `.pop()` is a method that mutates the initial array.

When you need to mutate an array by removing the last element, use `.pop()`.

#### 9. More Array Methods ####

There are many more array methods than just `.push()` and `.pop()`. You can read about all of the array methods that exist on the [Mozilla Developer Network (MDN) array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

`.pop()` and `.push()` mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. Be sure to check MDN to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include: `.join()`, `.slice()`, `.splice()`, `.shift()`, `.unshift()` and `.concat()` amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.

Below, we will explore some methods that we have not learned yet. We will use these methods to edit a grocery list. As you complete the steps, you can consult the MDN documentation to learn what each method does!

#### 10. Arrays and Functions ####

Throughout the lesson we went over arrays being mutable, or changeable. Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call `.push()` on an array inside a function. Recall, the `.push()` method mutates, or changes, an array:

```js
const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
```

Let’s go over what happened in the example:

* The flowers array that has 3 elements.
* The function `addFlower()` has a parameter of arr uses `.push()` to add a 'lily' element into arr.
* We call `addFlower()` with an argument of flowers which will execute the code inside addFlower.
* We check the value of flowers and it now includes the 'lily' element! The array was mutated!

So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.

#### 11. Nested Arrays ####

Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. Examine the example below:

```js
const nestedArr = [[1], [2, 3]];
```

To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

```js
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
```

Notice that `nestedArr[1]` will grab the element in index 1 which is the array `[2, 3]`. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

```js
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```

In the second `console.log()` statement, we have two bracket notations chained to `nestedArr`. We know that `nestedArr[1]` is the array `[2, 3]`. Then to grab the first element from that array, we use `nestedArr[1][0]` and we get the value of `2`.

#### 12. Review Arrays ####

* Arrays are lists that store data in JavaScript.
* Arrays are created with brackets `[]`.
* Each item inside of an array is at a numbered position, or index, starting at 0.
* We can access one item in an array using its index, with syntax like: `myArray[0]`.
* We can also change an item in an array using its index, with syntax like `myArray[0] = 'new string'`;
* Arrays have a `length` property, which allows you to see how many items are in an array.
* Arrays have their own methods, including `.push()` and `.pop()`, which add and remove items from an array, respectively.
* Arrays have many methods that perform different tasks, such as `.slice()` and `.shift()`, you can find documentation at the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) website. 
* Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
* Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
* Arrays mutated inside of a function will keep that change even outside the function.
* Arrays can be nested inside other arrays.
* To access elements in nested arrays chain indices using bracket notation.

Learning how to work with and manipulate arrays will help you work with chunks of data!

2. ### Learn JavaScript Syntax: Loops ###

1. Loops
2. The For Loop
3. Looping in Reverse
4. Looping through Arrays
5. Nested Loops
6. The While Loop
7. Do...While Statements
8. The break Keyword
9. Review: Loops
#### 1. Loops ####

A _loop_ is a programming tool that repeats a set of instructions until a specified condition, called a _stopping condition_ is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; _iterate_ simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us to create efficient code that automates processes to make scalable, manageable programs.

As illustrated in the diagram, loops iterate or repeat an action until a specific condition is met. When the condition is met, the loop stops and the computer moves on to the next part of the program.

#### 2. The For Loop ####

Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a `for` loop.

The typical `for` loop includes an __*iterator variable*__ that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A `for` loop contains three expressions separated by ; inside the parentheses:

* an __*initialization*__ starts the loop and can also be used to declare the iterator variable.
* a __*stopping condition*__ is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
* an __*iteration statement*__ is used to update the iterator variable on each loop.
* 
The for loop syntax looks like this:

```js
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
In this example, the output would be the following:
```

```js
0
1
2
3
```

Let’s break down the example:

* The initialization is `let counter = 0`, so the loop will start counting at `0`.
* The stopping condition is `counter < 4`, meaning the loop will run as long as the iterator variable, counter, is less than `4`.
* The iteration statement is `counter++`. This means after each loop, the value of counter will increase by `1`. For the first iteration counter will equal `0`, for the second iteration counter will equal `1`, and so on.
* The code block is inside of the curly braces, `console.log(counter)`, will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to `4` — the point that the condition becomes false is sometimes called the stop condition.

This for loop makes it possible to write `0`, `1`, `2`, and `3` programmatically.

#### 3. Looping in Reverse ####

What if we want the for loop to log `3`, `2`, `1`, and then `0`? With simple modifications to the expressions, we can make our loop run backward!

To run a backward `for` loop, we must:

* Set the iterator variable to the highest desired value in the initialization expression.
* Set the stopping condition for when the iterator variable is less than the desired amount.
* The iterator should decrease in intervals after each iteration.

We’ll practice by changing the for we wrote previously to now go in reverse. When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded `infinite loop` which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.

#### 4. Looping through Arrays ####

for loops are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.

To loop through each element in an array, a for loop should use the array’s .length property in its condition.

Check out the example below to see how for loops iterate on arrays:

```js
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
```

This example would give you the following output:

```js
Grizzly Bear
Sloth
Sea Lion
```

In the loop above, we’ve named our iterator variable `i`. This is a variable naming convention you’ll see in a lot of loops. When we use `i` to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that `i` is less than `animals.length`. Remember that arrays are _zero-indexed_, the index of the last element of an array is equivalent to the length of that array _minus_ `1`. If we tried to access an element at the index of `animals.length` we will have gone too far!

With for loops, it’s easier for us to work with elements in arrays.

#### 5. Nested Loops ####

When we have a loop running inside another loop, we call that a __*nested loop*__. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

Let’s look at an example of a nested for loop:

```js
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
```

Let’s think about what’s happening in the nested loop in our example. For each element in the outer loop array, `myArray`, the inner loop will run in its entirety comparing the current element from the outer array, `myArray[i]`, to each element in the inner array, `yourArray[j]`. When it finds a match, it prints a string to the console.

Now it’s your turn to write a nested loop!

__Note:__ To exit out of an infinite loop in an exercise, __refresh the page__ - then fix the code for your loop(s).

#### 6. The While Loop ####

You’re doing great! We’re going to teach you about a different type of loop: the __while loop__. To start, let’s convert a for loop into a while loop:

```js
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
```

Let’s break down what’s happening with our while loop syntax:

* The `counterTwo` variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
* We start our loop with the keyword while followed by our *__stopping condition__*, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to `false` the loop will stop.
* Next, we have our loop’s code block which prints counterTwo to the console and increments `counterTwo`.

What would happen if we didn’t increment `counterTwo` inside our block? If we didn’t include this, `counterTwo` would always have its initial value, `1`. That would mean the testing condition `counterTwo < 4` would always evaluate to `true` and our loop would never stop running! Remember, this is called an *__infinite loop__* and it’s something we always want to __avoid__. Infinite loops can take up all of your computer’s processing power potentially freezing your computer.

So you may be wondering when to use a `while` loop! The syntax of a `while` loop is ideal when we don’t know in advance how many times the loop should run. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.

#### 7. Do...While Statements ####

In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the `do...while` statement comes in.

A `do...while` statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a `do...while` statement looks like this:

```js
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);
```

In this example, the code block makes changes to the countString variable by appending the string form of the `i` variable to it. First, the code block after the `do` keyword is executed once. Then the condition is evaluated. If the condition evaluates to `true`, the block will execute again. The looping stops when the condition evaluates to `false`.

Note that the `while` and `do...while` loop are different! Unlike the while `loop`, `do...while` will run at least once whether or not the condition evaluates to `true`.

```js
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
```

#### 8. The break Keyword ####

Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day `65`? We don’t want to keep going to the shelter for the next `300` days just because our original plan was to go for a whole year. In our code, when we want to stop a `loop` from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword `break`.

The `break` keyword allows programs to “__break__” out of the loop from within the loop’s block.

Let’s check out the syntax of a break keyword:

```js
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');
```

This is the output for the above code:

```
Banana.
Banana.
Banana.
Orange you glad I broke out the loop!
```

`break` statements can be especially helpful when we’re looping through large data structures! With breaks, we can add test conditions besides the stopping condition, and exit the loop when they’re met.

#### 9. Review: Loops

Great job! In this lesson, we learned how to write cleaner code with loops. You now know:

* Loops perform repetitive actions so we don’t have to code that process manually every time.
* How to write `for` loops with an iterator variable that increments or decrements
* How to use a `for` loop to iterate through an array
* A nested `for` loop is a loop inside another loop
* `while` loops allow for different types of stopping conditions
* Stopping conditions are crucial for avoiding infinite loops.
* `do...while` loops run code at least once— only checking the stopping condition after the first execution
* The `break` keyword allows programs to leave a loop during the execution of its block

----

3. ### The for...of Loop ###

A cleaner syntax for iterating through items, one by one.

#### Introduction ####

A common task you will encounter when programming is iterating over arrays or array-like objects. As a JavaScript programmer, you may already be familiar with the `for` loop. This loop requires a counter, an iteration statement, and a stopping condition to control looping. While powerful, the `for` loop can be a bit cumbersome to set up, introduces room for errors, and could lead to difficult-to-read code.

As a remedy to some of the `for` loop’s shortcomings, the ES6 version of JavaScript introduced the shorter and more concise `for...of` loop. This article will outline the benefits of using `for...of` loops and walk through how to use a for...of loop to iterate through arrays and strings.

#### for loop vs for…of loop ####

Here is an example of iterating over each element in an array using a traditional for loop with an index variable:

```js
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}
```

And here is an example of iterating through the same array using a `for...of` loop:

```js
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}
```

Both examples print out the same thing:

```js
I enjoy singing.
I enjoy eating.
I enjoy quidditch.
I enjoy writing.
```

Notice how the `for...of` loop has a simpler syntax which can be beneficial for code readability, especially in larger and more complex applications.

#### Iterating Through an Array ####

One of the primary uses of the `for...of` loop is iterating through the items of an array. 

Let’s breakdown the syntax with a new example:

```js
const fruits = ['oranges', 'apples', 'grapes'];
 
for (const fruit of fruits) {
  console.log(fruit);
}
```

Which prints out:

```js
oranges
apples
grapes
```

Let’s break down the example:

* In our code snippet, we have `fruits`, which is the array we want to iterate over.
* We set up our `for...of` loop: `for (const fruit of fruits)`. This specifies that we will iterate through the array `(fruits)` for each item `(fruit)` in the array.
* The variable fruit is assigned a different value on each iteration of the loop. The variable may be declared with the keywords: `const`, `let`, or `var`. You can name the variable anything but it is helpful to use a name related to the iterable object. In the example, notice the placeholder variable uses the singular form of a plural array, `fruit` of `fruits`. Here are some other examples: person of a people array, puppy of a puppies array, etc.
* For each item in the array, we print the value to the `console`.
* The loop will start with the first element of the array and stop on the last element.
* There is no need to set up additional variables to store an index with a `for...of` loop. The loop will iterate over each element in the iterable object and terminate itself when it reaches the last item — so you don’t need to track the number of items in the array. In our example, we used an array, but `for...of` loops also work with strings, sets, and other array-like objects.

Therefore, you should opt for a standard `for` loop if you need to access the indices or need finer control to determine what elements you want to loop over.

#### Iterating Through a String ####

The `for...of` can also be used to iterate over strings. Here is an example:

```js
const username = 'joe';
 
for (const char of username) {
  console.log(char);
}

// Which prints out:

j
o
e
```

Notice the similarities between iterating through a string and iterating through an array. The `for...of` loop does not change in structure regardless of the iterable object used.

#### Break and Continue ####

`for...of` has the advantage of setting up most of your loop parameters for you, but sometimes it is necessary to reclaim some control of how iteration is managed. One way of doing this is using JavaScript’s `break` and `continue` statements.

The break statement can be used to jump out of a loop. For example:

```js
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird);
}
```

Will iterate through the array until it encounters the great mythical `Basan`, then it will exit. This will print out:

```js
Shoebill
Cockatrice
```

The `continue` statement is used to skip one iteration of the loop. For example:

```js
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
}
```

Will iterate through the array and print out every value except the suspected imposter:

```js
Shoebill
Cockatrice
Basan
Terrorbird
Parotia
Kakapo
```

#### Use Case: `for` loop vs `for…of` loop ####

You might now be wondering, why use a `for` loop at all if a `for...of` loop is so much simpler? Well, the `for...of` loop is not a complete replacement for the `for` loop. Take a look at the following code snippet:

```js
const nums = [1, 2, 3];
 
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
 
console.log('Time is up!');
// Which prints:

3
2
1
Time is up!
```

In the example above, we iterated through an array in _reverse!_ You would not be able to use a `for...of` loop to do the same thing. However, with a regular `for` loop, you have access to indices of the elements, determine a stopping condition, and the ability to set a counter. Keep these factors in mind when deciding what loop is right for your circumstance.

#### Exercise: Spelling Wizard ####

Now that we’ve shown you how to set up and use a for...of loop, let’s practice with a code challenge by writing some code yourself.

> Coding question

First, let’s write a program to help us improve our spelling skills.

Given the spellingWord, use a `for...of` loop to log each letter using `console.log()`.

```js
const spellingWord = 'hippopotamus'; // Write your code belowfor (const letter of spellingWord) {  console.log(letter);//} 

Output:
h
i
p
p
o
p
o
t
a
m
u
s
 

// Run


// Check answer
```

Exercise: Pokemon Catcher

> Coding question

* Write a `for...of` loop that iterates through our pokemonList array.
* Inside the block of the `for...of` loop, use `console.log()` and string interpolation as modeled above to log each element in the `pokemon` array within the string `'You caught a 'X'!'` For example, the first iteration of the loop should print `‘You caught a Pikachu!’` to the console.
* One of the elements, `'Yoshi'`, is not a Pokemon. If you encounter `'Yoshi'`, use `continue` to skip this element before it is logged to the console.

```js
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax']; // Write your code below
for (pokemons of pokemonList) {  if (pokemons === 'Yoshi') {    continue;  }  console.log(`You caught a ${pokemons}!`)}

Output:
You caught a Pikachu!
You caught a Charivari!
You caught a Squirtle!
You caught a Snorlax!
 

Run


Check answer
👏
You got it!
Review
```

Congratulations! You have now been introduced to `for...of` and have successfully used it. In this article, you have learned how to do the following:

* Understand the benefits of `for...of`.
* Create a `for...of` loop from scratch.
* Use a `for...of` loop to iterate over characters in strings and elements in arrays.
* Use break and continue to control looping in a `for...of` loop.

There are other for type loops in JavaScript that exist for different purposes, such as `for...in`. Be careful to choose the correct type of loop for your situation. The next time you need to iterate through an array, string, or array-like object and don’t need to access the index, consider trying out `for...of` to keep your code succinct and readable.

4. ### Learn JavaScript Syntax: Objects ###

It’s time to learn more about the basic structure that permeates nearly every aspect of JavaScript programming: *__objects__*.

You’re probably already more comfortable with objects than you think, because JavaScript loves objects! Many components of the language are actually objects under the hood, and even the parts that aren’t— like strings or numbers— can still act like objects in some instances.

There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities. We can use JavaScript objects to model real-world things, like a basketball, or we can use objects to build the data structures that make the web possible.

At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. You’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making your own!
Apple, baby, table, and worm visualized as JavaScript Objects

1. Creating Object Literals
2. Accessing Properties
3. Bracket Notation
4. Property Assignment
5. Methods
6. Nested Objects
7. Pass By Reference
8. Looping Through Objects
9. Review: Objects

#### 1. Creating Object Literals ####

Objects can be assigned to variables just like any JavaScript type. We use curly braces, `{}`, to designate an object literal:

```js
let spaceship = {}; // spaceship is an empty object
```

We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.

![key value](https://content.codecademy.com/courses/learn-javascript-objects/key%20value.svg)

A key’s value can be of any data type in the language including functions or other objects.

We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:

![object literal](https://content.codecademy.com/courses/learn-javascript-objects/objectliteraldiagram.svg)

```js
// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
```

The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.

#### 2. Accessing Properties ####

There are two ways we can access an object’s property. Let’s explore the first way— dot notation, `.`.

You’ve used dot notation to access the properties and methods of built-in objects and data instances:

```js
'hello'.length; // Returns 5
```

With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

```js
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
```

![dot notation](https://content.codecademy.com/courses/learn-javascript-objects/object%20dot%20notation.svg)

If we try to access a property that does not exist on that object, undefined will be returned.

```js
spaceship.favoriteIcecream; // Returns undefined
```

#### 3. Bracket Notation ####

The second way to access a key’s value is by using bracket notation, `[ ]`.

You’ve used bracket notation when indexing an array:

```js
['A', 'B', 'C'][0]; // Returns 'A'
```

To use bracket notation to access an object’s property, we pass in the property name (key) as a string.

![bracket notation](https://content.codecademy.com/courses/learn-javascript-objects/object%20access%20bracket.svg)

We __must__ use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

```js
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
```

With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

```js
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
```

If we tried to write our `returnAnyProp()` function with `dot notation` `(objectName.propName)` the computer would look for a key of `'propName'` on our object and not the value of the `propName` parameter.

#### 4. Property Assignment ####

Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them!

We can use either `dot notation`, `.`, or `bracket notation`, `[]`, and the assignment operator, `=` to add new key-value pairs to an object or change an existing property.

![diagram showing how an object followed by brackets ([]) with the property name as a string can be reassigned to a new value. This same idea applies for accessing a property using dot notation which has the object name, followed by a dot and the name of the property](https://static-assets.codecademy.com/Courses/Learn-JavaScript/objects/object_property_assignment.svg)

One of two things can happen with property assignment:

* If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
* If there was no property with that name, a new property will be added to the object.

It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.

```js
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
```

You can delete a property from an object with the `delete` operator.

```js
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property
```

#### 5. Methods ####

When the data stored on an object is a function we call that a method. A property is what an object __has__, while a method is what an object __does__.

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global javascript object and `.log()` is a method on that object. `Math` is also a global javascript object and `.floor()` is a method on it.

We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.

```js
const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
```

With the new method syntax introduced in ES6 we can omit the colon and the function keyword.

```js
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
```

Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

```js
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
```

#### 6. Nested Objects ####

In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.

```js
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};
```

We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.

```js
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
```

In the preceding code:

* First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
* We accessed the back-up object by appending ['back-up'].
* The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'

#### 7. Pass By Reference ####

Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a `const` variable).

```js
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'
```

Our function `paintIt()` permanently changed the color of our spaceship object. However, reassignment of the spaceship variable wouldn’t work in the same way:

```js
let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.
```

Let’s look at what happened in the code example:

* We declared this `spaceship` object with `let`. This allowed us to reassign it to a new object with identified and `'transport type'` properties with no problems.
* When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn’t stick (even though calling `console.log()` on the object produced the expected result).
* When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the `tryReassignment()` function is a variable in its own right. The body of `tryReassignment()` has no knowledge of the spaceship variable at all!
* When we did the reassignment in the body of `tryReassignment()`, the obj variable came to refer to the memory location of the object `{'identified' : false, 'transport type' : 'flying'}`, while the `spaceship` variable was completely unchanged from its earlier value.

#### 8. Looping Through Objects ####1

Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the `for...in` syntax .

`for...in` will execute a given block of code for each property in an object.

```js
let spaceship = {
  crew: {
    captain: {
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() { console.log('I agree, captain!') }
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
```

Our `for...in` will iterate through each element of the `spaceship.crew` object. In each iteration, the variable `crewMember` is set to one of `spaceship.crew`‘s keys, enabling us to log a list of `crew members`’ `role` and `name`.

#### 9. Review: Objects

* Objects store collections of key-value pairs.
* Each key-value pair is a property—when a property is a function it is known as a method.
* An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
* You can access, add or edit a property within an object by using dot notation or bracket notation.
* We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
* We can navigate complex, nested objects by chaining operators.
* Objects are mutable—we can change their properties even when they’re declared with `const`.
* Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
* We can iterate through objects using the `For...in` syntax.

5. ### Learn JavaScript Syntax: Advanced Objects ###

> Advanced Objects Introduction

Remember, objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

In this lesson we will cover these topics:

1. how to use the `this` keyword.
2. how to use arrow functions and this keyword
3. conveying privacy in JavaScript methods.
4. defining getters in objects.
5. defining setters in objects.
6. creating factory functions.
7. Property Value Shorthand.
8. using destructuring techniques.
9. Built-in Object Methods.
10. Review: Advanced Objects.

#### 1. The this Keyword ####

Objects are collections of related data and functionality. We store that functionality in methods on our objects:

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
```

In our goat object we have a `.makeSound()` method. We can invoke the `.makeSound()` method on goat.

```js
goat.makeSound(); // Prints baaa
```

Nice, we have a `goat` object that can print `baaa` to the console. Everything seems to be working fine. What if we wanted to add a new method to our `goat` object called `.diet()` that prints the `goat`‘s dietType?

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"
```

That’s strange, why is `dietType` not defined even though it’s a property of `goat`? That’s because inside the scope of the `.diet()` method, we don’t automatically have access to other properties of the `goat` object.

Here’s where the `this` keyword comes to the rescue. If we change the `.diet()` method to use the this, the `.diet()` works! :

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore
```

The `this` keyword references the _calling_ object which provides access to the calling object’s properties. In the example above, the calling object is `goat` and by using `this` we’re accessing the `goat` object itself, and then the `dietType` property of `goat` by using property __dot notation__.

#### 2. Arrow Functions and this ####

We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the `this` keyword in a method then the value of `this` is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet(); // Prints undefined
```

In the comment, you can see that `goat.diet()` would log `undefined`. So what happened? Notice that the `.diet()` method is defined using an arrow function.

Arrow functions inherently _bind_, or _tie_, an already defined `this` value to the function itself that is NOT the calling object. In the code snippet above, the value of `this` is the _global object_, or an object that exists in the global scope, which doesn’t have a `dietType` property and therefore returns `undefined`.

To read more about either arrow functions or the global object check out the MDN documentation of the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) and [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

The key takeaway from the example above is to avoid using arrow functions when using `this` in a method!

#### 3. Privacy ####

Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore `_` before the name of a property to mean that the property should not be altered. Here’s an example of using `_` to prepend a property.

```js
const bankAccount = {
  _amount: 1000
}
```

In the example above, the `_amount` is not intended to be directly manipulated.

Even so, it is still possible to reassign `_amount`:

```js
bankAccount._amount = 1000000;
```

In later exercises, we’ll cover the use of methods called `getters` and `setters`. Both methods are used to respect the intention of properties prepended, or began, with `_`. `Getters` can return the value of internal properties and `setters` can safely reassign property values. For now, let’s see what happens if we can change properties that don’t have `setters` or `getters`.

#### 4. Getters ####

Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

```js
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'
```

Notice that in the getter method above:

* We use the get keyword followed by a function.
* We use an `if...else` conditional to check if both `_firstName` and `_lastName` exist (by making sure they both return truthy values) and then return a different value depending on the result.
* We can access the calling object’s internal properties using `this`. In `fullName`, we’re accessing both `this._firstName` and `this._lastName`.
* In the last line we call `fullName` on `person`. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.

Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

* Getters can perform an action on the data when getting a property.
* Getters can return different values using conditionals.
* In a getter, we can access the properties of the calling object using `this`.
* The functionality of our code is easier for other developers to understand.

Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

#### 5. Setters ####

Along with getter methods, we can also create _setter_ methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

```js
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
```

Notice that in the example above:

* We can perform a check for what value is being assigned to `this._age`.
* When we use the setter method, only values that are numbers will reassign `this._age`
* There are different outputs depending on what values are used to reassign `this._age`.

Then to use the setter method:

```js
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
```

Setter methods like `age` do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set `._age` directly:

```js
person._age = 'forty-five'
console.log(person._age); // Prints forty-five
```

#### 6. Factory Functions ####

So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. A _factory function_ is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

```js
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
```

In the `monsterFactory` function above, it has four parameters and returns an object that has the properties: `name`, `age`, `energySource`, and `scare()`. To make an object that represents a specific monster like a `ghost`, we can call `monsterFactory` with the necessary arguments and assign the return value to a variable:

```js
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
```

Now we have a `ghost` object as a result of calling `monsterFactory()` with the needed arguments. With `monsterFactory` in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the `monsterFactory` function with the necessary arguments to ~~take over the world~~ make a monster for us!

#### 7. Property Value Shorthand ####

ES6 introduced some new shortcuts for assigning properties to variables known as _destructuring_.

In the previous exercise, we created a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it. To remind ourselves, here’s a truncated version of the factory function:

```js
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
```

Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. The example below works exactly like the example above:

```js
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
```

Notice that we don’t have to repeat ourselves for property assignments!

#### 8. Destructured Assignment ####

We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:

```js
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
```

If we wanted to extract the `residence` property as a variable, we could use the following code:

```js
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
```

However, we can also take advantage of a destructuring technique called _destructured assignment_ to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces `{ }` and assign to it the object. Take a look at the example below:

```js
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
```

Look back at the `vampire` object’s properties in the first code example. Then, in the example above, we declare a new variable `residence` that extracts the value of the `residence` property of `vampire`. When we log the value of `residence` to the console, `'Transylvania'` is printed.

We can even use destructured assignment to grab nested properties of an object:

```js
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
```

#### 9. Built-in Object Methods ####

In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: `.hasOwnProperty()`, `.valueOf()`, and many more! Practice your documentation reading skills and check out: [MDN’s object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods).

There are also useful Object class methods such as `Object.assign()`, `Object.entries()`, and `Object.keys()` just to name a few. For a comprehensive list, browse: [MDN’s object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor).

Let’s get acquainted with some of these methods and their documentation.

Note: You will see errors as you work through this exercise, but by the end the errors will be fixed!

#### 10. Review: Advanced Objects ####

Congratulations on finishing Advanced Objects!

Let’s review the concepts covered in this lesson:

* The object that a method belongs to is called the _calling_ object.
* The `this` keyword refers to the calling object and can be used to access properties of the calling object.
* Methods do not automatically have access to other internal properties of the calling object.
* The value of `this` depends on where the `this` is being accessed from.
* We cannot use arrow functions as methods if we want to access other internal properties.
* JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
* The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
* Setters and getter methods allow for more detailed ways of accessing and assigning properties.
* Factory functions allow us to create object instances quickly and repeatedly.
* There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
* As with any concept, it is a good skill to learn how to use the documentation with objects!

You’re ready to start leveraging more elegant code for creating and accessing objects in your code!


6. ### Learn JavaScript Syntax: Iterators ###

> Introduction to Higher Order Functions

We are often unaware of the number of assumptions we make when communicating in our native languages. If we told you to “count to three,” we would expect you to say the numbers “one”, “two”, and “three”. We assumed you would know to start with “one” and end with “three”. With programming, we need to be more explicit with our directions to the computer. Here’s how we might tell the computer to “count to three”:

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

When we speak to other humans, we share a vocabulary that provides quick ways to communicate complicated concepts. When we say the word “bake”, it calls to mind a familiar subroutine— preheating an oven, putting something into an oven for a set amount of time, and finally removing it. This allows us to abstract away a lot of the details and communicate key concepts more concisely. Instead of listing all those details, we can say, “We baked a cake,” and still impart all that meaning to you.

In this lesson, we’ll learn how to use “abstraction” in programming by writing functions. In addition to allowing us to reuse our code, functions help to make clear, readable programs. If you encounter `countToThree()` in a program, you might be able to quickly guess what the function does without having to stop and read the function’s body.

We’re also going to learn about a way to add another level of abstraction to our programming: higher-order functions. Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” is an abstraction that may build on the abstraction “We made a cake.”

1. Functions as Data
2. Functions as Parameters
3. Review: Higher Order Functions

#### 1. Functions as Data ####

JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used.

```js
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
```

Let’s pretend this function does important work and needs to be called repeatedly. To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:

```js
const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!
```

`busy` is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of `announceThatIAmDoingImportantWork` they would point to the same place. Our new `busy()` function can be invoked with parentheses as if that was the name we originally gave our function.

Notice how we assign `announceThatIAmDoingImportantWork` without parentheses as the value to the `busy` variable. We want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are _first class objects_. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as `.length` and `.name`, and methods such as `.toString()`. You can see more about the methods and properties of functions in the documentation.

Functions are special because we can invoke them, but we can still treat them like any other type of data.

#### 2. Functions as Parameters ####

As you know, a parameter is a placeholder for the data that gets passed into a function. Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that functions can accept other functions as parameters. A _higher-order function_ is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters _callback functions_. Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

```js
const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);
```

We wrote a higher-order function `higherOrderFunc` that accepts a single parameter, `param`. Inside the body, `param` gets invoked using parentheses. And finally, a string is returned, telling us the name of the callback function that was passed in.

Below the higher-order function, we have another function aptly named `anotherFunc`. This function aspires to be called inside the higher-order function.

Lastly, we invoke `higherOrderFunc()`, passing in `anotherFunc` as its argument, thus fulfilling its dreams of being called by the higher-order function.

```js
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});
```

In this example, we invoked `higherOrderFunc()` with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!

#### 3. Review: Higher Order Functions ####

Great job! By thinking about functions as data, and learning about higher-order functions, you’ve taken important steps in learning to write clean, modular code that takes advantage of JavaScript’s flexibility.

* Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.
* We can work with functions the same way we work with any other type of data, including reassigning them to new variables.
* JavaScript functions are first-class objects, so they have properties and methods like any other object.
* Functions can be passed into other functions as parameters.
* A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

7. ### Introduction to Iterators ###

Imagine you had a grocery list and you wanted to know what each item on the list was. You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the `for` loop. However, we also have access to built-in array methods which make looping easier.

The built-in JavaScript array methods that help us iterate are called _iteration methods_, at times referred to as _iterators_. Iterators are methods called on arrays to manipulate elements and return values.

In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.

1. The .forEach() Method
2. The .map() Method
3. The .filter() Method
4. The .findIndex() Method
5. The .reduce() Method
6. Iterator Documentation
7. Review: Iterators

#### 1. The .forEach() Method ####

The first iteration method that we’re going to learn is `.forEach()`. Aptly named, `.forEach()` will execute the same code for each element of an array.

![Diagram outlining the parts of an array iterator including the array identifier, the section that is the iterator, and the callback function](https://content.codecademy.com/courses/learn-javascript-iterators/iterator%20anatomy.svg)

The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking `.forEach()`.

* `groceries.forEach()` calls the forEach method on the groceries array.
* `.forEach()` takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
* `.forEach()` loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
* The return value for `.forEach()` will always be undefined.

Another way to pass a callback for .forEach() is to use arrow function syntax.

```js
groceries.forEach(groceryItem => console.log(groceryItem));
```

We can also define a function beforehand to be used as the callback function.

```js
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);
```

The above example uses a function declaration but you can also use a function expression or arrow function as well.

All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. It’s good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences. Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises.

#### 2. The .map() Method ####

The second iterator we’re going to cover is `.map()`. When `.map()` is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling `.map()`:

```js
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
```

`.map()` works in a similar manner to `.forEach()`— the major difference is that `.map()` returns a new array.

In the example above:

* `numbers` is an array of numbers.
* `bigNumbers` will store the return value of calling .map() on numbers.
* `numbers.map` will iterate through each element in the numbers array and pass the element into the callback function.
* `return number * 10` is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.

If we take a look at numbers and bigNumbers:

```js
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```

Notice that the elements in `numbers` were not altered and `bigNumbers` is a new array.

#### 3. The .filter() Method ####

Another useful iterator method is `.filter()`. Like `.map()`, `.filter()` returns a new array. However, `.filter()` returns an array of elements after filtering out certain elements from the original array. The callback function for the `.filter()` method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:

```js
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});
```

* `words` is an array that contains string elements.
* `const shortWords =` declares a new variable that will store the returned array from invoking `.filter()`.
* The callback function is an arrow function that has a single parameter, `word`. Each element in the words array will be passed to this function as an argument.
* `word.length < 6;` is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

Let’s also check the values of words and shortWords:

```js
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
```

Observe how words was not mutated, i.e. changed, and shortWords is a new array.

#### 4. The .findIndex() Method ####

We sometimes want to find the location of an element in an array. That’s where the `.findIndex()` method comes in! Calling `.findIndex()` on an array will return the index of the first element that evaluates to true in the callback function.

```js
const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
```

* `jumbledNums` is an array that contains elements that are numbers.
* `const lessThanTen =` declares a new variable that stores the returned index number from invoking `.findIndex()`.
* The callback function is an arrow function that has a single parameter, `num`. Each element in the `jumbledNums` array will be passed to this function as an argument.
* `num < 10;` is the condition that elements are checked against. `.findIndex()` will return the index of the first element which evaluates to true for that condition.

Let’s take a look at what lessThanTen evaluates to:

```js
console.log(lessThanTen); // Output: 3 
```

If we check what element has index of 3:

```js
console.log(jumbledNums[3]); // Output: 5
```

Great, the element in index 3 is the number `5`. This makes sense since 5 is the first element that is less than 10.

If there isn’t a single element in the array that satisfies the condition in the callback, then `.findIndex()` will return `-1`.

```js
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000); // Output: -1
```

#### 5. The .reduce() Method ####

Another widely used iteration method is `.reduce()`. The `.reduce()` method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

```js
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17
```

Here are the values of `accumulator` and `currentValue` as we iterate through the numbers array:

|**Iteration** | `accumulator` | `currentValue`| `return value`|
|--------------|---------------|---------------|---------------|
|First         |	1            |  2            |	3            |
|Second        |	3            |  4            |	7            |
|Third         |	7            |  10           |	17           |

Now let’s go over the use of `.reduce()` from the example above:

* `numbers` is an array that contains numbers.
* `summedNums` is a variable that stores the returned value of invoking `.reduce()` on numbers.
* `numbers.reduce()` calls the `.reduce()` method on the numbers array and takes in a callback function as argument.
* The callback function has two parameters, `accumulator` and `currentValue`. The value of `accumulator` starts off as the value of the first element in the array and the `currentValue` starts as the second element. To see the value of `accumulator` and `currentValue` change, review the chart above.
* As `.reduce()` iterates through the array, the return value of the callback function becomes the `accumulator` value for the next iteration, `currentValue` takes on the value of the current element in the looping process.
* The `.reduce()` method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:

```js
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117
```

Here’s an updated chart that accounts for the second argument of `100`:

|**Iteration** | `accumulator` | `currentValue`| `return value`|
|--------------|---------------|---------------|---------------|
|First         |	100          |	1            |	101          |
|Second        |	101          |	2            |	103          |
|Third         |	103          |	4            |	107          |
|Fourth        |	107          |	10           | 	117          |

#### 6. Iterator Documentation ####

There are many additional built-in array methods, a complete list of which is on the [MDN’s Array iteration methods page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods).

The documentation for each method contains several sections:

* A short definition.
* A block with the correct syntax for using the method.
* A list of parameters the method accepts or requires.
* The return value of the function.
* An extended description.
* Examples of the method’s use.
* Other additional information.

#### 7. Review: Iterators ####

You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let’s review!

* `.forEach()` is used to execute the same code on every element in an array but does not change the array and returns undefined.
* `.map()` executes the same code on every element in an array and returns a new array with the updated elements.
* `.filter()` checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
* `.findIndex()` returns the index of the first element of an array that satisfies a condition in the callback function. It returns `-1` if none of the elements in the array satisfies the condition..
* `.reduce()` iterates through an array and takes the values of the elements and returns a single value.
* All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.
* You can visit the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to learn more about iterator methods (and all other parts of JavaScript!).

8. ### Thinking About Errors in Your Code Differently ###

**This article explains how errors in your code aren’t a bad thing, but rather an opportunity to learn. Additionally, it provided several steps to identify and fix these errors.**

When you get started with coding, it’s inevitable that bugs will show up in your code. You’ll get unintended behaviors and you even get a long, possibly scary looking, error alongside your bug(s). Even when you’re a seasoned coder you’ll continue to encounter bugs and errors — that’s a good thing! It’s important to understand that making and debugging errors is part of the process and you won’t always know the solution right away. In this article, you learn how to find the bug that’s causing your error, and how to think about the debugging process differently.

**Red is a Beautiful Color**

Red can be a dangerous color. STOP, DANGER, DO NOT ENTER, all loud red signs telling us to turn around, don’t go in there, you’ll get hurt. It’s easy to carry this mindset over to coding that many new programmers get discouraged and distraught over the red error messages that appear in the terminal.

They think, “oh no, I’ve done something wrong again” and “clearly coding isn’t for me, even the computer knows,” but that’s the wrong way of thinking! All programmers, even the most experienced ones, get errors all the time. Believe it or not, experienced programmers likely face far more errors than a new programmer ever will.

**Errors in Your Code Mean You’re Trying To Do Something Cool**

Consider the totally made up graph below:

![A chart depicting a linear correlation between the number of errors you'll encounter in your code and the complexity of your code.](https://news.codecademy.com/content/images/2018/07/image3-1.png)

As your code increases in complexity, the number of errors you’ll encounter rises at a similar rate. An error means you’re trying to do something that might be a little complicated (or very complicated), and it doesn’t quite work yet, but by no means is it a sign that you should stop trying!

In fact, there are entire engineering roles built around finding and fixing errors. A site reliability engineer finds and report errors in web platforms. A test engineer builds automated tests to discover errors in software and make sure that it meets a companies standards.

Almost all major technology companies offer cash rewards to intrepid programmers who can find bugs in their software. Google, Amazon, and Microsoft all encourage users to seek out bugs and report any they might find.

Why do they do this? Why would a major technology company want its users to try to break their software? Because they understand that encountering bugs is one of the best ways you can improve your code. Bugs show you where the weaknesses are, make you really consider what you want your code to accomplish, and then guide you towards building more reliable and secure products.

**Tools to Tackle Code Errors**

Okay, okay, that makes sense! Error messages shouldn’t be scary, but tackling them and coming up with a solution is still a skill that must be developed. Being willing to tackle an error is a great first step, and having some tools at your disposal to debug is a great way to feel comfortable tackling even the gnarliest of bugs in the future.

Let’s outline a few steps you can take to solve any compiler errors that you might encounter – these types of errors print out to the console.

The following steps will guide you through a standard error that might get thrown your way as you learn to code, and they’ll show you that errors aren’t as scary as they seem. In fact, the steps are mostly a combination of reading the error carefully and copying and pasting it in a web search!

1. Dissect the Error.

When an error first appears on your screen, find the line in the error specific to your code. Lots of error messages have tons of boilerplate details that aren’t important to the actual error. You want to find the part of the error message that gives you insight about what happened. That line is generally at the top of the error stack trace.

Let’s take a look at a plausible error that you could encounter when writing a program that finds students on the honor roll among a list of students based on their GPA. Given the list, you might want to filter for all of the honor roll students by looking at the gpa property.

```js
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
 
let honorRoll = students.filter(student => {
 return student.gpa >= GPA_BENCHMARK;
});
 
console.log(honorRoll);
```

After running that code, a stack trace that contains a lot of error information will appear:

```js
TypeError: students.filter is not a function
    at /home/runner/FearlessNewDev/index.js:21:26
    at Script.runInContext (vm.js:130:18)
    at Object.<anonymous> (/run_dir/interp.js:209:20)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
```

So, which line has the most important information? The first two lines seem pretty promising.

```js
TypeError: students.filter is not a function
    at /home/runner/FearlessNewDev/index.js:21:26
```

The first line says that the JavaScript engine doesn’t think that `.filter()` is a function — but it should be, so there might be an issue in how it’s being used. The second line points to the line of code that is throwing the error, which is line 21 and at the 26th character: `let honorRoll = students.filter(student => {....`

The code is calling `.filter()` on the students variable. Checking back in on the code, you can see that students is an object. This seems like a good place to start.

2. Ask Yourself, Is the Solution In the Error?

Often, you’ll encounter syntax errors that will show exactly where the error occurred and what the error was. When you get these types of errors, you can go directly back to your code and fix them. Here’s an example of code that will throw a syntax error:

```js
for (let x = 0; x < 10, x++) {
  console.log(x)
}
```

Running this code will output:

```js
/home/runner/FearlessNewDev/index.js:1
for (let x = 0; x < 10, x++) {
                           ^

SyntaxError: Unexpected token ')'
```

Notice that in this case, the compiler is pointing to the syntax issue with the `^` symbol, which sometimes makes it easier to debug. However, the issue is that there’s accidentally a comma (,) instead of a semicolon (;). Error messages can help, but you still need to use your developer knowledge to fix the error!

3. Search on the Web for Instances of This Error.

Sometimes, step 2 will not apply, and you’ll have to dive a little deeper into the error. Let’s return to the honor roll error that came up in step one. Since the solution isn’t immediately obvious, you’ll need to do some research to understand why it flagged an error.

Copy and paste the important part of the error message into a search engine and look through the results until you find someone else who has also run into that issue. To get better search results, you can include relevant keywords and modify the error message to be more generic.

In the error message `TypeError: students.filter is not a function`, it’s highly unlikely that someone else is having a `.filter()` issue on a students variable with the same data types, so that’s the type of thing that could be more generic. Instead of searching for `“TypeError: students.filter is not a function”`, you can try something like `“TypeError: object filter() is not a function”` and add a keyword for the language. The final search might be: `“TypeError: object filter() is not a function JavaScript”`.

After searching, one of the first results looks promising: “filter is a method on arrays. Since the code you posted contains an object, you’re seeing this error. You may want to apply filter after…”

Aha! If you consult the `.filter()` documentation on MDN Web Docs you can confirm that `.filter()` is only for arrays. On the Stack Overflow page, it recommends using `Object.keys(data)` to turn the `object` into an iterable array so you can use the `.filter()` Array method on the new array.

Google is always a good place to check, but you can also reread documentation on MDN Web Docs or search directly on Stack Overflow, which is a wonderful community of programmers sharing knowledge and building cool stuff.

4. Compare Different Use Cases to Yours.

Often you will not find someone who was trying to do the exact same thing you were trying to do, but who still encountered the same error. Read through their code a bit and see if it is comparable to yours. Even if their code is wildly different, the one or two lines that threw the error might be very similar to your code, so the solution may end up being the same.

Consider the result found for the TypeError.

The screenshot shows a suggested solution on the forum Stack Overflow and includes a code snippet with a possible solution for the error message.

Even though the solution didn’t involve a students object, the answer does provide a quick way to make an Object work with the `.filter()` method. It’s worth a shot to try it!

5. Try to implement the solution.

Tweak the code a bit to match your use case and try it out! Worst case is that the error doesn’t go away and then you can try again. Best case is that it’s fixed and you’ve learned what was causing your error!

Every solution you implement is a new tool you can add to your programmer’s toolbox, and another error you will know how to solve in the future.

Thankfully, 31piy‘s solution was able to solve the issue using the Object.values() method. Take a look at the updated code:

```js
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
let honorRoll = Object.values(students).filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});
console.log(honorRoll);
```

After reading through the documentation and a few more Stack Overflow responses, it also seemed like a good idea to try changing my code in a different way, by making the students object be an array instead of an object in the first place. That way the `.filter()` method can be used directly on the array instead of first turning an object into an array.

Take a look at the updated code to reflect that change:

```js
const GPA_BENCHMARK = 3.5;
let students = [
  {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  {
    name: 'Sameer Fares',
    gpa: 3.9
   }
]
let honorRoll = students.filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});
console.log(honorRoll);
```

In the process of figuring out this compiler error, you were able to learn how to use Array methods on objects, and how to think about your use of data types. See, every error is an opportunity to learn!

6. If It Doesn’t Work, Repeat Steps 2-4.

Keep searching through Google and Stack Overflow. The answer will be there! Sometimes it’s helpful to Google parts of the error message, use `console.log()` to see the outputs, or to read about methods and data types at the website MDN Web Docs.

The solutions to your errors are out there, and the process of finding them will make you a stronger and more confident programmer. As you grow and learn, expect to encounter countless errors, and expect each one to be its own unique learning opportunity.

7. Ask The Question Yourself.

Okay, maybe the answer isn’t out there… yet. There is a wealth of information out on the web, but you might be the first one doing something completely new and shiny. It’s ok to ask for help. On the same sites and forums that you found help from, post a question. Ideally, you supply all the background information and provide relevant code that others can look at and do their best to help you out.

**Wrap up**

Remember that bugs are a good thing: finding bugs gives you the opportunity to make your code stronger and more secure. Debugging is a learning opportunity, and other programmers have encountered similar issues and had to ask a lot of the same questions before you. So don’t reinvent the wheel; instead, tap into the pool of solved bugs and learning opportunities available on sites like Stack Overflow, or other resources that can turn up in a web search.

When debugging, remember that you can generalize your error messages or use keywords to make searches more relevant. Don’t be afraid of reading through the documentation either; MDN offers a great option for that.

Most importantly, as you continue growing your debugging tool belt, remember that everyone who has learned before you have encountered a lot of the same bugs, and have asked the same questions online, so don’t be afraid to try a lot of new ideas and ask questions during the debugging process!

Additional resources:

[List of errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
[Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
[Stack Overflow](https://stackoverflow.com/)

Free response

Take a moment to test your understanding! Below is an example of code that will throw an error:

```js
function setInstrument(instr) {    
  let instrument = instr; 
} 
console.log(instrument); 
```

The specific error being:

```js
ReferenceError: instrument is not defined
```

What steps you would take to research a solution and try out your solution?

**Your response**

move instrument to global scope

**Our answer**

Running the code results in the error ReferenceError: instrument is not defined. Since instrument is not a generic variable, you can search for something more generic like ReferenceError: x is not defined or ReferenceError: variable is not defined. When searching with the search phrase “ReferenceError: x is not defined JavaScript”, one answer is from a Mozilla documentation page. In the docs, it explains that the error appears if the variable is not available in the current scope. Their solution moves the variable to the global scope instead of the function scope, so we can try that.

One possible code solution is:

```js
let instrument;
function setInstrument(instr) {
   instrument = instr;
}
setInstrument("cello");
console.log(instrument);
```

1. DEBUGGING JAVASCRIPT CODE
2. Error Stack Traces
3. Reading Error Stack Traces
4. JavaScript Error Types
5. Debugging Errors
6. Locating Silent bugs
7. Debugging with console.log()
8. Finding Documentation
9. Stack Overflow
10. Debugging Review

#### 1. Debugging Overview ####

Any programmer will tell you that it is incredibly common to be making great progress working through a coding problem when all of a sudden an error like this gets thrown at you:

```js
/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
"my_name".capitalize();
          ^
 
TypeError: "my_name".capitalize is not a function
...
```

Alternatively, you might have finally finished implementing a complex function only to find it doesn’t work at all as you expected:

```js
console.log('The square root of 4 is ' + squareRoot(4));
=> 'The square root of 4 is 1.87878787'
```

If any of these things happen to you, don’t fret! In our article Thinking About Errors Differently in Your Code, you discovered that these experiences are normal for all developers, no matter how experienced they are. A key skill developers possess is knowing how to debug their code when issues occur.

This lesson will build on that article, demonstrating how to implement those skills in real-life JavaScript situations. If you haven’t had a chance to read the article yet, we highly encourage you to do so right now.

Alright, are you ready to begin your transition from frustrated coder to bug squasher extraordinaire? Let’s get started!

#### 2. Error Stack Traces ####

We’ll start this lesson by taking a closer look at the most straightforward way to know your code isn’t working as expected: errors!

You might recognize errors as the scary red text that appears on your screen when you try to run broken code. A piece of software, called a compiler, is trying to translate your code so that your computer can understand and run it. However, the compiler is coming across a piece of code that it can’t interpret. As a result, it throws an error back to you to let you know that it has to stop and why.

This information is logged as an error stack trace — a printed message containing information about where the error occurred, what type of error was thrown, and a description of the error.

Take a look at the diagram to the right to see where you can find all of this information.

As a new programmer, it’s easy to see an error and be overcome with a sense of dread and self-doubt. However, you’ll soon realize, errors are the best kind of bug you can hope for, since they tell you exactly what went wrong and where.

#### 3. Reading Error Stack Traces ####

Now that we know what information we can get from an error stack trace, let’s take a look at an example.

```js
/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
myVariable;
^
 
ReferenceError: myVariable is not defined
...
```

Using this stack trace, let’s answer three questions you should ask yourself every time you want to debug an error:

* In what line did the error occur? You can almost always find this information on the first line of the stack trace in the following format <file path>/<file name>:<line number>. In this example, the location is app.js:1. This means that the error was thrown in the file named app.js on line 1.
* What type of error was thrown? The first word on the fifth line of the stack trace is the type of error that was thrown. In this case, the type of error was ReferenceError. We will discuss this error type in the next exercise.
* What is the error message? The rest of the fifth line after the error type provides an error message, describing what went wrong. In this case, the description is myVariable is not defined.

You might notice in this example we skipped explaining a few lines in the stack trace and only included the beginning of the stack trace. A large part of debugging errors is recognizing which pieces of information are useful and which ones aren’t. For now, you will succeed by focusing on just the first and fifth lines of your error stack traces.

#### 4. JavaScript Error Types ####

Now that you can identify the type of error from an error stack trace, you might be wondering what the different types of errors mean.

Here are three common error types:

* SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
* ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
* TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the [MDN JavaScript Error documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). Whenever you are confronted with an error you can’t comprehend, consulting this documentation is a great place to start.

#### 5. Debugging Errors ####

Here’s a process for efficiently working through your code’s errors one by one:

* Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
* Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
* Fix the bug and re-run your code.
* Repeat steps 1-3 until your code no longer throws any errors.

While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.

#### 6. Locating Silent Bugs ####

Errors thrown by the computer are really useful because they identify the bug type and location for you right away. However, even if your code runs error-free, it is not necessarily bug-free.

You may find that your code is consistently returning incorrect values without throwing any errors. A lack of thrown errors does not mean your code logic is completely correct.

An incredibly powerful tool for locating bugs is a method you likely learned very early on in your JavaScript journey: `console.log()`!

By adding print statements to our code, we can identify where things have gone wrong.

Let’s try using `console.log()` to do some debugging.

#### 7. Debugging with console.log() ####

Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

* Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
* After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
* Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.

This might seem like a lot of printing, but once you get into the routine of it, it will be far faster than trying to stare at your code until you find your bugs. Let’s try this debugging process again in practice.

#### 8. Finding Documentation ####

Sometimes once you’ve tracked down a bug, you might still be confused on how to fix it! Whenever you want to know more about how JavaScript works and what it can do, the best place to go is documentation. You can find the JavaScript documentation at the [MDN JavaScript web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

The MDN JavaScript web docs are a powerful resource, but they can be overwhelming because they cover so much information. We encourage you to explore the docs, but often the fastest way to access a specific part of the docs you’re interested in is to Google it.

For example, if we wanted more information on the `Number` object’s `.isNan()` method, we could Google `“MDN isNan”` and then click the link to the MDN page. If we were looking to see a list of all of the String built-in methods, we might Google `“MDN String”`, click the link to MDN, and then scroll down to the `“Methods”` section of the documentation.

There are many ways to get to the documentation you are looking for. Find the one that works best for your workflow.

#### 9. Stack Overflow ####

At this point, you might be thinking to yourself, documentation is good and all, but there’s no way it will solve all of my issues! And we totally agree. All programming languages have difficult problems and strange edge cases that appear unexpectedly and are sometimes impossible to solve alone.

If you are ever stuck trying to solve a coding problem, we strongly encourage you to Google for a solution. One of the best sites you will see appear in the search results is Stack Overflow.

Stack Overflow is a question and answer forum where frustrated programmers post issues and other programmers discuss and vote for solutions. Almost always if you have an issue, Stack Overflow has an answer.

For example, say you are stumped trying to write an alphabetize function. If you search “alphabetize string JavaScript” on Google, this Stack Overflow search result will appear. You can quickly scan through the answers on it to see which ones work for you.

If you are ever programming and a problem is becoming so insurmountable that you want to quit, Stack Overflow is a great place to go to get unstuck.

#### 10. Debugging Review ####

You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! Let’s synthesize everything you learned into one debugging process.

* Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.
* Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
* Did you locate the bug using steps 1 and 2, but can’t fix the bug? Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.

It may take some time and practice, but this is how all developers work through their issues, so don’t give up, and you’ll be an expert in no time.

Congratulations again on learning all of these new techniques. Let’s give them one more round of practice so you can see how much progress you’ve made!

## Code Challenges: Intermediate JavaScript ##

1. Introduction
2. reverseArray()
3. greetAliens()
4. convertToBaby()
5. Fix The Broken Code!
6. declineEverything() and acceptEverything()
7. squareNums()
8. shoutGreetings()
9. sortYears()
10. justCoolStuff()
11. isTheDinnerVegan()
12. sortSpeciesByTeeth()
13. findMyKeys()
14. dogFactory()

### 1. Introduction ###

In the exercises that follow, you will practice and reinforce your understanding of JavaScript scope, arrays, loops, iterators, and objects. We encourage you to review the relevant lessons, look things up in the MDN documentation, check out the hints and solution code if you get stuck, and, most of all, have fun!

### 2. reverseArray() ###

> Instructions

Write a function, `reverseArray()`, that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

```js
const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];
```

My Solution;

```js
const reverseArray = (words) => {
  let reverse = [];
  for (i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);
  }
  return reverse;
};
// When you're ready to test your code, uncomment the below and run:
 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
```

### 3. greetAliens() ###

> Instructions

Write a function, `greetAliens`(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
`“Oh powerful [stringElement], we humans offer our unconditional surrender!”`

```js
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 
```

Note: You may have noticed how convenient it would be to use `.forEach()`, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

My Code;

```js
function greetAliens(string) {
  for (const word of string) {
    console.log(`Oh powerful ${word}, we humans offer our unconditional surrender!`);
  }
}
```

### 4. convertToBaby() ###

> Instructions

Write a function, `convertToBaby()`, that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

```js
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
```

Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

My Code;

```js
function convertToBaby(namesArray) {
  let baby = [];
  for (const name of namesArray) {
    baby.push(`baby ${name}`);
  }
  return (baby);
}
```

### 5. Fix The Broken Code! ###

> Instructions

We wrote a function, smallestPowerOfTwo(), which takes in an array.

> Provided Code

```js
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    i = 1;
    while (i < number) {
      i = i * 2;
    }
    results.push(i);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
```

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?

> My Code;

```js
const smallestPowerOfTwo = (arr) => {
  let results = [];
  //We're gonna make a loop that iterates through the given array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
  //This nested while loop will run completely for every for loop iteration
    j = 1;
    while (j < number) {
      j = j * 2;
    }
  //This will push the numbers from the while loop to the empty results array
    results.push(j);
  }
  //And finally this will return the result array
  return results;
};
```

### 6. declineEverything() and acceptEverything()

> Instructions

Write a function `declineEverything()` that takes in an array of strings and, using `.forEach()`, loops through each element in the array and calls `politelyDecline()` with each of them.

The `.forEach()` function should apply `politelyDecline()` directly; it should NOT merely receive an argument function that uses `politelyDecline()`.

You can test your function when you’re ready by passing in the veggies array or by making your own array!

> Code;

```js
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (arr) => {
  //Below we call politelyDecline function without parenthesis because we don't want to give it an argument right now
  arr.forEach(politelyDecline);
}
declineEverything(veggies);

const acceptEverything = (arr) => {
  //Below we give forEach a function (word) instead of assigning a function to it
  arr.forEach((word) => {
    console.log(`Ok, I guess I will eat some ${word}.`);
  })
}

acceptEverything(veggies);
```

### 7. squareNums() ###

> Instructions

Write a function, `squareNums()`, that takes in an array of numbers and, using `.map()`, returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!

> My Code;

```js
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = nums => {
  return nums.map((num) => num *= 2);
};

console.log(squareNums(numbers));
```

### 8. shoutGreetings()

Instructions

Write a function `shoutGreetings()` that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!

> My Code;

```js
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = arr => {
  let words = [];
  arr.map((word) => {
    uCase = word.toUpperCase();
    words.push(`${uCase}!`)
  })
  return words;
}
console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
```

### 9. sortYears() ###

> Instructions

Write a function `sortYears()` that takes in an array of years, and, using the built-in `.sort()` method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!

> My Code;
```js
function sortYears(arr) {
  return arr.sort().reverse()
}

// Feel free to uncomment the below code to test your function:
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
```

### 10. justCoolStuff() ###

> Instructions

Write a function `justCoolStuff()` that takes in two arrays of strings, and, using the built-in `.filter()` method, returns an array with the items that are present in both arrays.

```js
let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']
```

You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!

> My Code;

```js
function justCoolStuff(arr1, arr2) {
  newArray = arr1.filter(word => arr2.includes(word));
  return newArray;
}
```

### 11. isTheDinnerVegan() ###

> Instructions

Write a function `isTheDinnerVegan()` that takes in an array of food objects in the format:

```js
{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true
```

You can test your function when you’re ready by passing in the dinner array or by making your own!

> My Code;

```js
const isTheDinnerVegan = arr => {
  let newArray = arr.every(key => {
    if (key.source === 'plant') {
      return true;
    } else {
      return false;
    }
  })
  return newArray;
};
```

### 12. sortSpeciesByTeeth() ###

> Instructions

Write a function `sortSpeciesByTeeth()` that takes in an array of species objects in the format:

```js
{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
```

You’ll need to access each object’s `.numTeeth` property. Feel free to either write a named comparison function, or use an anonymous function for your argument to `.sort()`.

You can test your function when you’re ready by passing in the speciesArray array or by making your own!

> My Code:

```js
function sortSpeciesByTeeth(arr) {
  let newArray = arr.sort((a, b) => {
    // We are going to use .sort method to sort and arrange our array

    if (a.numTeeth > b.numTeeth) return -1;
    if (a.numTeeth === b.numTeeth) return 0;
    if (a.numTeeth < b.numTeeth) return 1;
    // If we return -1 it will be in the beginning and if we return 0 it will be in between...
  })
  return newArray.reverse();
}
```

### 13. findMyKeys()

> Instructions

Write a function, `findMyKeys()`, that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return `-1`.

```js
const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1
```

You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array or by making your own array!

> My Code;

```js
const findMyKeys = arr => arr.indexOf('keys');
```

### 14. dogFactory()

> Instructions

Write a function, `dogFactory()`. It should:

* have 3 parameters: name, breed, and weight (in that order)
* expect name and breed to be strings
* expect weight to be a number
* return an object
* have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
* `dogFactory('Joe', 'Pug', 27)`
// Should return `{ name: 'Joe', breed: 'Pug', weight: 27 }`

> My Code;

```js
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      if (typeof newName === "string") return (this._name = newName);
    },

    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      if (typeof newBreed === "string") return (this._breed = newBreed);
    },

    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      if (typeof newWeight === "number") return (this._weight = newWeight);
    },

    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      return this.weight++;
    },
  };
};
```

## JavaScript Practice: Arrays, Loops, Objects, Iterators ##

**Practice intermediate JavaScript concepts with these 3 code challenges.**

In these exercises, you will practice working with intermediate JavaScript concepts. This is helpful if you want to practice implementing loops and working with arrays, objects, and iterators.

Some of these challenges are difficult! Take some time to think about them before starting to code.

You might not get the solution correct on your first try — look at your output, try to find where you’re going wrong, and iterate on your solution.

Finally, if you get stuck, use our solution code! If you “Check Answer” twice with an incorrect solution, you should see an option to get our solution code. However, truly investigate that solution — experiment and play with the solution code until you have a good grasp of how it is working. Good luck!

Coding question

1. Write a function `factorial()` that takes a number as an argument and returns the factorial of the number.

Example:

```js
factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720
```

Assume only positive numbers will be given as an argument for the factorial() function.

// Write function below

```js
function factorial(n) { 
  if (n == 1 || n == 0) {
    return n = 1; 
    } else if (n < 0) {
    return -1;  
    } else {
    return n * factorial(n - 1);  
  }
};
    
console.log(factorial(6));

Output:
720
``` 

Coding question

2. Write a function `subLength()` that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

```js
subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
```

> My Code;

```js
const subLength = (str, char) => {
  let charCount = 0;
  let letterFound = [];
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      letterFound.push(i);
      charCount++;
      }  
      }
  let result = arr.slice(letterFound[0], letterFound[1]).length + 1;
  if (charCount > 2 || charCount < 2) return 0;
  return result;
  }
  console.log(subLength('saturday', 'a'));

Output:
6
``` 

3. Coding question

Write a function `groceries()` that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

```js
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
```

> My Code;

```js
function groceries(arr) {
  let str = [];
  for (let key of arr) { str.push(key.item) };

  if (str.length === 1) {
    return str.toString()
  } else {
    let result = str.pop();
    return str.toString().split(',').join(', ') + " " + 'and' + " " + result;  
  }
}
console.log(groceries([{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]));

Output:
Carrots, Hummus, Pesto and Rigatoni
```

## Review: JavaScript Syntax, Part II ##

**In this unit, you learned more JavaScript syntax.**

Congratulations! The goal of this unit was to continue introducing you to JavaScript. You learned about more data types like arrays and objects and you also learned how to debug JavaScript programs.

Having completed this unit, you are now able to:

* Read and write JavaScript syntax for arrays, loops, objects, and iterators
* Debug JavaScript code and parse error messages
* Solve code challenges related to the newly learned syntax
* 
If you are interested in learning more about these topics, here are some additional resources:

Codecademy Project - Create your own library of methods, [Lodash](https://www.codecademy.com/content-items/fb6220182ee4317cc3eaf380b71175de?preview=true)
[MDN Guide to Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
[Digital Ocean Tutorial for Iteration Methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods)
