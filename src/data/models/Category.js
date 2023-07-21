const db = require("../db");

class Category {
  static async getAll() {
    const query = `SELECT * FROM category`;

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
}

module.exports = Category;
