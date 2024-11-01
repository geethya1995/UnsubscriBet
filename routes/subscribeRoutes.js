const express = require("express");
const {
  unsubscribeUser,
  subscribeUser,
} = require("../controllers/subscribeController");

const router = express.Router();

router.post("/subscribe", subscribeUser); // user subscription route
router.post("/unsubscribe", unsubscribeUser); // user unsubscription route

module.exports = router;
