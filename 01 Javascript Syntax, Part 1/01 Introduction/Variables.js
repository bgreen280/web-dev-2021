//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Lesson: Create a Variable: var
// Description: Understand JS Variable, which is a keyword typically initianted with a value.  The value is assigned to the variable.
// Example:
var myName = 'Arya';
console.log(myName);
// Output: Arya

// Assignment:
// 1 Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
// 2 Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
// 3 a) Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.
//   b)On the following line, use console.log() to print the value saved to numOfSlices.

// Solution:
// create variables for favorite food and number of slices eaten
var favoriteFood = 'pizza';
var numOfSlices = 8;

// log favorite food and number of slices eaten
console.log(favoriteFood);
console.log(numOfSlices);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Create a Varieble: let
// Description: let can be overwritten and is local scope.  
// Example:
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// Assignment:
// 1 Create a let variable called changeMe and set it equal to the boolean true.
// 2 On the line after changeMe is declared, set the value of changeMe to be the boolean false. To check if changeMe was reassigned, log the value saved to changeMe to the console.

// Solution:

let changeMe = true; //initialize changeMe and set value to true
changeMe = false; //change value of changeMe ot false
console.log(changeMe); //log updated changeMe value


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Create a Varieble: const 
// Description: value can not be reassigned and must have a value when being intiantiated/declared, unlike var and let. 
// Example:
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

// Assignment:
// 1 Create a constant variable named entree and set it to equal to the string 'Enchiladas'.
// 2 Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.
// 3 Great, let’s see what happens if you try to reassign a constant variable. Paste the following code to the bottom of your program.
// entree = 'Tacos'
// This code throws the following error when you run your code:
// TypeError: Assignment to constant variable.

// Solution:
const entree = 'Enchiladas'; //initialize entree variable and set value to "ENchiladas"
console.log(entree); //log current value of entree
entree = 'Tacos'; //demo result of Error when manipulate a const object


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Mathimatical Assignment Operators
// Description: 
// Example:
let w = 4;
w = w + 1;
console.log(w); // Output: 5

let w = 4;
w += 1;
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// Assignment:
// 1 Use the += mathematical assignment operator to increase the value stored in levelUp by 5.
// 2 Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.
// 3 Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.
// 4 Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.

// Solution:
// CodeCademy created variables
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5; // add 5 to levelUp
powerLevel -= 100; // subtract 100 from powerLevel
multiplyMe *= 11; // multiply multiplyMe by 11
quarterMe /= 4; // divide quarterMe by 4

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: The Increment and Decrement Operator
// Description: 
// Example:
let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

// Assignment:
// 1 Using the increment operator, increase the value of gainedDollar.
// 2 Using the decrement operator, decrease the value of lostDollar.

// Solution:
// CodeCademy given variables
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++; // increment gainedDollar
lostDollar--; // decrament lostDollar

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: String Concatenation with Variables
// Description: 
// Example:
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

// Assignment:
// 1 Create a variable named favoriteAnimal and set it equal to your favorite animal.
// 2 Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.

// Solution:
let favoriteAnimal = 'dog'; // create favoriteAnimal variable and assign dog as my favorite animal
console.log('My favorite animal: '+favoriteAnimal); // log text concatanated to favoriteAnimal variable

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: String Interpolation
// Description: Using template literals to embed variables into strings
// Example:
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

// Assignment:
// 1 Create a variable called myName and assign it your name.
// 2 Create a variable called myCity and assign it your favorite city’s name.
// 3 Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format: My name is NAME. My favorite city is CITY. Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.

// Solution:
// initialize variables for name and city
let myName = 'name';
let myCity = 'city';

// log name and favorite city by interpolating text into string 
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: typeof operator
// Description: 
// Example:
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

// Assignment:
// 1 Use console.log() to print the typeof newVariable.
// 2 Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.
// 3 Since you assigned this new value to newVariable, it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.

// Solution
let newVariable = 'Playing around with typeof.'; // CodeCademy given variable
console.log(typeof newVariable); // log type of variable 
newVariable = 1; //reassign newVariable value to 1
console.log(typeof newVariable); // log type of variable

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Review Variables
// Description: 
// Summary:
// 1 Variables hold reusable data in a program and associate it with a name.
// 2 Variables are stored in memory.
// 3 The var keyword is used in pre-ES6 versions of JS.
// 4 let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
// 5 Variables that have not been initialized store the primitive data type undefined.
// 6 Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
// 7 The + operator is used to concatenate strings including string values held in variables
// 8 In ES6, template literals use backticks ` and ${} to interpolate values into a string.
// 9 The typeof keyword returns the data type (as a string) of a value.

// Assignment:
// 1 Create variables and manipulate the values
// 2 Check what happens when you try concatenating strings using variables of different data types
// 3 Interpolate multiple variables into a string
// 4 See what happens when you use console.log() on variables declared by different keywords (const, let, var) before they’re defined. 
// For example:
console.log(test1);

const test1 = 'figuring out quirks';
// 5 Find the data type of a variable’s value using the typeof keyword on a variable.
// 6 Use typeof to find the data type of the resulting value when you concatenate variables containing two different data types.

// Solution:
// create test variables
const dog = 'dog';
const cat = 'cat';
let numOfDogs = 3;
let numOfCats = 5;

// reassign value of two variables
numOfDOgs = 5;
numofCats = 10;

// logging string + int 
console.log(dog+numOfDogs);


console.log(`There are ${numOfDogs} dogs.`);

// Testing log whe value is assigned after log
// console.log(testLet);
// let testLet ='abc'; // Reference Error

// Testing log whe value is assigned after log
// console.log(testConst);
// const testConst = 'abc'; // Reference Error

// Testing log whe value is assigned after log
console.log(testVar);
var testVar = 'abc'; // undefined

// Testing typeof with single variable and interpolated variable
console.log(typeof dog); // output: string
console.log(typeof `There are ${numOfDogs} dogs.`); // output: sgring
console.log(typeof 'The total number of dogs is: '+numOfDogs); // output: string3

