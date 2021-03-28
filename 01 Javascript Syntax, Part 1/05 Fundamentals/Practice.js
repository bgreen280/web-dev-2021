//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment: 
// Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.
// If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.
// If not, return the string 'That is a nice color.'
// Feel free to test your code under the function definition.

// Solution:
// Create function below
const colorMessage = (favoriteColor, shirtColor) => favoriteColor === shirtColor ? 'The shirt is your favorite color!' : 'That is a nice color.';

console.log(colorMessage('blue', 'blue'))
console.log(colorMessage('blue', 'green'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment: Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.

// Solution:
const isEven = num => num % 2 ? false : true;

console.log(isEven(2));
console.log(isEven(3));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment:
// Create a function numberDigits() that takes the variable x as its only parameter.
// If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:
// 'One digit: 5'
// If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:
// 'Two digits: 12'
// Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:
// 'The number is: -202'
// Feel free to test out your code below the function definition.

// Solution:
// Create function here 
const numberDigits = x => {
  if (x < 0 || x > 99) {
    return `The number is: ${x}`;
  } else if (x < 10) {
    return `One digit: ${x}`;
  } else if (x < 100) {
    return `Two digits: ${x}`;
  };
};

console.log(numberDigits(3))
console.log(numberDigits(33))
console.log(numberDigits(333))
console.log(numberDigits(-3))