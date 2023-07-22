const db = require("../db");

class Subcategory {
  static async getAll() {
    const query = `SELECT * FROM subcategory`;

    const [res] = await db
      .query(query)
      .catch((err) => console.log(err.message));

    return res;
  }
}

module.exports = Subcategory;
