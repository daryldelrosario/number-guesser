let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Return a random integer between 0 - 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Comparing guesses between human and computer
const compareGuess = (human, computer, target) => {
    const humanScore = Math.abs(human - target);
    const computerScore = Math.abs(computer - target);
    
    if(humanScore < computerScore) {
        return true;
    } else if(humanScore > computerScore) {
        return false;
    } else {
        return true;
    }
}