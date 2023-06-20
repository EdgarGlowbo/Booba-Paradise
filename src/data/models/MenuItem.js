// server/models/User.js
const db = require("../db");

class MenuItem {
  static getAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM menuitem";

      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = MenuItem;
