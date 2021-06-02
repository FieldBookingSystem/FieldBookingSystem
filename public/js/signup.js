const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const postalcode = document.querySelector('#postalcode-signup').value.trim();
  
    if (name && email && password && postalcode) {
      const response = await fetch('/api/coach', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, postalcode }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  