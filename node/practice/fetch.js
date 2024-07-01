url = "https://reqres.in/api/users?page=2";
fetch(url)
  .then(
    (response) => {
      response.json().then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log("there is error converting data");
        }
      );
    },
    (error) => {
      console.log("there is error getting data");
    }
  )
  .catch((error) => {
    console.log("There is error");
  });
