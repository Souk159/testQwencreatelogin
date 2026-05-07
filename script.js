const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const message = document.querySelector('#form-message');
const togglePassword = document.querySelector('.toggle-password');

function setMessage(text, type) {
  message.textContent = text;
  message.className = `form-message ${type}`;
}

togglePassword.addEventListener('click', () => {
  const isPasswordHidden = passwordInput.type === 'password';
  passwordInput.type = isPasswordHidden ? 'text' : 'password';
  togglePassword.textContent = isPasswordHidden ? 'Hide' : 'Show';
  togglePassword.setAttribute('aria-pressed', String(isPasswordHidden));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailInput.validity.valid) {
    setMessage('Please enter a valid email address.', 'error');
    emailInput.focus();
    return;
  }

  if (!passwordInput.validity.valid) {
    setMessage('Password must be at least 6 characters.', 'error');
    passwordInput.focus();
    return;
  }

  setMessage('Login form is ready to connect to your authentication API.', 'success');
});
