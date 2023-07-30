const mysql = require("mysql2/promise");
require("dotenv").config({ path: "../.env" });

const connection = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "booba_paradise",
});

module.exports = connection;
