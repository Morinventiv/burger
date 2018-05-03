

var mysql = require('mysql');
var orm = require('../config/orm.js');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Password',
	database: 'burgers_db'
});

module.exports = function (app) {

	connection.connect(function (err) {
		if (err) throw err;
		console.log('Connected as id: ' + connection.threadId);
	});

	app.get('/', function (req, res) {
		orm.selectAll("burgers", function (data) {
			res.render('index', { burgers: data });
		})
	});

	app.post('/create', function (req, res) {
		orm.createNew(req.body.burger, function (data) {
			res.redirect('/');
		})

	})

	app.put('/update', function (req, res) {
		orm.update([req.body.burger, req.body.id], function (data) {
			res.redirect('/');
		})
	})
}