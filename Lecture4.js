//making the clone for airbnb
// importing the external module
let express = require("express");
//importing the local module
const formFilling = require("./modules/host/formFilling");
let app = express();
app.use(express.urlencoded());
app.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.send(`<h1>wecome to airbnb</h1>
    <a href="/add-home">Add Home</a>`);
});
// we will import get add-home
app.use(formFilling);
app.use((req, res, next) => {
  // we need to do this 
  res.status(404);
  res.send("<h1>Error! 404 your page is not found</h1>");
});
app.listen(3009, () => {
  console.log("Server was running at the port http://localhost:3009");
});
