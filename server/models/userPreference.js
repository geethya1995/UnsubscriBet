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
      enums: [
        "Privacy concerns",
        "Too many emails",
        "Content not relevant",
        "Found a better service",
        "No longer interested in SportsBet",
        "Other",
      ],
      required: true,
    },
    moreInfo: {
      type: String,
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
