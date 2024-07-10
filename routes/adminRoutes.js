const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.post("/addPlace", adminController.addPlace);
router.get("/places", adminController.getAllPlaces);

module.exports = router;
