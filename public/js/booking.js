console.log("connected");

$("button").click(function() {
    let internalId = $(this).data('internalid');
    localStorage.setItem("fieldId", JSON.stringify(internalId));
});


