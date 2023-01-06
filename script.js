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
    let input = document.querySelector("input[type='number']");
    let value;

    while(human < 0 || human > 9 || human === null || human === "" || isNaN(human)) {
        human = window.prompt("Guess must be a value between 0 - 9. Please enter your guess here:");
        value = human;

        if (human < 0 || human > 9 || human === null || human === "" || isNaN(human)) {
            alert("Invalid Guess! Please read instructions and try again!");
        }
    }

    // Display human guess in input card
    value = human;
    input.value = value;

    const humanGuess = getAbsoluteDistance(human, target);
    const computerGuess = getAbsoluteDistance(computer, target);
    return(humanGuess <= computerGuess);
}

// Updates score of the winner
const updateScore = winner => {
    winner === "human" ? humanScore += 1 : computerScore += 1;
}

// Update round number after each round
const advanceRound = () => {
    currentRoundNumber += 1;
}