//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment:
// 1 Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file. Check off this task after reading that line. You can read the hint if you want to learn how it works!
// 2 Create a variable that indicates whether a runner registered early or not. Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
// 3 Create a variable for the runner’s age and set it equal to a number. You’ll change this later as you test different runner conditions.
// 4 Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.
// 5 Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time. For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
// 6 “Late adults run at 11:00 am” Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am Write the corresponding else if statement. Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
// 7 “Youth registrants run at 12:30 pm (regardless of registration)” For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.
// 8 Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console! You can check your work using the examples provided in the hint.
// 9 Don’t forget about runners exactly 18 years old! Add an else statement that logs a statement to the console telling the runner to see the registration desk.

// Solution:
let raceNumber = Math.floor(Math.random() * 1000); // CodeCademy given random number generator betweeen 0-1000

let runnerRegisteredEarly = true; // runners early registration status
let runnerAge = 15; // runners age

// adds 1000 to race number for early registered adults 
if (runnerRegisteredEarly && runnerAge > 18) {
    raceNumber += 1000;
};

// Assigns racetime depending on age and early registration status.  Logs race time and race number 
if (runnerRegisteredEarly && runnerAge > 18) { // checks if racer is adult with early registation status
    console.log(`Your race will begin at 9:30am.  Your race number is: ${raceNumber}`); // logs racetime and race number
} else if (!runnerRegisteredEarly && runnerAge > 18) { // checks if racer is adult with later registration status
    console.log(`Your race will begin at 11:30am.  Your race number is: ${raceNumber}`); // logs racetime and race number
} else if (runnerAge < 18) { // checks if racer if youth
    console.log(`Your race will begin at 12:30pm.  Your race number is: ${raceNumber}`); // logs racetime and race number
} else { // response for all other outcomes
    console.log('Please see the regsitration desk.'); // logs that racer should see registration desk
};
