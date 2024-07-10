const db = require("../config/db");

const User = {
  create: (userData, callback) => {
    const sql =
      "INSERT INTO users (name, address, mobile, email, password) VALUES (?, ?, ?, ?, ?)";
    db.query(
      sql,
      [
        userData.name,
        userData.address,
        userData.mobile,
        userData.email,
        userData.password,
      ],
      callback
    );
  },
  findByEmail: (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
  },
  findById: (id, callback) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [id], callback);
  },
  updateById: (id, userData, callback) => {
    const sql =
      "UPDATE users SET name = ?, address = ?, mobile = ?, email = ? WHERE id = ?";
    db.query(
      sql,
      [userData.name, userData.address, userData.mobile, userData.email, id],
      callback
    );
  },
  // Additional methods for user profile updates, etc.
};

module.exports = User;
