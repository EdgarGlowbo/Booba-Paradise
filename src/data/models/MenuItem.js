const db = require("../db");

class MenuItem {
  static async getAll() {
    const query = "SELECT * FROM product";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
  static async getDrinks() {
    const query = "SELECT * FROM product WHERE type = 'drink'";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
  static async getFood() {
    const query = "SELECT * FROM product WHERE type = 'food'";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
}

module.exports = MenuItem;
