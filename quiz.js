// Define the checkAnswer function
function checkAnswer() {
    // Correct answer (Check for correct answer assignment)
    const correctAnswer = "4";
    
    // Get the user's selected answer (Check for retrieving the user’s answer)
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected (Handling case where no answer is selected)
    if (userAnswer) {
        // Compare the user's answer with the correct answer (Check for comparison)
        if (userAnswer.value === correctAnswer) {
            // Provide feedback based on the comparison (correct answer)
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Provide feedback based on the comparison (incorrect answer)
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Feedback if no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Retrieve the “submit-answer” button (Check for retrieval)
const submitButton = document.getElementById("submit-answer");

// Add an event listener to the “Submit Answer” button (Check for event listener)
submitButton.addEventListener("click", checkAnswer);
