console.log("connected");
//const j = document.getElementById("bookform")
// let datepicker = document.getElementById("datepicker").nodeValue
// console.log(datepicker)

$("button").click(function() {
    let internalId = $(this).data('internalid');
    localStorage.setItem("fieldId", JSON.stringify(internalId));
    // let field = JSON.parse(localStorage.getItem("fieldId"))
    document.location.replace('/booking');
    // let field = JSON.parse(localStorage.getItem("fieldId"))
    // console.log(field)
});

// const bookingFormHandler = async (event) => {
//    // event.preventDefault();
//     let coachId1 = '<%= Session["coachId"] %>';
   
//     console.log(coachId1);
//     coachId1 = 7;
//     let field = JSON.parse(localStorage.getItem("fieldId"))
//     const team = document.querySelector('#team-booking').value.trim();
//     const date = document.querySelector('#date-booking').value.trim();
//     const time = document.querySelector('#timeslot-booking').value.trim();9
//     // const duration = document.querySelector('#sessionduration-booking').value.trim();
//     // const type = document.querySelector('#sessiontype-booking').value.trim();
  
//     if (team && date && time) {
//       const response = await fetch('/api/booking', {
//         method: 'POST',
//         body: JSON.stringify({field, team, date, time, coachId1}), //duration and type
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace(`/`);
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  
 
//     j.addEventListener('submit', bookingFormHandler);




