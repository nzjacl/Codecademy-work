let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => 
  Math.abs(num1 - num2);

function compareGuesses(humanGuess, computerGuess, targetGuess) {
  humanDifference = getAbsoluteDistance(humanGuess, targetGuess);
  computerDifference = getAbsoluteDistance(computerGuess, targetGuess);
  return humanDifference <= computerDifference;
}



/*const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const computerDifference = Math.abs(targetGuess - computerGuess)
  const humanDifference = Math.abs(targetGuess - humanGuess)
  return humanDifference <= computerDifference;
}*/

 let updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
  } 
 };

const advanceRound = () => currentRoundNumber++;
