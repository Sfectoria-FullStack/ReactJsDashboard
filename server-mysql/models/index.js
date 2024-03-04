const db = require("mysql2");

const connection = db.createConnection({
  host: "localhost",
  user: "root",
  password: "11019029",
  database: "pfe",
});
connection.connect((err) => {
  if (err) console.log(err);
  else console.log("db connected");
});
module.exports = connection;
