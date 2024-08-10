document.addEventListener('DOMContentLoaded', () => {
    const authFormContent = document.getElementById('auth-form-content');
    const toggleLink = document.getElementById('toggle-link');
    const authAction = document.getElementById('auth-action');

    let isLogin = true;

    function renderForm() {
        authFormContent.innerHTML = `
            <input type="text" id="username" name="username" placeholder="Username" required>
            <input type="password" id="password" name="password" placeholder="Password" required>
            ${!isLogin ? '<input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required>' : ''}
        `;
        document.getElementById('submit-btn').textContent = isLogin ? 'Login' : 'Signup';
        authAction.textContent = isLogin ? 'Don\'t have an account? ' : 'Already have an account? ';
        toggleLink.textContent = isLogin ? 'Signup' : 'Login';
    }

    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        renderForm();
    });

    renderForm();
});
