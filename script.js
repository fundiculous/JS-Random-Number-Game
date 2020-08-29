let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};

const compareGuesses = (user, computer, target) => {
  if (user === computer){
    return true;
  }
  if (Math.abs(user - target) < Math.abs(computer - target)) {
return true;
  }
  else {
    return false;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  }
else if (winner === 'computer'){
  computerScore++;
}
};
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1
