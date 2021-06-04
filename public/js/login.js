

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

 // const sessStorage = window.sessionStorage; 

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/coach/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
   // console.log(response);
     
   // const users = response.map((project) => project.get({ plain: true }));
    //localStorage.setItem("coachId", JSON.stringify(data.id));
  
    if (response.ok) {
      const data = await response.json();
      //console.log(data)
      document.location.replace(`/profile/${data.id}`);
    } else {
      alert(response.statusText);
    }
  }
};

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
      document.location.replace(`login`);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
