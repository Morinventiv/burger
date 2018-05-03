var connection = require('../config/connection.js');

module.exports = {
	selectAll: function (table, cb) {
		connection.query('SELECT * FROM ??', [table], function (err, data) {
			cb(data);
		})
	},
	createNew: function (table, cb) {
		connection.query('INSERT INTO burgers (burger) VALUES (?);', [table], function (err, data) {
			if (err) throw err;
			cb(data);
		})
	},
	update: function (burger, id, cb) {
		connection.query('UPDATE burgers SET burger = ? WHERE id = ?;', [burger, id], function (err, data) {
			if (err) throw err;
			cb(data);
	})
}
}