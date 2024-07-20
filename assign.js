document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('resetButton').addEventListener('click', function() {
    resetForm();
});

function validateForm() {
    // Clear previous error messages
    clearErrors();
    
    let hasError = false;

    // Validate username
    if (!validateUsername()) {
        hasError = true;
    }

    // Validate email
    if (!validateEmail()) {
        hasError = true;
    }

    // Form submission status
    const formStatus = document.getElementById('formStatus');
    if (!hasError) {
        formStatus.textContent = 'Form submitted successfully!';
        formStatus.classList.add('success');
        formStatus.classList.remove('error');
    } else {
        formStatus.textContent = 'Please fix the errors and try again.';
        formStatus.classList.add('error');
        formStatus.classList.remove('success');
    }
}

function validateUsername() {
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    
    if (username === '') {
        usernameError.textContent = 'Username is required.';
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === '') {
        emailError.textContent = 'Email is required.';
        return false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = 'Enter a valid email address.';
        return false;
    }
    return true;
}

function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('formStatus').textContent = '';
}

function resetForm() {
    document.getElementById('myForm').reset();
    clearErrors();
}
