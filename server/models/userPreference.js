const mongoose = require("mongoose");

const userPreferenceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reasonForUnsubscribing: {
      type: String,
      enums: ["spam", "no longer interested", "too many emails", "other"],
      required: true,
    },
    unsubscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "userpreferences",
  }
);

const UserPreferences = mongoose.model("UserPreferences", userPreferenceSchema);

module.exports = mongoose.model.UserPreferences || UserPreferences;
