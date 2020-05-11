const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
let tasksArray = [];

app.post("/todos", function (req, res) {
  console.log(req.body);
  tasksArray.push(req.body);
  res.send("hello");
});

app.get("/todos", function (req, res) {
  res.send({ tasks: tasksArray });
});

app.listen(3000, function () {
  console.log("Ready to rumble");
});
