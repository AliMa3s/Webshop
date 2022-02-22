require("dotenv").config();
const mysql = require("mysql2");

console.log(process.env);
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.NAME,
});

module.exports = pool;
