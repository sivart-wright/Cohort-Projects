const express = require("express");
const app = express();
const session = require("express-session");
const mustacheExpress = require("mustache-express");
const tripsRouter = require("./routes/tripRoutes");
const usersRouter = require("./routes/users");

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

function authenticate(req, res, next) {
  if (req.session) {
    if (req.session.isAuthenticated) {
      next();
    } else {
      res.redirect("/users/login");
    }
  } else {
    res.redirect("/users/login");
  }
}

global.trips = [];
global.users = [];

app.use(express.urlencoded());

app.use("/trips", authenticate, tripsRouter);

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("ready to rumble");
});
