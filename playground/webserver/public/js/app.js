const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const error = document.getElementById("error");
const message = document.getElementById("message");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  message.textContent = "Loading...";
  error.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          error.textContent = data.error;
        }
        error.textContent = data.location;

        message.textContent = data.temperature;
      });
    }
  );
});
