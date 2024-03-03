//Courses
document.getElementById("dropdown").addEventListener("change", function() {
    var selectedOption = document.getElementById("dropdown").value;
    if (selectedOption !== "") {
      window.location.href = selectedOption;
    }
  });
  

//Your Profile
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    // Get form inputs
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validation logic
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;

    // Validate username
    if (!username) {
        usernameError.textContent = "Username is required";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Validate email
    if (!email) {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate password
    if (!password) {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // If all inputs are valid, submit the form
    if (isValid) {
        document.getElementById('accountForm').submit();
    }
}



//Contact us
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form inputs
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    
    // Perform form validation
    if (name === "" || email === "" || message === "") {
        alert("Thank you for contacting us! We will get back to you soon.");
        return;
    }
    
    // Reset the form
    document.getElementById("contactForm").reset();
});


