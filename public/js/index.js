console.log("this is working")


//let requestUrl = "http://localhost:5001/api/fields"

function getApi() {
    fetch("/api/fields")
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          response.json().then(data  => console.log(data))
        }
        return response.json();
    });
  }

getApi();