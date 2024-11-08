const express = require("express");
const {
  unsubscribeUser,
  subscribeUser,
} = require("../controllers/subscribeController");
const { authenticateToken } = require("../middleware/authMiddleware");
const router = express.Router();

// next() in this method will automatically move to async after it finishes processing
router.post("/", subscribeUser); // user subscription route
router.post("/api/unsubscribe", authenticateToken, unsubscribeUser); // user unsubscription route

module.exports = router;
