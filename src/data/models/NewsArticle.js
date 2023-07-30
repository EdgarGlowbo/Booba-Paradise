const db = require("../db");

class NewsArticle {
  static async getAll() {
    const query = `SELECT * FROM news_feed
      ORDER BY id DESC`;

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));
    return res;
  }
}

module.exports = NewsArticle;
