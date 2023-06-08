const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { first_name, last_Name, email, password } = req.body;

  const exist = await User.findOne({ email: email.toLowerCase() }).exec();

  if (exist) {
    return res.status(401).json({
      message: "Email Already Exist",
    });
  }

  const bcryptedPassword = await bcrypt.hash("password", 12);

  await new User({
    first_name,
    last_Name,
    email,
    password: bcryptedPassword,
  }).save();

  res.send({
    message: "Register Success",
  });
};

exports.loginUser = async (req, res) => {
  res.send({
    message: "Login Sucess",
  });
};
