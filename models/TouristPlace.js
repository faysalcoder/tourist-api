const db = require("../config/db");

const TouristPlace = {
  create: (placeData, callback) => {
    const sql = "INSERT INTO tourist_places (name, description) VALUES (?, ?)";
    db.query(sql, [placeData.name, placeData.description], callback);
  },
  getAll: (callback) => {
    const sql = "SELECT * FROM tourist_places";
    db.query(sql, callback);
  },
  // Additional methods for updating and deleting tourist places
};

module.exports = TouristPlace;
