// script.js

// Function to handle sign-up form submission
function handleSignUpFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the entered form fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Perform validation
    if (username.trim() === '') {
      displayErrorMessage('Please enter a username');
    } else if (email.trim() === '') {
      displayErrorMessage('Please enter an email');
    } else if (mobile.trim() === '') {
      displayErrorMessage('Please enter a mobile number');
    } else if (password.trim() === '') {
      displayErrorMessage('Please enter a password');
    } else if (confirmPassword.trim() === '') {
      displayErrorMessage('Please confirm your password');
    } else if (password !== confirmPassword) {
      displayErrorMessage('Passwords do not match');
    } else {
      // Perform sign-up logic here
      // Example: You can send an AJAX request to a server-side endpoint to register the user
      // Once the sign-up is successful, you can redirect the user to the login page or display a success message
      window.location.href = 'login.html';
    }
  }
  
  // Function to display error message
  function displayErrorMessage(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
  }
  