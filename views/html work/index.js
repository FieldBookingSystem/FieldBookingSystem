console.log("this is working")


//let requestUrl = "http://localhost:5001/api/fields"

function getApi() {
    fetch("/api/fields")
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console(response)
        }
        return response.json();
    });
  }

getApi();