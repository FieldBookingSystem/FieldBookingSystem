console.log("connected");
//const j = document.getElementById("bookform")
// let datepicker = document.getElementById("datepicker").nodeValue
// console.log(datepicker)

// function gets field id
$("button").click(function() {
    let internalId = $(this).data('internalid');
    localStorage.setItem("fieldId", JSON.stringify(internalId));
    // let field = JSON.parse(localStorage.getItem("fieldId"))
    document.location.replace('/booking');
    // let field = JSON.parse(localStorage.getItem("fieldId"))
    // console.log(field)
});





