const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const token = req.query.token;
  console.log(token);
  if (!token)
    return res
      .status(201)
      .json({ message: "Access denied due to missing token!" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedEmail) => {
    if (err)
      return res
        .status(201)
        .json({ message: "Unauthorized access due to invalid token" });

    req.user = decodedEmail;
    next();
  });
};
