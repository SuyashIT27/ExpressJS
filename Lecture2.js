// We can directly create the server in the express without importing the module http , and createserver();
const data = require("./test");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log(
    "This server was cretaed using the express without importing the http module manually ",
  );
  let a = "yes";
  if (a == "yes") {
    console.log("Cool! Lets move forward");
    res.send("<p>User was exited</p>");
  } else {
    console.log("Please be motivated");
  }
});
app.use("/name", (req, res) => {
  console.log("My name is ");
  let name = data.printName;
  console.log("Testing");
  res.write(`<h1>Name is ${name}</h1>`);
});
// app.use((req, res, next) => {
//   console.log("You will learn new things in future");
// });
app.listen(3007, () => {
  console.log("Server was created at the http://localhost:3007");
});
// To handel the routes we can use pass the path in the middleware.
