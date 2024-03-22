const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const email = this.elements['email'].value.trim();
  const password = this.elements['password'].value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData); // Log the form data object to the console
    this.reset(); // Reset the form after submission
  }
});
