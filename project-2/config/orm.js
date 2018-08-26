const orm = require("./connection.js");

var orm = {
  insertStock: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals;
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateStock: function(whatToSelect, table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
