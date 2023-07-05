const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "g0w086EVINbAUI$",
  database: "booba_paradise",
});

module.exports = connection;
