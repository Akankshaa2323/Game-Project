let score = 20;
let highestScore = 20;
let randomNumber = Math.floor(Math.random() * 10) + 1;

const scoreDisplay = document.getElementById("score");
const highestScoreDisplay = document.getElementById("highest-score");
const questionMark = document.getElementById("question-mark");
const userInput = document.getElementById("user-input");
const resetButton = document.getElementById("reset-btn");
const checkButton = document.getElementById("check-btn");
const resultMessage = document.getElementById("result-message");
const feedbackBox = document.getElementById("feedback-box");
const body = document.body;

function handleCheck() {
    const userGuess = Number(userInput.value);
    resultMessage.innerHTML = ""; // Clear previous messages
    feedbackBox.innerHTML = ""; // Clear feedback box


    // If the guess is correct:
    // It changes the background color to green.
    // It shows a congratulatory message.
    // It calls the  function to reset the game.  
    if (userGuess === randomNumber) {
        resultMessage.innerHTML = "Congratulations! You've guessed the number.";
        document.querySelector('body').style.background = "green";
        resetGame();
    } 


    // If the guess is incorrect:
    // Decrease the score by 1.
    // Update the score shown to the player.
    else {
        score--;    // Decrease the score by 1
        scoreDisplay.innerHTML = `Score: ${score}`;   // Update score display

        // Update feedback box (it will check user's guess is lower or higher than the random number.)
        feedbackBox.innerHTML = userGuess < randomNumber ? "Oops...Too Low!📉" : "Oops...Too High!📈";

        // If the score reaches zero or below, it shows "Game Over" message and calls the  function.
        if (score <= 0) {
            resultMessage.innerHTML = "Game Over! You've run out of score.";
            resetGame();
        }
    }


    // This checks if the current score is higher than the previous highest score. If so, it updates the highest score and displays it.
    if (score > highestScore) {
        highestScore = score;
        highestScoreDisplay.innerHTML = `Highest Score: ${highestScore}`;
    }

    userInput.value = '';  //used to clear the input field where the user enters their guess.
}


// to reset the game (This function resets the game back to the initial state.)
// Resets the score to 20.
// Generates a new random number.
// Updates the displayed scores.
// Removes the green background color. 
// Clears the question mark, result message, and feedback box.

function resetGame() {
    score = 20;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    scoreDisplay.innerHTML = `Score: ${score}`;
    highestScoreDisplay.innerHTML = `Highest Score: ${highestScore}`;
    body.classList.remove("background=green");
    questionMark.innerHTML = "?";
    resultMessage.innerHTML = ""; // Clear the result message
    feedbackBox.innerHTML = ""; // Clear feedback box
}

// When the "Reset" button is clicked,  is called.
// When the "CHECK" button is clicked, the  function is executed.
resetButton.addEventListener("click", resetGame);
checkButton.addEventListener("click", handleCheck);