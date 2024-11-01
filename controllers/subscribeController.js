const User = require("../models/user");

exports.subscribeUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const newUser = new User({ email, firstName, lastName });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Subscription successful!", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error occured while subscribing user",
      error: error.message,
    });
  }
};
