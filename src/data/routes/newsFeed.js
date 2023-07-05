const express = require("express");
const NewsArticle = require("../models/NewsArticle");

const router = express.Router();

router.get("/", (req, res) => {
  NewsArticle.getAll()
    .then((article) => res.json(article))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
