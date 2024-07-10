const db = require("../config/db");

const Booking = {
  create: (bookingData, callback) => {
    const sql =
      "INSERT INTO bookings (user_id, place_id, booking_date, person, child, comments) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(
      sql,
      [
        bookingData.user_id,
        bookingData.place_id,
        bookingData.booking_date,
        bookingData.person,
        bookingData.child,
        bookingData.comments,
      ],
      callback
    );
  },
  // Additional methods for managing bookings
};

module.exports = Booking;
