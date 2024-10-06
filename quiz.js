// Define the checkAnswer function
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Provide feedback for the correct answer
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Provide feedback for the incorrect answer
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, provide feedback
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Retrieve the submit button and add event listener
const submitButton = document.getElementById("submit-answer");

// Check if the submit button exists and add the event listener
if (submitButton) {
    submitButton.addEventListener("click", checkAnswer);
} else {
    console.error("Submit button not found!");
}
