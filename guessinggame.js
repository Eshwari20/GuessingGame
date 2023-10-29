let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    if (guessNumber > randomNumber) {
        gameResult.textContent = "Too High!Try again!";
        gameResult.style.backgroundColor = "blue";
    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try again!";
        gameResult.style.backgroundColor = "blue";
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulations! you got it right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "please provide valid input!";
        gameResult.style.backgroundColor = "red";
    }
}