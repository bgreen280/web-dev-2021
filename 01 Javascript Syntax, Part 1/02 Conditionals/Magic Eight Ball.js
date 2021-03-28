//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment:
// 1 In the first line of the program, define a variable called userName that is set to an empty string. If the user wants, he or she can enter his or her name in between the quotation marks.
// 2 Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
// 3 Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
// 4 Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
// 5 We need to generate a random number between 0 and 7. Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods from the Math library. Math.floor(Math.random() * 8); Check the hint to learn how it works!
// 6 Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.
// 7 We need to create a control flow that takes in the randomNumber we made in step 4, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall: 1 'It is certain'; 2 'It is decidedly so'; 3 'Reply hazy try again'; 4 'Cannot predict now'; 4 'Do not count on it'; 5 'My sources say no'; 6 'Outlook not so good'; 7 'Signs point to yes'; If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on. If you’re feeling creative, make your own responses!
// 8 Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
// 9 Run your program a few times to see random results appear in the console! If you want extra practice: If you started with a switch statement, convert it to if/else if/else statements. If you started with if/else if/else statements, convert them to a switch statement.

// Solution:
// Enter userName and greet them.  
const userName = 'Name';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Enter userQuestion and ask states userName: userQuestion
const userQuestion = 'What\'s good?';
console.log(`${userName} asks: ${userQuestion}`);


// create random number between 0-7
let randomNumber = Math.floor(Math.random() * 8);

// assign Random to eightBall
let eightBall = randomNumber;

// switch statement to test for different eightBall outcomes and change value based on response 
switch(eightBall){
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Cannot predict now'
        break;
    case 4:
        eightBall = 'Do not count on it'
        break;
    case 5:
        eightBall = 'My sources say no'
        break;
    case 6:
        eightBall = 'Outlook not so good'
        break;
    case 7:
        eightBall = 'Signs point to yes'
        break;
    default:
        console.log('something bad happened')
        break;
}

// log eightBall value
console.log(eightBall);

// reassign eightBall value to test if...else version
eightBall = randomNumber

// if...else statement to test for different eightBall outcomes and change value based on response 
if (eightBall == 0) {
    eightBall = 'It is certain';
} else if (eightBall == 1) {
    eightBall = 'It is decidedly so';
} else if (eightBall == 2) {
    eightBall = 'Reply hazy try again';
} else if (eightBall == 3) {
    eightBall = 'Cannot predict now'; 
} else if (eightBall == 4) {
    eightBall = 'Do not count on it';
} else if (eightBall == 5) {
    eightBall = 'My sources say no'; 
} else if (eightBall == 6) {
    eightBall = 'Outlook not so good'; 
} else if (eightBall == 7) {
    eightBall = 'Signs point to yes';
} else {
    eightBall = 'something bad happened...'
};

// log eightBall value
console.log(eightBall)