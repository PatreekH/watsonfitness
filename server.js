
// Dependencies
// =============================================================
	var express = require("express");
	var bodyParser = require("body-parser");
// =============================================================

// Database Setup
// =============================================================
	var mysql = require('mysql');

	// var con = mysql.createConnection({
	//   host: "localhost",
	//   user: "root",
	//   password: "newave",
	//   database: "address_data"
	// });

	// var addyLatLongs = [];

	// con.connect(function(err) {
	// 	if (err) throw err;
	// 	console.log("Database Connected!");
	// 	con.query("SELECT * FROM address", function (err, result, fields) {
	// 		if (err) throw err;
	// 		// console.log(addyLatLongs);
	// 	});
	// });
// =============================================================

// Express App Setup and Index Path
// =============================================================
	var app = express();
	var PORT = 3000;

	// Sets up the Express app to handle data parsing
	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser.text());
	app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));

	app.use(express.static(__dirname + '/'));

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/index.html'));
	});
// =============================================================

// Routes
// =============================================================
	app.get('/get-all-data', function(req, res){

	});
// =============================================================


	// Starts the server
// =============================================================
	app.listen(process.env.PORT || 3000, function(){
		console.log("Express server running on port %d in %s mode", this.address().port, app.settings.env);

	});
// =============================================================