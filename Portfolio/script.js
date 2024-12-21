// script.js

// Redirect to the main page after the intro animations
setTimeout(() => {
  window.location.href = "main.html"; // Replace with your main landing page URL
}, 4500); // Total time: 3 greetings * 1.5 seconds each

// Skip Intro Button Logic
document.getElementById('skip').addEventListener('click', () => {
  window.location.href = "main.html"; // Skip intro and go to the main page
});
