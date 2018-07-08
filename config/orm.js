var connection = require('./connection.js');

var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },

  update: function(tableInput, condition, cb) {
    connection.query(
      'UPDATE ' +
        tableInput +
        ' SET devoured=true WHERE id= ' +
        condition +
        ';',
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },

  create: function(tableInput, val, cb) {
    connection.query(
      'INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');",
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;

// 	createNew: function (table, cb) {
// 		connection.query('INSERT INTO burgers (burger) VALUES (?);', [table], function (err, data) {
// 			if (err) throw err;
// 			cb(data);
// 		})
// 	},
// 	update: function (burger, id, cb) {
// 		connection.query('UPDATE burgers SET burger = ? WHERE id = ?;', [burger, id], function (err, data) {
// 			if (err) throw err;
// 			cb(data);
// 	})
// }
// }
