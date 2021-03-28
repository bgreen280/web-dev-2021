//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Lesson: If Statement
// Description: 
// Example:
if (true) {
    console.log('This message will print!'); 
} // Prints: This message will print!

// Assignment:
// 1 Using the let keyword, declare a variable named sale. Assign the value true to it.
// 2 Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'.
// 3 Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console. Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.

// Solution:
// create sale variable equal to true
let sale = true;

// test condition of sale
if (sale) {
    console.log('Time to buy!')
};

// switch value of sale
sale = false;

// test condition of sale
if (sale) {
    console.log('Time to buy!')
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: If...Else Statements
// Description: 
// Example:
if (false) {
    console.log('The code in this block will not run.');
} else {
    console.log('But the code in this block will!');
} // Prints: But the code in this block will!

// Assignment:
// 1 Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'

// Solution:
// CodeCademy given code
let sale = true;
sale = false;

// Added 'else' statement
if(sale) {
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.');
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Truthy and Falsy
// Description: 
// Example: Values which evaluate to False: Empty strings like "" or ''; null which represent when there is no value at all; undefined which represent when a declared variable lacks a value; NaN, or Not a Number
let myVariable = 'I Exist!';

if (myVariable) {
    console.log(myVariable);
} else {
    console.log('The variable does not exist.');
} // Prints 'I Exist!'

let numberOfApples = 0;

if (numberOfApples){
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
} // Prints 'No apples left!'

// Assignment:
// 1 Change the value of wordCount so that it is truthy. This value should still be a number. After you make this change and run your code, 'Great! You've started your work!' should log to the console.
// 2 Change the value of favoritePhrase so that it is still a string but falsy. After you make this change and run your code, 'This string is definitely empty.' should log to the console.

// Solution:
// Exapmle 1: evaluating a non-zero value is true
let wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}

// Example 2: evaluating an empty string is false
let favoritePhrase = '';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Truthy and Falsy Assignment
// Description: 
// Example:
let defaultName;
if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
};

// short-circuit evaluation -- check leftmost variable, if true, return value, if galse, check next value, repeat
let defaultName = username || 'Stranger';

// Assignment:
// 1 Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step. Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.
// 2 Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'. What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.

// Solution:
// test empty value and marker value to demo short-circiut evaluation
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

// log results
console.log(`The ${writingUtensil} is mightier than the sword.`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Ternary Operator
// Description: 
// Example:
let isNightTime = true;

if (isNightTime) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// Assignment:
// 1 Refactor, or edit, the first if...else block to use a ternary operator.
// 2 Refactor the second if...else block to use a ternary operator.
// 3 Refactor the third if...else block to use a ternary operator.

// Solution:
// convert if...else to ternary operator 
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') :
    console.log('You will not need a key to open the door.');

// convert if...else to ternary operator 
let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// convert if...else to ternary operator 
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Else If Statements
// Description: 
// Example:
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

// Assignment:
// 1 Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen! In main.js there is already an if...else statement in place. Let’s add an else if statement that checks if season is equal to 'winter'. Inside the code block of the else if statement, add a console.log() that prints the string 'It\'s winter! Everything is covered in snow.'.
// 2 Add another else if statement that checks if season is equal to 'fall'. Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s fall! Leaves are falling!'.
// 3 Add a final else if statement that checks if season is equal to 'summer'. Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s sunny and warm because it\'s summer!'.

// Solution:
let season = 'summer';

// check for each season, return invalid season if no match
if (season === 'spring') { // check for spring
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') { // check for winter
    console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') { // check for fall
    console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') { // check for summer
    console.log('It\'s sunny and warm because it\'s summer!')
} else { // response if no valid season
    console.log('Invalid season.');
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: The switch keyword
// Description: 
// Example:
let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
    console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
    console.log('Papayas are $1.29');
} else {
    console.log('Invalid item');
}

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

// Assignment:
// 1 Let’s write a switch statement to decide what medal to award an athlete. athleteFinalPosition is already defined at the top of main.js. So start by writing a switch statement with athleteFinalPosition as its expression.
// 2 Inside the switch statement, add three cases: The first case checks for the value 'first place' If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!' The second case checks for the value 'second place' If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!' The third case checks for the value 'third place' If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!' Remember to add a break after each console.log().
// 3 Now, add a default statement at the end of the switch that uses console.log() to print 'No medal awarded.'. If athleteFinalPosition does not equal any value of our cases, then the string 'No medal awarded.' is logged to the console. Remember to add the break keyword at the end of the default case.

// Solution:
let athleteFinalPosition = 'first place';

// switch statement with 3 options and default
switch(athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Review
// Description: 
// Example:

// Summary
// 1 An if statement checks a condition and will execute a task if that condition evaluates to true.
// 2 if...else statements make binary decisions and execute different code blocks based on a provided condition.
// 3 We can add more conditions using else if statements.
// 4 Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
// 5 The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
// 6 The logical operator ||, or “or”, checks if either provided expression is truthy.
// 7 The bang operator, !, switches the truthiness and falsiness of a value.
// 8 The ternary operator is shorthand to simplify concise if...else statements.
// 9 A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.


