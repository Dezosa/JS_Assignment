document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const errorMessage = document.getElementById("errorMessage");
  
    loginBtn.addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Simulated JSON data containing valid credentials
      const validCredentials = {
        username: "user",
        password: "pass"
      };
  
      if (username === validCredentials.username && password === validCredentials.password) {
        // Store username in local storage
        localStorage.setItem("username", username);
        // Redirect to Resume Page
        window.location.href = "resume.html";
      } else {
        errorMessage.textContent = "Invalid username/password";
      }
    });
  });
  