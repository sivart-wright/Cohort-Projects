const express = require("express");
const app = express();

const tripsRouter = require("./routes/tripRoutes");
const usersRouter = require("./routes/users");

const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

global.trips = [];

app.use(express.urlencoded());

app.use("/trips", tripsRouter);

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("ready to rumble");
});
