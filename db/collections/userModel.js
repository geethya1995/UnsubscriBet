const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "You have already subscriped to our newsletter. Thank you!"],
  },
  firstname: {
    type: String,
    required: [true, "Please provide your first name!"],
    unique: false,
  },
  lastname: {
    type: String,
    required: false,
    unique: false,
  },
  subsStatus: {
    // Subscription Status: active | inactive
    type: Boolean,
    required: true,
    unique: false,
    default: 1,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
