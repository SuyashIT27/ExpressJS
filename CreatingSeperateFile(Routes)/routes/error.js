const express = require("express");
const route = express.Router();
const path = require("path");
route.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "error.html"));
});
module.exports = route;
