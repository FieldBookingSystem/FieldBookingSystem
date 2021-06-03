console.log("connected");

$("button").click(function() {
    let internalId = $(this).data('internalid');
    localStorage.setItem("fieldId", JSON.stringify(internalId));
    let field = JSON.parse(localStorage.getItem("fieldId"))
    // document.location.replace(`/booking/${field}`);
    // let field = JSON.parse(localStorage.getItem("fieldId"))
    // console.log(field)
});




