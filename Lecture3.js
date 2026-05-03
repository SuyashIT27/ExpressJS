// Doing the routing request
let express = require("express");
let app = express();
app.get("/", (req, res, next) => {
  console.log("Server was running");
  res.send("<h1>This is the test for the server</h1");
});
app.get("/client", (req, res, next) => {
  res.send("<h1>This is the second page</h1>");
});
app.listen(3008, () => {
  console.log("Server was running at the port http://localhost:3008");
});
