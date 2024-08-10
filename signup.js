document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signupButton');

    signupButton.addEventListener('click', function () {
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Replace this with actual signup logic
        if (email && password) {
            // Mock signup success
            localStorage.setItem('authenticated', true); // Mock authentication state
            window.location.href = 'index.html'; // Redirect to main page
        } else {
            alert('Please enter email and password.');
        }
    });
});
