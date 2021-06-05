let removeBooking;

// $("button").click(function() {
//   let remove = $(this).data('fieldid');
//   removeBooking = remove
//   console.log(removeBooking);

// });
 
const delBooking = async (event) => {
  let remove = $(this).data('fieldid');
  removeBooking = remove
  console.log(removeBooking);

  const response = await fetch(`/api/booking/${removebooking}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    console.log("I home this works")
  } else {
    console.log("It didn't work")
  }
  }

  document
  .querySelector('.btn')
  .addEventListener('click', delBooking);