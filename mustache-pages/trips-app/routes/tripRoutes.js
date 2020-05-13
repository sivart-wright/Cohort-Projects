let express = require("express");
let router = express.Router();

router.get("/add-trip", (req, res) => {
  res.render("add-trip");
});

router.post("/add-trip", (req, res) => {
  let city = req.body.city;
  let imageURL = req.body.imageURL;
  let trip = { city: city, imageURL: imageURL };
  trips.push(trip);
  res.render("add-trip", { city: city });
});

router.post("/delete-trip", (req, res) => {
  let city = req.body.city;
  trips = trips.filter((trip) => trip.city != city);
  res.redirect("/trips");
});

router.get("/", (req, res) => {
  res.render("trips", { trips: trips });
});

module.exports = router;
