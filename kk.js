// Define the valid credentials
const validUsername = "user123";
const validPassword = "pass123";

// Function to validate login credentials
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if credentials match
    if (username === validUsername && password === validPassword) {
        window.location.href = "project.html"; // Redirect to the new page
        return false;
    } else {
        errorMessage.textContent = "Invalid username or password.";
        return false;
    }
}

