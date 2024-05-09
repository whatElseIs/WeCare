// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get elements
const loginButton = document.getElementById('login-btn');
const emailInput = document.getElementById('input-email');
const passwordInput = document.getElementById('input-pass');

// Function to sign in user
function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = './Mood_Tracker/mood_tracker.html';
    })
   .catch((error) => {
      console.error(`Error signing in user: ${error.message}`);
      alert(`Error signing in user: ${error.message}`);
    });
}

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Input validation
  if (!email ||!password) {
    alert('Please enter both email and password');
    return;
  }

  signInUser(email, password);
});