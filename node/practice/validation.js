const validator = require("validator");
function check(email) {
  if (validator.isEmail(email)) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
}
check("vanshika@gmail.com");
check("vanshika@gmail@.com");
