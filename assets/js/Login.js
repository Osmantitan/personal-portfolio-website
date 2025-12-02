document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const error = document.getElementById("loginError");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = document.getElementById("username").value.trim();
        const pass = document.getElementById("password").value.trim();

        // Admin login credentials
        const correctUser = "Osman";
        const correctPass = "Shabir";

        if (user === correctUser && pass === correctPass) {
            error.classList.add("d-none");  // hide error if visible
            window.location.href = "index.html"; // redirect
        } else {
            error.classList.remove("d-none"); // show error message
        }
    });
});
