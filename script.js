let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Return a random integer between 0 - 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Extension task: Refactor compareGuesses() to use getAbsoluteDistance()
function getAbsoluteDistance(firstNum, secondNum) {
    return Math.abs(firstNum - secondNum);
}

// Comparing guesses between human and computer
const compareGuesses = (human, computer, target) => {
    // Extension task: validate humanGuess is between 0 - 9
    if(human >= 0 && human <= 9) {
        const humanGuess = getAbsoluteDistance(human, target);
        const computerGuess = getAbsoluteDistance(computer, target);

        return(humanGuess <= computerGuess);
    } else {
        alert("The number is out of range. Guess between 0 - 9");
    }
}

// Updates score of the winner
const updateScore = winner => {
    winner === "human" ? humanScore += 1 : computerScore += 1;
}

// Update round number after each round
const advanceRound = () => {
    currentRoundNumber += 1;
}