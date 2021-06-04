console.log("connected");

// let datepicker = document.getElementById("datepicker").nodeValue
// console.log(datepicker)

$("button").click(function() {
    let internalId = $(this).data('internalid');
    localStorage.setItem("fieldId", JSON.stringify(internalId));
    let field = JSON.parse(localStorage.getItem("fieldId"))
    document.location.replace('/booking');
    // let field = JSON.parse(localStorage.getItem("fieldId"))
    // console.log(field)
});
const bookingFormHandler = async (event) => {
    event.preventDefault();
  
    const team = document.querySelector('#team-booking').value.trim();
    const date = document.querySelector('#date-booking').value.trim();
    const time = document.querySelector('#timeslot-booking').value.trim();
    const duration = document.querySelector('#sessionduration-booking').value.trim();
    const type = document.querySelector('#sessiontype-booking').value.trim();
  
    if (team && date && time && duration && type) {
      const response = await fetch('/api/coach', {
        method: 'POST',
        body: JSON.stringify({ team, date, time, duration, type}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`booking`);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.booking-form')
    .addEventListener('submit', loginFormHandler);




