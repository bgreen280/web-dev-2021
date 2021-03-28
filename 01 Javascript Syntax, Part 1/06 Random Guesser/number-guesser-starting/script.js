let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// generate random number
const generateTarget = () => Math.floor(Math.random() * 10)
// console.log(generateTarget()) // test random number

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  // check if user guess is valid
  if (userGuess < 0 || userGUess > 9) {
    alert('Please enter a number between 0 - 9.')
  }
  
  // flag for result, preset to false and changed to true if conditions met
  let winner = false;
  // computers distance from target number
  const computerDistance = Math.abs(computerGuess - targetNumber);
  // users distance from target number
  const userDistance = Math.abs(userGuess - targetNumber);

  // check if user/computer guess equalivant or if user closer to target, return true if conditions met
  if (computerDistance === userDistance || computerDistance > userDistance) {
    winner = true;
  }; 
  return winner;
};
// console.log(compareGuesses(3, 4, generateTarget()))

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  };
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

