//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Introduction
// Assignment: Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'. Helpful Notes: Your function can be a function expression or a function declaration. Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned. Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc.

// Solution:
// Write your function here:
const greetWorld = () => 'Hello, World!';


//Write code to test your function. Even if we provide code to test your function, you should add further tests to make sure your function works correctly in all the specified situations
console.log(greetWorld());


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: canIVote()
// Assignment: The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

// Solution:
// Write your function here:
const canIVote = age => age >= 18;

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)); // Should print true

// We encourage you to add more function calls of your own to test your code!
console.log(canIVote(-19)); // Should print false
console.log(canIVote(18)); // Should print true
console.log(canIVote(1)); // Should print false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: agreeOrDisagree()
// Assignment: Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

// Solution:
// Write your function here:
const agreeOrDisagree = (string1, string2) => string1 === string2 ? 'You agree!' : 'You disagree!';

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) // Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!
console.log(agreeOrDisagree("yep", "nope")); // Should print 'You disagree!'
console.log(agreeOrDisagree("nope", "yep")); // Should print 'You disagree!'
console.log(agreeOrDisagree("nope", "nope")); // Should print 'You agree!'
console.log(agreeOrDisagree("", "")); // Should print 'You agree!'


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: lifePhase()
// Assignment: Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in. Here are the classifications: 0-3 should return 'baby';  4-12 should return 'child'; 13-19 should return 'teen'; 20-64 should return 'adult'; 65-140 should return 'senior citizen'; If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

// Solution:
// Write your function here:
// create function which takes age as input and returns life phase
const lifePhase = age => {
  if (age >= 0 && age <= 3) { // test for babies
    return 'baby';
  } else if (age >= 4 && age <=12) { // test for children
    return 'child';
  } else if (age >= 13 && age <=19) { // test for teens
    return 'teen';
  } else if (age >= 20 && age <= 64) { // test for adults
    return 'adult';
  } else if (age >= 65 && age <= 140) { // test for senior citizens 
    return 'senior citizen';
  } else { // default resposne
    return 'This is not a valid age';
  };
};

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) // should print 'child'

// We encourage you to add more function calls of your own to test your code!
console.log(lifePhase(0)) // should print 'baby'
console.log(lifePhase(0.5)) // should print 'baby'
console.log(lifePhase(15)) // should print 'teen'
console.log(lifePhase(50)) // should print 'adult'
console.log(lifePhase(500)) // should print 'This is not a valid age'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: finalGrade()
// Assignment: Write a function, finalGrade(). It should: take three arguments of type number; find the average of those three numbers; return the letter grade (as a string) that the average corresponds to; return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100; 0-59 should return: 'F'; 60-69 should return: 'D'; 70-79 should return: 'C'; 80-89 should return: 'B'; 90-100 should return: 'A'

// Solution:
// Write your function here:
// function which takes three grades, validates them, takes mean, and returns corresponding letter grade
const finalGrade = (midterm, final, homework) => {

  // data validation
  if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
      return 'You have entered an invalid grade.';
  } 

  // compute grade mean
  const average = (midterm + final + homework) / 3;

  // return letter grade based on average
  switch (true) {
    case average < 60: return 'F';
    case average < 70: return 'D';
    case average < 80: return 'C';
    case average < 90: return 'B';
    case average <= 100: return 'A'; 
  };  
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(90, 90, 90)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
console.log(finalGrade(0, 0, -1)); // Should print 'You have entered and invalid grade.'
console.log(finalGrade(50, 50, 50)); // Should print 'F'
console.log(finalGrade(60, 60, 60)); // Should print 'D'
console.log(finalGrade(70, 70, 70)); // Should print 'C'
console.log(finalGrade(80, 80, 80)); // Should print 'B'
console.log(finalGrade(100, 100, 101)); // Should print 'You have entered an invalid grade.'


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: reportingForDuty()
// Assignment: Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’ reportingForDuty('Private', 'Fido') // Should return 'Private Fido reporting for duty!'

// Solution:
// Write your function here:
// function takes two inputs (rank, lastName) and returns a string with both variables used
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`


// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!
console.log(reportingForDuty('General', 'Graph')) // Should return 'Private Fido reporting for duty!'
console.log(reportingForDuty('Corporal', 'Cosine')) // Should return 'Private Fido reporting for duty!'
console.log(reportingForDuty('Sargent', 'Secant')) // Should return 'Private Fido reporting for duty!'


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Fix The Broken Code
// Assignment: We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?

// Solution:
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random()) * 6 + 1 // used Math.floor to return int 
    let die2 = Math.floor(Math.random()) * 6 + 1 // used Math.floor to return int 
    // console.log(die1)
    // console.log(die2)
    return die1 + die2
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: calculateWeight()
// Assignment:Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?
// Write a function, calculateWeight(). It should:
// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.
// Handle the following cases:
// 'Mercury' weight = earthWeight * 0.378
// 'Venus' weight = earthWeight * 0.907
// 'Mars' weight = earthWeight * 0.377
// 'Jupiter' weight = earthWeight * 2.36
// 'Saturn' weight = earthWeight * 0.916
// For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

// Solution:
// Write your function here:
// takes earthWeight and desired Planet, returns desired planets weight
const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case 'Mercury': return earthWeight * 0.378;
    case 'Venus': return earthWeight * 0.907;
    case 'Mars': return earthWeight * 0.377;
    case 'Jupiter': return earthWeight * 2.36;
    case 'Saturn': return earthWeight * 0.916;
    default: return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  };
};

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')); // Should print 236

// We encourage you to add more function calls of your own to test your code!
console.log(calculateWeight(100, 'Mercury')); // Should print 236
console.log(calculateWeight(100, 'Venus')); // Should print 236
console.log(calculateWeight(100, 'Mars')); // Should print 236
console.log(calculateWeight(100, 'Saturn')); // Should print 236
console.log(calculateWeight(100, 'Pluto')); // Should print 236


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: truthyOrFalsy()
// Assignment: It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.

// Solution:
// Write your function here:
// takes input and test of true or false, returns true or false
const truthyOrFalsy = input => input ? true : false 

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)); // Should print false

// We encourage you to add more function calls of your own to test your code!
console.log(truthyOrFalsy(true)); // Should print true
console.log(truthyOrFalsy(false)); // Should print false
console.log(truthyOrFalsy('1')); // Should print true
console.log(truthyOrFalsy('')); // Should print false
console.log(truthyOrFalsy(1)); // Should print true
console.log(truthyOrFalsy(undefined)); // Should print false


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: numImaginaryFriends()
// Assignment:A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.
// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.
// Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
// The JavaScript Math.ceil() function will come in handy. Check out the documentation here to figure out how it works.

// Solution:
// Write your function here:

// take number of real friends as input, return num of img friends using equation
const numImaginaryFriends = realFriends => Math.ceil(realFriends / 4);

// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)); // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!
console.log(numImaginaryFriends(27)); // Should print 7 (6.25 rounded up!) 
console.log(numImaginaryFriends(9)); // Should print 2 (2.25 rounded up!)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: sillySentence()
// Assignment: Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function: sillySentence('excited', 'love', 'functions'); // Should return 'I am so excited because I love coding! Time to write some more awesome functions!'

// Solution:
// Write your function here:
// function that takes 3 words and returns a sentance using the words
const sillySentence = (adj, verb, noun) => `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;

// Uncomment the line below when you're ready to try out your function
console.log(sillySentence('excited', 'love', 'functions'));
// should return 'I am so excited because I love coding! Time to write some more awesome functions!'

// We encourage you to add more function calls of your own to test your code!
console.log(sillySentence('excited', 'love', 'functions'));
// should return 'I am so excited because I love coding! Time to write some more awesome functions!'

console.log(sillySentence('stoked', 'heart', 'code'));
// should return 'I am so stoked because I heart coding! Time to write some more awesome code!'

console.log(sillySentence('thrilled', 'adore', 'programs'));
// should return 'I am so thrilled because I adore coding! Time to write some more awesome programs!'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: howOld()
// Assignment: Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:
// If the year is in the future, you should return a string in the following format: 'You will be [calculated age] in the year [year passed in]'
// If the year is before they were born, you should return a string in the following format: 'The year [year passed in] was [calculated number of years] years before you were born'
// If the year is in the past but not before the person was born, you should return a string in the following format: 'You were [calculated age] in the year [year passed in]' 

// Solution:
// Write your function here:
// create function taking two variables (age, year) amd evaluating their age during any given year
const howOld = (age, year) => {
  const currentYear = 2021; // current year
  // age difference between given year and current year, + in the future, - in the past
  const ageDifferance = year - currentYear;
  const newAge = age + ageDifferance; // new age based on age difference

  // logic determines response to user
  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${Math.abs(newAge)} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  };
};


// Once your function is written, write function calls to test your code!
console.log(howOld(32, 2029));
console.log(howOld(32, 1988));
console.log(howOld(32, 2020));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: Fix the broken code (round 2)!
// Assignment: Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.

// We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it’s not working!

// Here’s how it’s supposed to calculate the relationship:

// 100 should return 'You are likely identical twins.'
// 35-99 should return 'You are likely parent and child or full siblings.'
// 14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// 6-13 should return 'You are likely 1st cousins.'
// 3-5 should return 'You are likely 2nd cousins.'
// 1-2 should return 'You are likely 3rd cousins.'
// 0 should return 'You are likely not related.'
// Unfortunately, it’s not working how we want!

// whatRelation(34) 
// // Should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// // But instead it's returning 'You are likely 1st cousins.'

// whatRelation(3)
// // Should return 'You are likely 2nd cousins.'
// // But instead it's returning 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// Can you fix our code, please?

// Solution:
// CodeCademy given code
// const whatRelation = percentSharedDNA => {
//   if (percentSharedDNA === 100) {
//       return 'You are likely identical twins.'
//   }
//   if (percentSharedDNA > 34) {
//       return 'You are likely parent and child or full siblings.'
//   }
//   if (percentSharedDNA < 13) {
//       return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
//   }
//   if (percentSharedDNA > 5) {
//       return 'You are likely 1st cousins.'
//   }
//   if (percentSharedDNA > 2) {
//       return 'You are likely 2nd cousins.'
//   }
//   if (percentSharedDNA > 0) {
//       return 'You are likely 3rd cousins'
//   }
//   return 'You are likely not related.'
// }

// console.log(whatRelation(34))
// // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

// console.log(whatRelation(3))
// // Should print 'You are likely 2nd cousins.'

/////////////////////////////////////////////////////////////////
// takes DNA percentage and outputs likelihood 
const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 100) { // checks if perfect match
      return 'You are likely identical twins.';
  } else if (percentSharedDNA >= 35) { // checks if greater than or equal to 35%
      return 'You are likely parent and child or full siblings.';
  } else if (percentSharedDNA >= 14) { // checks if greater than or equal to 14%
      return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
  } else if (percentSharedDNA >= 6) { // checks if greater than or equal to 6%
      return 'You are likely 1st cousins.';
  } else if (percentSharedDNA >= 3) { // checks if greater than or equal to 3%
      return 'You are likely 2nd cousins.';
  } else if (percentSharedDNA > 0) { // checks if greater than or equal to 0%
      return 'You are likely 3rd cousins';
  } else {
    return 'You are likely not related.'; // not likely related
  };
};

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: tipCalculator()
// Assignment: Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

// Return the tip, as a number, based on the following:
// ‘bad’ should return a 5% tip
// ‘ok’ should return a 15% tip
// ‘good’ should return a 20% tip
// ‘excellent’ should return a 30% tip
// all other inputs should default to 18%

// tipCalculator('good', 100) // Should return 20


// Solution:
// Write your function here:
// takes quality of service and total cost, returns tip based on quality
const tipCalculator = (quality, total) => {
  switch(quality) {
    case 'bad': return total*0.05; // result for bad quality
    case 'ok': return total*0.15; // result for ok quality
    case 'good': return total*0.20; // result for good quality
    case 'excellent': return total*0.30; // result for excellent quality
    default: return total*0.18; // result for all other inputs
  };
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)); //should return 20

// We encourage you to add more function calls of your own to test your code!
console.log(tipCalculator('bad', 100)); //should return 5
console.log(tipCalculator('ok', 100)); //should return 15
console.log(tipCalculator('excellent', 100)); //should return 30
console.log(tipCalculator('meh', 100)); //should return 18

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lesson: toEmoticon()
// Assignment: Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

// 'shrug' should return '|_{"}_|'
// 'smiley face' should return ':)'
// 'frowny face' should return':('
// 'winky face' should return ';)'
// 'heart' should return '<3'
// any other input should return '|_(* ~ *)_|'

// Solution:
// Write your function here:
// functino takes in string describing emoticon, returns emoticon
const toEmoticon = emoticon => {
  switch (emoticon) {
    case 'shrug': return '|_{"}_|';
    case 'smiley face': return ':)';
    case 'frowny face': return ':(';
    case 'winky face': return ';)';
    case 'heart': return '<3';
    default: return '|_(* ~ *)_|';
  };
};


// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) // Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
console.log(toEmoticon("shrug")) // Should print  '|_{"}_|'
console.log(toEmoticon("smiley face")) // Should print  ':)'
console.log(toEmoticon("frowny face")) // Should print  ':('
console.log(toEmoticon("winky face")) // Should print ';)'
console.log(toEmoticon("heart")) // Should print  '<3'

