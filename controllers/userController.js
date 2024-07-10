const User = require("../models/User");

// Get user profile
exports.getProfile = (req, res) => {
  const userId = req.userId; // This userId is set by the authMiddleware

  User.findById(userId, (err, results) => {
    if (err) return res.status(500).send("Error fetching user profile");
    if (results.length === 0) return res.status(404).send("User not found");

    const user = results[0];
    res.status(200).send({
      id: user.id,
      name: user.name,
      address: user.address,
      mobile: user.mobile,
      email: user.email,
    });
  });
};

// Update user profile
exports.updateProfile = (req, res) => {
  const userId = req.userId;
  const { name, address, mobile, email } = req.body;

  User.updateById(userId, { name, address, mobile, email }, (err, result) => {
    if (err) return res.status(500).send("Error updating user profile");
    if (result.affectedRows === 0)
      return res.status(404).send("User not found");

    res.status(200).send("User profile updated successfully");
  });
};
