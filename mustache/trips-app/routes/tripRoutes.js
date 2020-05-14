let express = require("express");
let router = express.Router();

router.get("/add-trip", (req, res) => {
  res.render("add-trip");
});

router.post("/add-trip", (req, res) => {
  let city = req.body.city;
  let dates = req.body.dates;
  let trip = { city: city, dates: dates };
  trips.push(trip);
  res.render("add-trip", { city: city });

  if (req.session) {
    req.session.city = city;
    req.session.dates = dates;
  }
});

router.post("/delete-trip", (req, res) => {
  let city = req.body.city;
  trips = trips.filter((trip) => trip.city != city);
  res.redirect("/trips");
});

router.get("/", (req, res) => {
  res.render("trips", { trips: trips });
});

router.post("/");

module.exports = router;
