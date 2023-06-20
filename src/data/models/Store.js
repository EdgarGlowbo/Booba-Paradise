// server/models/User.js
const db = require("../db");

class Store {
  static getAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM store";

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

module.exports = Store;
