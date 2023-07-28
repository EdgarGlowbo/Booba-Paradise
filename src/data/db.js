const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "booba_paradise",
});

module.exports = connection;
