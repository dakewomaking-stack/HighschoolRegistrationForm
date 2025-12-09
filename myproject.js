document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let birthdate = document.getElementById("birthdate").value;
    let nationality = document.getElementById("nationality").value.trim();
    let gender = document.getElementById("gender").value;
    let grade = document.getElementById("grade").value;
    let zone = document.getElementById("zone").value.trim();
    let woreda = document.getElementById("woreda").value.trim();
    let kebele = document.getElementById("kebele").value.trim();

    // Reset errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("birthError").textContent = "";
    document.getElementById("nationalityError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("gradeError").textContent = "";
    document.getElementById("zoneError").textContent = "";
    document.getElementById("woredaError").textContent = "";
    document.getElementById("kebeleError").textContent = "";

    // Validations
    if (name === "") {
        document.getElementById("nameError").textContent = "Full name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    }

    if (phone.length < 9) {
        document.getElementById("phoneError").textContent = "Phone must be at least 9 digits";
        valid = false;
    }

    if (birthdate === "") {
        document.getElementById("birthError").textContent = "Birth date is required";
        valid = false;
    }

    if (nationality === "") {
        document.getElementById("nationalityError").textContent = "Nationality is required";
        valid = false;
    }

    if (gender === "") {
        document.getElementById("genderError").textContent = "Please select gender";
        valid = false;
    }

    if (grade === "") {
        document.getElementById("gradeError").textContent = "Please select grade";
        valid = false;
    }

    if (zone === "") {
        document.getElementById("zoneError").textContent = "Zone is required";
        valid = false;
    }

    if (woreda === "") {
        document.getElementById("woredaError").textContent = "Woreda is required";
        valid = false;
    }

    if (kebele === "") {
        document.getElementById("kebeleError").textContent = "Kebele is required";
        valid = false;
    }

    // If everything valid → show popup
    if (valid) {
        document.getElementById("popup").style.display = "flex";
        document.getElementById("regForm").reset();
    }
});

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}