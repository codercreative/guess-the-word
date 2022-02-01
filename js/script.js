const guessedLettersEl = document.querySelector(".guessed-letters");
const guessBtn = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesEl = document.querySelector(".remaining");
const numberOfRemainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainBtn = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const inputValue = letterInput.value;
  console.log(inputValue);
  inputValue.innerText = "";
});
