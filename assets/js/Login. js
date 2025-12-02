document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const error = document.getElementById("loginError");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();
  
      if (user === "Osman" && pass === "Shabir") {
        window.location.href = "index.html"; // redirect to homepage
      } else {
        error.classList.remove("d-none"); // show error message
      }
    });
  });
  