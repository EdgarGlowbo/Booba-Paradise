const express = require("express");
const MenuItem = require("../models/MenuItem");

const router = express.Router();

router.get("/", (req, res) => {
  MenuItem.getDrinks()
    .then((menuItems) => res.json(menuItems))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
