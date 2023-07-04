// script.js

// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform validation
    if (username.trim() === '') {
      displayErrorMessage('Please enter your username');
    } else if (password.trim() === '') {
      displayErrorMessage('Please enter your password');
    } else {
      // Perform login logic here
      // Example: You can send an AJAX request to a server-side endpoint for authentication
      // Once the login is successful, redirect the user to the main page
      // window.location.href = 'main.html';
      if (username === 'admin' && password === 'password') {
        // Redirect to the main page on successful login
        window.location.href = 'main.html';
    } else {
        displayErrorMessage('Invalid username or password');
    }
    }
  }
  
  // Function to display error message
  function displayErrorMessage(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
  }
  