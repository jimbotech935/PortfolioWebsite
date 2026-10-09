//console.log("Hello from script.js");


//Below is JS code for Python Blackjack game
let userCards = [];
let computerCards = [];
let isGameOver = false;

function startGame(){
  isGameOver = false;
  userCards = [dealCard(), dealCard()];
  computerCards = [dealCard(), dealCard()];
  console.log("User cards:", userCards);
  console.log("Computer Cards:", computerCards); 
}
function dealCard() {
  const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}
console.log(dealCard());

function sumArray(hand) {
  let total = 0;
  for (let i = 0; i < hand.length; i++){
        total += hand[i]
  }
  return total;
}

console.log(sumArray([5, 10, 3]));

function calculateScore(hand) {
  let score = sumArray(hand);
  if (score === 21 && hand.length === 2){
    return 0;
  }
  if (score > 21 && hand.includes(11)){
    hand.splice(hand.indexOf(11), 1);
hand.push(1);
 score = score -10; //This line insures the ace is treated like a 1 if needed
  }
 return score;
}

console.log(calculateScore([10, 5])); // expect 15
console.log(calculateScore([11, 10])); // expect 0 (blackjack)
console.log(calculateScore([11, 10, 5])); // expect 16 (11 converts to 1: 1+10+5)

function compareScores(userScore, computerScore) {
  if (userScore === computerScore) {
    return "It's a draw!";
  } else if (computerScore === 0) {
    return "You lose";
  } else if (userScore === 0)
  {
    return "You got blackjack! You win!";
  } else if (userScore > 21)
  {
    return "You busted. You lose.";
  } else if (computerScore > 21){
    return "The dealer busted. You win!";
  } else if (userScore > computerScore) {
    return "You win!";
  } else {
    return "You lose";
  }
}

console.log(compareScores(19, 19)); // expect "It's a draw!"
console.log(compareScores(20, 0));  // expect "You lose"
console.log(compareScores(0, 17));  // expect "You got a blackjack! You win!"
console.log(compareScores(25, 18)); // expect "You busted. You lose."

startGame();

const dealBtn = document.querySelector("#deal-btn");
const userHandDisplay = document.querySelector("#user-hand");
const computerHandDisplay = document.querySelector("#computer-hand");

dealBtn.addEventListener("click", function() {
  startGame();
  userHandDisplay.textContent = "Your cards: " + userCards + " (Score: " + calculateScore(userCards) + ")";
  computerHandDisplay.textContent = "Computer's first card: " + computerCards[0];
});