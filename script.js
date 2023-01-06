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
    const humanGuess = Math.abs(human - target);
    const computerGuess = Math.abs(computer - target);
    
    if(humanGuess < computerGuess) {
        return true;
    } else if(humanGuess > computerGuess) {
        return false;
    } else {
        return true;
    }
}

// Updates score of the winner
const updateScore = winner => {
    winner === "human" ? humanScore += 1 : computerScore += 1;
}

// Update round number after each round
const advanceRound = () => currentRoundNumber += 1;