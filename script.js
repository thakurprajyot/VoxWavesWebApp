// script.js

document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");

    // Event listener for user registration
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("reg-username").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;

        // TODO: Implement AJAX request to register user on the server
        // Example: fetch("/register", { method: "POST", body: { username, email, password } })
        // Handle server response (success or error) and update the UI accordingly
    });

    // Event listener for user login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // TODO: Implement AJAX request to log in user on the server
        // Example: fetch("/login", { method: "POST", body: { username, password } })
        // Handle server response (success or error) and update the UI accordingly
    });
});