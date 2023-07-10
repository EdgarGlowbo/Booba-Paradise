const db = require("../db");

class MenuItem {
  static async getAll() {
    const query = "SELECT * FROM menuitem";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
  static async getDrinks() {
    const query = "SELECT * FROM menuitem WHERE type = 'Drink'";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
  static async getFood() {
    const query = "SELECT * FROM menuitem WHERE type = 'Food'";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
}

module.exports = MenuItem;
