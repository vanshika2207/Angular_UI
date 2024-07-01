const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  let day = today.getDay();
  console.log(day);
  let type = "a weekday";
  let advice = "it is time to work hard";
  let finaltype = day <= 5 ? type : "a weekend";
  let finaladvice = day <= 5 ? advice : "it is time to rest";
  res.render("index", {
    dayType: finaltype,
    advice: finaladvice,
  });
});

app.listen(3000);
