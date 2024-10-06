// Define the checkAnswer function
function checkAnswer() {
    // Correct answer (Check for correct answer assignment)
    const correctAnswer = "4";
    
    // Get the user's selected answer (Check for retrieving the user’s answer)
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected (Handling case where no answer is selected)
    if (userAnswer) {
        // Check for comparison of the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Providing feedback based on the comparison (correct answer)
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Providing feedback based on the comparison (incorrect answer)
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Feedback if no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Check for retrieval of the “submit-answer” button
const submitButton = document.getElementById("submit-answer");

// Check for adding an event listener to the “Submit Answer” button
submitButton.addEventListener("click", checkAnswer);

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
