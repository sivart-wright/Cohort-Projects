let express = require("express");
let router = express.Router();

router.get("/addUser", (req, res) => {
  res.render("addUser");
});

router.post("/addUser", (req, res) => {
  console.log(req.body);
  let userName = req.body.name;
  let password = req.body.password;
  let newUser = { name: userName, password: password };
  users.push(newUser);
  res.redirect("/users/login");
});

router.get("/signout", (req, res) => {
  req.session.destroy();
  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  let userName = req.body.name;
  let password = req.body.password;
  let loginUser = users.find(function (user) {
    return userName == user.name;
  });
  console.log(userName, password);
  console.log(users);
  console.log(loginUser);
  if (loginUser) {
    if (loginUser.password == password) {
      req.session.isAuthenticated = true;
      res.redirect("/trips/add-trip");
    } else {
      res.redirect("/users/login");
    }
  } else {
    res.redirect("/users/login");
  }
});
module.exports = router;
