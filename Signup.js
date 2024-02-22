
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

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (firstName.trim() === "") {
        alert("Please enter your first name.");
        return false;
    }

    if (lastName.trim() === "") {
        alert("Please enter your last name.");
        return false;
    }

    if (age.trim() === "" || age <= 0) {
        alert("Please enter a valid age.");
        return false;
    }

    if (phoneNumber.trim() === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must be at least 8 characters long and contain at least one capital letter and one special character.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validation passes, you can proceed with form submission or other actions
    // For demonstration, I'm showing an alert indicating successful validation
    alert("Form validated successfully!");
    return true;
}

document.getElementById("signupForm").addEventListener("submit", validateForm);

