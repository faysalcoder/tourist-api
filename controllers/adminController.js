const TouristPlace = require("../models/TouristPlace");

exports.addPlace = (req, res) => {
  const { name, description } = req.body;

  TouristPlace.create({ name, description }, (err, result) => {
    if (err) return res.status(500).send("Error adding the place");
    res.status(201).send("Tourist place added successfully");
  });
};

exports.getAllPlaces = (req, res) => {
  TouristPlace.getAll((err, results) => {
    if (err) return res.status(500).send("Error fetching the places");
    res.status(200).send(results);
  });
};
