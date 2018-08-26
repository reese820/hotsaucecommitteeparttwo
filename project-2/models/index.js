var orm = require('../config/connection.js');

let stock = {
  insertStock: function(cols, vals, cb) {
    orm.insertStock("stocks", cols, vals, function(res){
      cb(res);
    });
  }
};

module.exports = stock;