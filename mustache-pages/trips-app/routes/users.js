let express = require("express");
let router = express.Router();

router.get("/profile", (req, res) => {
  res.send("PROFILE");
});

router.get("/", (req, res) => {
  res.send("ROOT");
});

router.get("/view-all", (req, res) => {
  res.send("VIEW ALL USERS");
});

module.exports = router;
