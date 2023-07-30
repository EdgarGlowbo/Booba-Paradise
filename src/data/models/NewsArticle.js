const db = require("../db");

class NewsArticle {
  static async getAll() {
    const query = `SELECT * FROM news_feed
      ORDER BY id DESC
      LIMIT 3`;

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));
    return res;
  }
}

module.exports = NewsArticle;
