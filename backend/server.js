const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "Connected with Express. Hello World!🎈" });
});

app.listen(3001, function () {
  console.log("Express server is running on Port 3001");
});
