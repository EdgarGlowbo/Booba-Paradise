const db = require("../db");

class MenuItem {
  static async getAll() {
    const query = "SELECT * FROM menuitem";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
}

module.exports = MenuItem;
