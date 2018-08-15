const orm = require(".../config/connection.js");

var orm = {
  insertStock: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM STOCKS WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateStock: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM STOCKS WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
