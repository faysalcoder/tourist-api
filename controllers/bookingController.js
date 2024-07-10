const Booking = require("../models/Booking");

exports.bookPlace = (req, res) => {
  const { user_id, place_id, booking_date, person, child, comments } = req.body;

  Booking.create(
    { user_id, place_id, booking_date, person, child, comments },
    (err, result) => {
      if (err) return res.status(500).send("Error booking the place");
      res.status(201).send("Booking made successfully");
    }
  );
};

// Add other booking-related methods
