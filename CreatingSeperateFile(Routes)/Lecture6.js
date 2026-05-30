const express = require("express");
const app = express();
const homepage = require("./routes/homepage.js");
const error = require("./routes/error.js");
//We are creating the differt files for the html ,css , js
app.use(express.static("public"));
app.use("/", homepage);
app.use(error);
app.listen(3004, () => {
  console.log("Server was running at the port http://localhost:3004");
});
