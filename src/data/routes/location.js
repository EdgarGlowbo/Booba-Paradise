const express = require("express");
const Store = require("../models/Store");

const router = express.Router();

router.get("/", (req, res) => {
  Store.getAll()
    .then((store) => res.json(store))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
