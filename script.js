document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    let name = document.getElementById("fullName").value;
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        showError("nameError", "Only letters and spaces allowed.");
        isValid = false;
    } else {
        hideError("nameError");
    }


    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError("emailError", "Invalid email format.");
        isValid = false;
    } else {
        hideError("emailError");
    }


    let phone = document.getElementById("phone").value;
    let phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
        showError("phoneError", "Enter a valid phone number (10-15 digits).");
        isValid = false;
    } else {
        hideError("phoneError");
    }

    let password = document.getElementById("password").value;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        showError("passwordError", "Must be at least 8 characters, with uppercase, lowercase, and a number.");
        isValid = false;
    } else {
        hideError("passwordError");
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}

function showError(id, message) {
    document.getElementById(id).innerText = message;
    document.getElementById(id).previousElementSibling.style.border = "2px solid red";
}

function hideError(id) {
    document.getElementById(id).innerText = "";
    document.getElementById(id).previousElementSibling.style.border = "";
}
