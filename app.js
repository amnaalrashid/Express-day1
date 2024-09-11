const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Hello Class");
  return res.json({ message: "Hello Class" });
});

app.get("/myname", (req, res) => {
  return res.json("My name is AmnaS");
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
