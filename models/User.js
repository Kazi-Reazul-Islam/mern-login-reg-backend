const { Schema, model, default: mongoose } = require("mongoose");

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.Schema("User", UserSchema);
