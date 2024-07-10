const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = (req, res) => {
  const { name, address, mobile, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create(
    { name, address, mobile, email, password: hashedPassword },
    (err, result) => {
      if (err) return res.status(500).send("Error registering the user");
      res.status(201).send("User registered successfully");
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).send("Error on the server");
    if (results.length === 0) return res.status(404).send("No user found");

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    const token = jwt.sign({ id: user.id }, "supersecret", {
      expiresIn: 86400,
    });

    res.status(200).send({ auth: true, token: token });
  });
};
