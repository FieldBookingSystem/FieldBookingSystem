const doc = document.getElementById("searchBtn");
const cont = document.getElementsByClassName("container2");
const dateField = document.getElementById("datepicker");
const loginBtn  = document.getElementById("loginBtn");

//let requestUrl = "http://localhost:5001/api/fields"

function getfields() {
    fetch("/api/fields")
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          response.json().then(data  => console.log(data))
        }
        return response.json();
    });
  }



const searchBtnHandler = async (event) => {
  
  event.preventDefault();
  //getfields();
 // console.log(typeof cont);

  
  document.location.replace('/fieldDisplay');
  console.log(dateField.value);
 // cont.innerText = `{{> field-details}}`;
  // const fieldString = ` {{#each fields as |field| }}
  // <div class="row mb-4 project">
  //     <div class="col-md-5">
  //         <h2>
  //             {{field.name}}
  //             {{field.id}}
  //             {{field.address}}
  //         </h2>
              
  //     </div>
  // </div>
  // {{/each}}`;

  // doc.body.insertAdjacentHTML("beforeend", `{{>field-details}}`
  //);  
  // Collect values from the login form
 // const email = document.querySelector('#email-login').value.trim();
 // const password = document.querySelector('#password-login').value.trim();
 
  // if (email && password) {
  //   // Send a POST request to the API endpoint
  //   const response = await fetch('/api/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({ email, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (response.ok) {
  //     // If successful, redirect the browser to the profile page
  //     document.location.replace('/profile');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
};

// //login button handler
// const loginBtnHandler = async (event) => {
  
//   event.preventDefault();
//   document.location.replace('/login');
 
// };

//Jquery script for datepicker
$( function() {
  $( "#datepicker" ).datepicker();
} );


//event listern for search button 
doc.addEventListener('click', searchBtnHandler);

// //event listener for login button
// loginBtn.addEventListener('click', loginBtnHandler);