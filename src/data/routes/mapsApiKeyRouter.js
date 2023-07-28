const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

module.exports = router;
