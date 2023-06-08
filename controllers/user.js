const User = require("../models/User");

exports.registerUser = async (req, res) => {
  res.send({
    message: "Register Success",
  });
};
