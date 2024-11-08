const Users = require("../models/user");
const UserPreferences = require("../models/userPreference");
require("dotenv").config({ path: ".env.development" });
const jwt = require("jsonwebtoken");

// User subscription controller
exports.subscribeUser = async (req, res) => {
  const { name, email } = req.body;
  const jwtSecret = process.env.JWT_SECRET;

  try {
    const existingUser = await Users.findOne({ email });

    // If the user already exists and is subscribing the newsletter
    if (existingUser && existingUser.isSubscribed) {
      return res.status(200).json({ message: "User is already subscribed." });
    }

    // If the user exists and not subscribed, update the subscription status
    if (existingUser && !existingUser.isSubscribed) {
      existingUser.isSubscribed = true;
      await existingUser.save();
      return res.status(200).json({
        message: "User subscription re-activated.",
        user: existingUser,
      });
    }

    // If the user does not exist, create a new user
    // Create a JWT including the email in the payload to verify the user identity during unsubscribe
    const token = jwt.sign({ email: email }, jwtSecret);
    const newUser = new Users({ email, name });
    await newUser.save();
    return res.status(201).json({
      message: "User created and subscription activated!",
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error occured while subscribing user",
      error: error.message,
    });
  }
};

// User unsubscription controller
exports.unsubscribeUser = async (req, res) => {
  const { email, reasonForUnsubscribing, moreInfo } = req.body;
  const { user } = req;

  try {
    if (user.email !== email) {
      return res.status(201).json({ message: "Invalid token for the user" });
    }

    const existingUser = await Users.findOne({ email });

    // If the user exists and is subscribing the newsletter
    if (existingUser) {
      if (existingUser.isSubscribed) {
        // Deactivate the subscription in user collection
        existingUser.isSubscribed = false;
        await existingUser.save();

        // Add a new user preference on unsubscription reason
        const userPreference = new UserPreferences({
          userId: existingUser._id,
          reasonForUnsubscribing,
          moreInfo,
        });
        await userPreference.save();

        return res
          .status(200)
          .json({ message: "User subscription deactivated." });
      } else {
        return res
          .status(201)
          .json({ message: "User is already unsubscribed." });
      }
    } else {
      return res.status(201).json({ message: "User not found." });
    }
  } catch (error) {
    console.error("Error detected during unsubscription:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
