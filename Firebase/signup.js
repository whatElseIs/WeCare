// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLjjMH80RGSndiT1W0Z85a4CO9OYhKkL0",
  authDomain: "login-form-21351.firebaseapp.com",
  projectId: "login-form-21351",
  storageBucket: "login-form-21351.appspot.com",
  messagingSenderId: "14967372407",
  appId: "1:14967372407:web:f5720462ed5b34bd2a6472",
  measurementId: "G-NH9T9PJTS0"
};

// Constants
const MOOD_TRACKER_URL = 'index.html';
const NOTIFICATION_TIMEOUT = 3000;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get elements
const signupButton = document.getElementById('signup-btn');
const emailInput = document.getElementById('input-email2');
const passwordInput = document.getElementById('input-pass2');
const passwordConfirmationInput = document.getElementById('input-pass-confirm');
const notification = document.getElementById('notification');

// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to handle signup
function handleSignup(event) {
  event.preventDefault();
  const email = emailInput.value.replace(/\s+/g, ''); // Remove whitespace
  const password = passwordInput.value.replace(/\s+/g, ''); // Remove whitespace
  const passwordConfirmation = passwordConfirmationInput.value.replace(/\s+/g, ''); // Remove whitespace

  if (!validateEmail(email)) {
    displayNotification('Invalid email address');
    return;
  }

  if (password!== passwordConfirmation) {
    displayNotification('Passwords do not match');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = MOOD_TRACKER_URL;
      displayNotification('Account created successfully!');
    })
   .catch((error) => {
      console.error(error);
      displayNotification('Error creating account: ' + error.message);
    });
}

// Function to display notification
function displayNotification(message) {
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, NOTIFICATION_TIMEOUT);
}

// Add event listener
signupButton.addEventListener('click', handleSignup)