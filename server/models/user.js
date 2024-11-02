const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [
        true,
        "You have already subscribed to our newsletter. Thank you!",
      ],
    },
    firstName: {
      type: String,
      required: [true, "Please provide your first name!"],
      unique: false,
    },
    lastName: {
      type: String,
      required: false,
      unique: false,
    },
    isSubscribed: {
      type: Boolean,
      required: false,
      unique: false,
      default: 1,
    },
  },
  {
    collection: "users",
  }
);

const Users = mongoose.model("Users", userSchema);

module.exports = mongoose.model.Users || Users;