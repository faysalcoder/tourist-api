const express = require("express");
const bookingController = require("../controllers/bookingController");
const router = express.Router();

router.post("/book", bookingController.bookPlace);

// Add other booking-related routes

module.exports = router;
