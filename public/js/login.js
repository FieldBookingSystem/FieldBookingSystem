

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
    console.log(response);
     
   // const users = response.map((project) => project.get({ plain: true }));

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      //console.log(response.coach.value);
     // console.log(window.session.userid);
     //let sessStorageId = event.localStorage.getItem("id");
      //let sessStorageId = response.session.getItem("id");
      //document.location.replace(`/profile/${sessStorageId}`);
      document.location.replace(`/profile/${2}`);
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
