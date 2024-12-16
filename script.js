const cl = console.log;

// ========== Accessing HTML elements ==========

const guessInput = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn");
const turnsLeft = document.getElementById("turns-left");
const proximityMsg = document.getElementById("proximity-msg");

// ========== Game Logic ==========

// Generate random number
function generateNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameNum = generateNumber(1, 100);

// checking number...
cl(gameNum);

//Number of turns
let numOfTurns = 7;

function updateTurnsLeft() {
  numOfTurns -= 1;
  turnsLeft.innerHTML = `<p>Turns left: ${numOfTurns}</p>`;
}

// Check number function
function checkNumber() {
  let userGuess = Number(guessInput.value);

  if (userGuess === gameNum) {
    proximityMsg.innerHTML = `<p>You got it right!!!</p>`;
  } else if (userGuess < gameNum) {
    proximityMsg.innerHTML = `<p>Too low!</p>`;
  } else if (userGuess > gameNum) {
    proximityMsg.innerHTML = `<p>Too high!</p>`;
  } else {
    alert("error. I'm sorry, Anne.");
  }

  updateTurnsLeft();
}

//check number of turns
function checkNumOfTurns() {
  if (numOfTurns <= 7 && numOfTurns > 0) {
    checkNumber();
  } else if (numOfTurns === 0) {
    proximityMsg.innerHTML = `<p>No more turns! The answer was ${gameNum}.</p>`;
  }
}

submitBtn.addEventListener("click", checkNumOfTurns);

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkNumOfTurns();
  }
});
