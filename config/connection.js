const mysql = require("mysql");
const orm = require("./orm.js")

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host:  "localhost",
    user:  "root",
    password:  "12345678",
    database:  "burgers_db"
  })
};

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection