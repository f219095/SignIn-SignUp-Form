function isValidEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isValidPassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check if the password contains at least one capital letter
    var containsCapitalLetter = /[A-Z]/.test(password);

    // Check if the password contains at least one special character
    var containsSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    // If both conditions are not met, return false
    if (!containsCapitalLetter || !containsSpecialCharacter) {
        return false;
    }

    return true;
}

function validateForm(event) {
    event.preventDefault(); // Prevents form submission from reloading the page

    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must be at least 8 characters long and contain at least one capital letter and one special character.");
        return false;
    }

    // If both email and password are valid, you can proceed with form submission or other actions
    // For demonstration, I'm showing an alert indicating successful validation
    alert("Form validated successfully!");
    return true;
}

document.getElementById("signinForm").addEventListener("submit", validateForm);
