const db = require("../db");

class Store {
  static async getAll() {
    const query = "SELECT * FROM store";

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
}

module.exports = Store;
