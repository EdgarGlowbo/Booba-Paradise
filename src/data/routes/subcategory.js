const express = require("express");
const Subcategory = require("../models/Subcategory");

const router = express.Router();

router.get("/", (req, res) => {
  Subcategory.getAll()
    .then((subcategories) => res.json(subcategories))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
