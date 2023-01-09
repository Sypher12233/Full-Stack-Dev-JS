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

| **Iteration** | `accumulator` | `currentValue` | `return value` |
| ------------- | ------------- | -------------- | -------------- |
| First         | 1             | 2              | 3              |
| Second        | 3             | 4              | 7              |
| Third         | 7             | 10             | 17             |

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

| **Iteration** | `accumulator` | `currentValue` | `return value` |
| ------------- | ------------- | -------------- | -------------- |
| First         | 100           | 1              | 101            |
| Second        | 101           | 2              | 103            |
| Third         | 103           | 4              | 107            |
| Fourth        | 107           | 10             | 117            |

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

### Review: JavaScript Syntax, Part II ###

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


##  Building Interactive Websites ##

In this unit, you will learn how to use JavaScript to build interactive websites.
The goal of this unit is to learn how JavaScript is used to add interactive experiences to a website.

After this unit, you will be able to:

* Add JavaScript to a website for interactivity
* Describe what the DOM is
* Explain what DOM Events are
* Create forms using HTML and validate them using JavaScript

You will put all of this knowledge into practice with an upcoming Portfolio Project. You can complete the Portfolio Project either in parallel with or after taking the prerequisite content — it’s up to you!

### 1. JavaScript and the DOM ###

The Script Element

1. JavaScript and HTML
2. The `<script>` tag
3. The src attribute
4. How are scripts loaded?
5. Defer attribute
6. Async attribute
7. Review: The Script Element

#### JavaScript and HTML ####

HTML defines the structure of a web page by using page elements as the building blocks. However, HTML by itself can not produce web page interactivity, that’s where JavaScript comes in.

Below, we see a post-it with a typical stick figure on it. We can think of this as the HTML, with the head, body, and limbs as the elements on the page:

![(>)](https://content.codecademy.com/courses/script/Javascript_stick_figure.png)

In web development, CSS provides the style to our HTML structure. Below, the stick figure is now dressed in a nice tuxedo:

![(>)](https://content.codecademy.com/courses/script/Javascript_stick_figure_2.png)

If HTML and CSS provide structure and style in this analogy, JavaScript provides interactivity, allowing our stick figure to move. Below, the stick figure moves, swaying up and down, thanks to JavaScript:

![(>)](https://content.codecademy.com/courses/script/stick_figure_v2.gif)

Web programmers use JavaScript to make web pages dynamic and interactive. This powerful scripting language is encapsulated in its own HTML element: the `<script>` element. You can think of this `<script>` element as the door to JavaScript for HTML. This lesson will dig deeper into what the `<script>` element can do for your websites and best practices on how and where to insert JavaScript in your HTML files.

#### 2. The `<script>` tag ####

The `<script>` element allows you to add JavaScript code inside an HTML file. Below, the `<script>` element embeds valid JavaScript code:

```html
<h1>This is an embedded JS example</h1>
<script>
  function Hello() {
    alert ('Hello World');
  }
</script>
```

Frankly, without the `<script>` tag, websites would be unclickable and a bit boring.

The `<script>` element, like most elements in HTML, has an opening and closing angle bracket. The closing tag marks the end of the content inside of the `<script>` element. Just like the `<style>` tag used to *embed* CSS code, you use the `<script>` tag to *embed* valid JavaScript code.

#### 3. The src attribute ####

Since you know how to use a `<script>` element with embedded code, let’s talk about linking code. Linking code is preferable because of a programming concept called Separation of Concerns (SoC). Instead of having messy code that is all in the same file, web developers separate their code into different files, making each “concern” easier to understand and more convenient when changes must be made.

For this exercise, instead of writing JavaScript in our HTML file, we are going to write it in its own file, and then reference this code with a file path name. We will do this using an attribute that may jog your memory: the `src` attribute!

If this seems familiar, that’s because you may have been linking to external files with the `<img>` and `<link>` elements. The attribute is exactly the same, but now its value specifies the location of your script file.

If the file is in the same project folder, the `src` value will be a relative path name. Below is an example of providing a relative path for a JavaScript file.

```html
<script src="./exampleScript.js"></script>
```

The `<script>` above would look for a file called **exampleScript.js** that is in the same folder/directory as our **index.html** file.

If you must refer to JavaScript hosted externally, or in a [CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN), you can also link to that file location.

#### 4. How are scripts loaded? ####

A quick recap: the `<script>` element allows HTML files to load and execute JavaScript. The JavaScript can either go embedded inside of the `<script>` tag or the script tag can reference an external file. Before we dive deeper, let’s take a moment to talk about how browsers parse HTML files into web pages. This informs where to include a `<script>` element inside your HTML file.

Browsers come equipped with HTML parsers that help browsers render the elements accordingly. Elements, including the `<script>` element, are by default, parsed in the order they appear in the HTML file. When the HTML parser encounters a `<script>` element, it loads the script then executes its contents before parsing the rest of the HTML. The two main points to note here are that:

* The HTML parser does NOT process the next element in the HTML file until it loads and executes the `<script>` element, thus leading to a delay in load time and resulting in a poor user experience.
* Additionally, scripts are loaded sequentially, so if one script depends on another script, they should be placed in that very order inside the HTML file.

The GIF below displays two scripts being loaded. The first script makes a `Watering Can` appear, the second script makes a `Flower` appear. This shows how scripts are loaded sequentially, and how they pause the *HTML* parser, which is why “Blooming” appears at the end.

![Image showing a flower bloom](https://content.codecademy.com/courses/script/ScriptNoAttribute.gif)

#### 5. Defer attribute ####

When the HTML parser comes across a `<script>` element, it stops to load its content. Once loaded, the JavaScript code is executed and the HTML parser proceeds to parse the next element in the file. This can result in a slow load time for your website. HTML4 introduced the defer and async attributes of the `<script>` element to address the user wait-time in the website based on different scenarios.

The defer attribute specifies scripts should be executed after the HTML file is completely parsed. When the HTML parser encounters a `<script>` element with the defer attribute, it loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file.

Here is an example of the defer tag:

```html
<script src="example.js" defer></script> 
```

When is `defer` useful?

When a script contains functionality that requires interaction with the DOM, the `defer` attribute is the way to go. This way, it ensures that the entire HTML file has been parsed before the script is executed.

#### 6. Async attribute ####

The `async` attribute loads and executes the script asynchronously with the rest of the webpage. This means that, similar to the defer attribute, the HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, with the async attribute, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded. Here is an example of the async tag:

```html
<script src="example.js" async></script>
```

When is it useful?

`async` is useful for scripts that are independent of other scripts in order to function accordingly. Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is the most suitable option as it optimizes web page load time.

#### 7. Review ####

Let’s review.

* HTML creates the skeleton of a webpage, but JavaScript introduces interactivity
* The `<script>` element has an opening and closing tag. You can embed JavaScript code in between the opening and closing `<script>` tags.
* You link to external JavaScript files with the **src** attribute in the opening `<script>` tag.
* By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file, the HTML parser waits to load the entire script before from proceeding to parse the rest of the page elements.
* The `defer` attribute ensures that the entire HTML file has been parsed before the script is executed.
* The `async` attribute will allow the *HTML parser* to continue parsing as the script is being downloaded, but will execute immediately after it has been downloaded.

The old convention was to put scripts right before the `</body>` tag to prevent the script from blocking the rest of the HTML content. Now, the convention is to put the script tag in the `<head>` element and to use the `defer` and `async` attributes.

### 2. The Document Object Model ###

1. What is the DOM?
2. The DOM as a Tree Structure
3. Parent Child Relationships in the DOM
4. Nodes and Elements in the DOM
5. Attributes of Element Node
6. Review: The Document Object Model

#### 1. What is the DOM? ####

The *Document Object Model*, abbreviated DOM, is a powerful tree-like structure that allows programmers to conceptualize hierarchy and access the elements on a web page.

The DOM is one of the better-named acronyms in the field of Web Development. In fact, a useful way to understand what DOM does is by breaking down the acronym but out of order:

* The *DOM* is a logical tree-like **M**odel that organizes a web page’s HTML **D**ocument as an **O**bject.

The DOM is implemented by browsers to allow JavaScript to access, modify, and update the structure of an HTML web page in an organized way.

For this reason, we like to think of the DOM as the link between an HTML web page and scripting languages.

![The Dom](https://content.codecademy.com/courses/dom/dom_revision_1.svg)

#### 2. The DOM as a Tree Structure ####

Tree-like modeling is used in many fields, including evolutionary science and data analytics. Perhaps you’re already familiar with the concept of family trees: these charts represent the familial relationships amongst the descendants of a given family name.

The DOM tree follows similar logic to that of a family tree. A family tree is made up of family members and their relationships to the family name. In computer science, we would call each family member a node.

We define a *node* as an intersecting point in a tree that contains data.

In the DOM tree, the top-most node is called the *root node*, and it represents the HTML document. The descendants of the root node are the HTML tags in the document, starting with the `<html>` tag followed by the `<head>` and `<body>` tags and so on.

![(>)](https://static-assets.codecademy.com/Courses/Learn-JavaScript/DOM/domTreeEx2.svg)

#### 3. Parent Child Relationships in the DOM ####

Following the metaphor of a family tree, let’s define some key terminology in the DOM hierarchy:

A *parent node* is any node that is a direct ancestor of another node.

A *child node* is a direct descendant of another node, called the parent node.

Knowing these terms will allow you to understand and discuss the DOM as a tree-like structure. In fact, you will also see this terminology used when referring to the nesting structure of HTML code. Programmers refer to elements nested inside other elements as the children elements and parent elements respectively.

#### 4. Nodes and Elements in the DOM ####

As mentioned, a node is the equivalent of each family member in a family tree. A node is an intersecting point in a tree that also contains data.

There are multiple types of node objects in the DOM tree. In our diagram, the node objects with the sharp-edge rectangles are [*Element*](https://developer.mozilla.org/en-US/docs/Web/API/Element) nodes, while the rounded edge rectangles are [*Text*](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes, because they represent the text inside the HTML paragraph elements.

When trying to modify a web page, the script will mostly interact with the DOM element nodes and occasionally text nodes.

1[(>)](https://static-assets.codecademy.com/Courses/Learn-JavaScript/DOM/domTreeEx4.svg)

#### 5. Attributes of Element Node ####

DOM element nodes model elements in an HTML document.

Much like an element in an HTML page, the DOM allows us to access a node’s attributes, such as its `class`, `id`, and `inline style`.

In the diagram to the right, we have highlighted the paragraph element with an `id` of `'bio'` in the HTML document. If we were accessing that element node in our script, the DOM would allow us to tweak each of those attributes, or simply access them to check their value in the code.

![(>)](https://static-assets.codecademy.com/Courses/Learn-JavaScript/DOM/domTreeEx5.svg)

#### 6. Review: The Document Object Model ####

Congratulations on completing our introduction to the Document Object Model, or DOM, as a structure!

Let’s review what you’ve learned so far:

* The DOM is a structural model of a web page that allows for scripting languages to access that page.
* The system of organization in the DOM mimics the nesting structure of an HTML document.
* Elements nested within another are referred to as the children of that element. The element they are nested within is called the parent element of those elements.
* The DOM also allows access to the attributes of an HTML element such as `style`, `id`, etc.

With this understanding, you can begin to leverage the power of scripting languages to create, update, and maintain web pages!

### 3. The Document Keyword ###

The *Document Object Model*, abbreviated DOM, is a powerful tree-like structure that organizes the elements on a web page and allows scripting languages to access them. This lesson will focus on some of the most useful methods and properties of the [DOM interface](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) in JavaScript. This interface is implemented by every modern browser.

First things first! The `document` object in JavaScript is the door to the DOM structure. The `document` object allows you to access the root node of the DOM tree. Before you can access a specific element in the page, first you must access the document structure itself. The `document` object allows scripts to access children of the DOM as properties.

For example, if you want to access the `<body>` element from your script, you can access it as a property of the `document` object by using `document.body`. This property will return the body element of that DOM.

Similarly, you could access the `<title>` element with the `.title` property. Here is a [comprehensive list](https://developer.mozilla.org/en-US/docs/Web/API/Document) of all `document` properties.

1. The Document Keyword
2. Tweak an Element
3. Select and Modify Elements
4. Style an Element
5. Traversing the DOM
6. Create and Insert Elements
7. Remove an Element
8. Add Click Interactivity
9. Review: JavaScript and the DOM 

#### 1. The Document Keyword ####

The Document Object Model, abbreviated DOM, is a powerful tree-like structure that organizes the elements on a web page and allows scripting languages to access them. This lesson will focus on some of the most useful methods and properties of the [DOM interface](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) in JavaScript. This interface is implemented by every modern browser.

First things first! The `document` object in JavaScript is the door to the DOM structure. The `document` object allows you to access the root node of the DOM tree. Before you can access a specific element in the page, first you must access the `document` structure itself. The document object allows scripts to access children of the DOM as properties.

For example, if you want to access the `<body>` element from your script, you can access it as a property of the `document` object by using `document.body`. This property will return the body element of that DOM.

Similarly, you could access the `<title>` element with the `.title` property. Here is a [comprehensive list](https://developer.mozilla.org/en-US/docs/Web/API/Document) of all document properties.
#### 2. Tweak an Element ####

When using the DOM in your script to access an HTML element, whether it’s an `<li>` element or the entire `<body>` element, you also have access to all of that element’s properties.

This includes the ability to modify the contents of the element as well as its attributes and properties, which can range from modifying the text inside a `<p>` element to assigning a new background color to a `<div>`. For example, the .innerHTML property allows you to access and set the contents of an element.

Let’s take a look at how we can reassign the contents of the `<body>` element to the text 'The cat loves the dog':

```js
document.body.innerHTML = 'The cat loves the dog.';
```

The `.innerHTML` property can also add any valid HTML elements. The following example replaces the contents of the `<body>` element by assigning an `<h2>` element as a child inside the `<body>` element:

```js
document.body.innerHTML = '<h2>This is a heading</h2>'; 
```

#### 3. Select and Modify Elements ####

In the previous exercise, we accessed the `<body>` element with the document keyword!

What if we wanted to select a specific element besides the entire `<body>` element? The DOM interface allows us to access a specific element with CSS selectors.

CSS selectors define the elements to which a set of CSS rules apply, but we can also use these same selectors to access DOM elements with JavaScript! Selectors can include a tag name, a class, or an ID.

The `.querySelector()` method allows us to specify a CSS selector as a string and returns the first element that matches that selector. The following code would return the first paragraph in the document.

```js
document.querySelector('p');
```

Along with `.querySelector()`, JavaScript has more targeted methods that select elements based on their class, id, or tag name.

For example, if you want to access an element directly by its `id`, you can use the aptly named `.getElementById()` method:

```js
document.getElementById('bio').innerHTML = 'The description';
```

In this example, we’ve selected the element with an ID of `'bio'` and set its `.innerHTML` to the text `'The description'`. Notice that the ID is passed as a string, wrapped in quotation marks (`' '`).

There are also the `.getElementsByClassName()` and `.getElementsByTagName()` methods which return an array of elements, instead of just one element. You can use bracket notation to access individual elements of an array:

```js
// Set first element of .student class as 'Not yet registered'
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';
 
// Set second `<li>` tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;
```

In the above example code, the first element with the `'student'` class and the second `<li>` element have had their inner HTML changed.

#### 4. Style an Element ####

Another way to modify an element is by changing its CSS style. The `.style` property of a DOM element provides access to the inline style of that HTML tag.

The syntax follows an `element.style.property` format, with the property representing a CSS `property`. For example, the following code selects the first element with a class of blue and assigns blue as the `background-color`:

```js
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';
```

Unlike CSS, the DOM `.style` property does not implement a hyphen such as `background-color`, but rather camel case notation, `backgroundColor`. Check out this [MDN reference page](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) to see a list of how CSS properties are converted into JavaScript.

The following *chaining* syntax would also work:

```js
document.querySelector('.blue').style.fontFamily = 'Roboto';
```

#### 5. Traversing the DOM ####

Let’s recap the parent and children relationship in the DOM hierarchy. A *parent node* is any node that is a direct ancestor of another node. A *child node* is a direct descendant of another node, called the parent node.

These relationships follow the nested structure of the HTML code. Elements nested within one HTML element are children of that parent element.

Each element has a `.parentNode` and `.children` property. The [`.parentNode` property](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) returns the parent of the specified element in the DOM hierarchy. Note that the document element is the root node so its `.parentNode` property will return `null`. The `.children` property returns an array of the specified element’s children. If the element does not have any children, it will return `null`.

```HTML
<ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul>
```

In the HTML code above, we have an `<ul>` element with the ID of groceries with four `<li>` elements inside.

```js
let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements
```

Here, the parentElement variable stores the .parentNode of the `<li>` element with the ID of must-have, which will be the `<ul>` element with the ID of groceries. The childElements variable is set to the children of the `<ul>` element with the ID of groceries, which will be an array of four `<li>` elements.

#### 6. Create and Insert Elements ####

Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones.

The [`.createElement()` method](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) creates a new element based on the specified tag name passed into it as an argument. However, it does not append it to the document. It creates an empty element with no inner HTML.

```js
let paragraph = document.createElement('p');
```

In the example code above, the `.createElement()` method takes `'p'` as its argument which creates an empty `<p>` element and stores it as the paragraph variable.

We can assign values to the properties of the newly created element like how we’ve done previously with existing elements.

```js
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
```

Above, we use the `.id` property to assign `'info'` as ID and the `.innerHTML` property to set `'The text inside the paragraph'` as the content of the `<p>` element.

In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM, referred to as the parent element. We call this process *appending*. The `.appendChild()` method will add a child element as the parent element’s last child node. The following code appends the `<p>` element stored in the paragraph variable to the document body.

```js
document.body.appendChild(paragraph);
```

The `.appendChild()` method does not replace the content inside of the parent, in this case, `body`. Rather, it appends the new element as the last child of that parent.

#### 7. Remove an Element ####

In addition to modifying or creating an element from scratch, the DOM also allows for the removal of an element. The `.removeChild()` method removes a specified child from a parent.

```js
let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);
```

In the above example code, the `.querySelector()` method returns the first paragraph in the document. Then, the `paragraph` element is passed as an argument of the `.removeChild()` method chained to the parent of the `paragraph—document.body`. This removes the first paragraph from the document body.

If you want to hide an element rather than completely deleting it, the [`.hidden` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) allows you to hide it by setting the property as `true` or `false`:

```js
document.getElementById('sign').hidden = true;
```

The code above did not remove the element with ID of `'sign'` from the DOM but rather, hid it.

#### 8. Add Click Interactivity ####

You can add interactivity to DOM elements by assigning a function to run based on an event. Events can include anything from a click to a user mousing over an element. We will learn more about events in the upcoming DOM Events with JavaScript lesson. For now, let’s take a look at how to modify an element when a click event happens.

The    property allows you to assign a function to run on when a click event happens on an element:

```js
let element = document.querySelector('button');
 
element.onclick = function() { 
  element.style.backgroundColor = 'blue' 
};
```

You can also assign the `.onclick` property to a function by name:

```js
let element = document.querySelector('button');
 
function turnBlue() {
   element.style.backgroundColor = 'blue';
}
 
element.onclick = turnBlue;
```

In the above example code, when the `<button>` element detects a click event, the `backgroundColor` will change to `'blue'`.

#### 9. Review: JavaScript and the DOM ####

In this lesson, you manipulated a webpage structure by leveraging the Document Object Model (DOM) interface in JavaScript.

* The `document` keyword grants access to the root of the DOM in JavaScript.
* The DOM Interface allows you to select a specific element with CSS selectors by using the .`querySelector()` method.
* You can access an element directly by its ID with the `.getElementById()` method which returns a single element.
* You can access an array of elements with the `.getElementsByClassName()` and `.getElementsByTagName()` methods, then call a single element by referencing its placement in the array.
* The `.innerHTML` and `.style` properties allow you to modify an element by changing its contents or style respectively.
* You can create, append, and remove elements by using the `.createElement()`,`.appendChild()` and `.removeChild()` methods respectively.
* The `.onclick` property can add interactivity to a DOM element based on a click event.
* The `.children` property returns a list of an element’s children and the `.parentNode` property returns the element’s closest connected node in the direction towards the root.

### 4. DOM Events with JavaScript ###

**What is an Event?**

When you refresh your email inbox, double tap on a post, or scroll through a newsfeed — something cool happens in your browser. These actions are known as *events*!

Events on the web are user interactions and browser manipulations that you can program to trigger functionality. Some other examples of events are:

* A mouse clicking on a button
* Webpage files loading in the browser
* A user swiping right on an image

When a user does any of the above actions, they’re causing the event to be *fired* or be *triggered*. As in, “a click event fired when the button was clicked”. Being able to respond to these events makes your website interactive and therefore dynamic.

1. "Firing" Events
2. Event Handler Registration
3. Adding Event Handlers
4. Removing Event Handlers
5. Event Object Properties
6. Event Types
7. Mouse Events
8. Keyboard Events
9. Review: DOM Events with JavaScript

#### 1. "Firing" Events

After a specific event fires on a specific element in the [document object model](https://www.codecademy.com/paths/web-development/tracks/build-interactive-websites/modules/web-dev-interactive-websites/lessons/intro-dom/exercises/what-is-the-dom) (or DOM), an event handler function can be created to run as a response. In this lesson, we will learn about event handler functions that modify and update DOM elements after an event fires.

Let’s compare the firing of events to something more familiar: a dog trained to eat when they hear the sound of a bell! (This is known as the [Pavlovian conditioning](https://en.wikipedia.org/wiki/Classical_conditioning)).

As you can see in the diagram, the ringing of the bell is analogous to a JavaScript event *firing*. The dog is trained to anticipate the ringing of the bell and this action is analogous to creating an *event listener*. After the dog hears the bell, it’ll come over and eat its food! This response is like an *event handler function* that executes code which, in a website, could change an element’s color, text, and much more!”

Most events in the browser take place without being noticed — the events are undetected because there is no event handler associated with the event to execute an action. Event handlers are crucial for creating interactive websites with JavaScript.

![(>)](https://content.codecademy.com/courses/javascript-dom-events/pavlovs_dog.svg)

#### 2. Event Handler Registration ####

You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

Using the `.addEventListener()` method, we can have a DOM element listen for a specific event and execute a block of code when the event is detected. The DOM element that listens for an event is called the *event target* and the block of code that runs when the event happens is called the *event handler*.

Let’s take a look at the code below:

```js
let eventTarget = document.getElementById('targetElement');
 
eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});
```

Let’s break this down!

* We selected our event target from the DOM using document.getElementById('targetElement').
* We used the `.addEventListener()` method on the eventTarget DOM element.
* The `.addEventListener()` method takes two arguments: an event name in string format and an event handler function. We will learn about different values we can use as event names in a later lesson.
* In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
* The code block in the event handler function will execute when the 'click' event is detected.

Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler function. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

```js
function eventHandlerFunction() {
  // this block of code will run when click event happens
}
 
eventTarget.addEventListener('click', eventHandlerFunction);
```

The named function eventHandlerFunction is passed as the second argument of the `.addEventListener()` method instead of defining an anonymous function within the method!

#### 3. Adding Event Handlers ####

We looked at registering event handlers using the `.addEventListener()` method, but there is also another way!

Event Handlers can also be registered by setting an `.onevent` property on a DOM element (event target). The pattern for registering a specific event is to append an element with `.on` followed by the lowercased event type name. For instance, if we want to register a click event with this pattern, we would write:

```js
eventTarget.onclick = eventHandlerFunction;
```

Here, we give the DOM element eventTarget the `.onclick` property and set its value as the event handler function `eventHandlerFunction`.

It’s important to know that this `.onevent` property and `.addEventListener()` will both register event listeners. With `.onevent`, it allows for one event handler function to be attached to the event target. However, with the `.addEventListener()` method , we can add multiple event handler functions. In the later exercises, we’ll be using the `.addEventListener()` syntax, but we wanted to also introduce the `.onevent` syntax because both are widely used.

#### 4. Removing Event Handlers ####

The `.removeEventListener()` method is used to reverse the `.addEventListener()` method. This method stops the event target from “listening” for an event to fire when it no longer needs to. `.removeEventListener()` also takes two arguments:

* The event type as a string
* The event handler function

Check out the syntax of a `.removeEventListener()` method with a click event:

```js
eventTarget.removeEventListener('click', eventHandlerFunction);
```

Because there can be multiple event handler functions associated with a particular event, `.removeEventListener()` needs both the exact event type name and the name of the event handler you want to remove. If `.addEventListener()` was provided an anonymous function, then that event listener cannot be removed.

#### 5. Event Object Properties ####

JavaScript stores events as [`Event objects`](https://developer.mozilla.org/en-US/docs/Web/API/Event) with their related data and functionalities as properties and methods. When an event is triggered, the event object can be passed as an argument to the event handler function.

```js
function eventHandlerFunction(event){
   console.log(event.timeStamp);
}

eventTarget.addEventListener('click', eventHandlerFunction);
```
 
In the example above, when the `'click'` event is triggered on the `eventTarget`, the `eventHandlerFunction` receives `event`, the Event object, which has information related to the `'click'` event. Then, we log the time it took for the event to be triggered since the document was loaded by accessing the `.timeStamp` property of the event object.

There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

* the [`.target property`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) to reference the element that the event is registered to.
* the [`.type property`](https://developer.mozilla.org/en-US/docs/Web/API/Event/type) to access the name of the event.
* the [`.timeStamp property`](https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp) to access the number of milliseconds that passed since the document loaded and the event was triggered.

#### 6. Event Types ####

Beyond the `click` event, there are all types of DOM events that can fire in a browser! It’s important to know *most* events in the DOM take place without being noticed because there are no event handlers connected to them.

It’s also important to know some registered events don’t depend on user interactions to fire. For instance, the load event fires after website files completely load in the browser.

Browsers can fire many other events without a user — you can check out a list of events on the [MDN Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events) page.

Many events need user interaction with the DOM to fire. One user interaction event you’ve become familiar with is the click event. A click event fires when the user presses and releases a mouse button on an element in the DOM.

![Click Event Image](https://content.codecademy.com/courses/javascript-dom-events/click-event.png)

In the rest of this lesson, you’ll explore more user interaction event types like the mouse and keyboard events. To explore more event types, check out the [MDN Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events).

#### 7. Mouse Events ####

When you use a mouse device on a website, *mouse events* fire. You’ve seen the `click` and `wheel` events, but, there are even more mouse events to explore!

The `mousedown` event is fired when the user presses a mouse button down. This is different from a `click` event because `mousedown` doesn’t need the mouse button to be released to fire.

![Mouse Down Event Image](https://content.codecademy.com/courses/javascript-dom-events/mousedown.png)

The `mouseup` event is fired when the user releases the mouse button. This is different from the `click` and `mousedown` events because `mouseup` doesn’t depend on the mouse button being pressed down to fire.

![Mouse Up Event Image](https://content.codecademy.com/courses/javascript-dom-events/mouseup.png)

The `mouseover` event is fired when the mouse enters the content of an element.

![Mouse Over Event Image](https://content.codecademy.com/courses/javascript-dom-events/mouseover.png)

The `mouseout` event is fired when the mouse leaves an element.

![Mouse Out Event Image](https://content.codecademy.com/courses/javascript-dom-events/mouseout.gif)

#### 8. Keyboard Events ####

Other popular types of events are keyboard events! *keyboard events* are triggered by user interaction with keyboard keys in the browser.

The `keydown` event is fired while a user presses a key down.

![Key Down Event Image](https://content.codecademy.com/courses/javascript-dom-events/keydown.png)

The `keyup` event is fired while a user releases a key.

![Key Up Event Image](https://content.codecademy.com/courses/javascript-dom-events/keyup.png)

The `keypress` event is fired when a user presses a key down and releases it. This is different from using keydown and keyup events together, because those are two complete events and keypress is one complete event.

![Key Press Event Image](https://content.codecademy.com/courses/javascript-dom-events/keypress.png)

Keyboard events have unique properties assigned to their event objects like the .key property that stores the values of the key pressed by the user. You can program the event handler function to react to a specific key, or react to any interaction with the keyboard.

#### 9. Review: DOM Events with JavaScript ####

Congrats, you completed the lesson! Now you’ve learned about JavaScript events and you can leverage these events on the DOM to create interactivity with event handlers.

Let’s review what you’ve learned:

* You can register events to DOM elements using the `addEventListener()` method.
* The `addEventListener()` method takes two arguments: an event type and an event handler function.
* When an event is triggered on the event target, the registered event handler function executes.
* Event handler functions can also be registered as values of `onevent` properties of their event target.
* Event object properties like `.target`, `.type`, and `.timeStamp` are used to provide information about the event.
* The `addEventListener()` method can be used to add multiple event handler functions to a single event.
* The `removeEventListener()` method stops specific event handlers from “listening” for specific events firing.

### 5. HTML Forms ###

1. Introduction to Form Validation
2. Introduction to HTML Forms
3. Introduction to HTML Form Validation
#### 1. Introduction to Form Validation ####

Modern websites require a lot of information to function as intended. Information like our usernames, passwords, “friends”, “likes”, credit card information, and shopping orders all have to be provided by users on the front-end and sent to the web applications’ servers so they can be processed. This information is used to create a personalized experience for the user.

User information is traditionally collected using HTML forms. If you’ve ever entered text in a website, selected from options on a list, or checked boxes and then hit enter or pressed a button, you likely filled out and submitted an HTML form!

In order for the data submitted through forms to be useful, it’s essential that the information is valid—if you were allowed to accidentally submit your last name where your address was expected, your package would never show up!

The process of checking that the information submitted through a form adheres to expectations is called *form validation*. In this lesson, we’ll explore the different techniques for validating form inputs.

1. Why Validate Forms?
2. Regular Expressions
3. Client-side Validation: HTML
4. Client-side Validation: JavaScript
5. Back-end Validation
6. Review: HTML Form validation

##### 1. Why Validate Forms? #####

Most data, once submitted, is stored by a website or web application. It’s stored in a database on the server side. There are important reasons for us to make sure the information that will be stored in the database is accurate.

We want operations that depend on the data to work: Allowing a user to enter an incorrectly formatted email address, either on purpose or by accident, means that we won’t be able to contact that user later. Allowing a user to sign up for an account with a username that is already in use could cause numerous errors down the line. Making sure we collect all the data we need and checking that the data are formatted correctly can save a web application and its users a lot of trouble.

We want to keep our site secure: Unprotected data leaves entry points for malicious actors to hurt our application or our users. Allowing a user to submit a non-secure password means that their account will not be protected. Unprotected forms can also allow bits of code to be injected into our servers. This can potentially leave our users’ sensitive information exposed. The malicious actor could even gain control of our site or corrupt our existing data!

##### 2. Regular Expressions #####

Data submitted through forms are stored as strings. Strings are a fundamental data type in computer science representing a series of characters “strung” together. As humans, we can intuitively recognize patterns within strings, and this allows us to catch errors. Try to notice what’s wrong in the following examples:

* ABCDEF2GHIJKLMNOPQRSTUVWXYZ
* My zip code is 9021
* The ct meowed
* `<h1> Hello, World! </h2>`

In the first example, we had the letters of the alphabet presented in order but interrupted by an out of place 2. In the second, we left off the 5th digit of a famous zip code. In the third, we omitted the “a” from the word cat. In the final example, we wrote some HTML with an `<h1>` opening tag but an unmatching `</h2>` closing tag. If you picked up on these mistakes, it’s because your brain has been trained to expect patterns in certain types of data.

Unlike humans, who can get this training passively over time, computers have to be precisely programmed to recognize patterns. To specify patterns for the computer to recognize, we use a special language called regular expressions — also known as regex or regexp. A regular expression is a sequence of characters representing a pattern. We can use that pattern to match a string, match parts of a string, confirm that data is formatted acceptably, or even replace parts of strings with different characters.

##### 3. Client-side Validation: HTML #####

The first technique we can use to validate form data is to prevent problematic inputs from being submitted in the first place. This is called client-side validation. The client is the process interacting with the server on behalf of a user—in the case of websites, the web browser is the client. The logic for validating the form is included with the code that displays the form on the user’s device. No interaction with the back-end is required to perform client-side validations.

Since form validation is so common, modern HTML provides some of these validation features built-in. For example, we can use HTML to make parts of a form required and others optional. We can also use HTML to set minimum and maximum values for an input or minimum or maximum lengths for a text input. We can even necessitate that the input match a particular pattern, specified by a regular expression.

If any of the rules laid out in the HTML form validation aren’t followed, the user will not be able to submit their form, and they’ll receive an error message explaining why. With these checks in place, the back-end is less likely to be sent incorrect data. HTML form validation will also benefit the user—the client provides the user immediate feedback, without having to wait for time-consuming communication with the back-end.

##### 4. Client-side Validation: JavaScript #####

Client-side validation has two main advantages. First, it’s a better experience for the user to be alerted to problematic data immediately rather than having to wait for that information to come back from the server and have to fill out the form again. Second, catching mistakes earlier in the process saves the application time and resources as well. But not all issues can be handled with the built-in HTML validations.

In order to truly customize validation or to perform more complex validations, we can incorporate JavaScript form validations. We can do this by either writing the JavaScript ourselves or by incorporating a JavaScript library. If we have unique requirements for usernames on our site, for example, we’ll have to provide these systems of validation ourselves.

If we’re creating a relatively simple website, it makes sense to code the form validation ourselves or use a simple vanilla JavaScript library—[just-validate](https://www.npmjs.com/package/just-validate), for example. But most basic validation libraries will involve directly accessing or manipulating the DOM. This can get tricky when working with a framework that relies on a virtual DOM—like React or Vue. In those situations, it might be best to incorporate a library that works well with your specific framework. For example, the [formik library](https://www.npmjs.com/package/formik) is a lightweight library that simplifies validating forms in a React app.

##### 5. Back-end Validation #####

No matter how complete the front-end validation of a website or application seems, validations must also be completed on the back-end or server-side. Front-end validations are easy to bypass—a malicious user can simply turn off JavaScript on their browser, for example. There’s also the potential for middleman attacks in which data is changed after the request is submitted by a user but before it arrives at the server. As a rule, the back-end should never trust the data it receives.

As the developer, once data is in the back-end, we have complete control over it, luckily. Back-end validation has several advantages:

* It enables us to use validation code often on machines with more computing power.
* It allows us to write validation code that a user can’t see—if malicious users can’t see exactly *how* we validate the data, it’s much more difficult for them to find ways around it.
* We can validate the information against other data the front-end doesn’t have access to—for 
example, we can check our database to see if a given username is already in use.

There are two main ways to validate inputs on the server-side. The first takes place while the user is still inputting data into the form on the front-end. We can make asynchronous requests to the server with pieces of their data and send feedback directly to the user before they’ve submitted. This is slower than front-end validation and can be a design challenge from a user-experience perspective.

The second is once the form has been submitted. Back-end form validation is our application’s last defense against problematic data, and it’s essential to verify the validity and safety of data before adding it to a database. This is also an opportunity to “sanitize” the data: in order for our database to be useful, it’s important that all data within it is formatted consistently. This means that while we may want to be flexible about the formatting we require from a user, we likely want to transform inputs into a strict format before entering them in the database.

##### 6. Review: HTML Form validation #####

* Modern websites require a lot of information from their users and they collect a lot of this information through HTML forms.
* It’s essential to validate the data submitted through forms to keep websites secure and to make sure they function correctly.
* Regular expressions are sequences of characters that define patterns to look for in text. They are an important tool used in validating input.
* Modern HTML comes with useful built-in methods for form validation.
* Custom and complicated client-side validation can be accomplished with JavaScript.
* Asynchronous requests to the server can perform back-end validations before a form has been submitted.
* A final back-end validation of all data is required to ensure an application’s security and sanitize all data.

![(>)](https://content.codecademy.com/courses/PHP_FORMS/exploits_of_a_mom_XKCD.png)

#### 2. Introduction to HTML Forms ####

Forms are a part of everyday life. When we use a physical form in real life, we write down information and give it to someone to process. Think of the times you’ve had to fill out information for various applications like a job, or a bank account, or dropped off a completed suggestion card — each instance is a form!

Just like a physical form, an HTML `<form>` element is responsible for collecting information to send somewhere else. Every time we browse the internet we come into contact with many forms and we might not even realize it. There’s a good chance that if you’re typing into a text field or providing an input, the field that you’re typing into is part of a `<form>`!

In this lesson, we’ll go over the structure and syntax of a `<form>` and the many elements that populate it.

1. How a Form Works
2. Text Input
3. Adding a Label
4. Password Input
5. Number Input
6. Range Input
7. Checkbox Input
8. Radio Button Input
9. Dropdown list
10. Datalist Input
11. Textarea element
12. Submit Form
13. Review: HTML Forms

##### 1. How a Form Works #####

We can think of the internet as a network of computers which send and receive information. Computers need an *HTTP* request to know how to communicate. The *HTTP* request instructs the receiving computer how to handle the incoming information. More information can be found in our article about [HTTP requests](https://www.codecademy.com/articles/http-requests).

The `<form>` element is a great tool for collecting information, but then we need to send that information somewhere else for processing. We need to supply the `<form>` element with both the location of where the `<form>`‘s information goes and what HTTP request to make. Take a look at the sample `<form>` below:

```html
<form action="/example.html" method="POST">
</form>
```

In the above example, we’ve created the skeleton for a `<form>` that will send information to example.html as a POST request:

* The `action` attribute determines where the information is sent.
* The `method` attribute is assigned a HTTP verb that is included in the HTTP request.

Note: HTTP verbs like POST do not need to be capitalized for the request to work, but it’s done so out of convention. In the example above we could have written `method="post"` and it would still work.

The `<form>` element can also contain child elements. For instance, it would be helpful to provide a header so that users know what this `<form>` is about. We could also add a paragraph to provide even more detail. Let’s see an example of this in code:

```html
<form action="/example.html" method="POST">
  <h1>Creating a form</h1>
  <p>Looks like you want to learn how to create an HTML form. Well, the best way to learn is to play around with it.</p>
</form>
```

The example above doesn’t collect any user input, but we’ll do that in the next exercise. For now, let’s practice making the foundation of an HTML `<form>!`

##### 2. Text Input #####

If we want to create an input field in our `<form>`, we’ll need the help of the `<input>` element.

The `<input>` element has a `type` attribute which determines how it renders on the web page and what kind of data it can accept.

The first value for the `type` attribute we’re going to explore is `"text"`. When we create an `<input>` element with `type="text"`, it renders a text field that users can type into. Note that the default value of `type` is `"text`". It’s also important that we include a `name` attribute for the `<input>` — without the `name` attribute, information in the `<input>` won’t be sent when the `<form>` is submitted. We’ll explain more about submissions and the submit button in a later exercise. For now, let’s examine the following code that produces a text input field:

```html
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field">
</form>
```

Here’s a screen shot of how the rendered form looks like on a web page for the Chrome browser (different browsers have different default rendering). When initially loaded, it will be an empty box:

![rendered empty text field from input element type='text'](https://content.codecademy.com/courses/learn-html-forms/textInput%20-%20unlabeled%20blank.png)

After users type into the `<input>` element, the value of the `value` attribute becomes what is typed into the text field. The value of the `value` attribute is paired with the value of the `name` attribute and sent as text when the form is submitted. For instance, if a user typed in “important details” in the text field created by our `<input>` element:

![rendered filled text field which reads 'important details'](https://content.codecademy.com/courses/learn-html-forms/textInput%20-%20unlabeled%20filled.png)

When the form is submitted, the text: `"first-text-field=important details"` is sent to `/example.html` because the value of the `name` attribute is `"first-text-field"` and the value of `value` is `"important details"`.

We could also assign a default value for the `value` attribute so that users have a pre-filled text field when they first see the rendered form like so:

```html
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field" value="already pre-filled">
</form>
```

Which renders:

![pre-filled text box due to assigned `value` attribute](https://content.codecademy.com/courses/learn-html-forms/textInput%20-%20unlabeled%20prefilled.png)

Time to put this knowledge into practice!

##### 3. Adding a Label #####

In the previous exercise we created an `<input>` element but we didn’t include anything to explain what the `<input>` is used for. For a user to properly identify an `<input>` we use the appropriately named `<label>` element.

The `<label>` element has an opening and closing tag and displays text that is written between the opening and closing tags. To associate a `<label>` and an `<input>,` the `<input>` needs an id attribute. We then assign the for attribute of the `<label>` element with the value of the id attribute of `<input>,` like so:

```html
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input type="text" name="food" id="meal">
</form>
```

The code above renders:

![rendered form with labeled text field](https://content.codecademy.com/courses/learn-html-forms/label%20-%20text%20input.png)

Look, now users know what the `<input>` element is for! Another benefit for using the `<label>` element is when this element is clicked, the corresponding `<input>` is highlighted/selected.

Let’s see the `<label>` element in action!

##### 4. Password Input #####

Think about all those times we have to put sensitive information, like a password or PIN, into a `<form>`. We wouldn’t want our information to be seen by anyone peeking over our shoulder! Luckily, we have the `type="password"` attribute for `<input>`!

An `<input type ="password">` element will replace input text with another character like an asterisk (*) or a dot (•). The code below provides an example of how to create a password field:

```html
<form>
  <label for="user-password">Password: </label>
  <input type="password" id="user-password" name="user-password">
</form>
```

After a user types into the field, it would look like:

![password field in a form with 6 dots showing text added to the field](https://content.codecademy.com/courses/learn-html-forms/pwInput%20-%20labeled%20filled.png)

Even though the password field obscures the text of the password, when the form is submitted, the value of the text is sent. In other words, if “hunter2” is typed into the password field, “user-password=hunter2” is sent along with the other information on the form.

##### 5. Number Input #####

We’ve now gone over two `type` attributes for `<input>` related to text. But, we might want our users to type in a number — in which case we can set the `type` attribute to… (you guessed it)… `"number"`!

By setting `type="number"` for an `<input>` we can restrict what users type into the input field to just numbers (and a few special characters like `-`, `+`, and `.`). We can also provide a `step` attribute which creates arrows inside the input field to increase or decrease by the value of the `step` attribute. Below is the code needed to render an input field for numbers:

```html
<form>
  <label for="years"> Years of experience: </label>
  <input id="years" name="years" type="number" step="1">
</form>
```

Which renders:

![rendered number input field with arrows to the right hand side of the field](https://content.codecademy.com/courses/learn-html-forms/numInput%20-%20labeled%20blank%20steps.png)

Now it’s time to apply this knowledge.

##### 6. Range Input #####

Using an `<input type="number">` is great if we want to allow users to type in any number of their choosing. But, if we wanted to limit what numbers our users could type we might consider using a different `type` value. Another option we could use is setting `type` to `"range"` which creates a slider.

To set the minimum and maximum values of the slider we assign values to the `min` and `max` attribute of the `<input>`. We could also control how smooth and fluid the slider works by assigning the `step` attribute a value. Smaller `step` values will make the slider move more fluidly, whereas larger `step` values will make the slider move more noticeably. Take a look at the code to create a slider:

```html
<form>
  <label for="volume"> Volume Control</label>
  <input id="volume" name="volume" type="range" min="0" max="100" step="1">
</form>
```

The code above renders: 

![rendered slider for volume control](https://content.codecademy.com/courses/learn-html-forms/rangeInput%20-%20labeled.png)

In the example above, every time the slider moves by one, the value of the `<input>`‘s `value` attribute changes.

##### 7. Checkbox Input #####

So far the types of inputs we’ve allowed were all single choices. But, what if we presented multiple options to users and allow them to select any number of options? Sounds like we could use checkboxes! In a `<form>` we would use the `<input>` element and set `type="checkbox"`. Examine the code used to create multiple checkboxes:

```html
<form>
  <p>Choose your pizza toppings:</p>
  <label for="cheese">Extra cheese</label>
  <input id="cheese" name="topping" type="checkbox" value="cheese">
  <br>
  <label for="pepperoni">Pepperoni</label>
  <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
  <br>
  <label for="anchovy">Anchovy</label>
  <input id="anchovy" name="topping" type="checkbox" value="anchovy">
</form>
```

Which renders: 

![HTML form asking user to select pizza toppings and three topping selections as checkboxes](https://content.codecademy.com/courses/learn-html-forms/checkboxInput%20-%20labeled.png)

Notice in the example provided:

* there are assigned values to the `value` attribute of the checkboxes. These values are not visible on the form itself, that’s why it is important that we use an associated `<label>` to identify the checkbox.
* each `<input>` has the same value for the `name` attribute. Using the same `name` for each checkbox groups the `<input>`s together. However, each `<input>` has a unique `id` to pair with a `<label>`.

Alright, time to use checkboxes in our code!

##### 8. Radio Button Input #####

Checkboxes work well if we want to present users with multiple options and let them choose one or more of the options. However, there are cases where we want to present multiple options and only allow for one selection — like asking users if they agree or disagree with the terms and conditions. Let’s look over the code used to create radio buttons:

```html
<form>
  <p>What is sum of 1 + 1?</p>
  <input type="radio" id="two" name="answer" value="2">
  <label for="two">2</label>
  <br>
  <input type="radio" id="eleven" name="answer" value="11">
  <label for="eleven">11</label>
</form>
```

Which renders:

![rendered form containing radio buttons](https://content.codecademy.com/courses/learn-html-forms/radioInput%20-%20labeled.png)

Notice from the code snippet, radio buttons (like checkboxes) do not display their value. We have an associated `<label>` to represent the value of the radio button. To group radio buttons together, we assign them the same `name` and only one radio button from that group can be selected.

Let’s see this in action by creating our own radio buttons.

##### 9. Dropdown list #####

Radio buttons are great if we want our users to pick one option out of a few visible options, but imagine if we have a whole list of options! This situation could quickly lead to a lot of radio buttons to keep track of.

An alternative solution is to use a dropdown list to allow our users to choose one option from an organized list. Here’s the code to create a dropdown menu:

```html
<form>
  <label for="lunch">What's for lunch?</label>
  <select id="lunch" name="lunch">
    <option value="pizza">Pizza</option>
    <option value="curry">Curry</option>
    <option value="salad">Salad</option>
    <option value="ramen">Ramen</option>
    <option value="tacos">Tacos</option>
  </select>
</form>
```

Which renders: rendered dropdown list with the first option showing

And if we click on the field containing the first option, the list is revealed: rendered dropdown list with the all options showing

Notice in the code that we’re using the element `<select>` to create the dropdown list. To populate the dropdown list, we add multiple `<option>` elements, each with a `value` attribute. By default, only one of these options can be selected.

The text rendered is the text included between the opening and closing `<option>` tags. However, it is the value of the `value` attribute that is used in `<form>` submission (notice the difference in the text and `value` capitalization). When the `<form>` is submitted, the information from this input field will be sent using the `name` of the `<select>` and the `value` of the chosen `<option>`. For instance, if a user selected Pizza from the dropdown list, the information would be sent as `"lunch=pizza"`.

##### 10. Datalist Input #####

Even if we have an organized dropdown list, if the list has a lot of options, it could be tedious for users to scroll through the entire list to locate one option. That’s where using the `<datalist>` element comes in handy.

The `<datalist>` is used with an `<input type="text">` element. The `<input>` creates a text field that users can type into and filter options from the `<datalist>`. Let’s go over a concrete example:

```html
<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">
 
  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico City"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>  
  </datalist>
</form>
```

Notice, in the code above, we have an `<input>` that has a `list` attribute. The `<input>` is associated to the `<datalist>` via the `<input>`‘s `list` attribute and the `id` of the `<datalist>`.

From the code provided, the following form is rendered: 

![input field with a label 'Ideal city to visit?'](https://content.codecademy.com/courses/learn-html-forms/datalist%20-%20concealed.png)

And when field is selected: 

![clicking on the input field reveals a dropdown](https://content.codecademy.com/courses/learn-html-forms/datalist%20-%20revealed.png)
list

While `<select>` and `<datalist>` share some similarities, there are some major differences. In the associated `<input>` element, users can type in the input field to search for a particular option. If none of the `<option>`s match, the user can still use what they typed in. When the form is submitted, the value of the `<input>`‘s `name` and the `value` of the option selected, or what the user typed in, is sent as a pair.

Now it’s time to make a `<datalist>` of our own!

##### 11. Textarea element #####

An `<input>` element with type="text" creates a single row input field for users to type in information. However, there are cases where users need to write in more information, like a blog post. In such cases, instead of using an `<input>`, we could use `<textarea>`.

The `<textarea>` element is used to create a bigger text field for users to write more text. We can add the attributes rows and cols to determine the amount of rows and columns for the `<textarea>`. Take a look:

```html
<form>
  <label for="blog">New Blog Post: </label>
  <br>
  <textarea id="blog" name="blog" rows="5" cols="30">
  </textarea>
</form>
```

In the code above, an empty `<textarea>` that is 5 rows by 30 columns is rendered to the page like so:

![rendered empty textarea element](https://content.codecademy.com/courses/learn-html-forms/textarea%20-%20blank.png)

If we wanted an even bigger text field, we could click and drag on the bottom right corner to expand it.

When we submit the form, the value of `<textarea>` is the text written inside the box. If we want to add a default value to `<textarea>` we would include it within the opening and closing tags like so:

```html
<textarea>Adding default text</textarea>
```

This code will render a `<textarea>` that contains pre-filled text: `“Adding default text”`.

But don’t just take our word for it, let’s test it out!

##### 12. Submit Form #####

Remember, the purpose of a form is to collect information that will be submitted. That’s the role of the submit button — users click on it when they are finished with filling out information in the `<form>` and they’re ready to send it off. Now that we’ve gone over how to create various input elements, let’s now go over how to create a submit button!

To make a submit button in a `<form>`, we’re going to use the reliable `<input>` element and set the `type` to `"submit"`. For instance:

```html
<form>
  <input type="submit" value="Send">
</form>
```

Which renders:

![rendered submit button](https://content.codecademy.com/courses/learn-html-forms/submit%20button2.png)

Notice in the code snippet that the `value` assigned to the `<input>` shows up as text on the submit button. If there isn’t a `value` attribute, the default text, `Submit` shows up on the button.

Let’s now add this element to make our `<form>`s complete!

##### 13. Review: HTML Forms #####

* The purpose of a `<form>` is to allow users to input information and send it.
* The `<form>`‘s `action` attribute determines where the form’s information goes.
* The `<form>`‘s `method` attribute determines how the information is sent and processed.
* To add fields for users to input information we use the `<input>` element and set the `type` attribute to a field of our choosing:
  * Setting `type` to `"text"` creates a single row field for text input.
  * Setting `type` to `"password"` creates a single row field that censors text input.
  * Setting `type` to `"number"` creates a single row field for number input.
  * Setting `type` to `"range"` creates a slider to select from a range of numbers.
  * Setting `type` to `"checkbox"` creates a single checkbox that can be paired with other checkboxes.
  * Setting `type` to `"radio"` creates a radio button that can be paired with other radio buttons.
  * Setting `type` to `"text"` and adding the list attribute will pair the `<input>` with a `<datalist>` element if the list of `<input>` and the id of `<datalist>` are the same.
  * Setting `type` to `"submit"` creates a submit button.
* A `<select>` element is populated with `<option>` elements and renders a dropdown list selection.
* A `<datalist>` element is populated with `<option>` elements and works with an `<input>` to search through choices.
* A `<textarea>` element is a text input field that has a customizable area.
* When a `<form>` is submitted, the name of the fields that accept input and the value of those fields are sent as name=value pairs.

Using the `<form>` element in conjunction with the other elements listed above allows us to create sites that take into consideration the wants and needs of our users. Take the opportunity to take what you’ve learned, and apply it!

#### 3. Introduction to HTML Form Validation ####

Ever wonder how a login page actually works? Or why the combination of a username and password grants you access to a website? The answers lie in *validation*. Validation is the concept of checking user provided data against the required data.

There are different types of validation. One type is *server-side* validation, this happens when data is sent to another machine (typically a server) for validation. An example of this type of validation is the usage of a login page. The form on the login page accepts username and password input, then sends the data to a server that checks that the pair matches up correctly.

On the other hand, we use *client-side* validation if we want to check the data on the browser (the client). This validation occurs before data is sent to the server. Different browsers implement client-side validation differently, but it leads to the same outcome.

Shared among the different browsers are the benefits of using HTML5’s built-in client-side validation. It saves us time from having to send information to the server and wait for the server to send back confirmation or rejection of the data. This can also help us protect our server from malicious code or data from a malicious user. It also allows us to quickly give feedback to users for specific fields rather than having them fill in a form again if the data they input into the form was rejected.

In this lesson, we’ll learn how to add some validation checks to our `<form>`s!

1. Requiring an Input
2. Set a Minimum and Maximum
3. Checking Text Length
4. Matching a Pattern
5. Review: HTML Form Validation

##### 1. Requiring an Input #####

Sometimes we have fields in our `<form>`s which are not optional, i.e. there must be information provided before we can submit it. To enforce this rule, we can add the `required` attribute to an `<input>` element.

Take for example:

```html
<form action="/example.html" method="POST">
  <label for="allergies">Do you have any dietary restrictions?</label>
  <br>
  <input id="allergies" name="allergies" type="text" required>
  <br>
  <input type="submit" value="Submit">
</form>
```

This renders a text box, and if we try to submit the `<form>` without filling it out we get this message:

![message pop up prompting user to fill in the field](https://content.codecademy.com/courses/learn-html-forms/required%20field.png)

The styling of the message varies from browser to browser, the picture above depicts the message in a Chrome browser. We’ll also continue to show these messages as they appear in Chrome in later exercises.

Let’s see how it shows up in your browser!

##### 2. Set a Minimum and Maximum #####

Another built-in validation we can use is to assign a minimum or maximum value for a number field, e.g. `<input type="number">` and `<input type="range">`. To set a minimum acceptable value, we use the `min` attribute and assign a value. On the flip side, to set a maximum acceptable value, we assign the `max` attribute a value. Let’s see this in code:

```html
<form action="/example.html" method="POST">
  <label for="guests">Enter # of guests:</label>
  <input id="guests" name="guests" type="number" min="1" max="4">
  <input type="submit" value="Submit">
</form>
```

If a user tries to submit an input that is less than 1 a warning will appear: 

![prompt on a number field for user to input a value greater than or equal to 1](https://content.codecademy.com/courses/learn-html-forms/min%20max%20attr.png)

A similar message will appear if a user tries to input a number greater than 4. Let’s now see this action.


##### 3. Checking Text Length #####

In the previous exercise, we were able to use `min` and `max` to set acceptable minimum and maximum values in a number field. But what about text fields? There are certainly cases where we wouldn’t want our users typing more than a certain number of characters (think about the character cap for messages on Twitter). We might even want to set a minimum number of characters. Conveniently, there are built-in HTML5 validations for these situations.

To set a minimum number of characters for a text field, we add the minlength attribute and a value to set a minimum value. Similarly, to set the maximum number of characters for a text field, we use the maxlength attribute and set a maximum value. Let’s take a look at these attributes in code:

```html
<form action="/example.html" method="POST">
  <label for="summary">Summarize your feelings in less than 250 characters</label>
  <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>
  <input type="submit" value="Submit">
</form>
```

If a user tries to submit the `<form>` with less than the set minimum, this message appears:

![prompt on a number field for user to length the input](https://content.codecademy.com/courses/learn-html-forms/minlength.png)

And if a user tries to type in more than the maximum allowed number of characters, they don’t get a warning message, but they can’t type it in!

Let’s add this validation to our `<form>`.

##### 4. Matching a Pattern #####

In addition to checking the length of a text, we could also add a validation to check how the text was provided. For cases when we want user input to follow specific guidelines, we use the `pattern` attribute and assign it a *regular expression*, or regex. Regular expressions are a sequence of characters that make up a search pattern. If the input matches the regex, the form can be submitted.

Let’s say we wanted to check for a valid credit card number (a 14 to 16 digit number). We could use the regex: `[0-9]{14,16}` which checks that the user provided only numbers and that they entered at least 14 digits and at most 16 digits.

To add this to a form:

```html
<form action="/example.html" method="POST">
  <label for="payment">Credit Card Number (no spaces):</label>
  <br>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>
```

With the `pattern` in place, users can’t submit the `<form>` with a number that doesn’t follow the regex. When they try, they’ll see a validation message like so:

![message prompting user to follow the requested format](https://content.codecademy.com/courses/learn-html-forms/pattern.png)

If you want to find out more about Regex, read more at [MDN’s regex article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

To see it in practice, let’s use the `pattern` attribute in our HTML!

##### 5. Review: HTML Form Validation #####

* Client-side validations happen in the browser before information is sent to a server.
* Adding the `required` attribute to an input related element will validate that the input field has information in it.
* Assigning a value to the `min` attribute of a number input element will validate an acceptable minimum value.
* Assigning a value to the `max` attribute of a number input element will validate an acceptable maximum value.
* Assigning a value to the `minlength` attribute of a text input element will validate an acceptable minimum number of characters.
* Assigning a value to the `maxlength` attribute of a text input element will validate an acceptable maximum number of characters.
* Assigning a regex to `pattern` matches the input to the provided regex.
* If validations on a `<form>` do not pass, the user gets a message explaining why and the `<form>` cannot be submitted.

These quick checks help ensure that input data is correct and safe for our servers. It also helps give users immediate feedback on what they need to fix instead of having to wait for a server to send back that information.

### 6. Review: Building Interactive Websites ###

Congratulations! The goal of this unit was to use JavaScript to create interactive websites that will respond to input from the user.

Having completed this unit, you are now able to:

* Add JavaScript to a website for interactivity
* Describe what the DOM is
* Explain what DOM Events are
* Create forms using HTML and validate them using JavaScript

If you are interested in learning more about these topics, here are some additional resources:

* Article: [How To Add JavaScript to HTML](https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html)
* Article: [MDN Guide to Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
* Book: [HTML & CSS](https://bookshop.org/books/html-and-css-design-and-build-websites/9781118008188), Jon Duckett, Chapter 7 (pp. 144-174)

## Introduction: Making a Website Accessible ##

In this unit, you will learn about the best accessibility (a11y) practices.
The goal of this unit is to refactor your website to follow the best accessibility (a11y) practices.

After this unit, you will be able to:

* Understand what accessibility (a11y) means
* Understand the necessity for a11y on the web
* Add features for improved screen reader usage

### What is Digital Accessibility? ###

In this article, you’ll learn about digital accessibility and why it is important to incorporate aspects of digital accessibility into websites.

#### What is Accessibility? ####

Accessibility refers to designing devices, products, and environments such that individuals with disabilities or sensory impairments can successfully use the device or product.

In 1990, the United States Congress passed the Americans with Disabilities Act, commonly referred to as the ADA. The ADA mandates that public and private spaces be made accessible to individuals with disabilities that include (but are not limited to):

* Sensory impairments
* Cognitive impairments
* Physical limitations

For example, the ADA requires on-ramps as an alternative way of accessing a staircase for individuals who may use a wheelchair. Another example is that stop lights use hues of green, yellow, or red that are readily discernable to individuals with visual impairments (like colorblindness).

Although the ADA has forced public and private spaces to incorporate accessibility best practices, one frontier that has been mostly untouched has been digital accessibility, or, accessibility in digital media, like websites and mobile apps. In this article, we’ll explore digital accessibility and why it is essential on the Internet.

#### What is Digital Accessibility? ####

Although the concept of digital accessibility refers specifically to digital media, it’s not much different from the general idea of accessibility.

The requirements for accessibility in digital media are, of course, very different, however.

Some examples include (but are not limited to):

* Screen readers that parse a website for a user with visual impairments
* Videos on websites are closed-captioned for individuals with hearing impairments
* Images include “alt text” for individuals with visual impairments
* Websites must be navigable by keyboard for users who may not be able to operate a mouse (i.e., navigating using the “Tab” on a keyboard)

The examples above demonstrate only a subset of how websites or mobile apps incorporate digital accessibility. For the full list of digital accessibility guidelines, there is a global standard known as the **Web Content Accessibility Guidelines 2.1** (WCAG). Per WCAG’s abstract, WCAG “covers a wide range of recommendations for making Web content more accessible.”

To learn more, visit WCAG at the following link:

* [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/)

#### Why is Digital Accessibility Important? ####

##### Evolving Technology #####

The ADA was passed during a time where the Internet was still growing and evolving (1990). Since that time, the popularity of the Internet (and general accessibility to it) has exploded. As new technologies are invented, the methods they use to incorporate elements of accessibility will have to be revisited, perhaps even by challenging the current ADA.

##### Legal Ramifications #####

The Internet’s explosion in popularity has emphasized the accessibility of websites and other digital media. As such, it also has pushed the ADA to new limits. Should the statutes in the ADA cover digital media as well? The U.S. Department of Justice certainly thinks so:

“[T]he Department has long considered websites to be covered by Title III despite the fact that there are no specific technical requirements for websites currently in the regulation or ADA Standards”.

In the past, accessibility lawsuits focused on lack of on-ramps, lack of braille in signs, and the like. Today, accessibility lawsuits also focus on the lack of accessibility in digital media, which emphasizes the user demand behind incorporating accessibility best practices.

##### Capturing Total Markets #####

Upwards of [80% of the United States population shops online](https://techcrunch.com/2016/12/19/79-percent-of-americans-now-shop-online-but-its-cost-more-than-convenience-that-sways-them/), which, naturally, was unheard of before the widespread popularity of the Internet.

For individuals with physical impairments, what might’ve been an inconvenient shopping experience in the past may now be much more convenient online. For individuals with visual or auditory impairments, however, an online shopping experience can be inconvenient if there is a lack of digital accessibility. This lack of accessibility can prevent them from shopping online. For business owners, this also represents a failure to capture the total market, demonstrating how digital accessibility, overall, is best for business.

##### New Jobs #####

The recognition that accessible web design is good for business is also reflected in the job market. Simply searching “web accessibility” on job search websites like LinkedIn or Indeed demonstrates the immense amount of job postings for developers, designers, and UI designers related to web accessibility.

##### Universal Design Benefits All #####

Earlier, you read about one example that showcases an ADA mandate: on-ramps should accompany staircases to accommodate individuals with physical impairments. The reality is that this mandate doesn’t just benefit those with physical impairments; it also benefits individuals with baby strollers, bicycles, and more.

The same is true for digital accessibility. For example, having alt tags that explain the content of images are useful to all users whenever images don’t load due to connectivity problems. Writing more semantic HTML tags and image captions also can improve your website’s standing in search engines, as they provide the search engine more information about the content that your site delivers. In short, incorporating accessibility (digital or otherwise) contributes to a universal design that ultimately benefits all, which can improve the user experience for everyone.

#### Conclusion ####

The general concept of accessibility, which previously applied mostly to physical, public and private spaces, now applies to the digital world, thanks to the widespread popularity of a new technology: the Internet.

New technologies, litigation, business strategies, and more continue to push the definition of accessibility. Today, this definition has expanded to included digital media, like websites and mobile apps. The Internet continues to provide digital solutions to a wider audience, making it imperative for web developers to incorporate elements of digital accessibility.

### Accessible Design ###

1. Introduction
2. Contrast
3. Introduction to Headings
4. Headings Hierarchy
5. Font Accessibility
6. Color Accessibility
7. Color Blindness
8. Best Practices
9. Review: Accessible Design

#### 1. Introduction ####

In this lesson, you are going to learn about using contrast to create appealing, intuitive, and accessible designs.

Contrast is one of the main tools designers have to draw people’s attention to parts of the site that they want to highlight, and make sure that their site is accessible to people with vision impairments.

There are a wide variety of users with vision impairments that use their sight to navigate the web. This includes people with low vision and color blindness.

Designing with visual accessibility in-mind will drive you towards creating sites that are easier for everyone to read and navigate, whether or not they have a vision impairment.

For more background about what digital accessibility is and why it matters, check out this article on Digital Accessibility.

#### 2. Contrast ####

Contrast refers to the opposition of different properties (color, size, shape, font, etc) to make one object visually distinct from another.

Careful use of contrast will aid all users in skimming or navigating our pages, by directing our user’s attention, and by visually communicating what is most important and what is not as important.

Making sure that enough contrast exists between different elements can help us ensure that our site is accessible to users with vision impairments.

In this lesson, we will cover creating accessibility-enhancing contrast through:

* Headings
* Font choices
* Color

You will apply these principles to fix the “Creamy Chocolate Cupcakes” website so that it has a more accessible and more attractive design, with a more judicious use of contrast.

#### 3. Introduction to Headings ####

Text is used differently on the web than it is in a book. Users are often trying to navigate websites as quickly as possible.

Breaking large chunks of text into different sections that have their own headings and subheadings is essential to helping them find the content that they are looking for.

In HTML, there are six heading elements, `<h1>` - `<h6>`. The heading elements decrease in importance and size as the heading number increases. This means that an ~ carries a higher rank than an `<h6>`.

Heading elements in HTML accomplish several things:

* they create structure, dividing your page into groups of increasingly specific content
* they create visual contrast, with lower-numbered headers like `h1` displaying in a larger and more striking format
* they provide navigation and contextual information to web browsers, plugins, and assistive technologies like screen readers.

As an added benefit, having a keyword in an h1 tag will typically impact search results more than having the same keyword in a `p` tag, because it is assumed that words used in your main heading are very important to the topic of your entire website.

#### 4. Headings Hierarchy ####

Heading elements should be used in order and it is considered best practice not to skip heading elements when possible.

Let’s take a look at an example:

```html
<h1>Main Site Header</h1>
<section>
  <h2>Section Header</h2>
</section>
<section>
  <h2>Section Header</h2>
  <h3>Section Sub-Header</h3>
</section>    
<footer>
  <h2>Footer Header</h2>
</footer>
```

In this example, we have one main site heading. This content uses the `<h1>` element and is assigned the highest rank as it is the most important. Note that each web page should only contain one `<h1>` element.

This `<h1>` is considered the label for the entire document and it should clearly define the purpose of the web page. After that, we use the <h2> element to assign the same level of importance to each sibling section.

This provides our users with a clean and consistent level of hierarchy when viewing our websites and also conforms to today’s web standards by providing a clear content outline.

#### 5. Font Accessibility ####

##### Text Accessibility #####

Highly accessible websites use real text instead of images of text, use text with high contrast with its background, and choose highly legible font sizes.

Let’s dive into each of these concepts a bit more.

Real text vs text within images

Using real text instead of text within graphics provides a website with several key benefits:

screen readers can transform the text into a voice-over
users can scale or magnify the text for better legibility without losing image quality
it’s less taxing on the browser to load real text versus requesting large image assets from a server.

##### Contrasting colors #####

Text is much easier to read when there is a high level of contrast between the text and the text’s background color. According to the Web Content Accessibility Guidelines, a ratio of at least 4.5:1 should be used on all standard text sizes. This means the lighter color must have four and a half times the luminance of its paired darker color.

Readability can be preserved with less contrast for larger font sizes, 24 pixels or larger. A ratio of at least 3:1 should be used for larger text sizes.

Interested in testing a set of colors to see if they pass the WCAG’s guidelines? Head over to [WebAIM](https://webaim.org/resources/contrastchecker/) and use their color contrast checker.

##### Font sizes #####

Lastly, we need to consider setting proper font sizes on our websites. The standard font size for most modern web browsers is 16 pixels. This allows users to scan your website and consume information without straining their eyes. While smaller type sizes can be used, they should be reserved for nonessential content or design aesthetic only.

#### 6. Color Accessibility ####

When using color in our designs, it’s important to note the contrast between elements in the foreground and those in the background.

Sufficient color contrast can improve the usability of your site for users with low vision or color blindness.

For instance, using the combination of black (`#00000`) as a foreground color and white (`#ffffff`) as a background color provides maximum contrast.

While this is a fairly common color combination for text on a page, the high contrast can also cause glare that will increase strain on the user’s eyes over time.

On the other hand, using colors that are too similar, or lacking adequate contrast, can hinder users from being able to comprehend the content on the screen.

Let’s explore how users perceive colors, and how we can effectively make decisions on what colors to use to reduce issues with legibility.

#### 7. Color Blindness
A user with color blindness has a reduced ability to differentiate between colors. In general, about 8% of men and 0.5% of women have a color vision deficiency.

Designing color combinations for color-blind users can enhance the overall impact it will have on everyone visiting your site.

There are many forms of color blindness. The most common is red-green color blindness, where those two colors are often indistinguishable. For instance, if a red-green colorblind user is looking at the color purple, it may appear blue as they do not perceive the red pigment.

People can also have blue-yellow color vision deficiency, and total color blindness, however, these affect a much smaller percentage of the population.

Here are some practical steps you can take to improve the color accessibility of your design:

* Choosing highly contrasting colors (opposite from each other on a [color wheel](https://en.wikipedia.org/wiki/Color_wheel)) will aid users with partial color blindness.
* Using a color scheme with multiple shades of brightness for a single color will create contrast for users with partial or total color blindness. Think about how it would look in grayscale: light blue would still be differentiable from dark blue.
* Pairing color with other forms of conveying information (text, icons, etc) is the most general solution. For example, an invalid entry in a form on a website should not just turn the entry field red, it should also display text that explains the error.
* Color is a valuable tool for conveying information, but it should never be the only tool that your site uses to communicate any essential content.

[Toptal](https://www.toptal.com/designers/colorfilter) has created a colorblind web page filter tool to test your designs with different types of color blindness.

Let’s take a look at some best practices of applying accessibility features to core components in design.

#### 8. Best Practices ####

New web design trends come and go, and many times they are aesthetically appealing, but they are not always the most usable or accessible.

You now know enough principles of accessibility and usability to be able to judge if these trends will create problems for your users. Let’s reason through a few examples.

##### Text Overlaid on Images #####

White text overlaid on an image is a popular design trend. However, it doesn’t adhere to standards as the contrast is often too low. Adding a dark transparent overlay on top of the image could increase the contrast and provide better legibility.

##### Removing Input Labels #####

Another trend often seen in web design is the removal of labels above input fields, sometimes relying on placeholder text instead to identify the input field.

While this enhances the aesthetic quality of a design in some instances, it can hinder a user’s ability to identify which input they are attempting to fill out. This is particularly true for low vision users because the placeholder text is often light gray and low contrast. This also creates problems for users employing screen readers, because the form’s placeholder text is not always narrated.

##### Buttons and Links #####

There has been a trend towards [flat and minimal design](https://www.nngroup.com/articles/flat-design/) in recent years. This trend has improved usability in some ways, as it has encouraged designers to remove visual effects that are not contributing to the usability of their site.

However, minimalism can go too far, especially if it obscures how users should navigate the site. Visual contrast is especially important for buttons and links because these are the tools our users employ to navigate. Color alone should not be used to indicate clickability, as this will cause challenges for low vision and color-blind users.

Taking into consideration color choices, contrast, and font legibility will help you evaluate new design trends, and reduce the chance of new designs introducing accessibility barriers.

#### 9. Review: Accessible Design ####

Congratulations! You made the cupcake recipe site look much better! You practiced some new CSS syntax, and you learned the power of visual contrast, for both overall design, and for accessibility.

You gained some knowledge on web accessibility and how to make your websites usable for all users.

Remember, the keys to building a more visually inclusive Web are:

* Using contrast so our text and colors provide better visual cues
* Using correct font size so our content is legible
* Creating user interfaces that are enhanced by, but not dependent on, color

Following these guidelines can increase the usability of our websites. In the next lesson, you will learn semantic HTML tags, which improve the accessibility of sites for people using a screen reader.

### Introduction to Accessibility ###

When designing a website, it is important to keep in mind that some users access the Internet in many different ways. For example, many users with a visual impairment use screen readers to access content on the Internet.

A screen reader is a piece of software that provides an audio description of a web page’s content. A screen reader not only reads the visual content out loud, it also reads out element names and other attributes that make it easier for visually impaired users to navigate a web page.

In the early days of the Internet, many pages were saturated with graphics and flash animations. Screen readers, unfortunately, could not interpret these types of elements. As such, a person with a visual impairment might not have been able to perceive important information on a website. For this reason, the [Web Accessibility Initiative](https://en.wikipedia.org/wiki/Web_Accessibility_Initiative) (led by W3C) developed standards for making information on the Internet accessible to all.

These standards fall under a group of guidelines called ARIA, or Accessible Rich Internet Applications. These guidelines are easily implemented and make web pages accessible to a broader audience. We’ll learn how to use ARIA roles and properties in this lesson to improve access for people who are visually impaired.

In this lesson, we will cover these practices:

* Semantic Elements
* ARIA Roles
* ARIA Properties
* alt Attributes

1. Semantic HTML Elements
2. ARIA Role
3. ARIA Role: Presentation
4. ARIA Properties
5. Alt Attribute
6. Review: Accessibility

#### 1. Semantic HTML Elements ####

The quickest way of improving accessibility for screen readers is to use the appropriate tags for a given task.

For example, developers should wrap a navigation bar in a `<header>` element. Although the navigation bar could be wrapped in a `<div>` element with a class="header", the *native semantics* of a `<header>` element allows someone using a screen reader to understand and navigate a web page more efficiently.

```html
<div id="header">
  <!-- Header Elements -->
</div>
```

In the example above, header content is wrapped in a `<div>` element with `id="header"`. While this is valid HTML, an individual using a screen reader will not understand the purpose of the <div> and will have to piece the web page together as child elements are read out loud to them.

Native semantics of an element describes the element’s intended purpose. For example, the <header> element is intended to contain introductory and navigational elements such as a logo, links, or a search bar.

```html
<header>
  <!--Header Elements-->
</header>
```

In the example above, the HTML will render the same exact content present in the first example. However, this example uses the correct semantic element (`<header>`), which allows an individual using a screen reader to easily identify the purpose of the elements inside of the header.

[Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) is a list of all the semantic HTML elements that exist.

#### 2. ARIA Role ####

Text on a web page can communicate different types of information. Some text may make up the main content of the page, other text may describe navigation icons, still other text might describe input fields or menus. It can be challenging to place text in the context of a web page without knowing where it is positioned or the type of information it is meant to communicate.

Take a moment to think about how a screen reader would interpret the Codecademy web page you are looking at right now. It would be difficult for someone using a screen reader to understand the difference in significance between the code editor to the right and what you are currently reading.

To help add context to web page information, ARIA provides an HTML attribute called `role`. The value of an element’s role changes how a screen reader communicates the element.

```html
<div id="code-editor" role="complementary">
  ...
</div>
```

In the example above, imagine the `...` represents an exercise’s code editor — the section of the page containing the files of code you edit in an exercise. The `role` for the div is set to `complementary`. Visually, it makes sense that the information in the code editor is related to the information in the narrative (what you are reading right now). A user who uses a screen reader does not receive that visual cue.

Instead, the `role="complementary"` attribute and value can help a screen reader user understand that the information in the code editor is *complementary* (or supporting) to the information you are reading right now. It helps users of screen readers identify the relationship between the two sections of the page.

[This](https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties) link has a list of acceptable ARIA roles, where you can read more about the `complementary` role and other roles as well.

#### 3. ARIA Role: Presentation ####

Some HTML elements, like `<ul>` and `<ol>`, only serve to organize information on a web page. When a screen reader navigates a page, however, it reads out to the user each element’s name as it encounters them. Therefore, reading `“ol“` outloud will slow down visually impaired users.

We can instruct screen readers to skip reading unnecessary elements by setting the `role` attribute to `presentation`.

```html
<ol role="presentation">
  <li>List Item 1</li>
  <li>List Item 2</li>
</ol>
```

In the example above, the `<ol>` element is assigned a `role` of `presentation`, meaning a screen reader will not read the element’s name (“ordered list”). This is acceptable, as a user does not need to hear the element’s name (“ordered list”) to understand the content of a list.

The `presentation` role skips over elements and their *necessary* children. The `<ol>` and `<ul>` elements require `<li>` children. Therefore, adding `role="presentation"` to an `<ol>` tag will cause the screen reader to skip directly to the text between the `<li>` tags (it will not read the names of the `<li>` elements).

```html
<div id="container" role="presentation">
  <p>I'm content you want to hear!</p>
</div>
```

In the example above, a screen reader won’t read `“div”` outloud, but it will read the name of the paragraph element and the content of the paragraph. This happens because the paragraph is not a necessary child of the div.

To read more about the presentation role, click [here](https://w3c.github.io/using-aria/#presentation).

#### 4. ARIA Properties ####

ARIA properties are attributes that you can add to HTML elements. These attributes provide additional information about elements that might not be obvious to users of screen readers. Let’s explore a property called `aria-label`.

```html
<img src="#" alt="A painting of the Shenandoah Valley"/>
<p>Armand Cabrera, 2010</p>
```

In the example above, a person looking at the web page would likely see “Armand Cabrera” below the image and use visual clues to infer that he is the artist. However, for someone using a screen reader it might not be clear what the paragraph below the image means. The property aria-label gives the screen reader additional information to read out loud to the user.

```html
<img src="#" alt="A painting of the Shenandoah Valley"/>
<p aria-label="Artist">Armand Cabrera, 2010</p>
```

In the improved HTML above, a user of a screen reader will know how this paragraph relates to the image above it.

Other ARIA properties are useful in more complex websites using HTML forms, JavaScript, and other advanced tools.

For a complete list of ARIA properties, visit the following resource:

* [ARIA Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

#### 5. Alt Attribute ####

Some HTML elements have a built-in attribute called `alt` that works like `aria-label` but has additional functionality.

The `alt` attribute is used to describe an image (or several other elements). A screen reader will read the value of the `alt` attribute out loud. However, if the element cannot be visually seen — whether it is because the user is visually impaired, an incorrect source is referenced, or the page is being accessed over a slow connection — the `alt` attribute will be displayed in its place.

On the other hand, the value of `aria-label` will never be displayed on the screen and is a better choice for elements that do not support the `alt` attribute.

```html
<img src="#" alt="a kitten snuggling a puppy"/>
```

In the example above, a screen reader will read out loud “image: a kitten snuggling a puppy” to the user. If the image doesn’t load properly, the browser will display this text as a tooltip.

When using the `alt` attribute, you should adhere to these conventions:

1. In general, the value of `alt` should concisely describe the image.
2. For images that are also `<a>` elements, the `alt` attribute should describe the source that the link targets.
3. If an image conveys no information (such as a decorative border), the `alt` attribute should be empty, but should never be omitted.
4. If an image is described by text near the image, do not duplicate the description in the `alt` attribute. Use an empty `alt` attribute instead.
5. The value of an `alt` attribute should be no more than 150 characters.

#### 6. Review: Accessibility ####

Using ARIA roles and properties, `alt` attributes, and semantic elements in your HTML is a simple way to make your website accessible to visually-impaired Internet users.

1. Using semantic HTML elements whenever possible (such as `<header>` instead of `<div id="header">`) will allow screen reader users to navigate your website more efficiently.
2. The `role` attribute is used to communicate information about the role of specific elements.
3. `role="presentation"` allows a screen reader to skip markup elements that don’t directly contain useful information.
4. `aria-label` and other ARIA properties can be used to help users perceive information that is communicated visually but not through text.
5. The `alt` attribute should be added to every image element (and all other elements that support it) instead of `aria-label`. When used, its value should be a useful description of the image.

#### Setting Up and Using Screen Readers ####

Creating a good user experience requires us to think carefully about the diverse needs and devices of our users. We as designers and developers know that not everyone sees, hears, or reads content in the same way.

A screen reader is an assistive technology that is used by individuals who are blind, visually impaired, or need additional assistance navigating a website. This article will guide you through how to set up and use a screen reader in order to assess the web accessibility of various websites, including your own.

More users than you might expect are using some kind of assistive device. According to the [National Institute of Health](https://nei.nih.gov/eyedata/pbd1), about 1 in 30 Americans over the age of 40 will experience visual impairment. Producing accessible websites is both equitable and good for business.

The screen reader provides a text-to-speech (TTS) experience for the user to translate the information on the screen into speech, which can be heard through speakers, headphones or braille. This is why it’s extremely important to utilize semantic HTML code and appropriate WAI-ARIA attributes.

A visually impaired user will use a combination of screen reader commands and operating system commands to accomplish the many tasks a computer is capable of performing. These commands are prompted through keyboard shortcuts or mouse actions, like scrolling and clicking.

Although basic screen readers will not help blind users navigate a computer, screen readers with additional features can give individuals with visual impairments much more independence.

Screen readers can vary based on the operating system you are using. However, they can also be implemented through the browser. Please note that when using a browser’s screen reader, it’s best to turn off the operating system’s screen reader.

##### Screen Reader Options #####

Here are a few screen reader options that are free for your computer or browser.

###### (OS X) VoiceOver ######

Apple computers come with a screen reader built in, called VoiceOver. You can access it easily by pressing Command-F5. If VoiceOver is on, pressing Command-F5 turns it off.

If this is your first time opening VoiceOver, you can listen to the Quick Start Tutorial, which will give you an interactive tour of VoiceOver navigation and interaction basics.

The benefit to VoiceOver is that it is already installed and ready to use on your Apple computer and also works with websites.

###### (Windows) NVDA ######

NVDA (NonVisual Desktop Access) is a free screen reader for Windows, which allows blind and vision-impaired people to use computers. It reads the text on the screen in a computerized voice.

The user can easily control what is read to them by moving the cursor to the relevant area of text with a mouse or using the arrows on the keyboard. NVDA provides the key to education and employment for many blind people. It also provides access to social networking, online shopping, banking, and news. NVDA can also convert the text into braille if the computer user owns a device called a “braille display”. [NVDA](https://www.nvaccess.org/) can be installed on your Windows machine or used on a USB stick. This screen reader is unique because it’s an open source program, which means developers can contribute to improving this software.

###### (Google Chrome) ChromeVox ######

ChromeVox is built using only web technologies like HTML5, CSS, and Javascript. ChromeVox (Classic) was designed from the start to enable unprecedented access to modern web apps, including those that utilize W3C ARIA (Access to Rich Internet Applications) to provide a rich, desktop-like experience.

This enables visually impaired users to experience the power of web applications while also giving developers a way to verify the accessibility of their web applications.

ChromeVox can be easily added to your Chrome browser as an extension through the [Chrome Web Store](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en). Once installed, you can use [these keyboard shortcuts](http://www.chromevox.com/keyboard_shortcuts.html). If you want to change the keyboard shortcuts, just click the browser extension icon, then click “options”.

##### Testing Accessibility #####

Now, let’s test one of them out.

Choose one of the screen readers listed above that fits your operating system or browser to test websites such as NY Times, Facebook, GitHub, and Dribbble. Getting the full experience through the screen reader will help you understand how it’s used and the difficulties the visually impaired experience when a website lacks accessibility.

Be sure to mouse and click around or use your keyboard to have the screen reader focus on specific areas.

Starting with the New York Times and moving down the list, let’s check out the screen reader experience.

###### New York Times ######

* Click on the main section of the page
* Tab through and notice the focus is on the headlines and the comments
* Hit enter when you land on comments
* Tab through this experience

Was it easy to read the comments on the article or were you prompted to read about the article first? How could this experience be improved?

###### Facebook ######

* Tab through the content to get to the main section of the page
* On your keyboard click “Alt + /”
* Tab through the “jump to” menu to get to the news feed

###### GitHub ######

GitHub is a development platform that provides tools for people to share their code with others, make edits to shared projects, and keep track of all versions and changes.

* Click on a repository to go to it’s landing page.
* If there isn’t a repository you want to explore, try looking at [Express](https://github.com/expressjs/express), a common JavaScript framework that we teach at Codecademy
* Tab through until you reach the section that tells you how many commits, branches, releases and contributors the repository contains
* Notice how these are considered “list items”
* Tab once more until you can see the list of languages used
* Notice how this is considered an ordered list and lists each tab by number

What did you think about this experience? Did it lack any critical information? Is there anything you think GitHub needs to consider or improve?

###### Dribbble ######

Dribble is a design-focused social network that allows designers to share their own work and explore the work of others.

* On the landing page tab through until you reach the first item
* Notice how the screen reader reads the numbers without the description of what the number correlates to
* On the top right under the black navigation bar, choose a different display layout
* Allow the screen reader to read through the posts in the different layouts

What did you think about the experience when you changed the layout? Was it easier to follow along on a larger layout vs. another?

###### Your Own Website ######

If you have ever made your own website, maybe for a course on Codecademy, or for your personal portfolio, try visiting it with a screen reader now. What is or is not possible for users visiting your site using a screen reader?

##### Conclusion #####

Of the websites that you visited, which one was easier or more accessible to visit? What issues did you face that you think would get better with more practice using a screen reader, and what issues were problems with the designs of the sites that you visited?

After considering which one was easier, check out [this accessibility guide from Facebook](https://www.facebook.com/help/141636465971794) to read about how to get the most out of Facebook as a user with disabilities. You can also look at the [Facebook Accessibility page](https://www.facebook.com/accessibility) to get news and updates from the Facebook Accessibility team.

As you can see, it can be somewhat challenging to use a screen reader. That’s why it’s our job as designers to make the web an accessible place for everyone. Next time you design a website, keep these tests and your experience in mind.

### Review: Making a Website Accessible ###

In this unit, you learned about web accessibility (a11y) practices.
Congratulations! The goal of this unit was to introduce you to website accessibility (a11y), why it is necessary and how to include it in your website design.

Having completed this unit, you are now able to:

Understand what accessibility (a11y) means
Understand the necessity for a11y on the web
Add features for improved screen reader usage
If you are interested in learning more about these topics, here are some additional resources:

* Article: [What is a11y?](https://www.boia.org/blog/what-is-a11y)
* Resource: [The a11y Project Checklist](https://www.a11yproject.com/checklist/)
* Article: [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)

## Introduction: JavaScript Syntax, Part III ##

In this unit, you will learn intermediate JavaScript concepts.

The goal of this unit is to understand intermediate JavaScript concepts, such as classes and modules. Knowing these concepts will improve your ability to write JavaScript programs and prepare you for creating web applications.

After this unit, you will be able to:

* Create classes in JavaScript
* Implement JavaScript Modules
* Create JavaScripts errors and handle them

### Learn JavaScript Syntax: Classes ###

1. Introduction
2. Constructor
3. Instance
4. Methods
5. Method Calls
6. Inheritance I
7. Inheritance II
8. Inheritance III
9. Inheritance IV
10. Inheritance V
11. Static Methods
12. Review: Classes

#### 1. Introduction to Classes ####

JavaScript is an *object-oriented programming* (OOP) language we can use to model real-world items. In this lesson, you will learn how to make *classes*. Classes are a tool that developers use to quickly produce similar objects.

Take, for example, an object representing a dog named `halley`. This dog’s `name` (a key) is `"Halley"` (a value) and has a `behavior` (another key) of `0` (another value). We create the `halley` object below:

```js
let halley = {
  _name: 'Halley',
  _behavior: 0,
 
  get name() {
    return this._name;
  },
 
  get behavior() {
    return this._behavior;
  },
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. Instead of using the syntax above for every dog that joins the daycare, we can create a `Dog` class that serves as a template for creating new `Dog` objects. For each new dog, you can provide a value for their name.

As you can see, classes are a great way to reduce duplicate code and debugging time.

After we lay the foundation for classes in the first few exercises, we will introduce inheritance and static methods — two features that will make your code more efficient and meaningful.

#### 2. Constructor ####

In the last exercise, you created a class called `Dog`, and used it to produce a `Dog` object.

Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the *constructor* method. JavaScript calls the `constructor()` method every time it creates a new instance of a class.

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

* `Dog` is the name of our class. By convention, we capitalize and CamelCase class names.
* JavaScript will invoke the constructor() method every time we create a new instance of our `Dog` class.
* This `constructor()` method accepts one argument, `name`.
* Inside of the `constructor()` method, we use the `this` keyword. In the context of a class, `this` refers to an instance of that class. In the `Dog` class, we use this to set the value of the Dog instance’s `name` property to the `name` argument.
* Under `this.name`, we create a property called `behavior`, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.

In the next exercise, you will learn how to create `Dog` instances.

#### 3. Instance ####

Now, we’re ready to create class instances. An *instance* is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our `Dog` class example.

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}
 
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```

Below our `Dog` class, we use the `new` keyword to create an instance of our `Dog` class. Let’s consider the line of code step-by-step.

* We create a new variable named `halley` that will store an instance of our `Dog` class.
* We use the `new` keyword to generate a new instance of the `Dog` class. The `new` keyword calls the `constructor()`, runs the code inside of it, and then returns the new instance.
* We pass the `'Halley'` string to the `Dog` constructor, which sets the name property to `'Halley'`.
* Finally, we log the value saved to the `name` key in our `halley` object, which logs `'Halley'` to the console.


#### 4. Methods ####

At this point, we have a `Dog` class that spins up objects with `name` and `behavior` properties. Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects **except you can not include commas between methods**.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

In the example above, we add getter methods for `name` and `behavior`. Notice, we also prepended our property names with underscores (`_name` and `_behavior`), which indicate these properties should not be accessed directly. Under the getters, we add a method named `.incrementBehavior()`. When you call `.incrementBehavior()` on a Dog instance, it adds `1` to the `_behavior` property. Between each of our methods, we did not include commas.

Example Code;

```js
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
    // return daysOff;
    return this._remainingVacationDays;
  }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

console.log(surgeonJackson.takeVacationDays(5));
```

#### 5. Method Calls ####

Finally, let’s use our new methods to access and manipulate data from `Dog` instances.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
 
const halley = new Dog('Halley');
```

In the example above, we create the `Dog` class, then create an instance, and save it to a variable named `halley`.

The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or method name. For methods, you must also include opening and closing parentheses.

Let’s take a moment to create two `Dog` instances and call our `.incrementBehavior()` method on one of them.

```js
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
```

In the example above, we create two new `Dog` instances, `nikko` and `bradford`. Because we increment the behavior of our `nikko` instance, but not `bradford`, accessing `nikko.behavior` returns `1` and accessing `bradford.behavior` returns `0`.

#### 6. Inheritance I ####

Imagine our doggy daycare is so successful that we decide to expand the business and open a kitty daycare. Before the daycare opens, we need to create a `Cat` class so we can quickly generate `Cat` instances. We know that the properties in our `Cat` class (`name`, `behavior`) are similar to the properties in our Dog class, though, there will be some differences, because of course, cats are not dogs.

Let’s say that our `Cat` class looks like this:

```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }  
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

In the example above, we create a `Cat` class. It shares a couple of properties (`_name` and `_behavior`) and a method (`.incrementBehavior()`) with the Dog class from earlier exercises. The `Cat` class also contains one additional property (`_usesLitter`), that holds a boolean value to indicate whether a cat can use their litter box.

When multiple classes share properties or methods, they become candidates for *inheritance* — a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a *parent* class (also known as a superclass) with properties and methods that multiple *child* classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

Let’s abstract the shared properties and methods from our `Cat` and `Dog` classes into a parent class called `Animal`.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

In the example above, the `Animal` class contains the properties and methods that the `Cat` and `Dog` classes share (`name`, `behavior`, `.incrementBehavior()`).

The diagram to the below shows the relationships we want to create between the Animal, Cat, and Dog classes.

![(>)](https://content.codecademy.com/courses/learn-javascript-classes/diagrams/inheritance_diagram.svg)

#### 7. Inheritance II ####

In the last exercise, we created a parent class named `Animal` for two child classes named `Cat` and `Dog`.

The `Animal` class below contains the shared properties and methods of `Cat` and `Dog`.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

The code below shows the `Cat` class that will inherit information from the `Animal` class.

```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

#### 8. Inheritance III ####

We’ve abstracted the shared properties and methods of our `Cat` and `Dog` classes into a parent class called Animal (See below).

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

Now that we have these shared properties and methods in the parent `Animal` class, we can extend them to the subclass, `Cat`.

```js
class cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```

In the example above, we create a new class named `Cat` that `extends` the `Animal` class. Let’s pay special attention to our new keywords: `extends` and `super`.

* The `extends` keyword makes the methods of the animal class available inside the cat class.
* The constructor, called when you create a new `Cat` object, accepts two arguments, name and usesLitter.
* The `super` keyword calls the constructor of the parent class. In this case, `super`(name) passes the name argument of the `Cat` class to the constructor of the `Animal` class. When the `Animal` constructor runs, it sets this._name = name; for new `Cat` instances.
* _usesLitter is a new property that is unique to the `Cat` class, so we set it in the `Cat` constructor.

Notice, we call `super` on the first line of our `constructor()`, then set the `usesLitter` property on the second line. In a `constructor()`, you must always call the `super` method before you can use the `this` keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call `super` on the first line of subclass constructors.

Below, we create a new `Cat` instance and call its name with the same syntax as we did with the `Dog` class:

```js
const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce
```

In the example above, we create a new instance the `Cat` class, named brycecat. We pass it 'Bryce' and false for our name and usesLitter arguments. When we call console.log(bryceCat._name) our program prints, Bryce.

In the example above, we abandoned best practices by calling our _name property directly. In the next exercise, we’ll address this by calling an inherited getter method for our name property.

#### 9. Inheritance IV ####

Now that we know how to create an object that inherits properties from a parent class let’s turn our attention to methods.

When we call `extends` in a class declaration, all of the parent methods are available to the child class.

Below, we extend our `Animal` class to a `Cat` subclass.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
 
 
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false);
```

In the example above, our `Cat` class extends Animal. As a result, the `Cat` class has access to the `Animal` getters and the .incrementBehavior() method.

Also in the code above, we create a `Cat` instance named `bryceCat`. Because `bryceCat` has access to the `name` getter, the code below logs 'Bryce' to the console.

```js
console.log(bryceCat.name);
```

Since the `extends` keyword brings all of the parent’s getters and methods into the `child` class, `bryceCat.name` accesses the `name` getter and returns the value saved to the `name` property.

Now consider a more involved example and try to answer the following question: What will the code below log to the console?

```js
bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior
```

The correct answer is `1`. But why?

* The `Cat` class inherits the `_behavior` property, `behavior` getter, and the `.incrementBehavior()` method from the `Animal` class.
* When we created the `bryceCat` instance, the `Animal` constructor set the `_behavior` property to zero.
* The first line of code calls the inherited `.incrementBehavior()` method, which increases the `bryceCat` `_behavior` value from zero to one.
* The second line of code calls the `behavior` getter and logs the value saved to `_behavior` (`1`).

#### 10. Inheritance V ####

In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

Below, we will add a `usesLitter` getter. The syntax for creating getters, setters, and methods is the same as it is in any other class.

```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
}
```

In the example above, we create a `usesLitter` getter in the `Cat` class that returns the value saved to `_usesLitter`.

Compare the `Cat` class above to the one we created without inheritance:

```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

We decreased the number of lines required to create the `Cat` class by about half. Yes, it did require an extra class (`Animal`), making the reduction in the size of our Cat class seem moot. However, the benefits (time saved, readability, efficiency) of inheritance grow as the number and size of your subclasses increase.

One benefit is that when you need to change a method or property that multiple classes share, you can change the parent class, instead of each subclass.

Before we move past inheritance, take a moment to see how we would create an additional subclass, called Dog.

```js
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
```

This `Dog` class has access to the same properties, getters, setters, and methods as the `Dog` class we made without inheritance, and is a quarter the size.

Now that we’ve abstracted animal daycare features, it’s easy to see how you can extend `Animal` to support other classes, like `Rabbit`, `Bird` or even `Snake`.

#### 11. Static Methods ####

Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

Take the `Date` class, for example — you can both create `Date` instances to represent whatever date you want, and call *static* methods, like `Date.now()` which returns the current date, directly from the class. The `.now()` method is static, so you can call it directly from the class, but not from an instance of the class.

Let’s see how to use the `static` keyword to create a static method called `generateName` method in our `Animal` class:

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}
```

In the example above, we create a `static` method called `.generateName()` that returns a random name when it’s called. Because of the `static` keyword, we can only access `.generateName()` by appending it to the `Animal` class.

We call the `.generateName()` method with the following syntax:

```js
console.log(Animal.generateName()); // returns a name
```

You cannot access the `.generateName()` method from instances of the `Animal` class or instances of its subclasses (See below).

```js
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
```

The example above will result in an error, because you cannot call `static` methods (`.generateName()`) on an instance (`tyson`).

#### 12. Review: Classes ####

* *Classes* are templates for objects.
* Javascript calls a *constructor* method when we create a new instance of a class.
* *Inheritance* is when we create a parent class with properties and methods that we can extend to child classes.
* We use the `extends` keyword to create a subclass.
* The `super` keyword calls the `constructor()` of a parent class.
* Static methods are called on the class, but not on instances of the class.

In completing this lesson, you’ve taken one step closer to writing efficient, production-level JavaScript. Good luck as you continue to develop your skills and move into intermediate-level concepts.

### Learn JavaScript Syntax: Modules ###

Implementing Modules using ES6 Syntax

Article on implementing modules in a browser’s runtime environment using ES6 modules syntax.

#### What are Modules? ####

*Modules* are reusable pieces of code in a file that can be exported and then imported for use in another file. A *modular* program is one whose components can be separated, used individually, and recombined to create a complex system.

Consider the diagram below of an imaginary program written in a file **my_app.js**:

![diagram of a modular program. separate modules are combined to create a complex program](https://static-assets.codecademy.com/Courses/Learn-JavaScript/Modules/modular-program-diagram.svg)

> Note: The words “*module*” and “*file*” are often used *interchangeably*

Instead of having the entire program written within **my_app.js**, its components are broken up into separate modules that each handle a particular task. For example, the **database_logic.js** module may contain code for storing and retrieving data from a database. Meanwhile, the **date_formatting.js** module may contain functions designed to easily convert date values from one format to another (a common headache among programmers!).

This modular strategy is sometimes called *separation of concerns* and is useful for a number of reasons. What do you think those reasons might be?

By isolating code into separate files, called modules, you can:
  * find, fix, and debug code more easily.
  * reuse and recycle defined logic in different parts of your application.
  * keep information private and protected from other modules.
  * prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

Implementing modules in your program requires a small bit of management. In the remainder of this article, we will be covering:

  * How to use the ES6 **`export`** statement to *export* code from a file - meaning its functions and/or data can be used by other files/modules.
  * How to use the ES6 **`import`** statement to *import* functions and/or data from another module.

#### Implementations of Modules in JavaScript: Node.js vs ES6 ####

Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are two runtime environments and each has a preferred module implementation:

  1. The [Node](https://nodejs.org/en/about/) runtime environment and the **`module.exports`** and **`require()`** syntax.
  2. The browser’s runtime environment and the [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) **`import`**/**`export`** syntax.

This article will focus on using the ES6 **`import`**/**`export`** syntax in a browser’s runtime environment. For more information, you can read the articles linked below.

* [Implementing Modules In Node](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/implementing-modules-in-node)
* [Introduction to Runtime Environments](https://www.codecademy.com/articles/introduction-to-javascript-runtime-environments)

#### A Brief History of JavaScript Modules in the Browser ####

In the early days of web development, JavaScript usage was fairly minimal. A script here to add some interactivity to a page and a script there to automate away some simple task. Nowadays, however, JavaScript dominates the web and scripts have ballooned into large and cumbersome behemoths. According to some studies, the average size of a website, in terms of kilobytes of JavaScript data transferred, [has grown over 5 times from 2010 to 2020!](https://httparchive.org/reports/state-of-javascript?start=earliest&end=latest&view=list)

These stats aren’t meant to paint a dreary future of web development. Web applications drive much of modern society and are far more capable than could have been imagined when the World Wide Web was created in 1989. Instead, it is to make clear the need for modularity as the capabilities, and size, of these scripts grow.

Though libraries for implementing modules have existed for some time, syntax for natively implementing modules was only introduced in 2015 with the release of [ECMAScript 6 (ES6)](http://es6-features.org/#ValueExportImport). Since then, it has been adopted by most modern browsers and is the de facto approach for implementing modular applications in the browser.

#### Implementing Modules in the Browser ####

Let’s take a look at implementing modules in the browser through an example. Suppose you wanted to build a simple web application with some hidden text that is revealed when a button is pressed.

![A demo of a simple website. There is a button that says "Press me... if you dare". Clicking on the button reveals a hidden message that says "Modules are fancy!"](https://static-assets.codecademy.com/Courses/Learn-JavaScript/Modules/ESModules-Secret-Messages.gif)

To create this website, you could create two files, **secret-messages.html** and **secret-messages.js**, and store them together in a folder called **secret-messages**:

```zsh
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
```

Let’s take a look at the HTML file first:

```html
<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script src="./secret-messages.js"> </script>
  </body>
</html>
```

* The **secret-messages.html** page renders a button element and a hidden paragraph element.
* It then loads the script **secret-messages.js** using the [file path](https://www.geeksforgeeks.org/html-file-paths/) **`"./secret-messages.js"`**. The **`./`** before the file name is how you indicate that the file being referenced (**secret-messages.js**) is in the same folder as the file referencing it (**secret-messages.html**).
Speaking of which, let’s take a look at the JavaScript file:

```js
/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});
```

* In **secret-messages.js**, DOM objects are created to reference the button element and paragraph element using the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById). These objects are stored in **`buttonElement`** and **`pElement`**, respectively.
* The function **`toggleHiddenElement()`** is declared. It can accept either of these elements as an input called **`domElement`** and will either show or hide that element depending on its current **`style.display`** value.
* An event listener is added to **`buttonElement`** to listen for **`'click'`** events and respond by calling **`toggleHiddenElement()`** with **`pElement`** as the argument.

Now, suppose you wanted to create a second webpage with similar features. There is still a button, but this time clicking it reveals an image. Using similar logic as the program above, this can be achieved with the following file structure:

```zsh
secret-image/
|-- secret-image.html
|-- secret-image.js
```

The HTML might look like this:

```html
<!-- secret-image.html --> 
<html>
  <head>
    <title>Secret Image</title>
  </head>
  <body>
    <button id="secret-button"> Want to see something cool? </button>
    <img id="secret-img" src="imageURL.jpg" style="display: none">
    <script src="./secret-image.js"> </script>
  </body>
</html>
```

… and the JavaScript might look like this:

```js
/* secret-image.js */
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});
```

Given that much of the code in these two programs is similar, creating this second website was fairly straightforward. In particular, notice that the **`toggleHiddenElement()`** function is copied line for line from **secret-messages.js**.

Having two identical, but separate, copies of a function can lead to maintenance issues in the future. For example, any bugs that may exist within the function would need to be fixed in two places rather than one.

Instead, creating a single copy of **`toggleHiddenElement()`** within a module that *exports* it would allow these two websites to *import* and use the exact same function. With this approach, updates to the function only need to occur within the module that defines them, and all programs that import this function will receive the same update. Furthermore, additional functions could be exported by the module and used by both programs, further reducing repetition.

#### ES6 Named Export Syntax ####

A module must be entirely contained within a file. So, let’s first consider where a new module may be placed within the file system. Since it needs to be used by both of these projects, you may want to put it in a mutually accessible location. The entire file structure containing both projects and this new module, let’s call it dom-functions.js, could look like this:

```zsh
secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
modules/
|-- dom-functions.js    <-- new module file
```

Inside **dom-functions.js**, the functions you wish to reuse can be exported using the *named export* syntax below:

```js
export { resourceToExportA, resourceToExportB, ...}
```

Using this syntax, the name of each exported resource is listed between curly braces and separated by commas. Below, you can see how this is implemented in the new module file **dom-functions.js**:

```js
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
export { toggleHiddenElement, changeToFunkyColor };
```

Let’s briefly break down how this module works:

* The function **`toggleHiddenElement()`** is declared. It accepts a domElement as an input and either shows or hides that element depending on its current display style value.
* A new function **`changeToFunkyColor()`** is declared. It accepts a domElement as an input and then sets its background color to a random [**`rgb()`** color value](https://www.w3schools.com/colors/colors_rgb.asp).
* The two functions are exported using the ES6 **`export`** statement.

These exported functions are now available to be imported and used by other files!

> If you want to try this out on your own computer, you will need to spin up a local server or else you will run into [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues. [Check out this article](https://www.codecademy.com/articles/spinning-up-a-local-server) on creating a local server with VSCode and the Live Server extension.

In addition to the syntax above, in which all named exports are listed together, individual values may be exported as named exports by simply placing the **`export`** keyword in front of the variable’s declaration. Here is the same example using this syntax:

```js
/* dom-functions.js */
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}
 
export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}
```

#### ES6 Import Syntax ####

The ES6 syntax for importing named resources from modules is similar to the **`export`** syntax:

```js
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
```

Let’s update the **secret-messages** program such that it now imports functionality from **dom-functions.js**. Doing so requires two important steps. First, update **secret-messages.js**:

```js
/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```

Let’s break down these changes:

* In **secret-messages.js**, the functions **`toggleHiddenElement()`** and **`changeToFunkyColor()`** are imported from the module **../modules/dom-functions.js**. The **`../`** indicates that the **modules/** folder is in the same folder as the parent folder, **secret-messages/**.
* When the button is clicked, the now imported **`toggleHiddenElement()`** function is called with **`pElement`** as an argument.
* In addition, **`changeToFunkyColor()`** is called with **`buttonElement`** as an argument, changing its background color to a random one!

Now, you must also update secret-messages.html:

```html
<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script type="module" src="./secret-messages.js"> </script>
  </body>
</html>
```

The change here is subtle, can you spot it? In **secret-messages.html**, the only thing that changes is the addition of the attribute **`type='module'`** to the **`<script>`** element. Failure to do so can cause some browsers to throw an error. For example, in Chrome you might see this error:

![Uncaught SyntaxError: Cannot use import statement outside a module](https://static-assets.codecademy.com/Courses/Learn-JavaScript/Modules/es6-modules-chrome-error.png)

And those are the basics of exporting and importing using the ES6 **`export`** and **`import`** syntax! If you have been following along with these code examples, see if you can update the **secret-image** project to use the exported functions from the module **dom-functions.js** before continuing on to the challenges below.

#### Renaming Imports to Avoid Naming Collisions ####

Inevitably, you will run into a situation where the resources you wish to import share a name with some other value that already exists in your program (or from another imported module).

For example, suppose you had access to two modules, `greeterEspanol.js` and `greeterFrancais.js`. Each exports a function called **`greet()`**:

```js
/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };
 
/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };
```

Now, let’s say you wanted to use each of these functions in a program, called **main.js**, that simulates a conversation between a spanish-speaker and a french-speaker.

```js
import { greet } from 'greeterEspanol.js';
import { greet } from 'greeterFrancais.js';
```

The code above will throw an error on line 2 due to the fact that the identifier **`greet`** has already been defined on line 1. Thankfully, ES6 includes syntax for renaming imported resources by adding in the keyword **`as`**. It looks like this:

```js
import { exportedResource as newlyNamedResource } from '/path/to/module'
```

Let’s see how this could work within main.js

```js
/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour
```

Now, both of the imported functions can be called within **main.js** using their new identifiers, **`greetEspanol()`** and **`greetFrancais()`**.

#### Default Exports and Imports ####

So far, the examples shown have used the named export syntax, in which a module’s resources are exported individually by name. Every module also has the option to export a single value to represent the entire module called the *default export*. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

The syntax for exporting a default object looks like this:

```js
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };
```

With this syntax, the object containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the **`resources`** object is being exported as a named export. However, the clause **`as default`** renames the exported object to **`default`**, a reserved identifier that can only be given to a single exported value.

You may also see this shorthand syntax where the value follows **`export default`** is the default value to be exported:

```js
const resources = {
  valueA,
  valueB
}
export default resources;
```

#### Importing default values. ####

The syntax for importing default exports looks like this:

```js
import importedResources from 'module.js';
```

Notice that the curly braces are gone from the import statement. This syntax is actually shorthand for **`import { default as importedResources } from 'module.js`** and the imported **`default`** value may be given any name the programmer chooses.

It should be noted that if the **`default`** export is an object, the values inside cannot be extracted until after the object is imported, like so:

```js
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'
```

Let’s return to the prior example. The dom-functions.js module from above could be rewritten to use default exports like so:

```js
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;
```

This default exports object can now be used within secret-messages.js like so:

```js
import domFunctions from '../modules/dom-functions.js';
 
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```

Notice how **`toggleHiddenElement()`** and **`changeToFunkyColor()`** are now methods of the imported object called **`domFunctions`** and are extracted using [ES6 destructuring syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)! It should be noted that the identifier **`domFunctions`** can be chosen as the programmer sees fit. If you recall, the syntax used in the snippet above is shorthand for:

```js
import { default as domFunctions } from '../modules/dom-functions.js';
```

Continue on to the challenges below before the final review at the end of the article.

#### Review ####

In this article, you have learned the following:

* The benefits of implementing modular programs.
* How to use the ES6 **`export`** statement to *export* code from a file - meaning its functions and/or data can be used by other files/modules.
* How to use the ES6 **`import`** statement to *import* functions and/or data from another module.
* How to rename imported resources using the **`as`** keyword.
* How to export and import a default value.

Though this article covers the basics of using ES6 syntax to import and export modules, [MDN has an excellent article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) that provides an in-depth look at some additional features that ES6 has to offer.

### Learn JavaScript: Error Handling ###

1. Introduction
2. Runtime Errors
3. Constructing an Error
4. The throw Keyword
5. The try...catch Statement
6. Handling with try...catch
7. Review: Error Handling

#### 1. Introduction to Error Handling ####

There are two categories of programming mistakes: those that don’t prevent our code from running and those that do.

Sometimes, we’ve written code that successfully returns a value but a different value from what we expected. Our program continues running, and we might not even realize anything went wrong until much later. It’s like making soup and accidentally adding sugar instead of salt. In the end we still have soup, but it might not be soup that we want to eat. We will not be focusing on these mistakes.

Rather, we’re going to focus on the errors that pop up when we’ve written code that causes our program to stop running, e.g. trying to reassign a `const` variable. Instead of returning anything, our program will not execute any more code past where the error occurred. For example, what if we tried to move our soup to the table but dropped it because it was too hot? Then our soup-making process is over— there would be no soup.

We can’t always stop errors before they occur, but we can include a backup plan in our program to anticipate and respond to the errors to ensure that our program continues running. *Error handling* is the process of programmatically anticipating and addressing errors. In JavaScript, we handle errors using the keywords `try` and `catch`. We try to move the soup to the table, making sure there’s someone or something nearby to `catch` the soup in case we drop it.

![(>)](https://content.codecademy.com/courses/learn-javascript-error-handling/falling%20soup.svg)

In this lesson we’ll learn more about errors and how to create a backup plan to allow our program to continue running. When you’re ready, let’s *try* to get a *handle* on these JavaScript errors!

#### 2. Runtime Errors ####

Errors contain useful messages that tell us why our program isn’t working or why the error was *thrown*. When an error is thrown, our program stops running and the console displays the error message in red text like so:

![(>)](https://content.codecademy.com/courses/learn-javascript-error-handling/error_diagram.svg)

When we execute code and a line of code throws an error, that error is referred to as a *runtime error*. In JavaScript, there are built-in error objects that have a `name` and `message` property which tell us what went wrong. Examples of built-in runtime errors include:

* `ReferenceError`: when a variable or function cannot be found.
* `TypeError`: when a value is not a valid type, see the example below:

```js
const reminder = 'Reduce, Reuse, Recycle';
reminder = 'Save the world';
// TypeError: Assignment to constant variable.
console.log('This will never be printed!');
```

In the example above, when we try to reassign a constant variable `reminder`, the `TypeError` is thrown. Code that is written after a thrown runtime error will not be evaluated, so the `console.log()` statement will not be evaluated.

Let’s see for ourselves what happens when a runtime error is thrown.

#### 3. Constructing an Error ####

JavaScript errors are objects that have a name and message property. Previously, we’ve seen how built-in errors alert us about common mistakes in our code. But, what if we need an error message that isn’t covered by the built-in errors? Let’s say we need to inform a user that a string passed in as an argument is too short with a custom message. Such a message isn’t covered by a built-in error, but we could use the Error function to make our own error object with a message that is unique to our program!

```js
console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
```

The `Error` function takes an argument of a string which becomes the value of the error’s `message` property. In the code snippet above, we used the `Error` function to create an error object that has the message `'Your password is too weak.'`.

You might also see errors created with the `new` keyword. Both methods will lead to the same functionality. Take a look:

```js
console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
```

Keep in mind that creating an error is not the same as throwing an error. A thrown error will cause the program to stop running. We cover how to throw our created errors in the next exercise!

#### 4. The throw Keyword ####

Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the `throw` keyword like so:

```js
throw Error('Something wrong happened');
// Error: Something wrong happened
```

When we use the `throw` keyword, the error is thrown and code after the `throw` statement will not execute. Take for example:

```js
throw Error('Something wrong happened');
// Error: Something wrong happened
 
console.log('This will never run');
```

After `throw Error('Something wrong happened');` is executed and the error object is thrown, the `console.log()` statement will not run (just like when a built-in JavaScript error was thrown!).

In the next lesson we will cover how to handle an error so that the rest of our code can run!

#### 5. The try...catch Statement ####

Up to this point, thrown errors have caused our program to stop running. But, we have the ability to anticipate and `handle` these errors by writing code to address the error and allow our program to continue running.

In JavaScript, we use `try...catch` statement to anticipate and handle errors. Take a look at example below:

```js
try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught
 
console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'
```

Now, let’s break down what happened in the `try...catch` statement above:

* We have code that follows `try` inside curly braces `{}` known as the *`try` block*.
* Inside the `try` block we insert code that we anticipate might throw an error.
* Since we want to see what happens if an error is thrown in the `try` block, we throw an error with the message `'This error will get caught'`.
* Following the `try` block is the `catch` statement which accepts the thrown error from the `try` block . The `e` represents the thrown error.
* The curly braces that follow `catch(e)` is known as the *catch block* and contains code that executes to handle the error.
* Since the error is caught, our `console.log()` after the `try...catch` statement prints `'The thrown error that was caught in the try...catch statement!'`.

Generally speaking, in a `try...catch` statement, we evaluate code in the `try` block and if the code throws an error, the code inside the `catch` block will handle the error for us. The provided example just showcases how a `try...catch` statement works because we know an error is being thrown. Let’s first practice writing our own `try...catch` statement and afterwards we will go over a more practical usage of `try...catch`.

#### 6. Handling with try...catch ####

In the previous exercise we caught an error that we threw, but we can also use a `try...catch` statement to handle built-in errors that are thrown by the *JavaScript engine* that is reading and evaluating our code.

```js
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.
```

In the example above, we didn’t use the `throw` keyword to throw a custom error, rather we tried to re-assign a `const` variable and a `TypeError` was thrown. Then, in our `catch` block, we logged the error to the console.

Using a `try...catch` statement for built-in JavaScript errors is really beneficial when we need to use data from an external source that’s not written directly in our program.

Let’s say we expect to grab an array from a database but the information we get back is a string. In our program, we could have a function that only works on arrays. If that function was called with a string instead of an array we would get an error and our program would stop running!

However, we can use a `try...catch` statement to handle the thrown error for us which allows our program to continue running and we receive a message knowing what went wrong! Let’s see how we can implement this in our code.

#### 7. Review: Error Handling ####

* How mistakes in programming leads to errors.
* Why errors are useful for developers.
* Errors will prevent a program from executing unless it is handled.
* How to create an error using the `Error()` function.
* How to throw an error object using the `throw` keyword.
* How to use the `try...catch` statement to handle thrown errors.
* Evaluating code in a `try` block to anticipate errors.
* Catching the error in a `catch` block to allow our program to continue running.
* Why the `try...catch` statement would be useful in a program.

Now you have the ability to create code that doesn’t break when an error is thrown!

### Review: JavaScript Syntax, Part III ###

In this unit, you learned intermediate JavaScript concepts.

Congratulations! The goal of this unit was to understand intermediate JavaScript concepts, such as classes and modules. Knowing these concepts should improve your ability to write JavaScript programs and prepare you for creating web applications.

Having completed this unit, you are now able to:

* Create classes in JavaScript
* Implement JavaScript Modules
* Create JavaScripts errors and handle them

If you are interested in learning more about these topics, here are some additional resources:

* Article: [JavaScript Design Patterns by Andy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
* Article: [Reducing Complexity with Guard Clauses in PHP and JavaScript by Craig Davis](https://engineering.helpscout.com/reducing-complexity-with-guard-clauses-in-php-and-javascript-74600fd865c7)
* Documentation: [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* Article: [Understanding Prototypes and Inheritance in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
* Article: [Understanding Classes in JavaScript](https://www.taniarascia.com/understanding-classes-in-javascript/)

## JavaScript Testing ##

1. Introduction to JavaScript Testing
2. Why Tests
3. Testing Types
4. Software Testing Methodologies
5. Write Good Tests with Mocha
6. Learn TDD with Mocha
7. Documentation Chai
8. Advanced Testing Concepts

### 1. Introduction to JavaScript Testing ###

The goal of this unit is to introduce you to the fundamentals of JavaScript testing and different testing methodologies. You’ll use Test Driven Development (TDD) as an example of how testing can influence software development. You will learn about different types of tests and how using tests will catch and identify issues with your code before you deploy it to users.

After this unit, you will be able to:

* State the benefits of testing
* Identify different types of testing and methodologies
* Write tests using Mocha and Chai
* Apply TDD techniques to software development
* Describe how code coverage is used as a metric for testing
* Incorporate mocking and spies into tests

### 2. Why Tests? ###

1. Introduction to tests
2. Manual Testing
3. Automated Testing
4. The Test Suite
5. Tests As Documentation
6. Regression
7. Review: Why Tests
#### 1. Introduction to tests ####

Imagine checking your bank account online. You have $1,000. The website is updated overnight, and you check again in the morning. Your balance is $257.43. Where did your money go? Is that truly your balance?

You report this to customer service. Thousands of other users report similar issues. Customers close accounts.

Back at the bank a software error is found to be the cause. The bank’s developers did not run tests on the software before deploying it to users. Money did not vanish but its amounts were printed incorrectly to the website.

Errors in software are inevitable. Unchecked, these errors can have painful and costly impacts on users and developers. In 2002, a study commissioned by the US Department of Commerce’s National Institute of Standards and Technology concluded that software errors cost the US economy about $59 billion annually.

To avoid those costs, software professionals use *automated testing*. During and after production, they can run an *automated test suite* to give themselves confidence that their products are free of errors and work as expected.

This lesson will give you the knowledge and practice to discuss these concepts. By the end of this lesson you will be able to:

* Define an *automated test suite*
* Describe how a test suite is used in software development
* Explain the benefits of automated testing

*Study available here: [Software Errors Cost U.S. Economy $59.5 Billion Annually, 2002](https://web.archive.org/web/20090610052743/http://www.nist.gov/public_affairs/releases/n02-10.htm).

#### 2. Manual Testing ####

*Software testing* is the process of assessing the completeness and quality of computer software. Usually this is done by running a part of a system (like a web application) and comparing the actual behavior to the expected behavior.

One way to perform software testing is *manual testing*. Manual testing is a form of testing done by a human interacting with a system. With web apps, this might be clicking, dragging, and typing through a webpage. A list of actions and expected behaviors would be given. If the observed behavior doesn’t match the expected behavior, the application has an error.

Errors, like the ones you may have found in the provided web app, are also called *bugs*. A bug is an error, fault, or flaw in software that makes a system behave in unexpected ways. As you read in the last exercise, these unexpected behaviors can cause harm to users. Ideally testing catches bugs before they are sent to users.

#### 3. Automated Testing ####

How long did it take to manually test the application in the previous exercise? If you repeated the process 100 times, how often do you think you would make a mistake?

In a company, someone must be paid to do that work, so every hour of manual testing has a cost. The cost of testing can be reduced and the quality can be improved with *automated testing*.

Automated testing is the use of software to control the execution of tests and the comparison of actual behavior to expected behavior. All the testing you just did (and more) could be performed by a computer program.

Compared to manual testing, automated testing is

* Faster: it tests more of your product in less time.
* More reliable: it’s less prone to error than a human is .
* Maintainable: you can review, edit, and extend a collection of tests.

Rather than hire a testing team at the end of development, professional developers can run their automated tests after every change. The workflow might look like this:

1. Write code and corresponding tests
2. Enter a command into a terminal to run tests
3. If the app behaves as intended, all tests should pass. Development is complete.
4. If it does not behave as intended, at least one test should fail. Fix code and return to step 2.

#### 4. The Test Suite ####

Tests are written with code, just like the rest of your web app. You can refer to the code defining your app as *implementation code*, and the code defining your tests as *test code*.

A collection of tests for a web application is called a *test suite*. In the last exercise, you ran a test suite with `npm test`. In that case the test suite contained all tests for the application.

Test code is included with and structured similarly to implementation code. Often times changes to test code are associated with changes to implementation code and vice versa. Both are easier to maintain when they are stored in the same place.

For example, if implementation code is written in `index.js` then the corresponding test code may be written in `index-test.js`.

#### 5. Tests As Documentation ####

Imagine explaining this Cake Bar app to someone else. How does it behave? Does it rely on other software? How do you run it on a computer? You could read every line in every file to figure that out. Or you could read the *documentation*.

Documentation is any content separate from implementation code that explains how it works or how to use it. It may provide more concise summaries and explanation than the implementation code can.

Documentation can come in many forms, including plain text, diagrams…and tests! Tests as documentation provide what many other forms cannot: both human-readable text to describe the application and machine-executable code to confirm the app works as described.

This code block from the Cake Bar app describes and tests the “name” functionality.

```js
it('accepts the customer name', () => {
  const name = 'Hungry Person';
 
  browser.url('/');
  browser.setValue('#name', name);
  browser.click('#submit-order');
  browser.url('/');
 
  assert.include(browser.getText('#deliver-to'), name);
});
```

You can read the description in plain English terms: `it accepts the customer name`. You can run the test to confirm the functionality works as described.

#### 6. Regression ####

The new “clear order” button feature has been implemented to satisfy the new test.

When adding a new feature to your product, it’s possible that something will break. If that break occurs within a feature developed earlier, it is called *regression*. When functionality previously developed and tested stops working, you may say the *functionality regressed*.

Running an automated test suite is fast and repeatable, which means you can run tests after every change to confirm that old features still work. If they have regressed, the test output should notify you.

#### 7. Review: Why Tests ####

Writing automated tests takes time, but the cost is outweighed by the benefits. Automated testing

* Increases confidence that your product works as expected (compared to manual testing)
* Improves upon documentation
* Reduces the likelihood of regression

You also learned

* Where and why test code is stored alongside implementation code
* Terms to help communicate the benefit of testing: *manual testing*, *automated testing*, *test suite*, *bug*, *documentation*, and *regression*

### 3. Testing Types ###

In this article, you will be introduced to the different types of testing that may be used throughout the various stages of a project from local development to shipping to real users.

#### What are the Types of Testing? ####

At different stages of production for a particular project, you may encounter the opportunity for different types of tests, which can vary in scale and resource intensity, as well as serve different purposes. The types of testing we will discuss in this article are:

* Unit tests
* Integration tests
* End to end tests

![Testing levels art, demonstrating types of tests in a pyramid shape, smaller unit tests at the bottom, larger ent to end tests at the top](https://static-assets.codecademy.com/Courses/testing-concepts/testing-types-pyramid.svg)

Throughout this article, we will discuss how each of these types of tests can be applied to a basic weather application.

#### Unit Tests ####

A *unit test* covers the smallest possible unit of testable code, such as a single function. In order to keep the scope of a unit test focused on the unit being tested, any data or behavior from other units or external sources that the unit relies on should be replaced with fake (*mock*) data or behavior.

For example, in a weather application, we might have a number of functions that each handle a small piece of computation, such as converting fahrenheit to celsius or formatting incoming weather data from an API. Unit tests would be written first to ensure that these functions can perform independently before we move on to testing how they work together. Any data that might come in from an external database or API would be mocked.

#### Integration Tests ####

An *integration test* covers how the units of a particular program work with one another. When testing integrations with external services, only the handling of incoming data is tested while the data itself remains mocked.

For example, in a weather application, integration tests would be written to ensure that weather data fetched from an API will be properly formatted to be displayed to the user. It would also ensure that delays, errors, or invalid data from the external service would be handled properly once they are introduced. The data itself would be mocked.

#### End to End Tests ####

An *end to end test* (sometimes referred to as a *UI layer* test or *e2e*) automates user flow to test the application in the way that a real user would experience it. To closely match the end user’s experience, this type of testing would also test interactions with external services such as databases and APIs.

For example, in a weather application, end to end tests might be written to simulate a user searching for a particular location, selecting that location, choosing celsius or fahrenheit, and clicking through various aspects of the UI. In this test, the actual database and external API is used.

#### How do these tests relate? ####

The order of tests in this article (unit -> integration -> end to end) represent an increase in resource intensity (time, computation, money) and the scope of the tests (amount of code being tested). Due to the increase in complexity, tests of these types may initially be written in this order. However, as an application is developed, new features may be tested using all three types simultaneously, with each providing different feedback to the developer or testing team.

A typical developer’s feedback loop using these various test types might be:

1. Make code changes
2. Make a pull request
3. The code change has tests run against it (unit, integration, sometimes e2e)
4. If there are any failures then the dev will work on fixes in their local development environment.
5. Repeat steps 1-4 until all tests pass.
6. The pull request is allowed to be merged.

#### Summary ####

In this article, we learned about the different types of tests that are written and performed throughout the production process. These include:

* Unit tests, which test the smallest unit of code possible.
* Integration tests, which test the interactions between internal services in the application.
* End to end tests, which test the whole application including the external services it depends on.
* These types of tests increase respectively in terms of resource intensity and amount of code being tested and each provide developers and/or testing teams with distinct feedback during the development cycle.

### 4. Software Testing Methodologies ###

Learn about software testing methodologies and some specific strategies that use a test-first approach to software development.

Imagine this scenario: you’ve written some code for a new feature and it’s time to test it. You deploy your development version of the code and interact with all of the features of your application that were impacted. This could include features you built in the past and anything new. You repeat that process for different browsers and devices, and a few hours later, you’re confident that it’s ready to go. But then you deploy it to production and the error reports start to come in!

This scenario describes the process of **manual testing**, which is time-consuming, can result in errors being overlooked, and can’t be repeated easily. To get around the issues related to manual testing, organizations generally use software to *automate* their testing processes to validate code.

#### What is a software testing methodology? ####

**Testing methodologies** are specific strategies for testing all of the pieces of your software to make sure it behaves as expected. These strategies include many ways to [test software](https://www.codecademy.com/resources/docs/general/software-testing), such as unit testing, integration testing, performance testing, and more. In this article, we’ll take a closer look at testing practices that use a test-first approach to software development.

#### Why Use Software Testing Methodologies? ####

There are many reasons that organizations adopt software testing methodologies:

* Software errors can cost companies resources such as money and users.
* Testing results in better reliability.
* Testing can provide a better [end-user](https://www.codecademy.com/resources/docs/uiux/user-and-end-user) experience.
* Failing tests help indicate which part of the software is not working when bugs occur

Overall, the primary goal of testing is to make software development more efficient, reliable, and future-proof.

#### Different types of methodologies ####

Some software testing methodologies prioritize writing test cases before writing the code those test cases will validate. Those types include:

* Test-driven Development (TDD)
* Behavior-driven Development (BDD)
* Specification by Example (SBE)
* Acceptance Test-driven Development (ATDD)

These methodologies are particularly relevant for teams that use an agile, or iterative, approach to software development. Teams don’t have to pick one testing solution and stop there — several approaches can be used by the same team at different stages of development. The following sections take a closer look at TDD and BDD and where they fit into the development cycle to give some more context on testing methodologies in practice.

#### Test-driven development ####

Testing doesn’t necessarily have to occur after code has been written. **Test-driven development** is a methodology that flips the order, where tests are written before the functioning code is written. By writing tests in this order, test cases can start with the definition of their purpose, or use case.

Those use cases define the specification and documentation on what actions are to be supported by new code. TDD tests look at the components of code, like functions and classes, as the smallest unit to test.

In practice, TDD can accelerate software development since it dictates short development cycles with direct test cases. There are many other benefits of test-driven development:

* Developers can better understand the requirements of code, before writing the code.
* Code that will never be executed won’t be added to the codebase.
* The scope of development is reduced.
* Code is written with testability in mind.

TDD is not the only testing methodology that takes a test-first approach to software development.

#### Behavior-driven development ####

Another testing methodology that uses the strategy of writing test cases before code is **behavior-driven development**, or BDD. It is extremely similar to TDD in terms of process. Where these two methodologies differ is in why or when tests are written, what an individual unit is considered to be, and how the language of the test is composed.

Since BDD tests are driven by behavior, the language of the test cases are simplified and written via collaboration between engineers, product owners, and other stakeholders, to ensure the specified behaviors make sense from a user perspective.

It can be said that BDD is more specific than TDD. Changes to the code base, such as changing the design of the code, will not occur unless there is a relevant change in the product. Since those changes are feature-related, the unit of tests is called a “feature.” Test cases are related to whether or not the feature works, rather than if the individual functions or classes you are writing to develop features work. Altogether, the tests are about how the product behaves — not the nitty-gritty technical details.

#### Review ####

Nice work, you now know more about software testing methodologies! Let’s quickly recap the main ideas:

* Automated testing makes code production more reliable thanks to the ease of running frequent tests on all new and old code in a software application.
* Software companies don’t need to pick a singular software testing methodology — they can be combined and used at various stages during software development.
* Some organizations take a test-first approach to software development, with testing methodologies such as TDD and BDD being the first step of code production.
* Since software errors can cost businesses money and customer trust, testing is an integral part of the development process and used in some flavor by every software company.

As you continue with testing content, you’ll see TDD as the main methodology we teach (such as this course). Now you have some insight into what TDD is and how it can be used as an example of how to guide the software development process!

### 5. Write Good Tests with Mocha ###

1. Automate and Organize Tests
2. WRITE EXPRESSIVE TESTS

#### 1. Automate and Organize Tests

1. Introduction
2. Install Mocha I
3. Install Mocha II
4. describe and it blocks
5. assert
6. Setup, Exercise, and Verify
7. Teardown
8. Hooks

##### 1. Introduction #####

Testing is an essential part of development. When used properly, testing can catch and identify issues with your implementation code before you deploy it to users. Instead of testing every function manually, developers automate their tests with a test framework.

Developers use test frameworks to organize and automate tests that provide useful feedback when errors occur. In this lesson we will use the [Mocha test framework](https://mochajs.org/) to write tests against JavaScript methods.

In this lesson you will:

* Learn to write a basic Mocha test suite
* Use Node’s `assert.ok` method to verify the expected output of your code
* Understand and apply the four phases of a test to create an expressive testing suite
* Evaluate the quality of your tests against the [characteristics of a good test](https://www.codecademy.com/articles/tdd-u1-good-test)

##### 2. Install Mocha I #####

Before writing any tests you’ll need to use [Node.js and npm](https://www.codecademy.com/articles/what-is-node) to set up a JavaScript project and install Mocha.

* *Node* allows you to run JavaScript in the terminal
* *npm* is a Node tool that allows you to download packages from the web, and manage them in a JavaScript project
* *Mocha* is one of those packages and is used to test other JavaScript code

A JavaScript project is a directory of files. The following command creates a file **package.json** that can be used to manage packages for the project.

```zsh
$ npm init
```

After running this command you will be prompted to enter information about your project. It’s okay to skip some fields if you’re not ready to enter that information.

With your project setup, you can install packages.

```zsh
$ npm install mocha -D
```

Here’s what this command means:

* `npm` install tells npm to install a package from the internet and any other packages it depends on
* `mocha` is the package you want to download
* `-D` signifies that this package is a development dependency and will show up under the `devDependecies` section in **package.json**. This means that the package will only be included in development mode and will not be included in the production bundle.

Once you `npm install` packages, you can find the packages and all their dependencies in the **node_modules** folder. The new directory structure contains the following:

```zsh
project
|_ node_modules
|___ .bin
|___ mocha
|___ ...
|_ package.json
```

The `...` in the file structure represents other packages that are a dependency for Mocha.

##### 3. Install Mocha II #####

After installing Mocha as a dependency we can run it in two ways.

The first (and more tedious) method is to call it directly from **node_modules**:

```zsh
$ ./node_modules/mocha/bin/mocha
```

The second (and recommended) method is to add a script to **package.json**. In the scripts object in **package.json**, set the value of `"test"` to `mocha`. It should look like this:

```js
"scripts": {
  "test": "mocha"
}
```

Now you can call Mocha with the following command:

```zsh
$ npm test
```

Instead of manually running each test in the **test** directory, you can use this command to run the full test suite automatically.

##### 4. describe and it blocks #####

In Mocha we group tests using the `describe` function and define tests using the `it` function. These two functions can be used to make your test suite *complete*, *maintainable*, and *expressive* in the following ways:

* Structure your test suite: you can organize tests into nested groups that reflect the structure of your implementation code.
* Provide informative messages: you can define your tests using human-readable strings.

If you are testing a `Math` object with the method `.max`, you could use the following test code.

```js
describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});
```

Both the `describe` and `it` functions accept two parameters: a descriptive string and a callback function. Though the functions are flexible, they are commonly used in the structure above: nest `describe` blocks to resemble the structure of your implementation code and write individual tests in `it` blocks. This makes your test suite *isolated*, *maintainable*, and *expressive*.

##### 5. assert #####

In the last exercise, you learned how to organize and automate tests using the Mocha test framework. To write the tests themselves, we can use the `assert.ok` method provided by Node.js.

In programming, a test compares an expected outcome to an actual outcome. For example, we expect the outcome of the following code…

```js
const a = 1 + 2;
```

…to be: `a` has a value of `3`.

To test the value saved to a with plain JavaScript, you would need to write a conditional statement comparing `a` to the expected result. Inside the statement, you would construct an error when the actual outcome does not match the expected.

```js
if (a !== 3) {
  throw 'Test failed! a is not 3'
}
```

`assert.ok()` allows you to compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more *expressive* test suite.

As a Node module, `assert` can be imported at the top of your files with

```js
const assert = require('assert');
```

You call assert functions like this:

```js
assert.ok(a === 3);
```

In this case `a === 3` evaluates to `true`, so no error is thrown.

If an argument passed to `assert.ok()` evaluates to `false`, an `AssertionError` is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

##### 6. Setup, Exercise, and Verify #####

In this exercise you will be separating a test into *setup*, *exercise*, and *verify* phases. This distinct and well-defined separation of steps makes your test more `reliable`, `maintainable`, and `expressive`.

The phases are defined as follows:

* *Setup* - create objects, variables, and set conditions that your test depends on
* *Exercise* - execute the functionality you are testing
* *Verify* - check your expectations against the result of the exercise phase. You can use the `assert` library here

Clear separation of each phase makes a test easier to read, change, and validate.

##### 7. Teardown #####

So far, we’ve been writing just one test using a single `it()` block. However, in most situations, we will need to write many tests for a particular feature that get executed in succession.

Running multiple tests can introduce issues if the tests make changes to the testing environment: changes to the environment in one test might affect the next test. Some common changes to an environment include:

* altering files and directory structure
* changing read and write permissions on a file
* editing records in a database

To address this issue, we often add a *teardown* step to the end of our tests. The teardown phase makes our tests *isolated* by resetting the environment before the next test runs. This provides two key benefits:

* Changes to the environment caused by one test do not affect the other tests.
* Isolated tests can be executed in any order!

> Note: In some cases — including the previous exercises  — the teardown phase isn’t needed because there are no conditions to reset. 

##### 8. Hooks #####

Over the last two exercises, we learned about the four main phases of a test: setup, execute, verify, and teardown. In the last exercise, you may have noticed that the setup and teardown steps were identical between tests.

While execution and verification are unique to each test, setup and teardown are often similar or even identical for multiple tests within a test suite. The Mocha test framework provides functions that enable us to reduce repetition, simplify the scope of each test, and more finely control the execution of our tests.

These functions (also referred to as *hooks*) are:

* `beforeEach(callback)` - `callback` is run before each test
* `afterEach(callback)` - `callback` is run after each test
* `before(callback)` - `callback` is run before the first test
* `after(callback)` - `callback` is run after the last test

Each hook accepts a callback to be executed at various times during a test. The `before...` hooks naturally happen before tests and are useful for separating out the setup steps of your tests. Meanwhile, the `after...` hooks are executed after tests and are useful for separating out the teardown steps of your tests.

```js
describe('messing around with hooks', () => {
 
  let testValue; // Variable used by both tests
 
  beforeEach(() => {
    testValue = 5;
  });
 
  it('should add', () => {
    // testValue = 5 <-- moved to beforeEach()
    testValue = testValue + 5;
    assert.equal(testValue, 10);
  });
 
  it('should multiply', () => {
    // testValue = 5 <-- moved to beforeEach()
    testValue = testValue * 5;
    assert.equal(testValue, 25);
  });
 
});
```

In this example, while each `it()` block could have set the `testValue` to `5`, using the `beforeEach()` hook allows us to avoid that repetition while keeping each test isolated.

Keep in mind that not all setup and teardown steps should be included in these hooks. Occasionally, you may find that you need to perform some unique setup or teardown for a single test that you don’t want to include in other tests.

##### 9. Review
You can now write tests with Mocha and Node’s `assert.ok()` ! In this lesson you learned to:

* Install Mocha with npm
* Organize tests with `describe()` and `it()`
* Ensure your tests are isolated and expressive with the four phases of a test
* Ensure your tests are reliable with hooks
* Write assertions with `assert.ok()`

As you continue to write tests, remember to always evaluate them against [the characteristics of a good test](https://www.codecademy.com/articles/tdd-u1-good-test): fast, complete, reliable, isolated, maintainable, and expressive. If you are meeting these six criteria, you are creating high quality test frameworks!

#### 2. WRITE EXPRESSIVE TESTS ####

1. Introduction
2. assert.ok
3. assert.equal
4. assert.strictEqual
5. assert.deepEqual I
6. assert.deepEqual II
7. Other assert methods

##### 1. Introduction #####

A good test framework is [fast, complete, reliable, isolated, maintainable, and expressive](https://www.codecademy.com/articles/tdd-u1-good-test). In this lesson you will learn how to use Node’s `assert` library to write more *expressive* tests.

An expressive test is easy to read and descriptive, making it useful as a form of documentation for your implementation code. One way to make a test more expressive is clarifying its *verify* phase — the step where expected outcome is compared to actual outcome.

[Node.js](https://www.codecademy.com/articles/what-is-node) provides a library called `assert` with methods that help you write more expressive verification code. You can use the methods in this library in place of conditional statements to write less code and use human-readable language. It can be used within the Mocha testing framework, and you will be using both throughout this lesson.

##### 2. assert.ok #####

As a Node module, `assert` can be imported at the top of your files with

```js
const assert = require('assert');
```

The [functions in the `assert` library](https://nodejs.org/api/assert.html) compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite.

```js
assert.ok(6 - 1 === 5);
```

In this case `6 - 1 === 5` evaluates to `true`, so no error is thrown.

If an argument passed to `assert.ok()` evaluates to `false`, an `AssertionError` is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

##### 3. assert.equal #####

You can use `assert.ok()` for most verifications, but sometimes it can be difficult to determine the condition you are evaluating.

Read the example code below. Will this assertion throw an error?

```js
const landAnimals = ['giraffe', 'squirrel'];
const waterAnimals = ['shark', 'stingray'];
 
landAnimals.push('frog');
waterAnimals.push('frog');
 
assert.ok(landAnimals[2] == waterAnimals[2]);
```

The above assertion is checking for equality. In order to understand this you must evaluate the entire expression within the parentheses of `.ok()`.

You can instead use `assert.equal()` which does the `==` comparison for us.

In the example below, the two methods achieve the same outcome.

```js
assert.ok(landAnimals[2] == waterAnimals[2]);
assert.equal(landAnimals[2], waterAnimals[2]);
```

The second line is more *expressive*: instead of parsing the entire statement, a reader only needs to read the first two words to know the test is verifying equality!

##### 4. assert.strictEqual #####

Take a look at the code below. Will these assertions throw errors?

```js
const a = 3;
const b = '3';
assert.ok(a == b);
assert.ok(a === b);
```

* The first assertion will not throw an error because it uses loose (`==`) equality. It performs a type conversion when comparing two things.
* The second will throw an error because it uses strict (`===`) equality. It returns `false` if the types differ.

If you need to be strict in evaluating equality, you can use assert.strictEqual().

* `assert.equal()` performs a `==` comparison
* `assert.strictEqual()` performs a `===` comparison

Compare the following code to the first example. This code performs the same verifications, but it is more *expressive*. Without parsing any logic, a reader would know the intention of your tests by reading the method names.

```js
const a = 3;
const b = '3';
assert.equal(a, b);
assert.strictEqual(a, b);
```

> July 2021 Update: the [`assert` documentation](https://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message) recommends always using `assert.strictEqual()` instead of `assert.equal()`.

##### 5. assert.deepEqual I #####

Do you think these assertions will throw errors?

```js
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};
assert.equal(a, b);
assert.strictEqual(a, b);
```

Both assertions will throw an error because distinct objects are not considered equal when using either loose or strict equality in JavaScript.

If you need to compare the values within two objects, you can use `assert.deepEqual()`. This method compares the values of each object using loose (`==`) equality.

The following code will not throw an error…

```js
assert.deepEqual(a, b);
```

…and you can confirm by manually comparing the `relation` and `age` properties of each object.

```js
a.relation == b.relation;
a.age == b.age;
```

##### 6. assert.deepEqual II #####

In the last exercise you used `deepEqual()` to compare the values of two objects with loose equality. Arrays are also objects, so `deepEqual()` also compares their values with loose equality.

```js
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, '3'];
 
assert.deepEqual(arr1, arr2); // No error
assert.deepEqual(arr1, arr3); // No error
```

If you’d like to learn more about `deepEqual()`, the documentation is available [here](https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message).

##### 7. Other assert methods #####

Node’s assert library includes more than the four methods covered so far. You can find them all in the [Node.js documentation](https://nodejs.org/api/assert.html).

Many of the methods can be implemented using other methods, like using assert.ok(1 == 1) to implement `assert.equal(1,1)`. Although this can be used for many types of tests, more descriptive functions like `assert.equal`, `assert.strictEqual`, and `assert.deepEqual` allow us to be more *expressive*: the expected functionality of the implementation code is clear to anyone reading your tests.

##### 8. Review: Write Expressive Tests #####

You can now write tests with Node’s assert library! In this lesson you learned to:

* Check for loose (`==`) equality with `assert.equal()`
* Check for strict (`===`) equality with `assert.strictEqual()`
* Check the equality of two object’s values with `assert.deepEqual()`
* Make your tests expressive by using different assert methods found in the [Node.js documentation](https://nodejs.org/api/assert.html).

As you continue to write tests, remember to always evaluate them against [the characteristics of a good test](https://www.codecademy.com/articles/tdd-u1-good-test): fast, complete, reliable, isolated, maintainable, and expressive. If you are meeting these six criteria, you are creating high quality test frameworks!

### 6. Learn TDD with Mocha ###

1. Introduction
2. Getting Into The Red I
3. Red To Green I
4. Refactor I
5. Getting into the Red II
6. Red to Green II
7. Refactor II
8. Edge Case
9. Review: Learn TDD with Mocha

#### 1. Introduction ####

Test-driven development (TDD) is a programming technique where you write test code before implementation code. Test code is written to define the desired behavior of your program. The test output provides descriptive error messages that inform the implementation of your program.

**The Red-Green-Refactor Cycle**

One of the driving forces of TDD is the red-green-refactor cycle. “Red” and “green” correspond to the color of the text that our test framework produces in the terminal while running the tests in our suite. Red signifies failing tests and green corresponds to passing tests.

Use this red, green, refactor diagram to help you as you read the steps below:

* Red — Write tests that describe the intended behavior of implementation code, and then compare developer expectations with the actual results of implementation code. The tests should always fail at first because the implementation code for the desired behavior will be written in response to the failing test.
* Green — Write just enough implementation code to make the test pass. The tests return green because the implementation code executes the intended behavior described by the test in the red phase.
* Refactor — Clean up and optimize code following [the characteristics of a good test](https://www.codecademy.com/article/tdd-u1-good-test). Refactoring involves actively considering test and implementation code and making revisions to the code base. The tests are passing and should continue to pass throughout this phase of the cycle.
In this lesson, you will use a test-driven development approach to program a method that calculates the sum of an array of numbers.

#### 2. Getting Into The Red I ####

When we use the red, green, refactor cycle, we:

1. Write test code that fails
2. Write implementation code to make the test pass
3. Consider refactoring the code

As you learn TDD, it may feel backward to intentionally write and run code that will return errors. In TDD we react to the error messages by continually re-writing our implementation code so it behaves in the way that our test specifies.

Imagine you were trying to create a method named `.initials`, inside of an object named `Phrase`.

The desired behavior of `.initials()` is that it should return the first letter of each word in a phrase that is passed to it as an argument.

##### Step 1: Write The Test #####

The first step to writing a test with Mocha is to use `describe` and `it` blocks to describe the desired behavior of your code. It’s very important for tests to thoroughly describe the desired behavior with natural language. This will create the most helpful error messages and make it easy for you to understand the behavior that your test failed in executing.

Before running our test, we would use an assert statement to compare the desired result of our method with the actual result.

*The first step in developing this method would be writing a test that could look like this:*

```js
describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      assert.strictEqual(Phrase.initials('Nelson Mandela'), 'NM');
    })
  })
})
```

##### Step 2: Run the test #####

If we ran this test we would get the following error message in the terminal:

![ReferenceError: Phrase is not defined](https://content.codecademy.com/courses/learn-tdd-testing-models/getting-into-the-red-I.png)

##### Step 3: The test fails (yea!) #####

The error message tells us that the error is related to the `Phrase.initials` code block. The `ReferenceError` tells us that the error is thrown because we don’t have a `Phrase` object. In the next exercise, we’ll show you the minimum possible code required to get this test to pass.

#### 3. Red To Green I ####

Congrats you’re in the red!

The red error messages describe the failures of our implementation code, so we can specifically address each issue that is preventing our test from passing.

Let’s look at the error message from our `Phrase.initials()` example in the last exercise:

![ReferenceError: Phrase is not defined](https://content.codecademy.com/courses/learn-tdd-testing-models/getting-into-the-red-I.png)

The error tells us that `Phrase is not defined`. This is because we have not created an object named `Phrase` yet. Let’s do that now:

```js
const Phrase = {}
```

When we run our test again the error would look like this:

![TypeError: Phrase.initials is not a function](https://content.codecademy.com/courses/learn-tdd-testing-models/red-to-green-I-1.png)

We’re still in the red, but we have a new error. The error says that `Phrase.initials` is not a function. That’s because we haven’t added an `.initials` method to the `Phrase` object. Let’s do that now:

```js
const Phrase = {
    initials() {
  }
}
```

Now when we run our test we get the following error:

![AssertionError:  undefined == 'NM'](https://content.codecademy.com/courses/learn-tdd-testing-models/red-to-green-I-2.png)

This is the first error that is referencing the actual behavior of the `.initials` method.

The assert statement we wrote looked like this:

```js
assert.strictEqual(Phrase.initials('Nelson Mandela'), 'NM');
```

We expected the result of passing `Nelson Mandela` to `Phrase.initials()` to be `NM`, but the actual result was `undefined`. This is because our method has not been programmed to return anything.

Following TDD, the next step would be writing the minimum possible implementation code to make our test pass. In this example, that would involve adding a line of implementation code so that `.initials()` returns our expected result, which is `NM`.

*The minimum possible implementation code to make the test pass:*

```js
const Phrase = {
  initials(phr) {
    return 'NM';
  }
}
```

Now our test would pass and we would be in the green. But that doesn’t mean our method is working as intended. If we entered “Jody Williams” our method would return ‘NM’, not ‘JW’. We will address this issue when it is time, but following TDD, now that we have progressed from the *red* to the *green*, we will move into the *refactor* phase.

#### 4. Refactor I ####

Once all your tests pass, you can confidently refactor your code — restructure and improve it without changing its external behavior. The confidence comes from knowing that our tests will catch us if we make a misstep.

When refactoring, it’s critical to test early and often — if our tests turn red, then we know that something went wrong while we were refactoring, and we can undo those changes.

A good place to start with refactoring is to restructure tests to reflect the four phases of a good test: *setup*, *exercise*, *verification*, *teardown*.

Let’s consider the test for our Phrase.initials method. We could rewrite the test with setup, exercise, and verification stages to make it more expressive and maintainable.

```js
describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      // Setup
      const inputName = 'Nelson Mandela';
      const expectedInitials = 'NM';
      // Exercise
      const result = Phrase.initials(inputName);
      // Verification
      assert.strictEqual(result, expectedInitials);
    });
  });
});
```

Here, we have re-written the same test, but we have created variables to hold the values that we will use to test the behavior of `.initials()`, and broken up the test into distinct phases, which are marked by the comments in the code.

Now that we have refactored our test code, we can refactor our implementation code. Our earlier code looked like this:

```js
const Phrase = {
  initials(phr) {
    return 'NM';
  }
}
```

In order to make our implementation code more expressive, we can change the name of the input argument of `.initials()` like this:

```js
const Phrase = {
  initials(inputName) {
    return 'NM';
  }
}
```

Refactoring will look different for each project and each iteration of the *red-green-refactor cycle*. In some cases you won’t need to refactor at all! Regardless, you should consider how you can improve your code and — although it is optional — it can set you up for success moving forward.

#### 5. Getting into the Red II ####

Congratulations, you have made it through your first red-green-refactor cycle using TDD! The next step is to repeat this cycle to build a more complete implementation of the `.initials` method.

Once you have a baseline test for your feature, you can start to write additional test cases that force you to write better implementation code.

Let’s consider the test suite for our `Phrase.initials` method. We have one test that checks if Phrase.initial(`"Nelson Mandela"`) returns `"NM"`.

```js
describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      const inputName = 'Nelson Mandela';
      const expectedInitials = 'NM';
      const result = Phrase.initials(inputName);
      assert.strictEqual(result, expectedInitials);
    });
  });
});
```

Let’s write another test that pushes us to implement a `Phrase.initials()` method that returns the first letter of each word for “Nelson Mandela” and a different name.

To do this, we will add another `it` block to our code, and inside the callback function we will again follow the setup, exercise, verification phases for writing tests. This time we will write a test based on the circumstance that the string passed to `.initials()` has three names: `'Juan Manuel Santos'`.

Here is what a second test for `.initials()` would look like:

```js
describe('Phrase', () => {
  describe('.initials', () => {
 
    . . .
 
    it('returns the initials of a name', () => {
      const nameInput = 'Juan Manuel Santos';
      const expectedInitials = 'JMS';
 
      const result = Phrase.initials(nameInput);
 
      assert.strictEqual(result, expectedInitials);
    });
  });
});
```

Although the new `it` block is similar to the existing example, the two together force you to implement a method that will return initials that pass both tests.

The idea of TDD is to continue building tests and going through the *red-green-refactor* process until you feel confident that your implementation code performs as expected.

#### 6. Red to Green II ####

Now that we have tests that cover more than one condition, it is time to program the actual behavior that we want our `.initials` method to execute.

Let’s think about the current state of `Phrase.initials()`. We have one passing test and one failing test that raises the following error when you run the test suite:

![AssertionError: 'NM' == 'JMS'](https://content.codecademy.com/courses/learn-tdd-testing-models/red-to-green-II-1.png)

This is not surprising, considering our current implementation always returns ‘NM.’

To write a more complete implementation, that could get us back into the green, we could write something like this:

```js
const Phrase = {
  initials(inputName) {
    // Create an empty array for initials
    const initials = [];
    // Create an array of strings 
    const words = inputName.split(" ");
    // Iterate through the array of strings and push the first character of each to array
    words.forEach((word) => {
      initials.push(word.charAt(0));
    });
    // Return the initials as one string
    return initials.join("");
  }
}
```

This implementation will successfully pass the tests we have written. Each additional test pushes us to build a complete implementation of the `.initials` method.

#### 7. Refactor II ####

Which means the next step is to refactor the code so that your tests are fast, complete, reliable, isolated, maintainable, and expressive. Also, you want to make sure your implementation code is descriptive and efficient.

Sometimes refactoring can take place in test and implementation code, either one, or neither. The purpose of the refactor phase is to think critically about the code you have and decide whether there is anything unnecessary, redundant, or that could be done more clearly or efficiently.

#### 8. Edge Case ####

Now that we have written and refactored a few tests, it’s time to consider *edge cases*.

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for.

Take our `Phrase.initials()` example from earlier. What happens if we pass `.initials()` a number instead of a string? We could write a test and then implementation code that responds to this behavior by raising an error message that instructs you to only use strings.

The test for throwing an error when a number is passed to `Phrase.initials()` would look like this:

```js
it('raises an error if the parameter passed in is not a string', () => {
  // Setup
  const nameInput = 14;   
  // Exercise
  const exercise = () => { Phrase.initials(nameInput) };
  // Verification
  assert.throws(exercise, /only use string/);        
})
```

After getting our intended error message we would write just enough implementation code to pass the test. Which in this case would be adding the following to Phrase.initials():

```js
if (typeof inputName !== "string") {
  throw new Error("ERROR: only use string");
}
```

The complete implementation code would now be back in the green and look like this:

```js
const Phrase = {
  initials(inputName) {
    if (typeof inputName !== "string") {
      throw new Error("ERROR: only use string");
    }
    const initials = [];
    const words = inputName.split(" ");
 
    words.forEach((word) => {
      initials.push(word.charAt(0));
    });
 
   return initials.join("");
  }
}
```

This is an example of creating a test for edge cases.

#### 9. Review: Learn TDD with Mocha ####

We have just covered Test Driven Development with Mocha.

At a high-level the process is:

* Write The Test — Start with a test describing the functionality we’d like to see.
* Fail The Test — Write code in response to the test that fails.
* Pass The Test — The tests fail and communicate feedback to developers through error messages. It’s our responsibility to read those messages, then respond by writing the minimum amount of code to address those messages.
* Refactor Your Code — See below.

**The development process is guided by the red-green-refactor cycle.**

**Red**

Write a test that covers the functionality you would like to see implemented. You don’t have to know what your code looks like at this point, you just have to know what it will do.

Run the test. You should see it fail. Most test runners will output red for failure and green for success. While we say “failure” do not take this negatively. It’s a good sign! By seeing the test fail first, we know that once we make it pass, our code works.

**Green**

Read the error message from the failing test, and write as little code as possible to fix the current error message. By only writing enough code to see our test pass, we tend to write less code as a whole. Continue this process until the test passes.

This may involve writing intermediary features covering lower level functionality which require their own Red, Green, Refactor cycle. The edge-case was an example of this.

Do not focus on code quality at this point. Be shameless! We simply want to get our new test passing.

**Refactor**

Clean up your code, reducing any duplication you may have introduced. This includes your code as well as your tests.

Treat your test suite with as much respect as you would your live code, as it can quickly become difficult to maintain if not handled with care. You should feel confident enough in the tests you’ve written that you can make your changes without breaking anything.

```js
// Index.js file
const Calculate = {
  sum(inputArray) {
    if (inputArray.length === 0) return 0;

    return inputArray.reduce((sum, value) => {
      return sum + value;
    });
  },
};

module.exports = Calculate;


// Index_test.js file
const assert = require("assert");
const Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      const expectedResult = 6;
      const inputArray = [1, 2, 3];

      const result = Calculate.sum(inputArray);

      assert.strictEqual(result, expectedResult);
    });

    it("returns the sum of a four item list", () => {
      const expectedResult = 22;
      const inputArray = [4, 6, 5, 7];

      const result = Calculate.sum(inputArray);

      assert.strictEqual(result, expectedResult);
    });

    it("returns zero when the array is empty", () => {
      const expectedResult = 0;
      const inputArray = [];

      const result = Calculate.sum(inputArray);

      assert.strictEqual(result, expectedResult);
    });
  });
});
```

### 7. Documentation Chai ###

[Chai](https://www.chaijs.com/guide/)

In this resource, you are presented with the documentation for the Chai assertion library. This is helpful if you want a comprehensive resource for this library that pairs with many JavaScript testing frameworks.

### 8. Advanced Testing Concepts ###

1. Code Coverage
2. Mocking in Tests
3. Spies with Sinon
4. Review: JavaScript Testing

#### 1. Code Coverage ####

In this article, you will learn about *code coverage* and *test coverage* – two metrics that organizations can use to determine the extent to which an application’s code has been tested – and why these metrics are useful.

##### What is Code Coverage? #####

Code coverage is the metric that measures the amount of application code that has been executed in testing, represented as a percentage. For example, if 90% of our code has been executed in our tests, then we would say that we have “90% code coverage”.

But what does it mean for code to be executed in a test? How rigorous does a test need to be in order to qualify as having executed the entirety of a program? And does 100% test coverage mean that a program is bug-free?

##### Code Coverage Criteria #####

Measuring code coverage is conducted using one or more criteria, depending on the organization’s standards for code coverage. Though this is not an exhaustive list, some key criteria to use when measuring code coverage include:

* *Function Coverage*: Has each function been called?
* *Statement Coverage*: Has each statement been executed?
* *Path Coverage*: Has every edge in the [control-flow graph](https://en.wikipedia.org/wiki/Control-flow_graph) been executed?
* *Condition Coverage*: Has each boolean sub-expression evaluated to be both true and false?

Let’s look at an example of how these criteria can be used to determine code coverage. Here we have a very simple function that returns the sum of two arguments, if two arguments have been provided, and returns `null` otherwise:

```js
function numSum(x, y) {
  if (x && y) {
    return (x + y);
  } else {
    return null;
  }
}
```

The most basic test of this function would include calling the function at least once, thus achieving 100% function coverage.

```js
numSum(1, 2);  // This should return 3
```

By executing the function only once and with the arguments above, we will execute some, but not all, of the lines of code in the function. So, we can test our function by calling it with arguments that will return `null`:

```js
numSum(1, 2);  // This should return 3
numSum(1, false);  // This should return null
```

With these two calls together, both paths in the `if` / `else` blocks are taken and both `return` statements are executed. Thus, we have 100% statement coverage and 100% path coverage.

Finally, to achieve 100% condition coverage, we need to call our function with arguments such that `x` and `y` each evaluate to `true` and `false` in the function’s `if` condition statement.

```js
numSum(1, 2);  // This should return 3
numSum(1, false);  // This should return null
numSum(false, 1);  // This should return null
numSum();   // This should return null
```

##### The 100% Code Coverage Myth #####

And there we have it, we’ve achieved 100% coverage in each of the four criteria! So, we’re done testing, right? Well, not quite.

Having 100% code coverage does not guarantee bug-free code – it simply validates the completeness of our tests using a given set of criteria relative to other test suites with lower code coverage. We still must be vigilant about writing robust test suites that specifically address both the intended use cases, and unintended edge cases, of our application.

For example, as written, the `numSum` function will concatenate numeric string arguments rather than performing addition.

```js
numSum('1', '2') // This will return '12' instead of 3
```

While there are [other coverage criteria](https://en.wikipedia.org/wiki/Code_coverage#Parameter_value_coverage) we can use to identify the full range of function parameters, code coverage is an insufficient metric to determine if our tests confirm the intended functionality of our program as defined by the end user’s requirements.

Instead, we should consider the code coverage criteria as a set of guidelines to help you develop intuition for testing your code while remaining determined to write robust test suites that are specific in targeting the various use cases of our programs.

##### Test Coverage #####

Another term you may hear with regards to testing is called test coverage. Test coverage differs from code coverage in that test coverage measures the percentage of the required features/specs that are tested, as opposed to the percentage of lines executed. These features/specs are typically defined in a [requirements document](https://en.wikipedia.org/wiki/Product_requirements_document) provided by a client or product designer.

Suppose you are building a mobile-native application that needs to work on phones using the Android and iOS operating systems but is not expected to work on desktop browsers. Accordingly, to achieve high test coverage, you will be expected to write tests for your application’s performance on Android and iOS but not on browsers.

Like code coverage, test coverage cannot guarantee that our program will not have unexpected behavior. However, the pursuit of high test coverage can lead us to identify bugs and unexpected behavior earlier on in the development process.

##### Conclusion #####

Code coverage measures the percentage of lines of code that are executed in a test while test coverage measures the percentage of required features that are tested. Though these metrics cannot guarantee bug-free code, by incorporating these two metrics into your test analysis, you can increase your confidence that your test suites are robust and that your products can satisfy your end users.

#### 2. Mocking in Tests ####

In this article, you’ll be introduced to the practice of mocking and how it can be used in unit and integration tests.

##### What is Mocking? #####

*Mocking* is the process of creating a fake version of an external service for testing purposes, particularly in unit tests and integration tests. Mocking is effective in testing individual units of code without relying on the functionality of other services or units such as APIs or databases.

> Another word that is used to describe this practice is stubbing. [While there is a difference](https://dev.to/snird/the-difference-between-mocks-and-stubs-explained-with-js-kkc), it’s not a very relevant difference in this scope and context.

Let’s say we’re testing a feature for a blog website which renders profile data (i.e. name and bio) of the author of a certain blog post. How might mocking help us better test this feature?

##### Mocking in Unit Tests #####

As mentioned above, mocking allows us to test a particular feature without needing to rely on other services or units. By removing dependencies, we are limiting the sources of potential bugs and unintended results to just the feature being tested.

In our blog application, the new feature has three steps:

* profile data must first be fetched from a database
* the data received must be parsed and formatted
* the formatted data is rendered

When unit testing how the data is displayed (step 3), we can skip the first two steps (fetching and formatting) by mocking the formatted data we need, allowing us to focus solely on testing how our feature renders that data. We can even mock bad or unexpected inputs to test how our feature might display an error message.

![Mocking in unit tests diagram](https://static-assets.codecademy.com/Courses/testing-concepts/mocking-in-unit-tests.png)

##### Mocking in Integration Tests #####

While it’s helpful to use mocks in unit tests, we should avoid using mocks in integration tests to better simulate interactions between internal services (though external services should remain mocked).

In our blog application, we use an intermediate function to format incoming data from the database for our new feature that will render the data. To test this integration, we would no longer mock how that raw data is formatted and then displayed. We would, however, still mock the raw data coming in from the database.

##### Summary #####

Mocks are helpful tools that allow us to more accurately test units of code by limiting the impacts of other potential sources for bugs to emerge from. Though they can be useful in unit testing, we should make sure to use mocks sparingly to ensure that integration of internal services can be tested comprehensively.

#### 3. Spies with Sinon ####

Step aside, James Bond! In this article, you’ll learn about spies in the context of testing and about the Sinon.js library.
##### What are Spies? #####

In testing, a *spy* is a function that observes and records information about another function’s calls including arguments, return value, the this value, and exceptions thrown (if any). The information that is observed by the spy can then be used in assertions for testing.

As an example, let’s say we are testing a top-secret application with a feature to receive a message, display for 5 seconds, then delete it. We can wrap a spy around this unit to keep track of how many messages were received, what the messages said, if any errors were thrown, etc. Using its stealthy powers of espionage, a spy won’t change anything about how the function operates, it will just observe what happens.

![(>)](https://static-assets.codecademy.com/Courses/testing-concepts/Spies-GIF/assets/spies5.png)

##### What is Sinon? #####

Sinon.js is a JavaScript library that includes standalone fakes, spies, and mocks that can be used in any unit testing framework. The [Sinon spies documentation](https://sinonjs.org/releases/latest/spies/) highlights the different information that can be pulled from spies.

##### How to Spy? #####

There are multiple ways to use a spy, they can be anonymous functions or they can wrap around existing methods in a program. You can see all the many ways to use spies in the Sinon spies documentation, but we’ll focus on one type in particular: wrapping methods.

Our spy will be wrapped around a method and, as we use the method in our tests, will observe everything that happens involving that method. We can think of a spy with a wiretap, taking notes on every interaction that method has.

The following example demonstrates some basics of using the `sinon.spy()` method to test the method of an object.

```js
const robot = {
  greet(name){  // Unit being tested
    return 'Hello ' + name;
  }
};
 
test('greet should return hello codey', () => {
  sinon.spy(robot, 'greet'); // Initialize the spy
  robot.greet('codey'); // Call the method
  expect(robot.greet.called).to.be.true;
  expect(robot.greet.calledWith('codey')).to.be.true;
  expect(robot.greet.returned('Hello codey')).to.be.true;
  robot.greet.restore(); // Remove spy from wrapped method
});
```

In the example above, the `sinon.spy()` method is used to wrap the robot object’s `.greet()` method. Doing so adds a number of useful properties and methods that allow us to monitor its behavior after we call `robot.greet('codey')`. Using a few of these methods, we test if the `.greet()` method…

* has been called using the `.called` property
* is called with the correct argument using the `.calledWith()` method
* returns what we expect it to return using the `.returned()` property

Finally, to ensure that the method returns to its original, un-spied-on state, we use the `.restore()` method.

There are too many properties and methods available to spied-on functions to cover in one article and even to commit to memory, so we recommend that you check out the [documentation](https://sinonjs.org/releases/latest/spies/) to find the right tools for your needs.

##### Summary #####

Spies are an incredibly useful tool that serves as a means for observing and recording information about how our methods are used in tests. Though there are a number of JavaScript libraries that provide spying functionality, Sinon.js is well known and used widely, including at Codecademy!

#### 4. Review: JavaScript Testing ####

Congratulations! The goal of this unit was to introduce you to the fundamentals of JavaScript testing and different testing methodologies. You’ll use Test Driven Development (TDD) as an example of how testing can influence software development. You will learn about different types of tests and how using tests will catch and identify issues with your code before you deploy it to users.

Having completed this unit, you are now able to:

* State the benefits of testing
* Identify different types of testing and methodologies
* Write tests using Mocha and Chai
* Apply TDD techniques to software development
* Describe how code coverage is used as a metric for testing
* Incorporate mocking and spies into tests

If you are interested in learning more about these topics, here are some additional resources:

* Article: [Hackernoon’s Introduction to Test Driven Development](https://hackernoon.com/introduction-to-test-driven-development-tdd-61a13bc92d92)

## Async JavaScript and HTTP Requests ##

In this Unit, you’ll learn about asynchronous JavaScript and how to use it in web development.
The goal of this unit is to learn about working with asynchronous JavaScript. This will allow you to eventually make HTTP requests to APIs (Application Programming Interfaces). Working with APIs will enable you to work with data stored on remote servers, including data from third-party sites (such as Instagram and Reddit).

After this unit, you will be able to:

* Write asynchronous JavaScript with async-await and promises syntax
* Explain the different types of HTTP requests
* Describe REST protocol
* Work with JSON data
* Make HTTP requests to external web APIs

You will put all of this knowledge into practice with an upcoming Portfolio Project. You can complete the Portfolio Project either in parallel with or after taking the prerequisite content — it’s up to you!

### Basics of Asynchronous JavaScript ###

1. General Asynchronous Programming Concepts
2. Introduction to Asynchronous JavaScript
3. Concurrency Model and Event Loop in JavaScript

#### 1. General Asynchronous Programming Concepts ####

Explore asynchronous programming and how it allows applications/apps to run operations in a non-sequential order.

##### What is Synchronous Code? #####

Before we define asynchronous code, let’s first start with synchronous code. We don’t even have to start with code, let’s use a real-life example.

Consider the building of a house. We would first need to first lay down the bricks that make our foundation. Then, we layer more bricks on top of each other, building the house from the ground up. We can’t skip a level and expect our house to be stable. Therefore, the laying of bricks happens *synchronously*, or in sequential order.

Likewise, synchronous code executes in sequential order — it starts with the code at the top of the file and executes line by line until it gets to the end of the file. This type of behavior is known as *blocking* (or blocking code) since each line of code cannot execute until the previous line finishes.

##### What is Asynchronous Code? ####

Let’s begin again with examining a real-life scenario, like baking a cake. We could start to preheat the oven and prepare our cake’s ingredients while we wait for our oven to heat up. The wait for the oven and the preparation of ingredients can happen at the same time, and thus these actions happen *asynchronously*.

Similarly, asynchronous code can be executed in parallel to other code that is already running. Without the need to wait for other code to finish before executing, our apps can save time and be more efficient. This type of behavior is considered *non-blocking*.

##### Asynchronous Code Under the Hood #####

For most programming languages, the ability to execute asynchronous code depends on the number of threads that an app has access to. We can think of a thread as a resource that a computer provides an app to do a task. Typically one thread allows for an app to complete one task. If we return to our house example, our computers thread tasks might look like this:

```text
Thread 1: build house foundation -> build walls -> construct floor 
```

A single thread could work for a synchronous task like building a house. However, in our cake baking example, our threads would have to look like this:

```text
Thread 1: preheat oven
Thread 2: prepare ingredients -> bake-cake
```

We won’t discuss in-depth how many threads an app can access but we should note that the more threads we have, the more tasks we can run concurrently. Also, in most modern-day computers, multithreading is achieved by having a CPU that has multiple cores or by some other technology.

#### Asynchronous Code in Web Development ####

Similar to how asynchronous behavior is useful in baking a cake, it can also be helpful for web programming. If we use synchronous (blocking) code in the browser, we might be stopping a user from being able to interact with a web app until the code is done running. This isn’t a great user experience. If our app takes a long time to load, our users might think that something’s wrong and might even opt to browse a different site!

However, if we opt for an asynchronous approach, we can cut down on the wait time. We’d load only the code that’s necessary for user interactions and then load up other bits of code in the background. With asynchronous code, we can create better user experiences and make apps that work more efficiently!

##### Review: Synchronous and Asynchronous Actions #####

Synchronous code and asynchronous code both have roles to play in programming. Understanding the concept of how asynchronous code works gives us an extra tool to make our apps work faster and more efficiently. We can avoid blocking users and give them a more seamless browsing experience. However, we would need to consider the number of threads that our programming language can access, which also depends on what resources our computer has. With this in mind, consider what type of code you need, is it synchronous or asynchronous?

#### 2. Introduction to Asynchronous JavaScript ####

##### Asynchronous Code in Web Development #####

JavaScript provides us with a seamless web browsing experience using asynchronous code. Sites often allow us to perform different interactions like scrolling through content, clicking to create a pop-up modal, typing out text, etc. When a site is set up to respond to different user actions at the same time, it’s likely that this site is using asynchronous JavaScript code. Such code takes into consideration how users might use the site without *blocking* them (forcing the user to wait for code from one interaction to finish before moving on to the next).

It is our job as developers to think about how much time it takes to complete a task and how to plan around that wait. Tasks like contacting the back-end to retrieve information, querying our database for user information, or making a request to an external server, like a 3rd party API, take varying amounts of time. Since we aren’t sure when we’ll get this information back, we can use asynchronous code to run these tasks in the background. Let’s see how JavaScript handles asynchronous code.

##### JavaScript and Asynchronous Code #####

JavaScript is a *single-threaded* language. This means it has a single thread that can carry out one task at a time. However, Javascript has what is known as the *event loop*, a specific design that allows it to perform asynchronous tasks even while only using a single thread (more on this later!). Let’s examine some examples of asynchronous code in Javascript!

##### Asynchronous Callbacks #####

One common example of asynchronicity in JavaScript is the use of asynchronous callbacks. This is a type of callback function that executes after a specific condition is met and runs concurrently to any other code currently running. Let’s look at an example:

```js
easterEgg.addEventListener('click', () => {
  console.log('Up, Up, Down, Down, Left, Right, Left, Right, B, A');
});
```

In the code above, the function passed as the second argument of `.addEventListener()` is an asynchronous callback — this function doesn’t execute until the `easterEgg` is clicked.

##### setTimeout #####

In addition to asynchronous callbacks, JavaScript provides a handful of built-in functions that can perform tasks asynchronously. One function that is commonly used is the [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) function.

With `setTimeout()` we can write code that tells our JavaScript program to wait a minimum amount of time before executing its callback function. Take a look at this example:

```js
setTimeout(() => {
  console.log('Delay the printing of this string, please.');
}, 1000);
```

Notice that `setTimeout()` takes 2 arguments, a callback function and a number specifying how long to wait before executing the function. In the example above, the function will print `'Delay the printing of this string, please.'` after `1000` milliseconds (or 1 second) have passed.

Since `setTimeout()` is non-blocking, we can be executing multiple lines of code at the same time! . Imagine if we had a program like this:

```js
setTimeout(() => {
  console.log('Delay the printing of this string, please.');
}, 1000);
console.log('Doing important stuff.');
console.log('Still doing important stuff.'); 

// Which outputs:

'Doing important stuff.'
'Still doing important stuff.' 
'Delay the printing of this string, please.'
```

If we take a closer look at the output, we’ll see that our `setTimeout()`‘s callback function didn’t execute until after our other very important `console.log()` statements were executed.

In web development, this means we can write code to wait for an event to trigger all while a user goes on interacting with our app. One such example could be if a user goes to a shopping site and gets notified that an item is up for sale and only for a limited time. Our asynchronous code could allow the user to interact with our site and when the sale timer expires, our code will remove the sale item.

##### setInterval() #####

Another common built-in function is [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) which also takes a callback function and a number specifying how often the callback function should execute. For example:

```js
setInterval(() => {
  alert('Are you paying attention???')
}, 300000)
```

The `setInterval()` would call the `alert()` function and show a pop-up message of `'Are you paying attention???'` every `300000` milliseconds (or 5 minutes). Note: Please don’t actually do this in your apps, thank you.

While we wait for our alert to chime in every 5 minutes, our users could still use our app! Note: Again, please don’t do this.

With `setInterval()`, we can programmatically create an alarm, a countdown timer, set the frequency of an animation, and so much more!

##### Review #####

Asynchronous code can really benefit sites and apps that rely on actions that take time. Even though JavaScript is a single-threaded language, it can still execute asynchronous code using the event loop. We took a look at some of the main ways javascript accomplishes synchronicity via callbacks, setTimeout(), and setInterval(). With this new knowledge, let’s continue to implement asynchronicity into our programs!

#### 3. Concurrency Model and Event Loop in JavaScript ####

If you’ve learned about asynchronous programming, you may wonder how your code can actually be non-blocking and move on to other tasks while it waits for asynchronous operations to complete. This article will remove some of the abstractions about how JavaScript can emulate concurrency by looking at what’s going on with the event loop behind the scenes. But what exactly is the event loop? And why do we need it?

##### Why Do We Need an Event Loop? #####

JavaScript is a single-threaded language, which means that two statements can’t be executed simultaneously. For example, if you have a `for` loop that takes a while to process, it’ll have to finish executing before the rest of your code runs. That results in blocking code. But as we already learned, we can run non-blocking code in JavaScript, which is where the Event Loop comes in. Input/output (I/O) is handled with events and callbacks so code execution can continue. Let’s look at an example of blocking and non-blocking code. Run this block of code yourself locally.

```js
console.log("I'm learning about");
 
for (let idx=0; idx < 999999999; idx++) {}
 
// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");
```

The example above has synchronous code with a long `for` loop. Here’s what happens:

* The code executes and “I’m learning about” is logged to the console.
* Next, a `for` loop executes and runs 999999999 loops, which results in blocking code. If you run this locally, this is where the pause happens.
* Finally, “the Event Loop” is logged.

Now let’s take a look at the non-blocking example. There are functions like `setTimeout()` that work differently thanks to the Event Loop. Run the code:

```ks
console.log("I’m learning about");
setTimeout(() => { console.log("Event Loop");}, 2000);
console.log("the");
```

In this case, the code snippet uses the `setTimeout()` function to demonstrate how JavaScript can be non-blocking with use of the event loop. Here’s what happens:

* A statement is logged.
* The `setTimeout()` function is executed.
* A third line of code executes and logs text: “the”.
* Finally, the `setTimeout()` function timer completes and additional text is logged: “Event Loop”.

In this case, JavaScript is still single-threaded, but the event loop is enabling something called concurrency.

##### Concurrency in JavaScript #####

Usually when we think about *concurrency* in programming, it means that two or more procedures are executed at the same time on the same shared resources. Since JavaScript is single-threaded, as we saw in the `for` loop example, we’ll never have that flavor of “true” concurrency. However, we can emulate concurrency using the event loop.

##### What Is the Event Loop? #####

At a high level, the event loop is a system for managing code execution. In the diagram, you can see an overview of how the parts that make up the event loop fit together.

We have data structures that we call the heap and the call stack, which are part of the JavaScript engine. The heap and call stack interact with Node and Web APIs, which pass messages back to the stack via an event queue. The event queue’s interaction with the call stack is managed by an event loop. All together, those parts maintain the order of code execution when we run asynchronous functions. Don’t worry about understanding what those terms mean yet–we’ll dive into them shortly.

Diagram of pieces that make up the browser runtime and JavaScript engine. A heap and stack are parts of the JavaScript runtime, and web APIs, the event queue, and the event loop all come together to process code asynchronously.

![(>)](https://static-assets.codecademy.com/Courses/Learn-JavaScript/Event-Loop-and-Concurrency/JavaScript-Engine-Diagram.png)

> Note: You can click on the image to enlarge it.

##### Understand the Components of the Event Loop #####

The *event loop* is made up of these parts:

* Memory Heap
* Call Stack
* Event Queue
* Event Loop
* Node or Web APIs

Let’s take a closer look at each part before we put it all together.

###### The Heap ######

The *heap* is a block of memory where we store objects in an unordered manner. JavaScript variables and objects that are currently in use are stored in the heap.

###### The Call Stack ######

The *stack*, or *call stack*, tracks what function is currently being run in your code.

When you invoke a function, a frame is added to the stack. Frames connect that function’s arguments and local variables from the heap. Frames enter the stack in a last in, first out (LIFO) order. In the code snippet below, a series of nested functions are declared, then `foo()` is called and logged.

```js
function foo() {
 return function bar() {
   return function baz() {
     return 'I love CodeCademy'
   }
 }
}
console.log(foo()()());
```

The function executing at any given point in time is at the top of the stack. In our example code, since we have nested functions, they will all be added to the stack until the innermost function has been executed. When the function finishes executing e.g. returns, its frame is removed from the stack. When we execute `console.log(foo()()())`, we’d see the stack build as follows:

![(>)](https://static-assets.codecademy.com/Courses/Learn-JavaScript/Event-Loop-and-Concurrency/call-stack-applet/assets/JS-Callstack-5.svg)

You might have noticed that `global()` is at the bottom of the stack–when you first initiate a program, the *global execution context* is added to the call stack, which contains the global variable and lexical environment. Each subsequent frame for a called function has a function execution context that includes the function’s lexical and variable environment.

So when we say the call stack tracks what function is currently being run in our code, what we are tracking is the current execution context. When a function runs to completion, it is popped off of the call stack. The memory, or the frame, is cleared.

##### The Event Queue #####

The *event queue* is a list of messages corresponding to functions that are waiting to be processed. In the diagram, these messages are entering the event queue from sources such as various web APIs or async functions that were called and are returning additional events to be handled by the stack. Messages enter the queue in a first in, first out (FIFO) order. No code is executed in the event queue; instead, it holds functions that are waiting to be added back into the stack.

##### The Event Loop #####

This event loop is a specific part of our overall event loop concept. Messages that are waiting in the event queue to be added back into the stack are added back via the event loop. When the call stack is empty, if there is anything in the event queue, the event loop can add those one at a time to the stack for execution.

1. First the event loop will poll the stack to see if it is empty.
2. It will add the first waiting message.
3. It will repeat steps 1 and 2 until the stack has cleared.

##### The Event Loop in Action #####

Now that we know all of the pieces of the event loop, let’s walk through some code to understand the event loop in action.

```js
console.log("This is the first line of code in app.js.");
 
function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);
console.log("This is the last line of code in app.js.");
```

1. `console.log("This is the first line of code in app.js.");` is added to the stack, executes, then pops off of the stack.
2. `setTimeout()` is added to the stack.
3. `setTimeout()`’s callback is passed to be executed by a web API. The timer will run for 3 seconds. After 3 seconds elapse, the callback function, `usingsetTimeout()` is pushed to the Event Queue.
4. The Event Loop, meanwhile, will check periodically if the stack is cleared to handle any messages in the Event Queue.
5. `console.log("This is the last line of code in app.js.");` is added to the stack, executes, then pops off of the stack.
6. The stack is now empty, so the event loop pushes usingsetTimeout onto the stack.
7. `console.log("I'm going to be queued in the Event Loop.");` is added to the stack, executes, gets popped
8. `usesetTimeout` pops off of the stack.

##### Summary #####

Thanks to the event loop, JavaScript is a single-threaded, event-driven language that can run non-blocking code asynchronously. The Event Loop can be summarized as: when code is executed, it is handled by the heap and call stack, which interact with Node and Web APIs. Those APIs enable concurrency and pass asynchronous messages back to the stack via an event queue. The event queue’s interaction with the call stack is managed by an event loop. All together, those parts maintain the order of code execution when we run asynchronous functions.

###### Describe in regard to the event loop what is happening when this code executes ######

```js
const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
}
 
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
 
getBeans();
console.log("Describe what happens with this `console.log()` statement as well.");
```

**Your response**

the first console.log statement (inside the async function getBeans) gets executed first then the other console.log statements have a timeout set for 1 sec therefore the last console.log statement will print followed by the one in the shopForBeans func and then the second one inside the getBeans func.

**Our answer**

The code will execute and log text in this order:

1. Heading to the store to buy beans…
2. I bought fava beans because they were on sale.
3. Great! I’m making fava beans for dinner tonight!

When the function `getBeans()` is called, `getBeans()` is added to the stack. The first `console.log()` statement is added to the stack, executes, and is popped off the stack. Next, the async function `shopForBeans()` is called and the return value is assigned to the variable value.

The response will be handled by the event queue and event loop and pushed back into the stack when it is cleared. The final log statement will then be added to the stack, log the argument, and pop off the stack.

The stack will be clear afterward, so the response event in the event queue will get added back to the stack and executed. The final two `console.log()` statements will then be added to the stack and popped off after logging their arguments.

### Learn JavaScript Syntax: Promises ###

**Introduction**

In web development, asynchronous programming is notorious for being a challenging topic.

An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. Asynchronous programming means that time-consuming operations don’t have to bring everything else in our programs to a halt.

There are countless examples of asynchronicity in our everyday lives. Cleaning our house, for example, involves asynchronous operations such as a dishwasher washing our dishes or a washing machine washing our clothes. While we wait on the completion of those operations, we’re free to do other chores.

Similarly, web development makes use of asynchronous operations. Operations like making a network request or querying a database can be time-consuming, but JavaScript allows us to execute other tasks while awaiting their completion.

This lesson will teach you how modern JavaScript handles asynchronicity using the `Promise` object, introduced with ES6. Let’s get started!

1. What is a Promise?
2. Constructing a Promise Object
3. The Node setTimeout() Function
4. Consuming Promises
5. Success and Failure Callback Functions
6. Using catch() with Promises
7. Chaining Multiple Promises
8. Avoiding Common Mistakes
9. Using Promise.all()
10. Review: Promises

#### 1. What is a Promise? ####

Promises are objects that represent the eventual outcome of an asynchronous operation. A `Promise` object can be in one of three states:

* **Pending**: The initial state— the operation has not completed yet.
* **Fulfilled**: The operation has completed successfully and the promise now has a *resolved value*. For example, a request’s promise might resolve with a JSON object as its value.
* **Rejected**: The operation has failed and the promise has a reason for the failure. This reason is usually an `Error` of some kind.
We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:

* **Pending**: The dishwasher is running but has not completed the washing cycle.
* **Fulfilled**: The dishwasher has completed the washing cycle and is full of clean dishes.
* **Rejected**: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.
If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

#### 2. Constructing a Promise Object ####

Let’s construct a promise! To create a new `Promise` object, we use the `new` keyword and the `Promise` constructor method:

```js
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

The `Promise` constructor method takes a function parameter called the *executor function* which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the `resolve()` and `reject()` functions. The `resolve()` and `reject()` functions aren’t defined by the programmer. When the `Promise` constructor runs, JavaScript will pass **its own** `resolve()` and `reject()` functions into the executor function.

* `resolve` is a function with one argument. Under the hood, if invoked, `resolve()` will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into `resolve()`.
* `reject` is a function that takes a reason or error as an argument. Under the hood, if invoked, `reject()` will change the promise’s status from `pending` to `rejected`, and the promise’s rejection reason will be set to the argument passed into `reject()`.

Let’s look at an example executor function in a `Promise` constructor:

```js
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```

Let’s break down what’s happening above:

* We declare a variable `myFirstPromise`
* myFirstPromise is constructed using `new` `Promise()` which is the `Promise` constructor method.
* `executorFunction()` is passed to the constructor and has two functions as parameters: `resolve` and `reject`.
* If someCondition evaluates to true, we invoke `resolve()` with the string `'I resolved!'`
* If not, we invoke `reject()` with the string `'I rejected!'`

In our example, `myFirstPromise` resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve synchronously to more easily understand how they work.

#### 3. The Node setTimeout() Function ####

Knowing how to construct a promise is useful, but most of the time, knowing how to *consume*, or use, promises will be key. Rather than constructing promises, you’ll be handling `Promise` objects returned to you as the result of an asynchronous operation. These promises will start off pending but settle eventually.

Moving forward, we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using `setTimeout()`. `setTimeout()` is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay. `setTimeout()` has two parameters: a callback function and a delay in milliseconds.

```js
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);
```

Here, we invoke `setTimeout()` with the callback function `delayedHello()` and `2000`. In at least two seconds `delayedHello()` will be invoked. But why is it “at least” two seconds and not exactly two seconds?

This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. Asynchronous JavaScript uses something called the event-loop. After two seconds, `delayedHello()` is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before `delayedHello()` is actually executed.

Let’s look at how we’ll be using `setTimeout()` to construct asynchronous promises:

```js
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();
```

In the example code, we invoked `returnPromiseFunction()` which returned a promise. We assigned that promise to the variable `prom`. Similar to the asynchronous promises you may encounter in production, `prom` will initially have a status of pending.

#### 4. Consuming Promises ####

The initial state of an asynchronous promise is `pending`, but we have a guarantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly named `.then()` method. It allows us to say, “I have a promise, when it settles, **then** here’s what I want to happen…”

In the case of our dishwasher promise, the dishwasher will run **then**:

* If our promise rejects, this means we have dirty dishes, and we’ll add soap and run the dishwasher again.
* If our promise fulfills, this means we have clean dishes, and we’ll put the dishes away.

`.then()` is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as *handlers*. When the promise settles, the appropriate handler will be invoked with that settled value.

* The first handler, sometimes called `onFulfilled`, is a *success handler*, and it should contain the logic for the promise resolving.
* The second handler, sometimes called `onRejected`, is a *failure handler*, and it should contain the logic for the promise rejecting.

We can invoke `.then()` with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an error, `.then()` will just return a promise with the same settled value as the promise it was called on. One important feature of `.then()` is that it always returns a promise. We’ll return to this in more detail in a later exercise and explore why it’s so important.

#### 5. Success and Failure Callback Functions ####

To handle a “successful” promise, or a promise that resolved, we invoke `.then()` on the promise, passing in a success handler callback function:

```js
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'
```

Let’s break down what’s happening in the example code:

* `prom` is a promise which will resolve to `'Yay!'`.
* We define a function, `handleSuccess()`, which prints the argument passed to it.
* We invoke `prom`‘s `.then()` function passing in our `handleSuccess()` function.
* Since `prom` resolves, `handleSuccess()` is invoked with `prom`‘s resolved value, `'Yay'`, so `'Yay'` is logged to the console.

With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both a success callback and a failure callback to `.then()`.

```js
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
```

Let’s break down what’s happening in the example code:

* `prom` is a promise which will randomly either resolve with `'Yay!'` or reject with `'Ohhh noooo!'`.
* We pass two handler functions to `.then()`. The first will be invoked with `'Yay!'` if the promise resolves, and the second will be invoked with `'Ohhh noooo!'` if the promise rejects.

> Note: The success callback is sometimes called the “success handler function” or the `onFulfilled` function. The failure callback is sometimes called the “failure handler function” or the `onRejected` function. 

#### 6. Using catch() with Promises ####

One way to write cleaner code is to follow a principle called *separation of concerns*. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, `.then()` will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one `.then()`, we can chain a second `.then()` with a failure handler to a first `.then()` with a success handler and both cases will be handled.

```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
```

Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: `.catch()`.

The `.catch()` function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using `.catch()` accomplishes the same thing as using a `.then()` with only a failure handler.

Let’s look at an example using `.catch()`:

```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

Let’s break down what’s happening in the example code:

* prom is a promise which randomly either resolves with `'Yay!'` or rejects with `'Ohhh noooo!'`.
* We pass a success handler to `.then()` and a failure handler to `.catch()`.
* If the promise resolves, `.then()`‘s success handler will be invoked with `'Yay!'`.
* If the promise rejects, `.then()` will return a promise with the same rejection reason as the original promise and `.catch()`‘s failure handler will be invoked with that rejection reason.

#### 7. Chaining Multiple Promises ####

One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on! Let’s illustrate this with another cleaning example, washing clothes:

We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, **then** we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, **then** we can fold them and put them away.

This process of chaining promises together is called *composition*. Promises are designed with composition in mind! Here’s a simple promise chain in code:

```js
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```

Let’s break down what’s happening in the example:

* We invoke a function `firstPromiseFunction()` which returns a promise.
* We invoke `.then()` with an anonymous function as the success handler.
* Inside the success handler we **return** a new promise— the result of invoking a second function, `secondPromiseFunction()` with the first promise’s resolved value.
* We invoke a second `.then()` to handle the logic for the second promise settling.
* Inside that `.then()`, we have a success handler which will log the second promise’s resolved value to the console.

In order for our chain to work properly, we had to `return` the promise `secondPromiseFunction(firstResolveVal)`. This ensured that the return value of the first `.then()` was our second promise rather than the default return of a new promise with the same settled value as the initial.

#### 8. Avoiding Common Mistakes ####

Promise composition allows for much more readable code than the nested callback syntax that preceded it. However, it can still be easy to make mistakes. In this exercise, we’ll go over two common mistakes with promise composition.

Mistake 1: Nesting promises instead of chaining them.

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
```

Let’s break down what’s happening in the above code:

* We invoke `returnsFirstPromise()` which returns a promise.
* We invoke `.then()` with a success handler.
* Inside the success handler, we invoke `returnsSecondValue()` with firstResolveVal which will return a new promise.
* We invoke a second `.then()` to handle the logic for the second promise settling all inside the first `then()`!
* Inside that second `.then()`, we have a success handler which will log the second promise’s resolved value to the console.

Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. Imagine if we were handling five or ten promises!

Mistake 2: Forgetting to return a promise.

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
```

Let’s break down what’s happening in the example:

* We invoke `returnsFirstPromise()` which returns a promise.
* We invoke `.then()` with a success handler.
* Inside the success handler, we create our second promise, but we forget to return it!
* We invoke a second `.then()`. It’s supposed to handle the logic for the second promise, but since we didn’t return, this `.then()` is invoked on a promise with the same settled value as the original promise!

Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to debug!

#### 9. Using Promise.all() ####

When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. What if we’re dealing with multiple promises, but we don’t care about the order? Let’s think in terms of cleaning again.

For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need **all** of these tasks to complete but not in any particular order. Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!

To maximize efficiency we should use *concurrency*, multiple asynchronous operations happening together. With promises, we can do this with the function `Promise.all()`.

`Promise.all()` accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

If every promise in the argument array resolves, the single promise returned from `Promise.all()` will resolve with an array containing the resolve value from each promise in the argument array.
If any promise from the argument array rejects, the single promise returned from `Promise.all()` will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as *failing fast*.

Let’s look at a code example:

```js
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

Let’s break down what’s happening:

* We declare myPromises assigned to invoking `Promise.all()`.
* We invoke `Promise.all()` with an array of three promises— the returned values from functions.
* We invoke `.then()` with a success handler which will print the array of resolved values if each promise resolves successfully.
* We invoke `.catch()` with a failure handler which will print the first rejection message if any promise rejects.

#### 10. Review: Promises ####

Awesome job! Promises are a difficult concept even for experienced developers, so pat yourself on the back. You’ve learned a ton about asynchronous JavaScript and promises. Let’s review:

* Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
* Promises can be in one of three states: pending, resolved, or rejected.
* A promise is settled if it is either resolved or rejected.
* We construct a promise by using the `new` keyword and passing an executor function to the `Promise` constructor method.
* `setTimeout()` is a Node function which delays the execution of a callback function using the event-loop.
* We use `.then()` with a success handler callback containing the logic for what should happen if a promise resolves.
* We use `.catch()` with a failure handler callback containing the logic for what should happen if a promise rejects.
* Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple `.then()`‘s and `.catch()`‘s.
* To use promise composition correctly, we have to remember to `return` promises constructed within a `.then()`.
* We should chain multiple promises rather than nesting them.
* To take advantage of concurrency, we can use `Promise.all()`.

### Learn JavaScript Syntax: Async Await ###

Introduction

Often in web development, we need to handle asynchronous actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an [event-loop](https://youtu.be/8aGhZQkoFbQ) which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.

Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. With ES6, JavaScript integrated native [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which allow us to write significantly more readable code. JavaScript is continually improving, and [ES8](https://en.wikipedia.org/wiki/ECMAScript#8th_Edition_-_ECMAScript_2017) provides a new syntax for handling our asynchronous action, *`async...await`*. The `async...await` syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

The `async...await` syntax is [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator). Both of these were already built in to the language. Despite this, `async...await` powerfully improves the readability and scalability of our code.

1. The async Keyword
2. The await Operator
3. Writing async Functions
4. Handling Dependent Promises
5. Handling Errors
6. Handling Independent Promises
7. Await Promise.all()
8. Review: Async Await

#### 1. The async Keyword ####

The `async` keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the `async` keyword. Then, we invoke that function.

```js
async function myFunc() {
  // Function body here
};
 
myFunc();
```

We’ll be using `async` function declarations throughout this lesson, but we can also create `async` function expressions:

```js
const myFunc = async () => {
  // Function body here
};
 
myFunc();
```

`async` functions always return a promise. This means we can use traditional promise syntax, like `.then()` and `.catch` with our `async` functions. An `async` function will return in one of three ways:

* If there’s nothing returned from the function, it will return a promise with a resolved value of `undefined`.
* If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
* If a promise is returned from the function, it will simply return that promise

```js
async function fivePromise() { 
  return 5;
}
 
fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5
```

In the example above, even though we return `5` inside the function body, what’s actually returned when we invoke `fivePromise()` is a promise with a resolved value of `5`.

#### 2. The await Operator ####

In the last exercise, we covered the `async` keyword. By itself, it doesn’t do much; `async` functions are almost always used with the additional keyword `await` inside the function body.

The await keyword can only be used inside an `async` function. `await` is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our `async` function until a given promise is resolved.

In most situations, we’re dealing with promises that were returned from functions. Generally, these functions are through a library, and, in this lesson, we’ll be providing them. We can `await` the resolution of the promise it returns inside an `async` function. In the example below, `myPromise()` is a function that returns a promise which will resolve to the string `"I am resolved now!"`.

```js
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}
 
asyncFuncExample(); // Prints: I am resolved now!
```

Within our `async` function, `asyncFuncExample()`, we use `await` to halt our execution until `myPromise()` is resolved and assign its resolved value to the variable `resolvedValue`. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.

#### 3. Writing async Functions ####

We’ve seen that the `await` keyword halts the execution of an `async` function until a promise is no longer pending. Don’t forget the `await` keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.

We’re going to explore this using the following function, which returns a promise that resolves to `'Yay, I resolved!'` after a 1 second delay:

```js
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
```

Now we’ll write two `async` functions which invoke `myPromise()`:

```js
async function noAwait() {
 let value = myPromise();
 console.log(value);
}
 
async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}
 
noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
```

In the first async function, `noAwait()`, we left off the `await` keyword before `myPromise()`. In the second, `yesAwait()`, we included it. The `noAwait()` function logs `Promise { <pending> }` to the console. Without the `await` keyword, the function execution wasn’t paused. The `console.log()` on the following line was executed before the promise had resolved.

Remember that the `await` operator returns the resolved value of a promise. When used properly in `yesAwait()`, the variable `value` was assigned the resolved value of the `myPromise()` promise, whereas in `noAwait()`, `value` was assigned the promise object itself.

#### 4. Handling Dependent Promises ####

The true beauty of `async...await` is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of `.then()` functions making sure to return correctly each one:

```js
function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}
```

Let’s break down what’s happening in the `nativePromiseVersion()` function:

* Within our function we use two functions which return promises: `returnsFirstPromise()` and `returnsSecondPromise()`.
* We invoke `returnsFirstPromise()` and ensure that the first promise resolved by using `.then()`.
* In the callback of our first `.then()`, we log the resolved value of the first promise, `firstValue`, and then return `returnsSecondPromise(firstValue)`.
* We use another `.then()` to print the second promise’s resolved value to the console.

Here’s how we’d write an `async` function to accomplish the same thing:

```js
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
```

Let’s break down what’s happening in our `asyncAwaitVersion()` function:

* We mark our function as `async`.
* Inside our function, we create a variable `firstValue` assigned `await` `returnsFirstPromise()`. This means `firstValue` is assigned the resolved value of the awaited promise.
* Next, we log `firstValue` to the console.
* Then, we create a variable `secondValue` assigned to `await returnsSecondPromise(firstValue)`. Therefore, `secondValue` is assigned this promise’s resolved value.
* Finally, we log `secondValue` to the console.

Though using the `async...await` syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the `async...await` version more closely resembles synchronous code, which helps developers maintain and debug their code. The `async...await` syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax. Let’s create some `async` functions with multiple `await` statements!

#### 5. Handling Errors ####

When `.catch()` is used with a long promise chain, there is no indication of where in the chain the error was thrown. This can make debugging challenging.

With `async...await`, we use `try...catch` statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!

```js
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
 
usingTryCatch();
```

Remember, since `async` functions return promises we can still use native promise’s `.catch()` with an `async` function

```js
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}
 
let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
```

This is sometimes used in the global scope to catch final errors in complex code.

#### 6. Handling Independent Promises ####

Remember that `await` halts the execution of our `async` function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our `async` function contains multiple promises which are not dependent on the results of one another to execute?

```js
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}
 
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
```

In the `waiting()` function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.

In our `concurrent()` function, both promises are constructed without using `await`. We then `await` each of their resolutions to print them to the console.

With our `concurrent()` function both promises’ asynchronous operations can be run simultaneously. If possible, we want to get started on each asynchronous operation as soon as possible! Within our `async` functions we should still take advantage of *concurrency*, the ability to perform asynchronous actions at the same time.

Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual `.then()` functions and avoid halting our execution with `await`.

#### 7. Await Promise.all() ####

Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to `await` a `Promise.all()`.

We can pass an array of promises as the argument to `Promise.all()`, and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.

```js
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
```

In our above example, we `await` the resolution of a `Promise.all()`. This `Promise.all()` was invoked with an argument array containing four promises (returned from required-in functions). Next, we loop through our `resultArray`, and log each item to the console. The first element in `resultArray` is the resolved value of the `asyncTask1()` promise, the second is the value of the `asyncTask2()` promise, and so on.

`Promise.all()` allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. `Promise.all()` also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. As soon as the first promise in the array rejects, the promise returned from `Promise.all()` will reject with that reason. As it was when working with native promises, `Promise.all()` is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.

#### 8. Review: Async Await ####

* `async...await` is syntactic sugar built on native JavaScript promises and generators.
* We declare an `async` function with the keyword `async`.
* Inside an `async` function we use the `await` operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
* `await` returns the resolved value of the awaited promise.
* We can write multiple `await` statements to produce code that reads like synchronous code.
* We use `try...catch` statements within our async functions for error handling.
* We should still take advantage of concurrency by writing `async` functions that allow asynchronous actions to happen in concurrently whenever possible.

### APIs and HTTP Requests ###

1. HTTP Requests
2. Introduction to Web APIs
3. What is REST?
4. What Is JSON?
5. Working with JSON in JavaScript

#### 1. HTTP Requests ####

Understand the basics of how your web browser communicates with the internet.

##### Background: #####

This page is generated by a web of HTML, CSS, and Javascript, sent to you by Codecademy via the internet. The internet is made up of a bunch of resources hosted on different servers. The term “resource” corresponds to any entity on the web, including HTML files, stylesheets, images, videos, and scripts. To access content on the internet, your browser must ask these servers for the resources it wants, and then display these resources to you. This protocol of requests and responses enables you view *this* page in your browser.

This article focuses on one fundamental part of how the internet functions: HTTP.

##### What is HTTP? #####

HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network.

The transfer of resources happens using TCP (Transmission Control Protocol). In viewing this webpage, TCP manages the channels between your browser and the server (in this case, codecademy.com). TCP is used to manage many types of internet connections in which one computer or device wants to send something to another. HTTP is the command language that the devices on both sides of the connection must follow in order to communicate.

##### HTTP & TCP: How it Works #####

When you type an address such as www.codecademy.com into your browser, you are commanding it to open a TCP channel to the server that responds to that URL (or Uniform Resource Locator, which you can read more about on [Wikipedia](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)). A URL is like your home address or phone number because it describes how to reach you.

In this situation, your computer, which is making the request, is called the client. The URL you are requesting is the address that belongs to the server.

Once the TCP connection is established, the client sends a HTTP *GET* request to the server to retrieve the webpage it should display. After the server has sent the response, it closes the TCP connection. If you open the website in your browser again, or if your browser automatically requests something from the server, a new connection is opened which follows the same process described above. GET requests are one kind of HTTP method a client can call. You can learn more about the other common ones (*POST, PUT and DELETE*) [in this article](https://www.codecademy.com/articles/what-is-rest).

Let’s explore an example of how GET requests (the most common type of request) are used to help your computer (the client) access resources on the web.

Suppose you want to check out the latest course offerings from http://codecademy.com. After you type the URL into your browser, your browser will extract the **`http`** part and recognize that it is the name of the network protocol to use. Then, it takes the domain name from the URL, in this case “codecademy.com”, and asks the internet Domain Name Server to return an Internet Protocol (IP) address.

Now the client knows the destination’s IP address. It then opens a connection to the server at that address, using the **`http`** protocol as specified. It will initiate a GET request to the server which contains the IP address of the host and optionally a data payload. The GET request contains the following text:

```text
GET / HTTP/1.1
Host: www.codecademy.com
```

This identifies the type of request, the path on www.codecademy.com (in this case, “/“) and the protocol “HTTP/1.1.” HTTP/1.1 is a revision of the first HTTP, which is now called HTTP/1.0. In HTTP/1.0, every resource request requires a separate connection to the server. HTTP/1.1 uses one connection more than once, so that additional content (like images or stylesheets) is retrieved even after the page has been retrieved. As a result, requests using HTTP/1.1 have less delay than those using HTTP/1.0.

The second line of the request contains the address of the server which is "www.codecademy.com". There may be additional lines as well depending on what data your browser chooses to send.

If the server is able to locate the path requested, the server might respond with the header:

```text
HTTP/1.1 200 OK
Content-Type: text/html
```

This header is followed by the content requested, which in this case is the information needed to render www.codecademy.com.

The first line of the header, **`HTTP/1.1 200 OK`**, is confirmation that the server understands the protocol that the client wants to communicate with (**`HTTP/1.1`**), and an HTTP status code signifying that the resource was found on the server. The second line, **`Content-Type: text/html`**, shows the type of content that it will be sending to the client.

If the server is not able to locate the path requested by the client, it will respond with the header:

```text
HTTP/1.1 404 NOT FOUND
```

In this case, the server identifies that it understands the HTTP protocol, but the **`404 NOT FOUND`** status code signifies that the specific piece of content requested was not found. This might happen if the content was moved or if you typed in the URL path incorrectly or if the page was removed. You can read more about the 404 status code, commonly called a 404 error, [here](https://www.codecademy.com/articles/http-errors-404).

##### An Analogy: #####

It can be tricky to understand how HTTP functions because it’s difficult to examine what your browser is actually doing. (And perhaps also because we explained it using acronyms that may be new to you.) Let’s review what we learned by using an analogy that could be more familiar to you.

Imagine the internet is a town. You are a client and your address determines where you can be reached. Businesses in town, such as Codecademy.com, serve requests that are sent to them. The other houses are filled with other clients like you that are making requests and expecting responses from these businesses in town. This town also has a crazy fast mail service, an army of mail delivery staff that can travel on trains that move at the speed of light.

Suppose you want to read the morning newspaper. In order to retrieve it, you write down what you need in a language called HTTP and ask your local mail delivery staff agent to retrieve it from a specific business. The mail delivery person agrees and builds a railroad track (connection) between your house and the business nearly instantly, and rides the train car labeled “TCP” to the address of the business you provided.

Upon arriving at the business, she asks the first of several free employees ready to fulfill the request. The employee searches for the page of the newspaper that you requested but cannot find it and communicates that back to the mail delivery person.

The mail delivery person returns on the light speed train, ripping up the tracks on the way back, and tells you that there was a problem “404 Not Found.” After you check the spelling of what you had written, you realize that you misspelled the newspaper title. You correct it and provide the corrected title to the mail delivery person.

This time the mail delivery person is able to retrieve it from the business. You can now read your newspaper in peace until you decide you want to read the next page, at which point, you would make another request and give it to the mail delivery person.

##### What is HTTPS? #####

Since your HTTP request can be read by anyone at certain network junctures, it might not be a good idea to deliver information such as your credit card or password using this protocol. Fortunately, many servers support HTTPS, short for HTTP Secure, which allows you to encrypt data that you send and receive. You can read more about HTTPS on [Wikipedia](https://en.wikipedia.org/wiki/HTTPS#Difference_from_HTTP).

HTTPS is important to use when passing sensitive or personal information to and from websites. However, it is up to the businesses maintaining the servers to set it up. In order to support HTTPS, the business must apply for a certificate from a [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority).

#### 2. Introduction to Web APIs ####

Learn what APIs are and how they’re useful tools for web development.
##### What are APIs? #####

An *Application Programming Interface* (*API*) is a software tool that makes it easier for developers to interact with another application to use some of that application’s functionality. Like tools in the physical world, APIs are built to solve specific, repeated, and potentially complex problems.

Imagine we needed to twist a screw into a piece of wood. We could try to take the screw and twist it in with our fingers, but that would be difficult and inefficient. Twisting one screw would be hard enough — having to do it multiple times would be near impossible! Instead, we could make the task much easier by using a tool that someone else created, in this case, a screwdriver! When used properly, the screwdriver can be used for one specific type of screw and can be reused for the same job over and over again!

Relating this analogy back to APIs, we probably don’t want to have to write up the same code for the same problems over and over again. If the right API exists to solve our problem, we could make it easier on ourselves and use the API instead. But, before we fully commit to using an API, we should go over some important considerations!

##### Types of APIs #####

There are two main categories of web APIs: browser APIs and 3rd party APIs.

*Browser APIs* are specific to writing code related to browsers and give developers access to information that the browser can also access. One example is the [geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) which allows the program to know where a user is when accessing our app. This specific API requires that the user grant permissions to the browser to access their geolocation information. There are also browser APIs for audio, cryptography, VR, and much more. To see a comprehensive list of browser APIs and how to interact with them, check out [MDN’s documentation of web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

*Third-party APIs* are apps that provide some type of functionality or information from a third-party, usually a company. For example, we could use the [OpenWeather API](https://openweathermap.org/) to get in-depth information about the weather in an area, forecasts, historical weather data, and more! On our own, we wouldn’t even have access to this data and we would certainly not want to write up this code ourselves just for one app!

##### Requesting Information from a Third-party API #####

Each API has a specific structure and protocol that we have to follow in order to gain access to its functionality.

##### Rules and Requirements #####

Organizations that maintain third-party APIs often set rules and requirements for how developers can interact with their APIs. For OpenWeather, we need to sign up for an account and generate a special token called an *API key* that grants our account the ability to make API requests. These API keys are unique to individual accounts and should be kept secret. OpenWeather provides some free functionality and some paid functionality. So before committing to a third-party API, check out their specifications which can often be found in the API documentation. Here’s OpenWeather’s documentation to look over as an example.

##### Making Requests #####

Some of an API’s specifications relate to making a *request* for data. These specifications could include more parameters for specific information or the inclusion of an API key. For example, when using the OpenWeather API, we need to provide more information to search for weather information — such information could include: the name of a city, time of day, the type of forecast, etc. These specifications for making a request can also be found in the API documentation.

##### Response Data #####

After we make a successful API request, the API sends back data. Many APIs format their data using [JavaScript Object Notation (JSON)](https://www.codecademy.com/article/what-is-json) which looks like a JavaScript object. Here’s a quick example of what JSON data might look like:

```js
{ 
  "temperature" : { 
     "celcius" : 25,
  },
  "city": "chicago", 
}
```

It’s then up to us how to determine how to *consume*, or use, this information in our apps. If we got back that sample JSON above, we could parse out the temperature information and display it on our app.

##### Review: Response Data #####

Congrats, we’ve now gone through the basics of web APIs! Here’s a quick recap of what we covered:

* With web APIs, we have a tool that we can use to access the functionality and data of another application.
* There are two main types of APIs: browser and third-party.
  * Browser APIs require specific syntax and permissions.
  * Third-party APIs have their own rules and requirements set by the organizations that maintain them.
* When making a request to API, we might have to supply more details about what information we want.
* If we get a successful response, we still have to decide how to consume the response data.

That’s a lot to take in, but knowing that these tools exist opens up more possibilities for what we can do with our apps!

#### 3. What is REST? ####

Learn about the REST (Representational State Transfer) paradigm and how rest architecture streamlines communication between web components.
REST API Model

![REpresentational State Transfer](https://raw.githubusercontent.com/Codecademy/articles/0b631b51723fbb3cc652ef5f009082aa71916e63/images/rest_api.svg)

##### REpresentational State Transfer #####

REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server. We will go into what these terms mean and why they are beneficial characteristics for services on the Web. Pay close attention: If you’re looking for a career in tech, you may be asked to define rest during an interview.

##### Separation of Client and Server #####

In the REST architectural style, the implementation of the client and the implementation of the server can be done independently without each knowing about the other. This means that the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client.

As long as each side knows what format of messages to send to the other, they can be kept modular and separate. Separating the user interface concerns from the data storage concerns, we improve the flexibility of the interface across platforms and improve scalability by simplifying the server components. Additionally, the separation allows each component the ability to evolve independently.

By using a REST interface, different clients hit the same REST endpoints, perform the same actions, and receive the same responses.

##### Statelessness #####

Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa. In this way, both the server and the client can understand any message received, even without seeing previous messages. This constraint of statelessness is enforced through the use of *resources*, rather than *commands*. Resources are the nouns of the Web - they describe any object, document, or *thing* that you may need to store or send to other services.

Because REST systems interact through standard operations on resources, they do not rely on the implementation of interfaces.

These constraints help RESTful applications achieve reliability, quick performance, and scalability, as components that can be managed, updated, and reused without affecting the system as a whole, even during operation of the system.

Now, we’ll explore how the communication between the client and server actually happens when we are implementing a RESTful interface.

##### Communication between Client and Server #####

In the REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests. Let’s take a look at the standard ways to make requests and send responses.

##### Making Requests #####

REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

* an HTTP verb, which defines what kind of operation to perform
* a *header*, which allows the client to pass along information about the request
* a path to a resource
* an optional message body containing data

##### HTTP Verbs #####

There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

* GET — retrieve a specific resource (by id) or a collection of resources
* POST — create a new resource
* PUT — update a specific resource (by id)
* DELETE — remove a specific resource by id

You can learn more about these HTTP verbs in the following Codecademy article:

* [What is CRUD?](https://www.codecademy.com/articles/what-is-crud)

##### Headers and Accept parameters #####

In the header of the request, the client sends the type of content that it is able to receive from the server. This is called the **`Accept`** field, and it ensures that the server does not send data that cannot be understood or processed by the client. The options for types of content are MIME Types (or Multipurpose Internet Mail Extensions, which you can read more about in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

MIME Types, used to specify the content types in the **`Accept`** field, consist of a **`type`** and a **`subtype`**. They are separated by a slash (/).

For example, a text file containing HTML would be specified with the type **`text/html`**. If this text file contained CSS instead, it would be specified as **`text/css`**. A generic text file would be denoted as **`text/plain`**. This default value, **`text/plain`**, is not a catch-all, however. If a client is expecting **`text/css`** and receives **`text/plain`**, it will not be able to recognize the content.

##### Other types and commonly used subtypes: #####

* **`image — image/png, image/jpeg, image/gif`**
* **`audio — audio/wav, audio/mpeg`**
* **`video — video/mp4, video/ogg`**
* **`application — application/json, application/pdf, application/xml, application/octet-stream`**

For example, a client accessing a resource with id 23 in an articles resource on a server might send a GET request like this:

```text
GET /articles/23
Accept: text/html, application/xhtml
```

The **`Accept`** header field in this case is saying that the client will accept the content in **`text/html`** or **`application/xhtml`**.

##### Paths #####

Requests must contain a path to a resource that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on.

Conventionally, the first part of the path should be the plural form of the resource. This keeps nested paths simple to read and easy to understand.

A path like `fashionboutique.com/customers/223/orders/12` is clear in what it points to, even if you’ve never seen this specific path before, because it is hierarchical and descriptive. We can see that we are accessing the order with `id` 12 for the customer with `id` 223.

Paths should contain the information necessary to locate a resource with the degree of specificity needed. When referring to a list or collection of resources, it is not always necessary to add an `id`. For example, a `POST` request to the `fashionboutique.com/customers` path would not need an extra identifier, as the server will generate an `id` for the new object.

If we are trying to access a single resource, we would need to append an `id` to the path. For example: `GET fashionboutique.com/customers/:id` — retrieves the item in the `customers` resource with the `id` specified. `DELETE fashionboutique.com/customers/:id` — deletes the item in the customers resource with the `id` specified.

##### Sending Responses #####

###### Content Types ######

In cases where the server is sending a data payload to the client, the server must include a `content-type` in the header of the response. This `content-type` header field alerts the client to the type of data it is sending in the response body. These content types are MIME Types, just as they are in the `accept` field of the request header. The `content-type` that the server sends back in the response should be one of the options that the client specified in the `accept` field of the request.

For example, when a client is accessing a resource with `id` 23 in an `articles` resource with this GET Request:

```text
GET /articles/23 HTTP/1.1
Accept: text/html, application/xhtml
```

The server might send back the content with the response header:

```text
HTTP/1.1 200 (OK)
Content-Type: text/html
```

This would signify that the content requested is being returned in the response body with a `content-type` of `text/html`, which the client said it would be able to accept.

##### Response Codes #####

Responses from the server contain status codes to alert the client to information about the success of the operation. As a developer, you do not need to know every status code (there are [many](http://www.restapitutorial.com/httpstatuscodes.html) of them), but you should know the most common ones and how they are used:

|Status code      |	Meaning  |
|-----------------|----------|
|200 (OK)	        |  This is the standard response for successful HTTP requests.
|201 (CREATED)	  | This is the standard response for an HTTP request that resulted in an item being successfully created.
|204 (NO CONTENT) | 	This is the standard response for successful HTTP requests, where nothing is being returned in the response body.
|400 (BAD REQUEST)| 	The request cannot be processed because of bad request syntax, excessive size, or another client error.
|403 (FORBIDDEN)	| The client does not have permission to access this resource.
|404 (NOT FOUND)  | 	The resource could not be found at this time. It is possible it was deleted, or does not exist yet.
|500 (INTERNAL SERVER ERROR)	|The generic answer for an unexpected failure if there is no more specific information available.

For each HTTP verb, there are expected status codes a server should return upon success:

* **GET** — return 200 (OK)
* **POST** — return 201 (CREATED)
* **PUT** — return 200 (OK)
* **DELETE** — return 204 (NO CONTENT) If the operation fails, return the most specific status code possible corresponding to the problem that was encountered.

##### Examples of Requests and Responses #####

Let’s say we have an application that allows you to view, create, edit, and delete customers and orders for a small clothing store hosted at `fashionboutique.com`. We could create an HTTP API that allows a client to perform these functions:

If we wanted to view all `customers`, the request would look like this:

```text
GET http://fashionboutique.com/customers
Accept: application/json
```

A possible response header would look like:

```text
Status Code: 200 (OK)
Content-type: application/json
```

followed by the `customers` data requested in `application/json` format.

Create a new customer by posting the data:

```json
POST http://fashionboutique.com/customers
Body:
{
  “customer”: {
    “name” = “Scylla Buss”,
    “email” = “scylla.buss@codecademy.org”
  }
}
```

The server then generates an `id` for that object and returns it back to the client, with a header like:

```text
201 (CREATED)
Content-type: application/json
```

To view a single customer we `GET` it by specifying that customer’s `id`:

```text
GET http://fashionboutique.com/customers/123
Accept: application/json
```

A possible response header would look like:

```text
Status Code: 200 (OK)
Content-type: application/json
```

followed by the data for the `customer` resource with `id` 23 in `application/json` format.

We can update that `customer` by `PUT` ting the new data:

```text
PUT http://fashionboutique.com/customers/123
Body:
{
  “customer”: {
    “name” = “Scylla Buss”,
    “email” = “scyllabuss1@codecademy.com”
  }
}
```

A possible response header would have `Status Code: 200 (OK)`, to notify the client that the item with `id` 123 has been modified.

We can also `DELETE` that customer by specifying its `id`:

```text
DELETE http://fashionboutique.com/customers/123
```

The response would have a header containing `Status Code: 204 (NO CONTENT)`, notifying the client that the item with `id` 123 has been deleted, and nothing in the body.

##### Practice with REST #####

Let’s imagine we are building a photo-collection site. We want to make an API to keep track of users, venues, and photos of those venues. This site has an `index.html` and a `style.css`. Each user has a username and a password. Each photo has a venue and an owner (i.e. the user who took the picture). Each venue has a name and street address. Can you design a REST system that would accommodate:

* storing users, photos, and venues
* accessing venues and accessing certain photos of a certain venue

Start by writing out:

* what kinds of requests we would want to make
* what responses the server should return
* what the `content-type` of each response should be

##### Possible Solution - Models #####

```json
{
  “user”: {
    "id": <Integer>,
    “username”: <String>,
    “password”:  <String>
  }
}
```

```json
{
  “photo”: {
    "id": <Integer>,
    “venue_id”: <Integer>,
    “author_id”: <Integer>
  }
}
```

```json
{
  “venue”: {
    "id": <Integer>,
    “name”: <String>,
    “address”: <String>
  }
}
```

##### Possible Solution - Requests/Responses #####

###### GET Requests ######

Request- `GET /index.html` Accept: `text/html` Response- 200 (OK) Content-type: `text/html`

Request- `GET /style.css` Accept: `text/css` Response- 200 (OK) Content-type: `text/css`

Request- `GET /venues` Accept:`application/json` Response- 200 (OK) Content-type: `application/json`

Request- `GET /venues/:id` Accept: `application/json` Response- 200 (OK) Content-type: `application/json`

Request- `GET /venues/:id/photos/:id` Accept: `application/json` Response- 200 (OK) Content-type: `image/png`

###### POST Requests ######

Request- `POST /users` Response- 201 (CREATED) Content-type: `application/json`

Request- `POST /venues` Response- 201 (CREATED) Content-type: `application/json`

Request- `POST /venues/:id/photos` Response- 201 (CREATED) Content-type: `application/json`

###### PUT Requests ######

Request- `PUT /users/:id` Response- 200 (OK)

Request- `PUT /venues/:id` Response- 200 (OK)

Request- `PUT /venues/:id/photos/:id` Response- 200 (OK)

###### DELETE Requests ######

Request- `DELETE /venues/:id` Response- 204 (NO CONTENT)

Request- `DELETE /venues/:id/photos/:id` Response- 204 (NO CONTENT)

#### 4. What Is JSON? ####

A brief guide to understanding JSON and its use cases.

##### Introduction #####

In a world inundated with data, it is becoming more important to know how to work with a variety of data. As programmers, we need to be able to transfer our populated data structures from any language we choose to a format that is recognizable and readable by other languages and platforms. Fortunately for us, there exists such a data-exchange format.

##### What is JSON? #####

JSON, or JavaScript Object Notation, is a popular, language-independent, standard format for storing and exchanging data. Adopted by ECMA International, an industry association founded in 1961 to standardize information and communication systems, [JSON](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) has become the de facto standard that facilitates storing and sending data between all programming languages.

##### Common Uses of JSON #####

JSON is heavily used to facilitate data transfer in web applications between a client, such as a web browser, and a server. A typical example where such data transfer occurs is when you fill out a web form. The form data is converted from HTML to JavaScript objects to JSON objects and sent to a remote web server for processing. These transactions could be as simple as entering a search engine query to a multi-page job application.

When companies make their data public for other applications, like Spotify sharing its music library or Google sharing its map data, the information is formatted in JSON. This way, any application, regardless of language, can collect and parse the data.

Some of the popular web APIs that utilize JSON in data exchanges are:

* [Google Maps](https://developers.google.com/maps/documentation/geocoding/start)
* [Google Auth 2.0 Authentication](https://developers.google.com/identity/protocols/oauth2/service-account)
* [Facebook Social Graph API](https://developers.facebook.com/docs/messenger-platform/reference/send-api)
* [Spotify Music Web API](https://developer.spotify.com/documentation/web-api/)
* [LinkedIn Profile API](https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api)

##### JSON Syntax #####

Since JSON is derived from the JavaScript programming language, its appearance is similar to that of JavaScript objects.

A sample JSON object is represented as follows:

```json
{
  "student": {
    "name": "Rumaisa Mahoney",
    "age": 30,
    "fullTime": true,
    "languages": [ "JavaScript", "HTML", "CSS" ],
    "GPA": 3.9,
    "favoriteSubject": null
  }
}
```

Note the following syntax rules for JSON:

* The curly braces, `{..}`, hold objects.
* The square brackets, `[..]`, hold arrays.
* Data is stored in name-value pairs separated by a colon, `:`.
* Every name-value pair is separated from another pair by a comma, `,`. Similarly, every item in an array is delimited by a comma as well. [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are forbidden.
* JSON property names must be in double-quoted `(" ")` text even though JavaScript names do not hold by this stringency.

##### JSON Data Types #####

A JSON data type must be one of the following:

* string (double-quoted)
* number (integer or floating point)
* object (name-value pair)
* array (comma-delimited)
* boolean (true or false)
* null

Try to find all the data types in this JSON example:

```json
{
  "student": {
    "name": "Rumaisa Mahoney",
    "age": 30,
    "fullTime": true,
    "languages": [ "JavaScript", "HTML", "CSS" ],
    "GPA": 3.9,
    "favoriteSubject": null
  }
}
```

Notably, JSON doesn’t cover every data type. Types that are not represented in JSON such as dates can be stored as a string and converted to a language-specific data structure. Here’s an acceptable internationally-recognized date format in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html):

```date
"2014-01-01T23:28:56.782Z"
```

This above format contains parts which resemble a date and time. However, as a string, it is hard for a programming language to use as is. Conveniently, every programming language has built-in JSON facilities to convert this string into a more readable and usable format, such as:

```date
Wed Jan 01 2014 13:28:56 GMT-1000 (Hawaiian Standard Time)
```

This pretty much covers the basic description of JSON, its popularity, and its syntax. Congratulations on reaching this milestone!

#### 5. Working with JSON in JavaScript ####

A user guide on how to work with JSON in Javascript.

##### Introduction #####

JSON, short for JavaScript Object Notation, is a language-independent data format that has been accepted as an industry standard. Because it is based on the JavaScript programming language, JSON’s syntax looks similar to a JavaScript object with [minor differences](https://www.codecademy.com/articles/what-is-json). We’ll take a look at the subtle difference between them. Later on, we’ll learn how to parse JSON and extract its content as JavaScript. Lastly, we’ll learn how to write a JSON object with JavaScript. So, let’s begin.

##### JSON Object vs. JavaScript Object #####

Here is an example JSON object of a person named Kate, who is 30 years old, and whose hobbies include reading, writing, cooking, and playing tennis:

```json
{
  "person": {  
    "name": "Kate",  
    "age": 30,  
    "hobbies": [ "reading", "writing", "cooking", "tennis" ] 
  }
}
```

Represented as a JavaScript object literal, the same information would appear as:

```js
{  
  person: {
    name: 'Kate',  
    age: 30,  
    hobbies: [ 'reading', 'writing', 'cooking', 'tennis' ] 
  }
}
```

Notice a slight difference between the two formats.

* The name portion in each JSON name-value pair and all string values must be enclosed in double-quotes while this is optional in JavaScript.
* JavaScript accepts string values that are single or double-quoted, however, there exists JavaScript [coding guidelines](https://en.wikipedia.org/wiki/Programming_style) that prefer one style over another.

#####  Reading a JSON String #####

In a typical web application, the JSON data that we receive from a web request comes in the form of a string. At other times, JSON data is stored in a file that is used for authentication, configuration, or database storage. These files typically have a .json extension, and they have to be opened in order to retrieve the JSON string in it. In either case, we will need to convert the string to a format that we can use in order to access its parts. Each programming language has its own mechanism to handle this conversion. In JavaScript, for example, we have a built-in JSON class with a method called **`.parse()`** that takes a JSON string as a parameter and returns a JavaScript object.

The following code converts a JSON string object, **`jsonData`**, into a JavaScript object, `jsObject`, and logs `jsObject` on the console.

```js
const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
 
const jsObject = JSON.parse(jsonData);
 
console.log(jsObject);
```

This will print out `jsObject` as follows:

```js
{
  book: { name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
}
```

Once we have converted a JSON object to a JavaScript object, we can access the individual properties inside the JavaScript object. To access a value inside a JavaScript object based on its property name, we can either use dot notation, (`.propertyName`), or bracket notation, (`['propertyName']`).

For instance, to retrieve the `book` property of `jsObject` we could do the following:

```js
// Using the dot notation
const book = jsObject.book;    
console.log(book);
console.log(book.name, book.price, book.inStock);
 
// Using the bracket notation
const book2 = jsObject['book'];
console.log(book2);
console.log(book2["name"], book2["price"], book2["inStock"]);
```

Both ways of accessing the book property return the same output:

```js
{ name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
JSON Primer 29.99 true
```

As you can see, after parsing `jsonData` into a JavaScript object that’s stored in the variable, `book`, you can treat `book` like any other object! That means you can access property values, as shown above, edit existing values, iterate over the keys and values, etc…

##### Writing a JSON String #####

Before we can send off our data across the web, we need to convert them to a JSON string. In JavaScript, we would use the built-in `JSON` class method, `.stringify()` to transform our JavaScript object to a JSON string.

The following code converts a JavaScript object, `jsObject`, into a `JSON` string, `jsonData`.

```js
const jsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
const jsonData = JSON.stringify(jsObject);
console.log(jsonData);
```

This will display the following output:

```js
{ "book": "JSON Primer", "price": 29.99, "inStock": true, "rating": null }
```

##### Review: Working with JSON in JavaScript #####

* Compare JSON with JavaScript’s Object literal syntax.
* Convert a JSON string into a JavaScript Object.
* Convert a JavaScript Object into a JSON string.

Congratulations on reaching this milestone! With a little more practice, you will soon handle JSON in Javascript with ease.

### Learn JavaScript Syntax: Requests ###

1. REQUESTS WITH FETCH API
2. Intro to GET Requests using Fetch
3. Making a GET Request
4. Handling a GET Request
5. Intro to POST Requests using Fetch
6. Making a POST Request
7. Handling a POST Request
8. Intro to async GET Requests
9. Making an async GET Request
10. Intro to async POST Requests
11. Making an async POST Request
12. Review: Requests with Fetch API
13. Review: Async JavaScript and HTTP Requests

#### 1. REQUESTS WITH FETCH API ####

**Introduction to Requests with ES6**

Have you ever wondered what happens after you click a “Submit” button on a web page? For instance, if you are submitting information, where does the information go? How is the information processed? The answer to the previous questions revolves around [HTTP requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE. In this lesson, we’ll cover GET and POST requests.

With a GET request, we’re retrieving, or *getting*, information from some source (usually a website). For a POST request, we’re *posting* information to a source that will process the information and send it back.

JavaScript uses an [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We will go into event loops in more detail in the [Concurrency Model and Event Loop in JavaScript](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/javascript-concurrency-model-and-event-loop) article.

To make asynchronous event handling easier, promises were introduced in ES6 JavaScript.

#### 2. Intro to GET Requests using Fetch ####

The first type of requests we’re going to tackle is GET requests using `fetch()`.

The `fetch()` function:

* Creates a request object that contains relevant information that an API needs.
* Sends that request object to the API endpoint provided.
* Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

![(>)](https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/fetch%20GET%20transparent.svg)

Let’s walk through the boilerplate code above for using `fetch()` to create a GET request step by step.

First, call the `fetch()` function and pass it a URL as a string for the first argument, determining the endpoint of the request.

```js
fetch('https://api-to-call.com/endpoint')
```

The`.then()` method is chained at the end of the `fetch()` function and in its first argument, the response of the GET request is passed to the callback arrow function. The `.then()` method will fire only after the promise status of `fetch()` has been resolved.

Inside the callback function, the `ok` property of the response object returns a Boolean value. If there are no errors, `response.ok` will be true and the code will return `response.json()`.

If `response.ok` is a falsy value, our code will `throw` an error.

```js
throw new Error('Request failed!');
```

A second argument passed to `.then()` will be another arrow function that will be triggered when the promise is rejected. It takes a single parameter, `networkError`. This object logs the `networkError` if we could not reach the endpoint at all (e.g., the server is down).

A second `.then()` method will run after the previous `.then()` method has finished running without error. It takes jsonResponse, which contains the returned `response.json()` object from the previous `.then()` method, as its parameter and can now be handled, however we may choose.

#### 3. Making a GET Request ####

In the previous exercise, we went over the boilerplate code for a GET request using `fetch()` and `.then()`. In this exercise, we’re going to apply that code to access the [Datamuse API](https://www.datamuse.com/api/) and render the fetched information in the browser.

The Datamuse API is a word-finding query engine for developers. It can be used in apps to find words that match a given set of constraints that are likely in a given context.

If the request is successful, we’ll get back an array of words that sound like the word we typed into the input field.

We may get some errors as we complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, we should be getting no errors.

#### 4. Handling a GET Request ####

In the previous exercise, we called the `fetch()` function to make a GET request to the Datamuse API endpoint. Then, you chained a `.then()` method and passed two callback functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

In this exercise, we will chain another `.then()` method, which will allow us to take the information that was returned with the promise and manipulate the webpage! Note that if there is an error returned in the first `.then()` method, the second `.then()` method will not execute.

#### 5. Intro to POST Requests using Fetch ####

In the previous exercise, we successfully wrote a GET request using the fetch API and handled Promises to get word suggestions from Datamuse. Give yourself a pat on the back (or two to treat yourself)!

Now, we’re going to learn how to use `fetch()` to construct POST requests!

Take a look at the diagram below. It has the boilerplate code for a POST request using `fetch()`.

![(>)](https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/fetch%20POST%20transparent.svg)

Notice that the `fetch()` call takes two arguments: an endpoint and an object that contains information needed for the POST request.

The object passed to the `fetch()` function as its second argument contains two properties: `method`, with a value of `'POST'`, and `body`, with a value of `JSON.stringify({id: '200'});`. This second argument determines that this request is a POST request and what information will be sent to the API.

A successful POST request will return a response body, which will vary depending on how the API is set up.

The rest of the request is identical to the GET request. A `.then()` method is chained to the `fetch()` function to check and return the `response` as well as throw an exception when a network error is encountered. A second `.then()` method is added on so that we can use the response however we may choose.

#### 6. Making a POST Request ####

In the previous exercise, we walked through the boilerplate code for making a POST request using `fetch()` and `.then()`. In this exercise, we’re going to use that boilerplate code to shorten a URL using the [Rebrandly URL Shortener API](https://developers.rebrandly.com/).

We will need a Rebrandly API key. To do this, read through the [Rebrandly sign up guide](https://www.codecademy.com/articles/rebrandly-signup) to set up your API.

Keep in mind, while it’s ok to use your API key in these exercises, you should not share your key with anyone (not even to ask a question in the forums)! Also, if you reset the exercise at any point, you will have to paste in your API key again at the top.

#### 7. Handling a POST Request ####

In the previous exercise, we set up the POST request by providing the endpoint and the object containing all the necessary information. In this exercise, we’ll handle the response.

The request returns a Promise which will either be resolved or rejected. If the promise resolves, we can check and return that response. We will chain another `.then()` method and handle the returned JSON object and display the information to our webpage.

#### 8. Intro to async GET Requests ####

In the following exercises, we’re going to take what we’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: `async` and `await`. You read that right, you did the hard part already. Now it’s time to make it easier.

The structure for this request will be slightly different. We will use the new keywords `async` and `await`, as well as the `try` and `catch` statements.

Take a look at the diagram below.

![(>)](https://static-assets.codecademy.com/Courses/Learn-JavaScript/requests/async-get-request.svg)

Here are some key points to keep in mind as we walk through the code:

* The `async` keyword is used to declare an async function that returns a promise.
* The `await` keyword can only be used within an async function. await suspends the program while waiting for a promise to resolve.
* In a `try...catch` statement, code in the try block will be run and in the event of an exception, the code in the `catch` statement will run.

Study the `async` `getData()` function to the right to see how the request can be written using `async` and `await`.

#### 9. Making an async GET Request ####

In the previous exercise, we walked through the boilerplate code for making a GET request using `async` and `await`.

In this exercise, we’re going to apply the code to get nouns that describe the inputted word using the Datamuse API.

#### 10. Intro to async POST Requests ####

Now that you’ve made an `async` GET request, let’s start getting familiar with the `async` POST request.

As we’ve seen before, a POST request requires more information. Take a look at the diagram below.

![(>)](https://static-assets.codecademy.com/Courses/Learn-JavaScript/requests/async-post-request-fixed.svg)

We still have the same structure of using `try` and `catch` as the `async` GET request we just learned about. But, in the `fetch()` call, we now have to include an additional argument that contains more information like `method` and `body`.

The `method` property value is set to `'POST'` to specify the type of request we are making. Then we have to include a `body` property with the value of `JSON.stringify({id: 200})`.

#### 11. Making an async POST Request ####

Since we’ve reviewed the boilerplate code for an async POST request, the next step is to incorporate that logic into making a real request.

In this exercise, we’ll need to retrieve our Rebrandly API key to access the Rebrandly API.

We will then pass in the endpoint and the request object into the `fetch()` method to make our POST request.

#### 12. Review: Requests with Fetch API ####

In this lesson, we learned how to make GET and POST requests using the Fetch API and `async`/`await` keywords. Let’s recap on the concepts covered in the previous exercises:

* GET and POST requests can be created in a variety of ways.
* We can use `fetch()` and `async`/`await` to asynchronous request data from APIs.
* Promises are a type of JavaScript object that represents data that will eventually be returned from a request.
* The `fetch()` function can be used to create requests and will return promises.
* We can chain `.then()` methods to handle promises returned by the `fetch()` function.
* The `async` keyword is used to create asynchronous functions that will return promises.
* The `await` keyword can only be used with functions declared with the `async` keyword.
* The `await` keyword suspends the program while waiting for a promise to resolve.

#### 13. Review: Async JavaScript and HTTP Requests ####

Congratulations! The goal of this unit was to understand APIs and introduce asynchronous JavaScript and the concepts behind HTTP requests.

Having completed this unit, you are now able to:

* Write asynchronous JavaScript with async-await and promises syntax
* Explain the different types of HTTP requests
* Describe REST protocol
* Work with JSON data
* Make HTTP requests to external web APIs

If you are interested in learning more about these topics, here are some additional resources:

* Documentation: [Ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
* Video: [What the Heck is the Event Loop Anyways](https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=emb_title)
* Resource: [MDN’s Guide to Graceful asynchronous Programming with Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
* Resource: [MDN’s Guide to Choosing the Right Approach](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
* Article: [MDN’s Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
* Article: [MDN’s Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* Resource: [MDN’s Guide to Fetching Data From the Server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
* Documentation: [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* Resource: [MDN’s Guide to Third-party APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)

Remember, you will put all of this knowledge into practice with an upcoming Portfolio Project. If you ever get stuck while working on the project, you can come back to this Unit and review what you have learned.

## Web Apps ##

### Introduction: Web Apps ###

In this unit, you will be introduced to web applications.
The goal of this unit is to introduce you to web applications. You will learn about web apps and single page applications (SPAs) and how they are different from static websites. You’ll find the knowledge that you gained in the previous units to be very useful for continuing to present and style information.

After this unit, you will be able to:

* Define what a web app is and how it is built
* Know the differences between a web app and a static website
* Define what single page application (SPA) is

### What is a Web App? ###

**What is a Web Application?**

A web application is an application software that does not require installation and can instead be accessed from a remote server via web browser. Web applications are made for interaction, allowing users to send and consume data between the browser and the web server. This interaction can be as simple as logging in to an account, or as complex as making a payment with your credit card.

#### What is the Difference Between a Website and a Web Application? ####

While the terms website and web application are often used interchangeably, they can denote somewhat different things. Most commonly, a website is defined as a set of information-carrying pages that are inter-related and accessed through a web browser. A web application, on the other hand, is an application software that runs on a web server and is accessed by the user through a web browser.

If a website could be said to be defined by its content, then a web application would be defined by its interaction with the user. As such, web applications are significantly more complicated than static websites, both in general architecture and features.

#### Web Application Architecture ####

In order to facilitate this complex flow of data, web applications are usually designed with different layers. The most common design paradigm is a three-layered design consisting of a presentation layer (web browser), application layer (server), and storage layer (database). In this system, the presentation layer is responsible for relaying user data to the application layer, which can process that data and do any number of things, including passing it to the storage layer for “safe-keeping.”

Many times, web applications can grow to be very complex. In these cases, a three-layered design may fall short. This may necessitate the introduction of additional layers to handle this complexity. For instance, the introduction of an integration layer between the application and storage layers can help provide a uniform interface for data access, allowing the application layer to be insulated from changes that occur to the storage layer implementation.

If you’re interested in learning more about the technology that’s behind your favorite web applications, install the Wappalyzer chrome extension. If you navigate to a site, you can click on it and it will give you a list of the different technologies used to build it.

### What is a SPA? ###

Learn what a Single-Page Application (SPA) is and why you would use it.

Introduction

At this point in your web development journey, you have learned HTML to create web pages, CSS to style those pages, and JavaScript to sprinkle some magic throughout for functionality. With these foundational skills, you are now ready to explore the exciting web development practice of the Single-Page Application (SPA). SPAs combine the content of traditional websites with the smooth user experience of mobile applications. Learning to develop and maintain SPAs is an exciting venture that challenges developers to improve the web experience for users all over the world.

#### Multi-Page Applications ####

Prior to reading this article, you should be familiar with the concept of a web app. Whether talking about delivering content through static websites or interactivity through web applications, the article is referring to a multi-page file structure that lives on a server. Each time new data is needed for the browser view, a request is sent to the server, which returns a new set of page files. For a static website, this approach is generally fine, but web applications that require faster and more complicated interaction sometimes struggle to keep up.

Imagine if there was a restaurant where you can only eat one part of your meal at a time. For an order including a burger, fries, and salad, the server(server!) brings out just the burger. After a few bites you want some fries, so the server takes the burger back to the kitchen and brings back just the fries. The server may have even had to wait for the fries to process–I mean prepare, before returning to the table. Repeat the request, prepare, and serve steps with the salad, then the burger again and then more fries and you’ve now eaten at the weirdest, most inefficient restaurant ever. Thankfully this doesn’t happen in the food industry but something similar is happening on the web.

In the following video, a user is navigating around Wikipedia. On the right, you may recognize the Elements tab of Chrome DevTools displaying an HTML file associated with the page in the browser.


Every time a link is clicked a new page is displayed in DevTools, which means a request to the server was made and a new set of files was sent to be rendered in the browser. This is just like our burger, fries, and salad from our favorite restaurant. In terms of a web application where interactivity is key, these file requests can mean a slow user experience. That’s where the Single-Page Application comes in.

#### Single-Page Applications ####

Wikipedia defines a single-page application (SPA) as “a web application that interacts with the web browser by dynamically rewriting the current web page with new data from a web server, instead of the default method of the browser loading entire new pages.” The name single-page application generally refers to the application consisting of one page that is constantly updated by JavaScript. Requests to the server are now quicker since they contain just the data needed to update the view. SPAs are full applications, running in the browser yet still connected to a server to update any application data.

If our favorite restaurant converts to the single-page approach, when we order our meal the server brings the fully prepared burger, fries, and a salad at once. We now have access to devour what we want without the server going to and from the kitchen. At times we may want ketchup for the fries, or some dressing for the salad, but those are delivered quickly and come from the kitchen already prepared. Just like a single-page application, you are given almost everything you need upfront but can still request smaller items to help with each item of the meal.

Now we have a video of user interactions on the React home page, which is built as a single-page application. When looking at the Elements panel this time, each interaction changes only parts of the HTML file.


The file stays constant while logic from the client-side JavaScript changes only what is needed to update the view. Requests for data are retrieved a lot quicker than files that need to be processed on a server and then rendered in the browser. SPAs focus on speed when it comes to user interaction and browser rendering times.

#### SPA Frameworks ####

To create a SPA you can use vanilla JavaScript for controlling all the required logic. In practice, the complexity of SPAs scales rapidly so just using JavaScript is not recommended. Luckily, there are several tools available to help with the creation of a SPA. These tools help with many tasks from controlling the view of the page to managing the application build.

* React is a popular JavaScript library for building single-page applications. It focuses on creating components that can render themselves differently based on an application’s current state and user data.
* Vue.js is a framework that uses templating within a single HTML file while the application logic controls what is rendered. This approach is sometimes thought to be more traditional and therefore easier to learn.
* Other libraries and frameworks include AngularJS, Ember.js, ExtJS, Knockout.js, and Meteor.js. While all of these share similar goals, they each take different approaches to building SPAs.

#### SPA Pros and Cons ####

So, should your next project be a single-page application? Maybe. Maybe not. Like most development endeavors you must consider the pros and cons before deciding how you will implement a new project.

![Single-page vs. Multi-page application](https://static-assets.codecademy.com/Paths/front-end-career-path/what-is-SPA/singlevsmultipage-transparent.png)

##### Pros #####

* SPAs are fast. The main selling point of a SPA is that it feels like a desktop or mobile application. By eliminating requests for new files and only relying on smaller amounts of data from the server, SPAs provide a real-time interface with their users.
* Reuse of code is a big bonus when using SPAs because it saves time within a project and across multiple projects. Many SPA libraries and frameworks advise that components be general enough that they can be reused from project to project.
* SPAs provide an easier path to migrate code to a mobile application. With a SPA, the back-end of the application feeds data to the decoupled front-end interface. This separation of tasks allows the creation of a mobile app UI while maintaining the back-end logic of the application.

##### Cons #####

* SPAs require more files to run at startup so the load time of the application can be longer. This is something to consider if a user will not want to visit a site that takes too long to load. SPA load time can be minimized through strategically loading resources throughout the run of an application.
* Search Engine Optimization (SEO) has some pitfalls when it comes to SPAs. Search engines, like Google or DuckDuckGo, index pages of a website to rank the content. This can be difficult with only one page that may not have content until it is loaded by JavaScript. SEO is an ever-changing world so strategies already exist to mitigate these downsides.
* SPAs may not function as expected within the browser. For example, the back button or browsing history can act differently while using a single-page application. This can be frustrating for users who are expecting certain functionality within their browsers.

#### Conclusion ####

Single-page applications provide a better user experience while running within a web browser. They are the right choice for applications that need to provide real-time or complex interaction with their users. Creating a SPA involves more than just a handful of HTML, CSS, and JavaScript files, but their complexity continues to be minimized by frameworks such as React and Vue.js. Even if your next application is not a SPA, knowing how to implement them is a must-have skill for a front-end developer.

Ready to build your own SPAs? Check out our [web development courses](https://www.codecademy.com/catalog/subject/web-development) to get started.

### Review: Web Apps ###

Congratulations! The goal of this unit was to introduce you to web applications. You learned about web apps and single page applications (SPAs) and how they are different from static websites. Use the knowledge that you gained in the previous units as you continue to present and style information.

Having completed this unit, you are now able to:

* Define what a web app is and how it is built
* Know the differences between a web app and a static website
* Define what single page application (SPA) is

If you are interested in learning more about these topics, here are some additional resources:

* Resource: [Poll Results: “Sites” vs “Apps”](https://css-tricks.com/poll-results-sites-vs-apps/)

## React, Part I ##

### Introduction: React, Part I ###

In this unit, you will be introduced to React.
The goal of this unit is to introduce you to the popular JavaScript library, React. React will help you build better, scalable front-ends for your website through the creation of components. An overview of ES6 and functional JavaScript concepts will help in your understanding of React.

After this unit, you will be able to:

* Understand ES6+ and functional JavaScript programming concepts
* Know what a Virtual DOM is and how it is used in React
* Learn JSX
* Build first React components

### Destructuring with JavaScript ###

#### What is Destructuring? ####

Destructuring, or destructuring assignment, is a JavaScript feature that makes it easier to extract data from arrays and objects, introduced in the ES6 version of JavaScript.

At this point, we assume you already know how to extract data from arrays and objects. That means that you don’t NEED destructuring: destructuring is a form of syntactic sugar, which means that it is an easier way to write certain expressions, usually by being shorter and clearer than other forms. Even if you don’t use it yourself, you’ll probably see it in someone else’s code, so it’s valuable to understand.

#### Destructuring Arrays ####

Data structures like arrays and objects can be very useful for storing large amounts of data. The process of converting individual elements of an array into individual variables can be tedious:

```js
let cars = ['ferrari', 'tesla', 'cadillac'];
```

If we wanted to access these cars individually and assign them to variables we could do this:

```js
let cars = ['ferrari', 'tesla', 'cadillac'];
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac
```

We can use destructuring to shorten our code and make it more concise:

```js
let cars = ['ferrari', 'tesla', 'cadillac'];
let [car1, car2, car3] = cars;
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac
```

In the code above, we created three variables (**`car1`**, **`car2`**, **`car3`**) that correspond to the three elements in the `cars` array. Each variable name in the new array will be assigned the value of the corresponding element. As you can see, we are able to achieve what we did previously with three lines of code, in one! Imagine how many lines of code we would save working with an array with 10 elements!

#### Destructuring Objects ####

We can also use destructuring assignment with objects. Let’s look at a basic use case in which we capture an object’s properties with new variables:

```js
let destinations = { x: 'LA', y: 'NYC', z: 'MIA' };
let x = destinations.x;
let y = destinations.y;
let z = destinations.z;
console.log(x, y, z); // Prints LA NYC MIA
```

With the simplified destructuring syntax, we access the values by matching the variable names to the property names.

```js
let destinations = { x: 'LA', y: 'NYC', z: 'MIA' };
let { x, y, z } = destinations;
console.log(x, y, z); // Prints LA NYC MIA
```

Using destructuring syntax, we’re able to create new variables directly from an object’s properties. In this case, we took the values of `destination.x`, `destination.y`, and `destination.z` and stored them in new variables **`x`**, **`y`**, **`z`**, respectively.

Function arguments are another place where destructuring is useful. Instead of accepting a complete object as an argument, a function can use destructuring to capture specific properties as named parameters.

```js
let truck = {
  model: '1977 Mustang convertible',
  maker: 'Ford',
  city: 'Detroit',
  year: '1977',
  convertible: true
};
 
const printCarInfo = ({model, maker, city}) => {
  console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};
printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.
```
 
The `printCarInfo` function uses object destructuring to create three parameter variables: `model`, `maker`, and `city`. When the function is invoked with the `truck` object, these parameters are assigned the corresponding values from that object.

Note that we don’t have to use every property from the truck object: we only create parameter variables for the values that we need.

#### Conclusion ####

Destructuring is a way to unpack values from arrays and objects and assign them to variables or parameters. There are even more cool things you can do with destructuring: renaming variables, assigning default values, ignoring values, etc. We encourage you to check out the [MDN documentation and experiment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Happy Coding!

### React: The Virtual DOM ###

**Fighting Wasteful DOM Manipulation**

#### The Problem ####

DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations.

This slowness is made worse by the fact that **most JavaScript frameworks update the DOM much more than they have to**.

As an example, let’s say that you have a list that contains ten items. You check off the first item. Most JavaScript frameworks would rebuild _**the entire list**_. That’s ten times more work than necessary! Only one item changed, but the remaining nine get rebuilt exactly how they were before.

Rebuilding a list is no big deal to a web browser, but modern websites can use huge amounts of DOM manipulation. Inefficient updating has become a serious problem.

To address this problem, the people at React popularized something called the _**virtual DOM**_.

#### The Virtual DOM ####

In React, for every [DOM object](http://eloquentjavascript.net/13_dom.html), there is a corresponding “virtual DOM object.” A virtual DOM object is a _**representation**_ of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

#### How it helps ####

When you render a JSX element, every single virtual DOM object gets updated.

This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.

Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly **which virtual DOM objects have changed**. This process is called “diffing.”

Once React knows which virtual DOM objects have changed, then React updates those objects, _**and only those objects**_, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item, and leave the rest of your list alone.

This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

In summary, here’s what happens when you try to update the DOM in React:

* The entire virtual DOM gets updated.
* The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
* The changed objects, and the changed objects only, get updated on the _**real**_ DOM.
* Changes on the real DOM cause the screen to change.

If you’d like to learn more about the virtual DOM, [here’s a good place to start](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/).

### INTRO TO JSX ###

1. Why React?
2. Hello World
3. The Mystery, Revealed
4. What is JSX?
5. JSX Elements
6. JSX Elements And Their Surroundings
7. Attributes In JSX
8. Nested JSX
9. JSX Outer Elements
10. ReactDOM.render() I
11. ReactDOM.render() II
12. Passing a Variable to ReactDOM.render()
13. The Virtual DOM

#### 1. Why React? ####

React.js is a JavaScript library. It was developed by engineers at Facebook.

Here are just a few of the reasons why people choose to program with React:

* React is _**fast**_. Apps made in React can handle complex updates and still feel quick and responsive.
* React is _**modular**_. Instead of writing large, dense files of code, you can write many smaller, reusable files. React’s modularity can be a beautiful solution to JavaScript’s [maintainability problems](https://en.wikipedia.org/wiki/Spaghetti_code).
* React is _**scalable**_. Large programs that display a lot of changing data are where React performs best.
* React is _**flexible**_. You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React’s potential. [There’s room to explore](https://github.com/jiwonbest/amazing-react-projects).
* React is _**popular**_. While this reason has admittedly little to do with React’s quality, the truth is that understanding React will make you more employable.

#### 2. Hello World ####

Take a look at the following line of code:

```js
const h1 = <h1>Hello world</h1>;
```

What kind of weird hybrid code is that? Is it JavaScript? HTML? Or something else?

It seems like it must be JavaScript, since it starts with `const` and ends with `;`. If you tried to run that in an HTML file, it wouldn’t work.

However, the code also contains `<h1>Hello world</h1>`, which looks exactly like HTML. *That* part wouldn’t work if you tried to run it in a JavaScript file.

#### 3. The Mystery, Revealed ####

Good!

Take another look at the line of code that you wrote.

Does this code belong in a JavaScript file, an HTML file, or somewhere else?

The answer is…a JavaScript file! Despite what it looks like, your code doesn’t actually contain any HTML at all.

The part that looks like HTML, `<h1>Hello world</h1>`, is something called *JSX*.

#### 4. What is JSX? ####

*JSX* is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

What does “syntax extension” mean?

In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!

If a JavaScript file contains JSX code, then that file will have to be *compiled*. That means that before the file reaches a web browser, a *JSX compiler* will translate any JSX into regular JavaScript.

Codecademy’s servers already have a JSX compiler installed, so you don’t have to worry about that for now. Eventually we’ll walk through how to set up a JSX compiler on your personal computer.

#### 5. JSX Elements ####

A basic unit of JSX is called a JSX element.

Here’s an example of a JSX element:

```js
<h1>Hello world</h1>
```

This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.

#### 6. JSX Elements And Their Surroundings ####

JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.

That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array…you name it.

Here’s an example of a JSX element being saved in a variable:

```js
const navBar = <nav>I am a nav bar</nav>;
```

Here’s an example of several JSX elements being stored in an object:

```js
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```

#### 7. Attributes In JSX ####

JSX elements can have *attributes*, just like HTML elements can.

A JSX attribute is written using HTML-like syntax: a *name*, followed by an equals sign, followed by a *value*. The value should be wrapped in quotes, like this:

```js
my-attribute-name="my-attribute-value"
```

Here are some JSX elements with *attributes*:

```js
<a href='http://www.example.com'>Welcome to the Web</a>;
 
const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
```

A single JSX element can have many attributes, just like in HTML:

#### 8. Nested JSX ####

You can *nest* JSX elements inside of other JSX elements, just like in HTML.

Here’s an example of a JSX `<h1>` element, *nested* inside of a JSX `<a>` element:

```js
<a href="https://www.example.com"><h1>Click me!</h1></a>
```

To make this more readable, you can use HTML-style line breaks and indentation:

```js
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```

If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:

```js
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)
```

*Nested* JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can! Here’s an example of a *nested* JSX expression being saved as a variable:

```js
 const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
```

#### 9. JSX Outer Elements ####

There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

In other words, this code will work:

```js
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```

But this code will not work:

```js
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```

The *first opening tag* and the *final closing tag* of a JSX expression must belong to the same JSX element!

It’s easy to forget about this rule, and end up with errors that are tough to diagnose.

If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a `<div></div>`.

#### 10. ReactDOM.render() I ####

Let’s examine the code that you just wrote in the last exercise.

```js
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
```

You can see something called `ReactDOM`. What’s that?

`ReactDOM` is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with [the DOM](http://www.w3schools.com/js/js_htmldom.asp) in some way or another.

We’ll talk more later about how `ReactDOM` got into your file. For now, just understand that it’s yours to use.

Move slightly to the right, and you can see one of `ReactDOM`‘s methods: `ReactDOM.render()`.

`ReactDOM.render()` is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.

Move to the right a little more, and you come to this expression:

```js
<h1>Hello world</h1>
```

This is the first argument being passed to `ReactDOM.render()`. `ReactDOM.render()`‘s first argument should be a JSX expression, and it will be rendered to the screen.

#### 11. ReactDOM.render() II ####

Move to the right a little more, and you will see this expression:

```js
document.getElementById('app')
```

You just learned that `ReactDOM.render()` makes its first argument appear onscreen. But where on the screen should that first argument appear?

The first argument is appended to whatever element is selected by the second argument.

In the code editor, select **index.html**. See if you can find an element that would be selected by `document.getElementById('app')`.

That element acted as a *container* for `ReactDOM.render()`‘s first argument! At the end of the previous exercise, this appeared on the screen:

```js
<main id="app">
  <h1>Render me!</h1>
</main>
```

#### 12. Passing a Variable to ReactDOM.render() ####

`ReactDOM.render()`‘s first argument should *evaluate* to a JSX expression, it doesn’t have to literally be a JSX expression.

The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

In this example, we save a JSX expression as a variable named `toDoList`. We then pass `toDoList` as the first argument to `ReactDOM.render()`:

```js
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);
 
ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);
```

#### 13. The Virtual DOM ####

One special thing about `ReactDOM.render()` is that it *only updates DOM elements that have changed*.

That means that if you render the exact same thing twice in a row, the second render will do nothing:

```js
const hello = <h1>Hello world</h1>;
 
// This will add "Hello world" to the screen:
 
ReactDOM.render(hello, document.getElementById('app'));
 
// This won't do anything at all:
 
ReactDOM.render(hello, document.getElementById('app'));
```

This is significant! Only updating the necessary DOM elements is a large part of what makes React so successful.

React accomplishes this thanks to something called the *virtual DOM*. Before moving on to the end of the lesson, read this [article about the Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom).

### ADVANCED JSX ###

1. class vs className
2. Self-Closing Tags
3. JavaScript In Your JSX In Your JavaScript
4. Curly Braces in JSX
5. 20 Digits of Pi in JSX
6. Variables in JSX
7. Variable Attributes in JSX
8. Event Listeners in JSX
9. JSX Conditionals: If Statements That Don't Work
10. JSX Conditionals: If Statements That Do Work
11. JSX Conditionals: The Ternary Operator
12. JSX Conditionals: &&
13. .map in JSX
14. Keys
15. React.createElement
16. JSX Recap

#### 1. class vs className ####

This lesson will cover more advanced JSX. You’ll learn some powerful tricks, and some common errors to avoid.

Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. Probably the most frequent of these involves the word `class`.

In HTML, it’s common to use `class` as an attribute name:

```js
<h1 class="big">Hey</h1>
```

In JSX, you can’t use the word `class`! You have to use `className` instead:

```js
<h1 className="big">Hey</h1>
```

This is because JSX gets translated into JavaScript, and `class` is a reserved word in JavaScript.

When JSX is *rendered*, JSX className attributes are automatically rendered as `class` attributes.

#### 2. Self-Closing Tags ####

Another JSX ‘gotcha’ involves *self-closing tags*.

What’s a self-closing tag?

Most HTML elements use two tags: *an opening tag* (`<div>`), and *a closing tag* (`</div>`). However, some HTML elements such as `<img>` and `<input>` use only one tag. The tag that belongs to a single-tag element isn’t an opening tag nor a closing tag; it’s a *self-closing tag*.

When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket:

Fine in HTML with a slash:

```js
  <br />

Also fine, without the slash:

  <br>
```

But!

In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

Fine in JSX:

```js 
  <br />

NOT FINE AT ALL in JSX:
 
  <br>
```

#### 3. JavaScript In Your JSX In Your JavaScript ####

So far, we’ve focused on writing JSX expressions. It’s similar to writing bits of HTML, but inside of a JavaScript file.

In this lesson, we’re going to add something new: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.

#### 4. Curly Braces in JSX ####

The code in the last exercise didn’t behave as one might expect. Instead of adding 2 and 3, it printed out “2 + 3” as a string of text. Why?

This happened because `2 + 3` is located in between `<h1>` and `</h1>` tags.

Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn’t add numbers - it reads them as text, just like HTML.

You need a way to write code that says, “Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX.”

You can do this by wrapping your code in *curly braces*.

#### 5. 20 Digits of Pi in JSX ####

You can now inject regular JavaScript into JSX expressions! This will be extremely useful.

In the code editor, you can see a JSX expression that displays the first twenty digits of pi.

Study the expression and notice the following:

* The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
* Find `<div>` on line 5. From there up through `</div>`, the code will be treated as JSX.
* Find `Math`. From there up through `(20)`, the code will be treated as regular JavaScript again.
* The curly braces themselves won’t be treated as JSX nor as JavaScript. They are *markers* that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

#### 6. Variables in JSX ####

When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.

```js
// Declare a variable:
const name = 'Gerdo';
 
// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

#### 7. Variable Attributes in JSX ####

When writing JSX, it’s common to use variables to set attributes.

Here’s an example of how that might work:

```js
// Use a variable to set the `height` and `width` attributes:
 
const sideLength = "200px";
 
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

Notice how in this example, the <img />‘s attributes each get their own line. This can make your code more readable if you have a lot of attributes on one element.

Object properties are also often used to set attributes:

```js
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 
 
const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);
 
const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);
 
const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 
```

#### 8. Event Listeners in JSX ####

JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special attribute. Here’s an example:

```js
<img onClick={myFunc} />
```

An event listener attribute’s name should be something like `onClick` or `onMouseOver`: the word on, plus the type of event that you’re listening for.

An event listener attribute’s *value* should be a function. The above example would only work if `myFunc` were a valid function that had been defined elsewhere:

```js
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}
 
<img onClick={myFunc} />
```

Note that in HTML, event listener names are written in all lowercase, such as `onclick` or `onmouseover`. In JSX, event listener names are written in camelCase, such as `onClick` or `onMouseOver`.

#### 9. JSX Conditionals: If Statements That Don't Work ####

Great work! You’ve learned how to use curly braces to inject JavaScript into a JSX expression!

Here’s a rule that you need to know: you can not inject an `if` statement into a JSX expression.

This code will break:

```js
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```

The reason why has to do with the way that JSX is compiled. You don’t need to understand the mechanics of it for now, but if you’re interested then you can learn more in the React documentation.

What if you want a JSX expression to render, but only under certain circumstances? You can’t inject an if statement. What can you do?

You have lots of options. In the next few lessons, we’ll explore some simple ways to write conditionals (expressions that are only executed under certain conditions) in JSX.

#### 10. JSX Conditionals: If Statements That Do Work ####

How can you write a conditional, if you can’t inject an `if` statement into JSX?

Well, one option is to write an `if` statement, and not inject it into JSX.

Look at `if.js`. Follow the `if` statement, all the way from line 6 down to line 18.

`if.js` works, because the words `if` and `else` are not injected in between JSX tags. The `if` statement is on the outside, and no JavaScript injection is necessary.

This is a common way to express conditionals in JSX.

#### 11. JSX Conditionals: The Ternary Operator ####

There’s a more compact way to write conditionals in JSX: the ternary operator.

The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.

Recall how it works: you write `x ? y : z`, where `x`, `y`, and `z` are all JavaScript expressions. When your code is executed, `x` is evaluated as either “`truthy`” or “`falsy`.” If `x` is `truthy`, then the entire ternary operator returns `y`. If `x` is falsy, then the entire ternary operator returns `z`. [Here’s](http://stackoverflow.com/questions/6259982/how-to-use-the-ternary-operator-in-javascript) a nice explanation if you need a refresher.

Here’s how you might use the ternary operator in a JSX expression:

```js
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

In the above example, if `age` is greater than or equal to `drinkingAge`, then `headline` will equal `<h1>Buy Drink</h1>`. Otherwise, `headline` will equal `<h1>Do Teen Stuff</h1>`.

#### 12. JSX Conditionals: && ####

We’re going to cover one final way of writing conditionals in React: the `&&` operator.

Like the ternary operator, `&&` is not React-specific, but it shows up in React surprisingly often.

In the last two lessons, you wrote statements that would sometimes render a kitty and other times render a doggy. `&&` would not have been the best choice for those lessons.

`&&` works best in conditionals that will sometimes do an action, but other times do nothing at all.

Here’s an example:

```js
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

If the expression on the left of the `&&` evaluates as true, then the JSX on the right of the `&&` will be rendered. If the first expression is false, however, then the JSX to the right of the `&&` will be ignored and not rendered.

#### 13. .map in JSX ####

The array method `.map()` comes up often in React. It’s good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then `.map()` is often your best bet. It can look odd at first:

```js
const strings = ['Home', 'Shop', 'About Me'];
 
const listItems = strings.map(string => <li>{string}</li>);
 
<ul>{listItems}</ul>
```

In the above example, we start out with an array of strings. We call `.map()` on this array of strings, and the `.map()` call returns a new array of `<li>`s.

On the last line of the example, note that `{listItems}` will evaluate to an array, because it’s the returned value of `.map()`! JSX `<li>`s don’t have to be in an array like this, but they can be.

```js
// This is fine in JSX, not in an explicit array:
 
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
 
// This is also fine!
 
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];
 
<ul>{liArray}</ul>
```

#### 14. Keys ####

When you make a list in JSX, sometimes your list will need to include something called `keys`:

```jsx
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

A `key` is a JSX attribute. The attribute’s *name* is key. The attribute’s *value* should be something unique, similar to an `id` attribute.

`keys` don’t do anything that you can see! React uses them internally to keep track of lists. If you don’t use `keys` when you’re supposed to, React might accidentally scramble your list-items into the wrong order.

Not all lists need to have `keys`. A list needs `keys` if either of the following are true:

* The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
* A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
  
If neither of these conditions are true, then you don’t have to worry about `keys`. If you aren’t sure then it never hurts to use them!

#### 15. React.createElement ####

You can write React code without using JSX at all!

The majority of React programmers do use JSX, and we will use it for the remainder of this tutorial, but you should understand that it is possible to write React code without it.

The following JSX expression:

```js
const h1 = <h1>Hello world</h1>;
```

can be rewritten without JSX, like this:

```js
const h1 = React.createElement(
  "h1",
  null,
  "Hello world"
);
```

When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: `React.createElement()`. Every JSX element is secretly a call to `React.createElement()`.

We won’t go in-depth into how `React.createElement()` works, but you can start with the [documentation](http://facebook.github.io/react/docs/top-level-api.html#react.createelement) if you’d like to learn more!

#### 16. JSX Recap ####

Congratulations! You have completed the unit on JSX.

You have learned a wide variety of JSX concepts. If you don’t feel like you’ve mastered them all yet, that’s okay! These concepts will come up again and again throughout this course, and the following courses.

You are now ready to put your JSX knowledge to use! It’s time to move on to the next major topic: React Components.

### React Components ###

1. YOUR FIRST REACT COMPONENT
2. COMPONENTS AND ADVANCED JSX
3. Creating a React App

#### 1. YOUR FIRST REACT COMPONENT ####

1. Hello World, Part II... THE COMPONENT
2. Import React
3. Import ReactDOM
4. Create a Component Class
5. Name a Component Class
6. Component Class Instructions
7. The Render Function
8. Create a Component Instance
9. Render A Component

##### 1. Hello World, Part II... THE COMPONENT #####

React applications are made out of *components*.

What’s a component?

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

Take a look at the code below. This code will create and render a new React component:

```js
import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
 
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

A lot of that code is probably unfamiliar. However, you can recognize some JSX in there, as well as `ReactDOM.render()`.

We are going to unpack that code, one small piece at a time. By the end of this lesson, you’ll understand how to build a React component!

> **A note from the Curriculum Developers**: In this course, we teach both [class components and function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components). We start with class components because they are still widely used in legacy code, are common in tutorials/documentation found online, and are required for a few specific use-cases. In the module on Hooks, we introduce function components which are the recommended way of creating React components. From that point on, we use function components throughout the remainder of our React content.

##### 2. Import React #####

Your first React component!

In the last exercise, we started by importing from `react`. The line that did this is:

```js
import React from 'react';
```

This creates an object named React which contains methods necessary to use the React library.

Later, we’ll go over where the React library is imported from, and how the importing process works. For now, just know that this is how we import the React library.

You’ve already seen one of the methods contained in the React library: `React.createElement()`. Recall that when a JSX element is *compiled*, it transforms into a `React.createElement()` call.

For this reason, you have to import the React library, and save it in a variable named React, before you can use any JSX at all. `React.createElement()` must be available in order for JSX to work.

##### 3. Import ReactDOM #####

In order to create our first component, we next imported the ReactDOM:

```js
import ReactDOM from 'react-dom';
```

This line of code is very similar to line 1.

Both import JavaScript objects. In both lines, the imported object contains React-related methods.

However, there is a difference!

The methods imported from `'react-dom'` are meant for interacting with the DOM. You are already familiar with one of them: `ReactDOM.render()`.

The methods imported from `'react'` don’t deal with the DOM at all. They don’t engage directly with anything that isn’t part of React.

To clarify: the DOM is used in React applications, but it isn’t part of React. After all, the DOM is also used in countless non-React applications. Methods imported from `'react'` are only for pure React purposes, such as creating components or writing JSX elements.

##### 4. Create a Component Class #####

You’ve learned that a *React component* is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.

Here’s another fact about components: we can use a JavaScript class to define a new React component. We can also define components with JavaScript functions, but we’ll focus on class *components* first.

All class components will have some methods and properties in common (more on this later). Rather than rewriting those same properties over and over again every time, we extend the *Component* class from the React library. This way, we can use code that we import from the React library, without having to write it over and over again ourselves.

After we define our class component, we can use it to render as many instances of that component as we want.

What is `React.Component`, and how do you use it to make a component class?

`React.Component` is a JavaScript class. To create your own component class, you must subclass `React.Component`. You can do this by using the syntax `class YourComponentNameGoesHere extends React.Component {}`.

JavaScript classes and subclassing are a complex topic beyond the scope of this course. If you aren’t comfortable with them, here are some good resources to consult: 1 2 3 4.

Take another look at the code from the first exercise:

```js
import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
 
ReactDOM.render(
    <MyComponentClass />, 
    document.getElementById('app')
);
```

A lot of it is still unfamiliar, but you can understand more than you could before!

On line 4, you know that you are declaring a new component class, which is like a factory for building React components. You know that `React.Component` is a class, which you must subclass in order to create a component class of your own. You also know that `React.Component` is a property on the object which was returned by `import React from 'react'` on line 1.

##### 5. Name a Component Class #####

Good! Subclassing `React.Component` is the way to declare a new component class.

When you declare a new component class, you need to give that component class a name. On our finished component, our component class’s name was `MyComponentClass`:

```js
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

Component class variable names must begin with capital letters!

This adheres to JavaScript’s class syntax. This naming convention is also seen in other languages that write [class names in UpperCamelCase, like Java](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Java).

In addition, there is a React-specific reason why component class names must always be capitalized. We’ll get to that soon!

##### 6. Component Class Instructions #####

Let’s review what you’ve learned so far! Find each of these points in app.js:

On line 1, `import React from 'react'` creates a JavaScript object. This object contains properties that are needed to make React work, such as `React.createElement()` and `React.Component`.
On line 2, `import ReactDOM from 'react-dom'` creates another JavaScript object. This object contains methods that help React interact with the DOM, such as `ReactDOM.render()`.
On line 4, by subclassing `React.Component`, you create a new component class. This is not a component! A component class is more like a factory that produces components. When you start making components, each one will come from a component class.
Whenever you create a component class, you need to give that component class a name. That name should be written in UpperCamelCase. In this case, your chosen name is `MyComponentClass`.
Something that we haven’t talked about yet is the body of your component class: the pair of curly braces after `React.Component`, and all of the code between those curly braces.

Like all JavaScript classes, this one needs a body. The body will act as a set of instructions, explaining to your component class how it should build a React component.

Here’s what your class body would look like on its own, without the rest of the class declaration syntax. Find it in app.js:

```js
{
  render() {
    return <h1>Hello world</h1>;
  }
}
```

That doesn’t look like a set of instructions explaining how to build a React component! Yet that’s exactly what it is.


##### 7. The Render Function #####

A component class is like a factory that builds components. It builds these components by consulting a set of instructions, which you must provide. Let’s talk about these instructions!

For starters, these instructions should take the form of a class declaration body. That means that they will be delimited by curly braces, like this:

```js
class ComponentFactory extends React.Component {
  // instructions go here, between the curly braces
}
```

The instructions should be written in typical JavaScript ES2015 class syntax.

There is only one property that you have to include in your instructions: a render method.

A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.

```js
class ComponentFactory extends React.Component {
  render() {}
}
```

A render method must contain a return statement. Usually, this return statement returns a JSX expression:

```js
class ComponentFactory extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

Of course, none of this explains the point of a render method. All you know so far is that its name is render, it needs a return statement for some reason, and you have to include it in the body of your component class declaration. We’ll get to the ‘why’ of it soon!

##### 8. Create a Component Instance #####

`MyComponentClass` is now a working *component class*! It’s ready to follow its instructions and make some React components.

So, let’s make a React component! It only takes one more line:

```js
<MyComponentClass />
```

To make a React component, you write a JSX element. Instead of naming your JSX element something like `h1` or `div` like you’ve done before, give it the same name as a component class. Voilà, there’s your component instance!

JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is the React-specific reason why component class names must begin with capital letters. In a JSX element, that capitalized first letter says, “I will be a component instance and not an HTML tag.”

##### 9. Render A Component #####

You have learned that a component class needs a set of instructions, which tell the component class how to build components. When you make a new component class, these instructions are the body of your class declaration:

```js
class MyComponentClass extends React.Component
{ // everything in between these curly-braces is instructions for how to build components
 
  render() {
    return <h1>Hello world</h1>;
  }
}
```

This class declaration results in a new component class, in this case named `MyComponentClass`. `MyComponentClass` has one method, named render. This all happens via standard JavaScript class syntax.

You haven’t learned how these instructions actually work to make components! When you make a component by using the expression `<MyComponentClass />`, what do these instructions do?

Whenever you make a component, that component inherits all of the methods of its component class. MyComponentClass has one method: `MyComponentClass.render()`. Therefore, `<MyComponentClass />` also has a method named render.

You could make a million different `<MyComponentClass />` instances, and each one would inherit this same exact `render` method.

This lesson’s final exercise is to render your component. In order to render a component, that component needs to have a method named `render`. Your component has this! It inherited a method named `render` from `MyComponentClass`.

Since your component has a `render` method, all that’s left to do is call it. This happens in a slightly unusual way.

To call a component’s `render` method, you pass that component to `ReactDOM.render()`. Notice your component, being passed as `ReactDOM.render()`‘s first argument:

```js
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

`ReactDOM.render()` will tell `<MyComponentClass />` to call its render method.

`<MyComponentClass />` will call its render method, which will return the JSX element `<h1>Hello world</h1>`. `ReactDOM.render()` will then take that resulting JSX element, and add it to the virtual DOM. This will make `“Hello world”` appear on the screen.

#### 2. COMPONENTS AND ADVANCED JSX ####

1. Use Multiline JSX in a Component
2. Use a Variable Attribute in a Component
3. Put Logic in a Render Function
4. Use a Conditional in a Render Function
5. Use this in a Component
6. Use an Event Listener in a Component
7. Components Recap

##### 1. Use Multiline JSX in a Component

In this lesson, you will learn some common ways that JSX and React components work together. You’ll get more comfortable with both JSX and components, while picking up some new tricks.

Take a look at this HTML:

```html
<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>
```

How might you make a React component that renders this HTML?

Select `QuoteMaker.js` to see one way of doing it.

The key thing to notice in `QuoteMaker` is the parentheses in the `return` statement, on lines 6 and 18. Until now, your render function `return` statements have looked like this, without any parentheses:

```js
return <h1>Hello world</h1>;
```

However, a multi-line JSX expression should always be wrapped in parentheses! That is why `QuoteMaker`‘s return statement has parentheses around it.

##### 2. Use a Variable Attribute in a Component #####

Take a look at this JavaScript object named `redPanda`:

```js
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px
};
```

How could you render a React component, and get a picture with redPanda‘s properties?

Select `RedPanda.js` to see one way to do it.

Note all of the curly-brace JavaScript injections inside of the render function! Lines 16, 17, and 18 all use JavaScript injections.

You can, and often will, inject JavaScript into JSX inside of a render function.

##### 3. Put Logic in a Render Function #####

A `render()` function must have a return statement. However, that isn’t all that it can have.

A `render()` function can also be a fine place to put simple calculations that need to happen right before a component renders. Here’s an example of some calculations inside of a `render` function:

```js
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
```

Watch out for this common mistake:

```js
class Random extends React.Component {
  // This should be in the render function:
  const n = Math.floor(Math.random() * 10 + 1);
 
  render() {
    return <h1>The number is {n}!</h1>;
  }
};
```

In the above example, the line with the `const n` declaration will cause a `syntax error`, as it should not be part of the `class` declaration itself, but should occur in a method like `render()`.

##### 4. Use a Conditional in a Render Function #####

How might you use a *conditional statement* inside of a `render()` function?

Select `TodaysPlan.js` to see one way of doing it.

Notice that the `if` statement is located inside of the `render` function, but before the return statement. This is pretty much the only way that you will ever see an `if` statement used in a `render` function.

##### 5. Use this in a Component #####

The word `this` gets used in React a lot!

You are especially likely to see `this` inside of the body of a component class declaration. Here’s an example:

```js
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }
 
  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
```

In the code, what does `this` mean?

Once you have a guess, scroll down to see the answer.

…

…

…

…

…

…

The simple answer is that `this` refers to an instance of `IceCreamGuy`. The less simple answer is that `this` refers to the object on which `this`‘s enclosing method, in this case `.render()`, is called. It is almost inevitable that this object will be an instance of `IceCreamGuy`, but technically it could be something else.

Let’s assume that `this` refers to an instance of your component class, as will be the case in all examples in this course. `IceCreamGuy` has two methods: `.food` and `.render()`. Since `this` will evaluate to an instance of `IceCreamGuy`, `this.food` will evaluate to a call of `IceCreamGuy`‘s `.food` method. This method will, in turn, evaluate to the string “ice cream.”

Why don’t you need parentheses after `this.food`? Shouldn’t it be `this.food()`?

You don’t need those parentheses because `.food` is a getter method. You can tell this from the `get` in the above class declaration body.

There’s nothing React-specific about getter methods, nor about `this` behaving in this way! However, in React you will see `this` used in this way almost constantly.

`this` in JavaScript can be a difficult concept! Here is a good resource for [understanding `this` in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/).

##### 6. Use an Event Listener in a Component #####

Render functions often contain event listeners. Here’s an example of an event listener in a render function:

```js
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
```

Recall that an event handler is a function that gets called in response to an event. In the above example, the event handler is `myFunc()`.

In React, you define event handlers as *methods* on a component class. Like this:

```js
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }
 
  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}
```

Notice that the component class has two methods: `.myFunc()` and `.render()`. `.myFunc()` is being used as an *event handler*. `.myFunc()` will be called any time that a user hovers over the rendered `<div></div>`.

##### 7. Components Recap #####

React components are complicated. Their syntax is complicated, and the reasoning behind their syntax is especially complicated.

You have learned a lot about both their syntax and their reasoning. You have learned about component classes and component instances. You have learned about `React.Component`, and about the instructions that you must provide to a component class. You have learned how to `import`, and how to render a component instance.

You have been introduced to some common ways of using JSX in React components. You have rendered components using multiline JSX expressions, logic inside of the render function, a conditional statement, `this`, and an event listener.

You have spent a lot of time studying React components in isolation! Now, it’s time to start learning how components fit into with the world around them.

#### 3. Creating a React App ####

Use create-react-app to bootstrap a React application on your own computer

##### Introduction #####

React is a user interfac0e framework developed by Facebook. It has a quickly growing developer adoption rate and was ranked as the most loved web framework in the [2019 Stack Overflow developer survey](https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted). This article will walk you through setting up your first React app and assumes you are familiar with text editors and command line navigation.

##### 1. Setting Up the Boilerplate Application ##### 

It is possible to manually create a React app, but Facebook has created a Node package [create-react-app](https://create-react-app.dev/) to generate a boilerplate version of a React application.

Besides providing something that works out-of-the-box, this has the added benefit of providing a consistent structure for React apps that you will recognize as you move between React projects. It also provides an out-of-the-box build script and development server.

We will use npx, a package runner tool that comes with npm 5.2+ and higher, to install and run create-react-app. This will ensure that the latest version of create-react-app is used.

Open up your terminal.

If you’ve previously installed create-react-app globally via npm install -g create-react-app, it is recommended that you uninstall the package first. In your terminal run these commands:

```zsh
npm uninstall -g create-react-app
npx create-react-app myfirstreactapp
```

* If you’ve never installed create-react-app before, you can simply run this command:

```zsh
npx create-react-app myfirstreactapp
```

* If you have Yarn installed, create-react-app will use it by default to create new projects. If you would prefer to use npm, you can append --use-npm to the creation command. It will look like this:

```zsh
npx create-react-app myfirstreactapp --use-npm
```

(Feel free to replace `myfirstreactapp` with whatever name you want, as long as it doesn’t contain capital letters :-))

Upon completion, you will get some quick tips on how to use the application:

![createReactAppCommands](https://content.codecademy.com/programs/react/creating-a-react-app/npm_react_commands.png)

Before we run the app, let’s take a look around the app structure and see what it contains.

##### 2. React App Structure #####

Change directories into the app you just created, and open the app in the text editor of your choice. You should see the following file structure:

```zsh
myfirstreactapp
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── .gititgnore
├── package.json
├── package-lock.json
└── README.md
```

create-react-app has taken care of setting up the main structure of the application as well as a couple of developer settings. Most of what you see will not be visible to the visitor of your web app. React uses a tool called webpack which transforms the directories and files here into static assets. Visitors to your site are served those static assets.

Don’t worry if you don’t understand too much about webpack for now. One of the benefits of using create-react-app to set up our React application is that we’re able to bypass any sort of manual configuration for webpack. If you’re interested in delving deeper into it on your own, you can find a [high-level overview of webpack’s core concepts here](https://webpack.js.org/concepts/).

**.gitignore**

This is the standard file used by the source control tool git to determine which files and directories to ignore when committing code. While this file exists, create-react-app did not create a git repo within this folder. If you take a look at the file, it has taken care of ignoring a number of items (even .DS_Store for Mac users):

![createReactAppGitIgnore](https://content.codecademy.com/programs/react/creating-a-react-app/react_gitignore.png)

**package.json**

![package_json](https://content.codecademy.com/courses/React/react_setup-037-package-json.png)

This file outlines all the settings for the React app.

* **`name`** is the name of your app
* **`version`** is the current version
* **`"private"`**: true is a failsafe setting to avoid accidentally publishing your app as a public package within the npm ecosystem.
* **`dependencies`** contains all the required Node modules and versions required for the application. In the picture above, you’ll see six dependencies. The first three, as you may have guessed, are for the purpose of testing. The next two dependencies allow us to use react and react-dom in our JavaScript. Finally, react-scripts provides a useful set of development scripts for working with React. In the screenshot above, the react version specified is `^16.13.1`. This means that npm will install the most recent major version matching `16.x.x`. In contrast, you may also see something like `~1.2.3` in **package.json**, which will only install the most recent minor version matching `1.2.x`.
* **`scripts`** specifies aliases that you can use to access some of the react-scripts commands in a more efficient manner. For example, running `npm test` in your command line will run `react-scripts test --env=jsdom` behind the scenes.
* You will also see two more attributes, `eslintConfig` and `browserslist`. Both of these are Node modules having their own set of values. `browserslist` provides information about browser compatibility of the app, while `eslintConfig` takes care of the [code linting](https://stackoverflow.com/questions/8503559/what-is-linting).

**node_modules**

This directory contains dependencies and sub-dependencies of packages used by the current React app, as specified by package.json. If you take a look, you may be surprised by how many there are.

Running `ls -1 | wc -l` within the **node_modules/** directory will yield more than 800 subfolders. This folder is automatically added to the .gitignore for good reason! Don’t worry, even with all these dependencies, the basic app will only be around 50 KB after being [minified](https://techterms.com/definition/minification) and compressed for production.

**package-lock.json**

This file contains the exact dependency tree installed in node_modules/. This provides a way for teams working on private apps to ensure that they have the same version of dependencies and sub-dependencies. It also contains a history of changes to package.json, so you can quickly look back at dependency changes.

**public**

This directory contains assets that will be served directly without additional processing by webpack. index.html provides the entry point for the web app. You will also see a favicon (header icon) and a manifest.json.

The manifest file configures how your web app will behave if it is added to an Android user’s home screen (Android users can “shortcut” web apps and load them directly from the Android UI). You can read more about it [here](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/).

**src**

This contains the JavaScript that will be processed by webpack and is the heart of the React app. Browsing this folder, you see the main App JavaScript component (App.js), its associated styles (App.css), and test suite (App.test.js). index.js and its styles (index.css) provide an entry into the App and also kick off the registerServiceWorker.js. This service worker takes care of caching and updating files for the end-user. It allows for offline capability and faster page loads after the initial visit. More of this methodology is available here.

As your React app grows, it is common to add a components/ directory to organize components and component-related files and a views/ directory to organize React views and view-related files.

##### 3. Starting the React App Development Server #####

As was stated in the success message when you ran `create-react-app`, you just need to run `npm start` in your app directory to begin serving the development server. It should auto-open a tab in your browser that points to `http://localhost:3000/` (if not, manually visit that address). You will find yourself looking at a page resembling the following image:

![default_react_app](https://content.codecademy.com/courses/React/react_setup-038-default-react-app.png)

As stated, any changes to the source code will live-update here. Let’s see that in action.

Leave the current terminal tab running (it’s busy serving the React app) and open src/App.js in your favorite text editor. You’ll see what looks like a mashup of JavaScript and HTML. This is JSX, which is how React adds XML syntax to JavaScript. It provides an intuitive way to build React components and is compiled to JavaScript at runtime. We’ll delve deeper into this in other content, but for now, let’s make a simple edit and see the update in the browser.

![react_setup](https://content.codecademy.com/courses/React/react_setup-039-app-js.png)

If you left the terminal running, you should be able to switch over to your browser and see the update:

![edited_react_app](https://content.codecademy.com/courses/React/react_setup-040-edited-react-app.png)

Congratulations! You’re now up and running with React. You can now begin adding functionality for your application.

Next Steps

If you’d like to learn more about create-react-app, start with the [documentation on the create-react-app website](https://create-react-app.dev/docs/getting-started).

Since an important next step after creating a React App is to set up your environment to debug it, consider checking out our [React Developer Tools article](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-development-setup-and-ravenous-part-1/informationals/ready-react-developer-tools). There, we use the initial skeleton created with create-react-app to get you ready to begin debugging React Apps.

#### 4. Review: React, Part I ####

Congratulations! The goal of this unit was to introduce you to the popular JavaScript library, React. React is a powerful tool to help you build better, scalable front-ends for your website through the creation of components. You also reviewed ES6 and functional JavaScript concepts to further help in your understanding of React.

Having completed this unit, you are now able to:

* Understand ES6+ and functional JavaScript programming concepts
* Know what a Virtual DOM is and how it is used in React
* Understand JSX
* Build React components

If you are interested in learning more about these topics, here are some additional resources:

* Documentation: [React Documentation: Getting Started](https://reactjs.org/docs/getting-started.html)
* Tutorial: [Intro to React](https://reactjs.org/tutorial/tutorial.html)
* Article: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* Article: [What the Fork is the React Virtual DOM](https://maggieappleton.com/react-vdom)
* Resource: [Awesome React](https://github.com/enaqx/awesome-react)
* Resource: [Create React App](https://github.com/facebook/create-react-app)

## React, Part II ##

### Introduction: React, Part II ###

The goal of this unit is to dive further into React. You’ll learn how React is useful in passing data between different parts of your front-end using props and state. You’ll also learn about different ways of managing the application state using Hooks. Finally, you’ll learn how to test your React applications using Jest and Enzyme.

After this unit, you will be able to:

* Understand how components can affect other components
* Know how to use props
* Know how to manage state
* Know how to use Lifecycle Methods
* Deploy React applications with Netlify
* Know how to pass data between components
* Use React Hooks
* Test React applications using Jest and Enzyme

#### Components Interacting ####

##### COMPONENTS RENDER OTHER COMPONENTS #####

**Components Interact**

A React application can contain dozens, or even hundreds, of components.

Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.

In other words, React apps are made out of components, but what makes React special isn’t components themselves. What makes React special is the ways in which components *interact*.

This unit is an introduction to components *interacting*.

1. A Component in a Render Function
2. Apply a Component in a Render Function
3. Require A File
4. export
5. Component Rendering In Action
6. this.props
7. THIS.STATE

##### 1. A Component in a Render Function #####

Here is a `.render()` method that returns an HTML-like JSX element:

```js
class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

You’ve seen render methods return `<div></div>`s, `<p></p>`s, and `<h1></h1>`s, just like in the above example.

Render methods can also return another kind of JSX: *component instances*.

```js
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
 
class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```

In the above example, `Crazy`‘s render method returns an instance of the `OMG` component class. You could say that `Crazy` renders an `<OMG />`.

##### 2. Apply a Component in a Render Function #####

This is new territory! You’ve never seen a component rendered by another component before.

You have seen a component rendered before, though, but not by another component. Instead, you’ve seen a component rendered by `ReactDOM.render()`.

When a component renders another component, what happens is very similar to what happens when `ReactDOM.render()` renders a component.

##### 3. Require A File #####

When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. `ProfilePage.js` and `NavBar.js` can’t see each other.

This is a problem!

On line 9, you just added an instance of the `NavBar` component class. But since you’re in `ProfilePage.js`, JavaScript has no idea what `NavBar` means.

If you want to use a variable that’s declared in a different file, such as `NavBar`, then you have to import the variable that you want. To import a variable, you can use an import statement:

```js
import { NavBar } from './NavBar.js';
```

We’ve used import before, but not like this! Notice the differences between the above line of code and this familiar line:

```js
import React from 'react';
```

The first important difference is the curly braces around NavBar. We’ll get to those soon!

The second important difference involves the contents of the string at the end of the statement: `'react'` vs `'./NavBar.js'`.

If you use an import statement, and the string at the end begins with either a dot or a slash, then import will treat that string as a filepath. import will follow that filepath, and import the file that it finds.

If your filepath doesn’t have a file extension, then “.js” is assumed. So the above example could be shortened:

```js
import { NavBar } from './NavBar';
```

**One final, important note:**

None of this behavior is specific to React! [Module systems](http://eloquentjavascript.net/10_modules.html) of independent, importable files are a very popular way to organize code. [React’s specific module system comes from ES6](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). More on all of that later.

##### 4. export #####

Alright! You’ve learned how to use `import` to grab a variable from a file other than the file that is currently executing.

When you `import` a variable from a file that is not the current file, then an `import` statement isn’t quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.

`export` comes from [ES6’s module system](http://exploringjs.com/es6/ch_modules.html), just like `import` does. `export` and `import` are meant to be used together, and you rarely see one without the other.

There are a few different ways to use `export`. In this course, we will be using a style called “named exports.” Here’s how named exports works:

In one file, place the keyword `export` immediately before something that you want to *export*. That something can be any top-level `var`, `let`, `const`, `function`, or `class`:

```js
// Manifestos.js:
 
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile: 'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
```

You can export multiple things from the same file:

```js
// Manifestos.js:
 
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile:  'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
 
export const alsoRan = 'TimeCube';
```

In a different file, `import` the name of the `var`, `let`, `const`, `function`, or `class` from the first file:

```js
// App.js:
 
// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';
 
// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`); 
```

This style of importing and exporting in JavaScript is known as “named exports.” When you use named exports, you always need to wrap your imported names in curly braces, such as:

```js
import { faveManifestos, alsoRan } from './Manifestos';`
```

[JavaScript’s ES6 module system](http://exploringjs.com/es6/ch_modules.html) goes beyond named exports and has several advanced syntax features.

##### 5. Component Rendering In Action #####

Now you’re ready for `<ProfilePage />` to render `<NavBar />`!

All that’s left to do is render `<ProfilePage />`.

##### 6. this.props #####

Previously, you learned one way that components can interact: a component can render another component.

In this lesson, you will learn another way that components can interact: a component can pass information to another component.

Information that gets passed from one component to another is known as “props.”

Click Next to enter props-land!

###### 1. Access a Component's props ######

Every component has something called `props`.

A component’s `props` is an object. It holds information about that component.

To see a component’s `props` object, you use the expression `this.props`. Here’s an example of `this.props` being used inside of a render method:

```js
render() {
  console.log("Props object comin' up!");
 
  console.log(this.props);
 
  console.log("That was my props object!");
 
  return <h1>Hello world</h1>;
}
```

Most of the information in `this.props` is pretty useless! But some of it is extremely important, as you’ll see.

###### 2. Pass `props` to a Component ######

You can pass information to a React component.

How? By giving that component an *attribute*:

```js
<MyComponent foo="bar" />
```

Let’s say that you want to pass a component the message, `"This is some top secret info."`. Here’s how you could do it:

```js
<Example message="This is some top secret info." />
```

As you can see, to pass information to a component, you need a name for the information that you want to pass.

In the above example, we used the name message. You can use any name you want.

If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:

```js
<Greeting myInfo={["top", "secret", "lol"]} />
```

In this next example, we pass several pieces of information to `<Greeting />`. The values that aren’t strings are wrapped in curly braces:

```js
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
```

###### 3. Render a Component's props ######

You just passed information to a component’s `props` object!

You will often want a component to display the information that you pass.

Here’s how to make a component display passed-in information:

* Find the component class that is going to receive that information.
* Include `this.props.name-of-information` in that component class’s render method’s `return` statement.

###### 4. Pass props From Component To Component ######

You have learned how to pass a `prop` to a component:

```js
<Greeting firstName="Esmerelda" />
```

You have also learned how to access and display a passed-in `prop`:

```js
render() {
  return <h1>{this.props.firstName}</h1>;
}
```

The most common use of `props` is to pass information to a component, from a different component. You haven’t done that yet, but it’s very similar to what you’ve seen already.

In this exercise, you will pass a prop from one component to another.

**A curmudgeonly clarification about grammar:**

You may have noticed some loose usage of the words prop and `props`. Unfortunately, this is pretty inevitable.

`props` is the name of the object that stores passed-in information. `this.props` refers to that storage object. At the same time, each piece of passed-in information is called a prop. This means that `props` could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information :(

###### 5. Render Different UI Based on props ######

Awesome! You passed a prop from a component to a different component, accessed that prop from the receiver component, and rendered it!

You can do more with `props` than just display them. You can also use `props` to make decisions.

In the code editor, look at the `Welcome` component class.

You can tell from `this.props.name` on line 5 that `Welcome` expects to receive a piece of information called name. However, `Welcome` never renders this piece of information! Instead, it uses the information to make a decision.

`<Welcome />` instances will render the text `WELCOME "2" MY WEB SITE BABYYY!!!!!`, unless the user is `Mozart`, in which case they will render the more respectful
`hello sir it is truly great to meet you`
`here on the web`.

The passed-in name is not displayed in either case! The name is used to decide what will be displayed. This is a common technique.

Select Home.js and look at the `Home` component class. What will `<Welcome />` render to the screen?

###### 6. Put an Event Handler in a Component Class ######

You can, and often will, pass functions as `props`. It is especially common to pass event handler functions.

In the next lesson, you will pass an event handler function as a prop. However, you have to define an event handler before you can pass one anywhere. In this lesson, you will define an event handler function.

How do you define an event handler in React?

You define an event handler as a method on the component class, just like the render method.

Take a look in the code editor. On lines 4 through 8, an event handler method is defined, with similar syntax as the render method. On line 12, that event handler method is attached to an event (a click event, in this case).

###### 7. Pass an Event Handler as a prop ######

Good! You’ve defined a new method on the `Talker` component class. Now you’re ready to pass that function to another component.

You can pass a method in the exact same way that you pass any other information. Behold, the mighty JavaScript.

###### 8. Receive an Event Handler as a prop ######

Great! You just passed a function from `<Talker />` to `<Button />`.

In the code editor, select Button.js. Notice that Button renders a `<button></button>` element.

If a user clicks on this `<button></button>` element, then you want your passed-in talk function to get called.

That means that you need to attach talk to the `<button></button>` as an event handler.

How do you do that? The same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute’s name should be something like onClick or onHover. The attribute’s value should be the event handler that you want to attach.

###### 9. handleEvent, onEvent, and this.props.onEvent ######

Let’s talk about naming things.

When you pass an event handler as a prop, as you just did, there are two names that you have to choose.

Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.

The first name that you have to choose is the name of the event handler itself.

Look at `Talker.js`, lines 6 through 12. This is our event handler. We chose to name it `talk`.

The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name.

For our prop name, we also chose `talk`, as shown on line 15:

```js
return <Button talk={this.talk} />;
```

These two names can be whatever you want. However, there is a naming convention that they often follow. You don’t have to follow this convention, but you should understand it when you see it.

Here’s how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was “click.”

If you are listening for a “click” event, then you name your event handler `handleClick`. If you are listening for a “keyPress” event, then you name your event handler `handleKeyPress`:

```js
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
```

Your prop name should be the word `on`, plus your event type. If you are listening for a “click” event, then you name your prop `onClick`. If you are listening for a “keyPress” event, then you name your prop `onKeyPress`:

```js
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }
 
  render() {
    return <Child onHover={this.handleHover} />;
  }
}
```

###### 10. this.props.children ######

Every component’s props object has a property named children.

this.props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that you’ve seen have been self-closing tags, such as <MyComponentClass />. They don’t have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

Look at BigButton.js. In Example 1, <BigButton>‘s this.props.children would equal the text, “I am a child of BigButton.”

In Example 2, <BigButton>‘s this.props.children would equal a <LilButton /> component.

In Example 3, <BigButton>‘s this.props.children would equal undefined.

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

###### 11. defaultProps ######

Take a look at the `Button` component class.

Notice that on line 8, `Button` expects to receive a prop named text. The received text will be displayed inside of a `<button></button>` element.

What if nobody passes any text to `Button`?

If nobody passes any text to `Button`, then `Button`‘s display will be blank. It would be better if `Button` could display a default message instead.

You can make this happen by giving your component class a property named `defaultProps`:

```js
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
Example.defaultProps;
```

The `defaultProps` property should be equal to an object:

```js
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
// Set defaultProps equal to an object:
Example.defaultProps = {};
```

Inside of this object, write properties for any default props that you’d like to set:

```js
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps = { text: 'yo' }; 
```

If an `<Example />` doesn’t get passed any text, then it will display `“yo.”`

If an `<Example />` does get passed some text, then it will display that passed-in text.

###### 12. this.props Recap ######

That completes our lesson on props. Great job sticking with it!

Here are some of the skills that you have learned:

* Passing a prop by giving an attribute to a component instance
* Accessing a passed-in prop via `this.props.prop-name`
* Displaying a prop
* Using a prop to make decisions about what to display
* Defining an event handler in a component class
* Passing an event handler as a prop
* Receiving a prop event handler and attaching it to an event listener
* Naming event handlers and event handler attributes according to convention
* `this.props.children`
* `getDefaultProps`

##### 7. THIS.STATE #####

###### 1. State ######

[Dynamic information](http://www.teach-ict.com/as_a2_ict_new/ocr/AS_G061/311_data_info_knowledge/static_dynamic_data/miniweb/pg4.htm) is information that can change.

React components will often need *dynamic information* in order to render. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

There are two ways for a component to get dynamic information: `props` and `state`. Besides `props` and `state`, every value used in a component should always stay exactly the same.

You just spent a long lesson learning about `props`. Now it’s time to learn about state. `props` and `state` are all that you need to set up an ecosystem of interacting React components.

###### 2. Setting Initial State ######

A React component can access dynamic information in two ways: `props` and `state`.

Unlike props, a component’s state is not passed in from the outside. A component decides its own state.

To make a component have `state`, give the component a *`state`* property. This property should be declared inside of a `constructor` method, like this:

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
 
  render() {
    return <div></div>;
  }
}
 
<Example />
```

Whoa, a constructor method? `super(props)`? What’s going on here? Let’s look more closely at this potentially unfamiliar code:

```js
constructor(props) {
  super(props);
  this.state = { mood: 'decent' };
}
```

`this.state` should be equal to an object, like in the example above. This object represents the initial “state” of any component instance. We’ll explain that more soon!

How about the rest of the code? `constructor` and `super` are both features of ES6, not unique to React. There is nothing particularly React-y about their usage here. A full explanation of their functionality is outside of the scope of this course, but we’d recommend [familiarizing yourself](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/). It is important to note that React components always have to call `super` in their constructors to be set up properly.

Look at the bottom of the highest code example in this column. `<Example />` has a state, and its state is equal to `{ mood: 'decent' }`.

###### 3. Access a Component's state ######

To read a component’s `state`, use the expression `this.state.name-of-property`:

```js
class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
 
  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}
```

The above component class reads a property in its `state` from inside of its `render` function.

Just like `this.props`, you can use `this.state` from any property defined inside of a component class’s body.

###### 4. Update state with this.setState ######

A component can do more than just read its own state. A component can also change its own state.

A component changes its state by calling the function `this.setState()`.

`this.setState()` takes two arguments: an object that will update the component’s state, and a callback. You basically never need the callback.

In the code editor, take a look at Example.js. Notice that `<Example />` has a state of:

```js
{
  mood:   'great',
  hungry: false
}
```

Now, let’s say that `<Example />` were to call:

```js
this.setState({ hungry: true });
```

After that call, here is what <Example />‘s state would be:

```js
{
  mood:   'great',
  hungry: true
}
```

The `mood` part of the state remains unaffected!

`this.setState()` takes an object, and merges that object with the component’s current state. If there are properties in the current state that aren’t part of that object, then those properties remain how they were.

###### 5. Call this.setState from Another Function ######

The most common way to call `this.setState()` is to call a custom function that wraps a `this.setState()` call. `.makeSomeFog()` is an example:

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }
 
  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}
```
Notice how the method `makeSomeFog()` contains a call to `this.setState()`.

You may have noticed a weird line in there:

```js
this.makeSomeFog = this.makeSomeFog.bind(this);
```

This line is necessary because `makeSomeFog()`‘s body contains the word this. We’ll talk about it more soon!

Let’s walk through how a function wrapping `this.setState()` might work in practice. In the code editor, read Mood.js all the way through.

```js
// Mood.js
import React from "react";
import ReactDOM from "react-dom";

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: "good" };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == "good" ? "bad" : "good";
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>Click Me</button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById("app"));
```

Here is how a `<Mood />`‘s state would be set:

A user triggers an event (in this case a click event, triggered by clicking on a `<button></button>`).

The event from Step 1 is being listened for (in this case by the `onClick` attribute on line 20).

When this listened-for event occurs, it calls an event handler function (in this case, `this.toggleMood()`, called on line 20 and defined on lines 11-14).

Inside of the body of the event handler, `this.setState()` is called (in this case on line 13).

The component’s state is changed!

Due to the way that event handlers are bound in JavaScript, `this.toggleMood()` loses its this when it is used on line 20. Therefore, the expressions `this.state.mood` and `this.setState` on lines 12 and 13 won’t mean what they’re supposed to… unless you have already bound the correct this to `this.toggleMood`.

That is why we must bind `this.toggleMood` to this on line 8.

For an in-depth explanation of this kind of binding trickery, begin with [the React docs](https://facebook.github.io/react/docs/handling-events.html). For the less curious, just know that in React, whenever you define an event handler that uses this, you need to add `this.methodName = this.methodName.bind(this)` to your constructor function.

Look at the statement on line 12. What does that do?

Line 12 declares a const named `newMood` equal to the opposite of this.state.mood. If this.state.mood is “good”, then `newMood` will be “bad,” and vice versa.

A `<Mood />` instance would display “I’m feeling good!” along with a button. Clicking on the button would change the display to “I’m feeling bad!” Clicking again would change back to “I’m feeling good!”, etc. Try to follow the step-by-step walkthrough in Mood.js and see how all of this works.

One final note: you can’t call `this.setState()` from inside of the render function! We’ll explain why in the next exercise.

###### 6. this.setState Automatically Calls render ######

There’s something odd about all of this.

Look again at Toggle.js.

When a user clicks on the `<button></button>`, the `.changeColor()` method is called. Take a look at `.changeColor()`‘s definition.

.changeColor() calls `this.setState()`, which updates `this.state.color`. However, even if `this.state.color` is updated from green to yellow, that alone shouldn’t be enough to make the screen’s color change!

The screen’s color doesn’t change until `Toggle` renders.

Inside of the render function, it’s this line:

```js
<div style={{background:this.state.color}}>
```

that changes a virtual DOM object’s color to the new `this.state.color`, eventually causing a change in the screen.

If you call `.changeColor()`, shouldn’t you then also have to call `.render()` again? `.changeColor()` only makes it so that, the next time that you render, the color will be different. Why can you see the new background right away, if you haven’t re-rendered the component?

*Here’s why: Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.*

Think of `this.setState()` as actually being two things: `this.setState()`, immediately followed by `.render()`.

That is why you can’t call `this.setState()` from inside of the `.render()` method! `this.setState()` automatically calls `.render()`. If `.render()` calls `this.setState()`, then an infinite loop is created.

###### 7. Components Interacting Recap ######

In this unit, you learned how to use `import` and `export` to access one file from another. You learned about `props` and `state`, and the countless variations on how they work.

Before this unit, you learned about JSX, components, and how they can work together.

A React app is basically just a lot of components, setting `state` and passing `props` to one another. Now that you have a real understanding of how to use `props` and `state`, you have by far the most important tools that you need!

In future lessons, the focus will shift slightly outward. In addition to learning more new skills, you’ll also learn your first programming patterns. These large-scale strategies will help you combine what you’ve learned and really start building.

#### STATELESS COMPONENTS FROM STATEFUL COMPONENTS ####

##### Stateless Components Inherit From Stateful Components #####

Let’s learn our first programming pattern!

In this lesson, we’ll take a look at a simple version of a programming pattern. The following lessons will expand upon that lesson, and by the end, we’ll have a programming pattern in its full complexity.

Our programming pattern uses two React components: a stateful component, and a stateless component. “Stateful” describes any component that has a `state` property; “stateless” describes any component that does not.

In our pattern, a stateful component passes its `state` down to a stateless component.

###### 1. Build a Stateful Component Class ######

Let’s make a stateful component pass its state to a stateless component.

To make that happen, you need two component classes: a stateful class, and a stateless class.

```js
// Parent.js
import React from "react";
import ReactDOM from "react-dom";
import { Child } from "./Child"
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Frarthur"};
  }
  render() {
    return <div>
            <Child name={this.state.name} />
           </div>;
  }
}
```

###### 2. Build a Stateless Component Class ######

Great! You just made a stateful component class named `Parent`.

Now, let’s make our stateless component class.

```js
// Child.js
import React from "react";
import ReactDOM from "react-dom";

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}</h1>;
  }
}
```

###### 3. Pass a Component's State ######

A `<Parent />` is supposed to pass its state to a `<Child />`.

Before a `<Parent />` can pass anything to a `<Child />`, you need to import Child into Parent.js.

###### 4. Don't Update props ######

Great work! You just passed information from a stateful component to a stateless component. You will be doing a lot of that.

You learned earlier that a component can change its state by calling `this.setState()`. You may have been wondering: how does a component change its props?

The answer: it doesn’t!

A component should never update `this.props`. Look at Bad.js to see an example of what not to do.

```js
// Bad.js
import React from 'react';

class Bad extends React.Component {
  render() {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
}
```

This is potentially confusing. `props` and `state` store dynamic information. Dynamic information can change, by definition. If a component can’t change its `props`, then what are `props` for?

**A React component should use `props` to store information that can be changed, but can only be changed by a different component.**

**A React component should use `state` to store information that the component itself can change.**

If that’s a bit confusing, don’t worry! The next two lessons will be examples.

##### CHILD COMPONENTS UPDATE THEIR PARENTS' STATE #####

###### 1. Child Components Update Their Parents' state ######

How does a stateless, child component update the state of the parent component? Here’s how that works:

*1*

The parent component class defines a method that calls `this.setState()`.

For an example, look in **Step1.js** at the `.handleClick()` method.

```js
// Step 1
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}
```

*2*

The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.

For an example, look in **Step2.js** at the end of the `constructor()` method.

*3*

Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.

Look in **Step2.js**, at the prop on line 28.

```js
// Step 2
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}
```

*4*

The child receives the passed-down function, and uses it as an event handler.

Look in **Step3.js**. When a user clicks on the `<button></button>`, a click event will fire. This will make the passed-down function get called, which will update the parent’s state.

```js
// Step 3
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
```

###### 2. Define an Event Handler ######

To make a child component update its parent’s state, the first step is something that you’ve seen before: you must define a state-changing method on the parent.

###### 3. Pass the Event Handler ######

In the last exercise, you defined a function in Parent that can change Parent‘s state.

Parent must pass this function down to Child, so that Child can use it in an event listener on the dropdown menu.

###### 4. Receive the Event Handler ######

You just passed a function down to `Child` that can change `Parent`‘s state!

###### 5. Automatic Binding ######

Great work! Stateless components updating their parents’ state is a React pattern that you’ll see more and more. Learning to recognize it will help you understand how React apps are organized.

Click Next to move on to the final version of our programming pattern!

##### CHILD COMPONENTS UPDATE THEIR SIBLINGS' PROPS #####

###### 1. Child Components Update Sibling Components ######

Patterns within patterns within patterns!

In lesson 1, you learned your first React programming pattern: a stateful, parent component passes down a prop to a stateless, child component.

In lesson 2, you learned that lesson 1’s pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent’s state.

In this lesson, we will expand the pattern one last time. A child component updates its parent’s state, and the parent passes that state to a sibling component.

An understanding of this final pattern will be very helpful in the wild, not to mention in the next React course. Click Next and we’ll build an example!

###### 2. One Sibling to Display, Another to Change ######

One of the very first things that you learned about components is that they should only have one job.

In the last lesson, `Child` had two jobs:

1 - `Child` displayed a name.

2 - `Child` offered a way to change that name.

You should divide `Child` in two: one component for displaying the name, and a different component for allowing a user to change the name.

In the code editor, select **Child.js**. Notice that these lines have vanished:

```js
<h1>
  Hey, my name is {this.props.name}! 
</h1>
```

The new version of `Child` renders a dropdown menu for changing the name, and that’s it.

Select **Sibling.js** in the code editor.

Read through the render function’s `return` statement.

Here, the name is displayed! Or at least it will be displayed, once you’ve done a little editing.

That brings us to the essential new concept for this lesson: you will have one stateless component display information, and a different stateless component offer the ability to change that information.

###### 3. Pass the Right props to the Right Siblings ######

Look at **Parent.js** in the code editor.

Three things have changed in this file since the last Lesson:

* `Sibling` has been required on line 4.
* A `<Sibling />` instance has been added to the render function on line 27.
* `<Sibling />` and `<Child />` have been wrapped in a `<div></div>`, since JSX expressions must have only one outer element.

###### 4. Display Information in a Sibling Component ######

You’re on the last step!

You’ve passed the name down to `<Sibling />` as a prop. Now `<Sibling />` has to display that prop.

###### 5. Stateless Components Inherit From Stateful Components Recap ######

You just executed your first complete React programming pattern!

Let’s review. Follow each step in the code editor:

A stateful component class defines a function that calls `this.setState`. (**Parent.js**, lines 15-19)

The stateful component passes that function down to a stateless component. (**Parent.js**, line 24)

```js
// Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
```

That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (**Child.js**, lines 10-13)

The stateless component class uses this new function as an event handler. (**Child.js**, line 20)

```js
// Child.js
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
```

When an event is detected, the parent’s state updates. (A user selects a new dropdown menu item)

The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (**Parent.js**, line 25)

That stateless component class receives the state and displays it. (**Sibling.js**, lines 5-10)

```js
// Sibling.js
import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
```

An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the state. (**Parent.js**, lines 23-26)

This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear.

Being introduced to this pattern is your first step towards understanding how React apps fit together! You’ll get more practice using it throughout this course, as well as in the course after this one.

#### Lifecycle Methods ####

##### COMPONENT LIFECYCLE METHODS #####

###### 1. The Component Lifecycle ######

We’ve seen that React components can be highly dynamic. They get created, rendered, added to the DOM, updated, and removed. All of these steps are part of a component’s lifecycle.

The component lifecycle has three high-level parts:

* *Mounting*, when the component is being initialized and put into the DOM for the first time
* *Updating*, when the component updates as a result of changed state or changed props
* *Unmounting*, when the component is being removed from the DOM
Every React component you’ve ever interacted with does the first step at a minimum. If a component never mounted, you’d never see it!

![(>)](https://content.codecademy.com/courses/React/react_diagram-lifecycle-flow.png)

Most interesting components are updated at some point. A purely static component—like, for example, a logo—might not ever update. But if a component’s state changes, it updates. Or if different props are passed to a component, it updates.

Finally, a component is unmounted when it’s removed from the DOM. For example, if you have a button that hides a component, chances are that component will be unmounted. If your app has multiple screens, it’s likely that each screen (and all of its child components) will be unmounted. If a component is “alive” for the entire lifetime of your app (say, a top-level `<App />` component or a persistent navigation bar), it won’t be unmounted. But most components can get unmounted one way or another!

It’s worth noting that each component instance has its own lifecycle. For example, if you have 3 buttons on a page, then there are 3 component instances, each with its own lifecycle. However, once a component instance is unmounted, that’s it—it will never be re-mounted, or updated again, or unmounted.

###### 2. Introduction to Lifecycle Methods ######

React components have several methods, called lifecycle methods, that are called at different parts of a component’s lifecycle. This is how you, the programmer, deal with the lifecycle of a component.

You may not have known it, but you’ve already used two of the most common lifecycle methods: `constructor()` and `render()`! `constructor()` is the first method called during the mounting phase. `render()` is called later during the mounting phase, to render the component for the first time, and during the updating phase, to re-render the component.

Notice that lifecycle methods don’t necessarily correspond one-to-one with part of the lifecycle. `constructor()` only executes during the mounting phase, but `render()` executes during both the mounting and updating phase.

With this new understanding, let’s build a simple clock component.

###### 3. componentDidMount ######

We’ve made a clock component, but it’s static. Wouldn’t it be nice if it updated?

At a high level, we’d like to update this.state.date with a new date once per second.

JavaScript has a helpful function, [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), that will help us do just this. It lets us run a function on a set interval. In our case, we’ll make a function that updates `this.state.date`, and call it every second.

We’ll want to run some code that looks like this:

```js
// NOTE: This code doesn't clean itself up properly.
// We'll explore that in the next exercise.
const oneSecond = 1000;
setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
```

We have the code we want to run—that’s great. But where should we put this code? In other words, where in the component’s lifecycle should it go?

Remember, the component lifecycle has three high-level parts:

* Mounting, when the component is being initialized and put into the DOM for the first time
* Updating, when the component updates as a result of changed state or changed props
* Unmounting, when the component is being removed from the DOM

It’s certainly not in the unmounting phase—we don’t want to start our interval when the clock disappears from the screen! It’s also probably not useful during the updating phase—we want the interval to start as soon as the clock appears, and we don’t want to wait for an update. It probably makes sense to stick this code somewhere in the mounting phase.

We’ve seen two functions: the `render()` and the constructor. Can we put this code in either of those places?

* `render()` isn’t a good candidate. For one, it executes during the mounting phase and the updating phase—too often for us. It’s also generally a bad idea to set up any kind of side-effect like this in `render()`, as it can create subtle bugs in the future.
* `constructor()` is also not great. It does only execute during the mounting phase, so that’s good, but you should generally avoid side-effects like this in constructors because it violates something called the Single Responsibility Principle. In short, it’s not a constructor’s responsibility to start side-effects. ([You can read more about the principle on Wikipedia](https://en.wikipedia.org/wiki/Single-responsibility_principle).)

If it’s not `render()` or the constructor, then where? Enter a new lifecycle method, `componentDidMount()`.

`componentDidMount()` is the final method called during the mounting phase. The order is:

* The constructor
* `render()`
* `componentDidMount()`

In other words, it’s called after the component is rendered. This is where we’ll want to start our timer.

(Another method, [`getDerivedStateFromProps()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops), is called between the constructor and `render()`, but it is very rarely used and usually isn’t the best way to achieve your goals. We won’t be talking about it in this lesson.)

###### 4. componentWillUnmount ######

Our clock is working, but it has an important problem. We never told the interval to stop, so it’ll keep running that function forever (or at least, until the user leaves/refreshes the page).

When the component is unmounted (in other words, removed from the page), that timer will keep on ticking, trying to update the state of a component that’s effectively gone. This means your users will have some JavaScript code running unnecessarily, which will hurt the performance of your app.

React will log a warning that looks something like this:

```text
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
Imagine if the clock gets mounted and unmounted hundreds of times—eventually, this will cause your page to become sluggish because of all of the unnecessary work. You’ll also see warnings in your browser console. Even worse, this can lead to subtle, annoying bugs.
```

All this bad stuff can happen if we fail to clean up a side-effect of a component. In our case this is a call to `setInterval()`, but components can have lots of other side-effects: loading external data with AJAX, doing manual tweaking of the DOM, setting a global value, and more. We try to limit our side-effects, but it’s difficult to build an interesting app with truly zero side-effects.

> In general, when a component produces a side-effect, you should remember to clean it up.

JavaScript gives us the [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) function. `setInterval()` can return an ID, which you can then pass into `clearInterval()` to clear it. Here’s the code we’ll want to use:

```js
const oneSecond = 1000;
this.intervalID = setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
 
// Some time later...
clearInterval(this.intervalID);
```

At a high level, we want to continue to set up our setInterval() in componentDidMount(), but then we want to clear that interval when the clock is unmounted.

Let’s introduce a new lifecycle method: componentWillUnmount(). componentWillUnmount() is called in the unmounting phase, right before the component is completely destroyed. It’s a useful time to clean up any of your component’s mess.

In our case, we’ll use it to clean up the clock’s interval.

###### 5. componentDidUpdate ######

Remember the three parts of a component’s lifecycle:

* *Mounting*, when the component is being initialized and put into the DOM for the first time
* *Updating*, when the component updates as a result of changed state or changed props
* *Unmounting*, when the component is being removed from the DOM
We’ve looked at mounting (`constructor()`, `render()`, and `componentDidMount()`). We’ve looked at unmounting (`componentWillUnmount()`). Let’s finish by looking at the updating phase.

An update is caused by changes to props or state. You’ve already seen this happen a bunch of times. Every time you’ve called `setState()` with new data, you’ve triggered an update. Every time you change the props passed to a component, you’ve caused it to update.

When a component updates, it calls [several methods](https://reactjs.org/docs/react-component.html#updating), but only two are commonly used.

The first is `render()`, which we’ve seen in every React component. When a component’s props or state changes, `render()` is called.

The second, which we haven’t seen yet, is `componentDidUpdate()`. Just like `componentDidMount()` is a good place for mount-phase setup, `componentDidUpdate()` is a good place for update-phase work.

###### 6. Review: Component Lifecycle Methods ######

We’ve come to the end of the lesson. We’ve learned about the three major phases of a component’s lifecycle:

* *Mounting*, when the component is being initialized and put into the DOM for the first time. We saw that the `constructor`, `render()`, and `componentDidMount()` are called during this phase.
* *Updating*, when the component updates as a result of changed state or changed props. We saw that `render()` and `componentDidUpdate()` are called during this phase.
* *Unmounting*, when the component is being removed from the DOM. We saw that `componentWillUnmount()` was called here, which was a good time to clean things up.

We also learned about setting up side-effects and tearing them down. We now know how to make more robust, complex components!

To your right is a reference that you can use. It shows the three phases of a component’s lifecycle and which methods are called at each phase. You can also refer to [this interactive diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

For more, you can read React’s official documentation. See “[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html” and the [docs for `React.Component`](https://reactjs.org/docs/react-component.html).
