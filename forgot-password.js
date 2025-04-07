document.getElementById("resetForm").addEventListener("submit", function(event) {
    let valid = true;
    const email = document.getElementById("email").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (email === "") {
        emailError.textContent = "Email is required!";
        valid = false;
    }

    if (newPassword === "") {
        passwordError.textContent = "Password is required!";
        valid = false;
    } else if (newPassword.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        valid = false;
    }

    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password!";
        valid = false;
    } else if (newPassword !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match!";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

function togglePassword(id) {
    let input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}


