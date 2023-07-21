const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.get("/", (req, res) => {
  Category.getAll()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
