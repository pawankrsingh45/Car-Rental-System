document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Here you can add logic for authentication (e.g., API calls)

            alert("Logged in successfully!");
            window.location.href = "car-listing.html";
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Here you can add logic for registration (e.g., API calls)

            alert("Registered successfully!");
            window.location.href = "login.html";
        });
    }
});
