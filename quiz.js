// Define the checkAnswer function
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Display feedback for the correct answer
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Display feedback for the incorrect answer
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
