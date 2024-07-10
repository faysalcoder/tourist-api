const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "faysalsdi",
  password: "25232012",
  database: "tourist_website",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

module.exports = db;
