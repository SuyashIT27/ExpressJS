//Adding the html page by importing file
// External Module
const express = require("express");
const app = express();
// Core Module
const path = require("path");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"public")));
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html"));
});
app.get("/redirect", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "redirect.html"));
});
app.post("/redirect", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "views", "redirect.html"));
});
app.listen(3009, () => {
  console.log("Server was running at the port http://localhost:3009");
});
