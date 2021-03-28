//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Blocks and Scope
// Description: 
// Example:
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

if (dusk) {
  let color = 'pink';
  console.log(color); // pink
};

// Assignment:
// 1 At the top of main.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.
// 2 Below the city variable, write a function named logCitySkyline.
// 3 Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.
// 4 Inside the function, include a return statement like this: return 'The stars over the ' + skyscraper + ' in ' + city;
// 5 Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console. You’ll notice that the logCitySkyline() function is able to access both variables without any problems. In the next exercise we’ll consider why would it be preferable to have one variable outside of a block and the other inside of a block.

// Solution:
// create global variable called city
const city = 'New York City';

// create function to log city skyline
const logCitySkyline = () => {
  // create local variable called skyscraper
  let skyscraper  = 'Empire State Building';

  // output string using local and global variables
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

// log results
console.log(logCitySkyline())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Global Scope
// Description: 
// Example:
const color = 'blue';

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue

// Assignment:
// 1 At the top of main.js, write three global variables: Name the first variable satellite and set it equal to 'The Moon'. Name the second variable galaxy and set it equal to 'The Milky Way'. Name the third variable stars and set it equal to 'North Star'.
// 2 Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this: return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// 3 Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console. You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.

// Solution:
// create variables
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

// create function using global variables
const callMyNightSky = () => 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

// call function for testing
console.log(callMyNightSky());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Block Scope
// Description: When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.
// Example:
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
console.log(color); // ReferenceError

// Assignment:
// 1 In main.js, define a function logVisibleLightWaves().
// 2 Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
// 3 Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.
// 4 Call the logVisibleLightWaves() function from outside the function.
// 5 Beneath the function call, log the value of lightWaves to the console from outside the function. You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!

// Solution:
// create function with local variable inside block
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight'; // local variable
  console.log(lightWaves); // logging local variable
};

logVisibleLightWaves(); // calling function to view output with local variable
console.log(lightWaves); // throws Reference Error because variable inaccessible

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Scope Pollution
// Description: 
// Example:
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

// Assignment:
// 1 Let’s see what happens if we create a variable that overwrites a global variable. Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such: stars = 'Sirius';
// 2 Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console. You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.

// Solution:
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius'; // reassigning a global variable from a local scope
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Practice Good Scoping
// Description: 
// Example:
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

// Assignment:
// 1 Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.
// 2 Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.
// 3 Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block. Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.

// Solution:
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';

  // if statment to demo global vs local scope
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights'; // new local variable
    console.log(lightWaves); // output: 'Northern Lights'
  };
  console.log(lightWaves); // output: 'MoonLight'
};

logVisibleLightWaves(); // output to test function

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Review: Scope
// Description: 
// Summary
// 1 Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
// 2 Blocks are statements that exist within curly braces {}.
// 3 Global scope refers to the context within which variables are accessible to every part of the program.
// 4 Global variables are variables that exist within global scope.
// 5 Block scope refers to the context within which variables that are accessible only within the block they are defined.
// 6 Local variables are variables that exist within block scope.
// 7 Global namespace is the space in our code that contains globally scoped information.
// 8 Scope pollution is when too many variables exist in a namespace or variable names are reused.
